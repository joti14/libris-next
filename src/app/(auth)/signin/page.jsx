"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignInPage() {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSignIn = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Unable to sign in. Please try again.");
            return;
        }

        toast.success("Signed in successfully!", {
            className: "bg-zinc-900 text-slate-300 rounded-2xl border-zinc-700",
        });
        router.push("/");
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <Card className="shadow-sm border border-slate-200 mx-auto w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl px-4 sm:px-6 md:px-10 py-8 sm:py-10 mt-5">
            <h1 className="text-center text-xl sm:text-2xl font-bold">Sign In</h1>

            <Form
                className="flex w-full max-w-96 mx-auto flex-col gap-4 mt-4"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <TextField
                    isRequired
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" {...register("email")} />
                    <FieldError />
                </TextField>

                <TextField
                    className="relative"
                    isRequired
                    minLength={8}
                    type={showPassword ? "text" : "password"}
                    validate={(value) => {
                        if (value.length < 8)
                            return "Password must be at least 8 characters";
                        if (!/[A-Z]/.test(value))
                            return "Password must contain at least one uppercase letter";
                        if (!/[0-9]/.test(value))
                            return "Password must contain at least one number";
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input
                        placeholder="Enter your password"
                        {...register("password")}
                    />
                    <span
                        className="absolute right-20 top-9 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaEye className="text-lg" />
                        ) : (
                            <FaEyeSlash className="text-lg" />
                        )}
                    </span>
                    <Description className="text-xs sm:text-sm">
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <Button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-700"
                >
                    Sign In
                </Button>

                <p className="text-center text-sm sm:text-base">Or</p>

                <Button
                    onClick={handleGoogleSignIn}
                    className="w-full"
                    variant="tertiary"
                >
                    <Icon icon="devicon:google" />
                    Sign in with Google
                </Button>

                <p className="text-center text-sm sm:text-base">
                    Don&apos;t have an Account?{" "}
                    <Link href="/signup" className="text-red-800">
                        Signup
                    </Link>
                </p>
            </Form>
        </Card>
    );
}