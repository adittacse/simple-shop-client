"use client";

import {useContext, useEffect} from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/app/contexts/AuthContext";

export default function ProtectedClient({ children }) {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            const path =
                typeof window !== "undefined" ? window.location.pathname : "/";
            router.push(`/login?callbackUrl=${encodeURIComponent(path)}`);
        }
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return children;
}
