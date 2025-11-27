"use client";

import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import AuthContext from "@/app/contexts/AuthContext";

export default function RegisterPage() {
    const [error, setError] = useState("");
    const { createUser, updateUser, setUser, googleSignIn } = useContext(AuthContext);

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    function handleRegister(e) {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not matched");
            return;
        }

        const lengthPattern = /^.{6,}$/;
        const upperCasePattern = /^(?=.*[A-Z]).+$/;
        const lowerCasePattern = /^(?=.*[a-z]).+$/;

        if (!lengthPattern.test(password)) {
            setError("Password must be at least 6 characters");
            return;
        } else if (!upperCasePattern.test(password)) {
            setError("Password must have at least one uppercase character");
            return;
        } else if (!lowerCasePattern.test(password)) {
            setError("Password must have at least one lowercase character");
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateUser({
                    displayName: displayName
                })
                    .then(() => {
                        setUser({ ...result.user, displayName });
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registered successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        router.push(
                            `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`
                        );
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
            })
            .catch((err) => {
                setError(err.message);
            });
    }

    const handleGoogleLogin = () => {
        setError("");

        googleSignIn()
            .then((result) => {
                setUser(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push(callbackUrl);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const loginLink = `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`;

    return (
        <div className="flex justify-center items-center min-h-[70vh] px-4">
            <div className="card w-full max-w-md bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center mb-2">Register Here</h2>

                    <form onSubmit={handleRegister} className="space-y-3">
                        <fieldset className="fieldset">
                            {/* name */}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Your Name"
                                required
                            />

                            {/* email */}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="you@example.com"
                                required
                            />

                            {/* password */}
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="********"
                                required
                            />

                            {/* confirm password */}
                            <label className="label">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="********"
                                required
                            />

                            <button type="submit" className="btn btn-primary w-full mt-2">
                                Create Account
                            </button>
                        </fieldset>
                    </form>

                    {
                        error && (
                            <p className="text-center text-red-500 font-semibold mt-2">
                                {error}
                            </p>
                        )
                    }

                    <div className="divider font-semibold text-secondary">OR</div>

                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
