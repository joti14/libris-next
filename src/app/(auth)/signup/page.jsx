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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignUpPage() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async (data) => {
        const { email, name, password, image } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Unable to sign up. Please try again.");
            return;
        }

        toast.success("Signup successful! Redirecting to login...");
        router.push("/signin");
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="flex justify-center px-4 sm:px-6 mt-5">
            <Card className="shadow-sm border border-slate-200 w-full max-w-sm sm:max-w-md md:max-w-lg px-4 sm:px-6 md:px-10 py-8 sm:py-10">
                <h1 className="text-center text-xl sm:text-2xl font-bold">
                    Sign Up
                </h1>

                <Form
                    className="flex w-full mx-auto flex-col gap-4 mt-4"
                    onSubmit={handleSubmit(handleSignUp)}
                >
                    <TextField isRequired type="text" className="w-full">
                        <Label>Name</Label>
                        <Input
                            placeholder="Enter your name"
                            className="w-full"
                            {...register("name")}
                        />
                        <FieldError />
                    </TextField>

                    <TextField isRequired type="text" className="w-full">
                        <Label>Image URL</Label>
                        <Input
                            placeholder="Image URL"
                            className="w-full"
                            {...register("image")}
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className="w-full"
                            {...register("email")}
                        />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        className="w-full"
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
                        <div className="relative w-full">
                            <Input
                                placeholder="Enter your password"
                                className="w-full pr-10"
                                {...register("password")}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <FaEye className="text-lg" />
                                ) : (
                                    <FaEyeSlash className="text-lg" />
                                )}
                            </button>
                        </div>
                        <Description className="text-xs sm:text-sm">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-red-800 hover:bg-red-700"
                    >
                        Sign Up
                    </Button>

                    <p className="text-center text-sm sm:text-base">Or</p>

                    <Button
                        onClick={handleGoogleSignIn}
                        className="w-full"
                        variant="tertiary"
                    >
                        <Icon icon="devicon:google" />
                        Sign up with Google
                    </Button>
                </Form>
            </Card>
        </div>
    );
}