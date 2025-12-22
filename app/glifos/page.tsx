"use client";

import { useAuthStore } from "@/stores/authStore";
import { useFetchUserProfile } from "@/hooks/data/use-fetch-user-profile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TypographyP } from "@/components/typography/p";
import TypographyH1 from "@/components/typography/h1";

export default function GlifosPage() {
    const { user, loading: authLoading } = useAuthStore((state) => state);
    const router = useRouter();

    const {
        data: profile,
        isLoading: profileLoading,
    } = useFetchUserProfile(user?.id);

    const isOwner = !!profile && profile.role_id === 1;
    const isLoading = authLoading || (!!user && profileLoading);

    useEffect(() => {
        // Only make redirect decisions when we are done loading everything
        if (!isLoading) {
            const unauthorized = !user || !isOwner;
            if (unauthorized) {
                router.push("/");
            }
        }
    }, [isLoading, user, isOwner, router]);

    if (isLoading) {
        return (
            <div className="flex h-[50vh] w-full items-center justify-center">
                <TypographyP text="Loading..." />
            </div>
        );
    }

    if (!user || !isOwner) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4">
            <TypographyH1 text="Glifos" />
            <TypographyP text="welcome to glifos" />
        </div>
    );
}
