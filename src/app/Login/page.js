"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [email, setEmail] = useState("demo@demo.com");
    const [password, setPassword] = useState("demo123");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl
        });

        if (res?.error) {
            setError("Invalid credentials");
            return;
        }

        router.push(callbackUrl);
    }

    return (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-2">Login</h2>
                    <p className="text-sm opacity-80 mb-4">
                        Use Google or demo credentials to sign in.
                    </p>

                    {error && (
                        <div className="alert alert-error py-2 text-sm mb-3">
                            {error}
                        </div>
                    )}

                    <button
                        className="btn btn-outline w-full mb-3"
                        onClick={() => signIn("google", { callbackUrl })}
                    >
                        Continue with Google
                    </button>

                    <div className="divider text-xs">OR LOGIN WITH EMAIL</div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="demo@demo.com"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="demo123"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Login
                        </button>
                    </form>

                    <p className="text-xs opacity-70 mt-4">
                        Demo: email <b>demo@demo.com</b> & password <b>demo123</b>.
                    </p>
                </div>
            </div>
        </div>
    );
}
