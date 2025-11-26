"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Products" },
    { href: "/#features", label: "Features" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" }
];

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const isActive = (href) => pathname === href;

    return (
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
            <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between gap-4">
                {/* LEFT: Logo */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tight cursor-pointer"
                    >
                        SimpleShop
                    </Link>
                </div>

                {/* CENTER: Menu (desktop) */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                "hover:text-primary transition " +
                                (isActive(link.href) ? "text-primary font-semibold" : "")
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* RIGHT: Auth buttons */}
                <div className="flex items-center gap-2">
                    {!session && (
                        <>
                            <button
                                className="btn btn-ghost btn-xs sm:btn-sm"
                                onClick={() => router.push("/login")}
                            >
                                Login
                            </button>
                            <button
                                className="btn btn-primary btn-xs sm:btn-sm"
                                onClick={() => router.push("/register")}
                            >
                                Register
                            </button>
                        </>
                    )}

                    {session && (
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex flex-col text-right text-xs">
                <span className="font-semibold leading-tight">
                  {session.user?.name || "User"}
                </span>
                                <span className="opacity-70">
                  {session.user?.email || ""}
                </span>
                            </div>
                            <button
                                className="btn btn-outline btn-xs sm:btn-sm"
                                onClick={() => signOut({ callbackUrl: "/" })}
                            >
                                Logout
                            </button>
                        </div>
                    )}

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden btn btn-ghost btn-square btn-xs"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* CENTER MENU: mobile dropdown */}
            {open && (
                <nav className="md:hidden border-t bg-white">
                    <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={
                                    "py-1 hover:text-primary transition " +
                                    (isActive(link.href) ? "text-primary font-semibold" : "")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}

                        {!session && (
                            <div className="flex gap-2 mt-2">
                                <button
                                    className="btn btn-ghost btn-xs flex-1"
                                    onClick={() => {
                                        setOpen(false);
                                        router.push("/login");
                                    }}
                                >
                                    Login
                                </button>
                                <button
                                    className="btn btn-primary btn-xs flex-1"
                                    onClick={() => {
                                        setOpen(false);
                                        router.push("/register");
                                    }}
                                >
                                    Register
                                </button>
                            </div>
                        )}

                        {session && (
                            <button
                                className="btn btn-outline btn-xs mt-2"
                                onClick={() => {
                                    setOpen(false);
                                    signOut({ callbackUrl: "/" });
                                }}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </nav>
            )}
        </header>
    );
}
