"use client";
import { useEffect, useState } from "react";

export function useFriend(): boolean {
    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        const checkFriendStatus = () => {
            const stored = localStorage.getItem("isFriend");
            setIsFriend(stored === "true");
        };

        checkFriendStatus();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "isFriend") {
                checkFriendStatus();
            }
        };

        const handleFriendStatusChange = () => {
            checkFriendStatus();
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener(
            "friendStatusChanged",
            handleFriendStatusChange
        );

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener(
                "friendStatusChanged",
                handleFriendStatusChange
            );
        };
    }, []);

    return isFriend;
}

export function clearFriendStatus(): void {
    if (typeof window !== "undefined") {
        localStorage.removeItem("isFriend");
        window.dispatchEvent(new CustomEvent("friendStatusChanged"));
    }
}
