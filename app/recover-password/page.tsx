"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import supabase from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/typography/p";
import { TypographyH2 } from "@/components/typography/h2";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";

export default function RecoverPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const signOut = useAuthStore((state) => state.signOut);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const exchangeSession = async () => {
      const code = searchParams.get("code");
      setError("");
      try {
        if (code) {
          const { data, error } = await supabase.auth.exchangeCodeForSession(
            code
          );
          if (error || !data.session?.user) {
            throw error ?? new Error("Invalid recovery link.");
          }
          setStatus("ready");
          return;
        }

        if (
          typeof window !== "undefined" &&
          window.location.hash.includes("access_token")
        ) {
          const hashParams = new URLSearchParams(
            window.location.hash.substring(1)
          );
          const access_token = hashParams.get("access_token");
          const refresh_token = hashParams.get("refresh_token");
          if (access_token && refresh_token) {
            const { data, error } = await supabase.auth.setSession({
              access_token,
              refresh_token,
            });
            if (error || !data.session?.user) {
              throw error ?? new Error("Invalid recovery link.");
            }
            setStatus("ready");
            return;
          }
        }

        setError("Recovery link is missing. Please request a new one.");
        setStatus("error");
      } catch (err: any) {
        setError(
          err?.message ?? "There was a problem validating your recovery link."
        );
        setStatus("error");
      }
    };

    exchangeSession();
  }, [searchParams]);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter a new password.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSuccessMessage("");
    setUpdating(true);

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Password updated. You can now sign in.");
      setPassword("");
      setConfirmPassword("");
      await signOut();
      setTimeout(() => router.push("/"), 1200);
    }
    setUpdating(false);
  };

  const renderContent = () => {
    if (status === "loading") {
      return <TypographyP text="Validating recovery link..." />;
    }

    if (status === "error") {
      return (
        <div className="space-y-3">
          <TypographyP text={error} />
          <TypographyP text="Return to the login dialog and request a new recovery email." />
        </div>
      );
    }

    return (
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-5">
        <div className="grid gap-3">
          <Label htmlFor="password">New password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        <Button type="submit" className="w-full" disabled={updating}>
          {updating ? "Updating..." : "Update password"}
        </Button>
      </form>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <TypographyH2 text={"Reset your password"} />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">{renderContent()}</CardContent>
      </Card>
    </div>
  );
}
