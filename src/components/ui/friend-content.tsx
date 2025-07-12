"use client";
import { useFriend } from "@/hooks/useFriend";
import { ReactNode } from "react";

interface FriendContentProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export default function FriendContent({
    children,
    fallback = null,
}: FriendContentProps) {
    const isFriend = useFriend();

    return isFriend ? <>{children}</> : <>{fallback}</>;
}
