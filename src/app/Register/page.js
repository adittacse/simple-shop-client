"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // UI-only: redirect to login
        router.push("/login");
    }

    return (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-2">Register</h2>
                    <p className="text-sm opacity-80 mb-4">
                        This is a simple UI-only register form. Use the demo credentials to
                        access protected pages.
                    </p>

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
                                placeholder="you@example.com"
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
                                placeholder="********"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Create Account (UI Only)
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
