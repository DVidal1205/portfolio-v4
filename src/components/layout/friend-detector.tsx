"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FriendDetector() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const friendParam = searchParams.get("f");
        const clearParam = searchParams.get("c");

        if (friendParam !== null) {
            localStorage.setItem("isFriend", "true");

            window.dispatchEvent(new CustomEvent("friendStatusChanged"));

            if (typeof window !== "undefined") {
                const url = new URL(window.location.href);
                url.searchParams.delete("f");
                window.history.replaceState({}, "", url.toString());
            }
        }

        if (clearParam !== null) {
            localStorage.setItem("isFriend", "false");

            window.dispatchEvent(new CustomEvent("friendStatusChanged"));

            if (typeof window !== "undefined") {
                const url = new URL(window.location.href);
                url.searchParams.delete("c");
                window.history.replaceState({}, "", url.toString());
            }
        }
    }, [searchParams]);

    return null;
}
