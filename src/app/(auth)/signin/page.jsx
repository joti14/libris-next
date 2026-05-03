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
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInPage() {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = async (data) => {
        console.log(data, 'data');
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error);
    };

    return (
        <Card className="shadow-sm border border-slate-200 mx-auto w-125 py-10 mt-5">
            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={handleSubmit(handleSignIn)}>

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
                    type={showPassword ? 'text' : "password"}
                    validate={(value) => {
                        if (value.length < 8) return "Password must be at least 8 characters";
                        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" {...register("password")} />
                    <span
                        className='absolute right-3 top-8 cursor-pointer'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye className='text-lg' /> : <FaEyeSlash className='text-lg' />}
                    </span>
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <Button type="submit" className='w-full bg-red-800 hover:bg-red-700'>
                    Sign In
                </Button>

                <p>Don't have an Account? <Link href={'/signup'} className="text-red-800">Signup</Link></p>
            </Form>
        </Card>
    );
}