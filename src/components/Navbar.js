"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import AuthContext from "@/app/contexts/AuthContext";
import Swal from "sweetalert2";

const allLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Products" },
    { href: "/dashboard/add-product", label: "Add Product", private: true },
    { href: "/dashboard/manage-products", label: "Manage Products", private: true }
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const { user, userSignOut } = useContext(AuthContext);

    const isActive = (href) => pathname === href;

    // এখানে user অনুযায়ী কোন লিঙ্ক দেখাবে সেটা ঠিক করলাম
    const navLinksToShow = allLinks.filter((link) => {
        if (link.private && !user) return false;
        return true;
    });

    const handleLogout = () => {
        userSignOut()
            .then(() => {
                // চাইলে এখানে toast দেখাতে পারো
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`
                });
            });
    };

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
                    {navLinksToShow.map((link) => (
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
                    {!user && (
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

                    {user && (
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex flex-col text-right text-xs">
                <span className="font-semibold leading-tight">
                  {user?.displayName || "User"}
                </span>
                                <span className="opacity-70">{user?.email || ""}</span>
                            </div>
                            <button
                                className="btn btn-outline btn-xs sm:btn-sm"
                                onClick={handleLogout}
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
                        {navLinksToShow.map((link) => (
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

                        {!user && (
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

                        {user && (
                            <button
                                className="btn btn-outline btn-xs mt-2"
                                onClick={() => {
                                    setOpen(false);
                                    handleLogout();
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
