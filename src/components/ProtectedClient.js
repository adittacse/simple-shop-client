"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedClient({ children }) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            const callbackUrl = window.location.pathname;
            router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg" />
            </div>
        );
    }

    if (status === "authenticated") {
        return <>{children}</>;
    }

    return null;
}
