"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";
import { useState } from "react";
import { useAuthStore } from "@/stores/authStore";

export default function LoginForm() {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [sendingRecovery, setSendingRecovery] = useState(false);
  const [recoveryEmailSent, setRecoveryEmailSent] = useState(false);
  const [recoverySentTo, setRecoverySentTo] = useState("");
  const signIn = useAuthStore((state) => state.signIn);
  const recoverPassword = useAuthStore((state) => state.recoverPassword);

  if (user || loading) {
    return null; // already logged in, hide the form
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    }
  };

  const handleRecoverPassword = async () => {
    if (!email) {
      setError("Please enter your email to recover your password.");
      return;
    }
    setError("");
    setSuccessMessage("");
    setSendingRecovery(true);
    const { error } = await recoverPassword(email);
    if (error) {
      setError(error.message);
    } else {
      setSuccessMessage("Recovery link sent. Check your email inbox.");
      setRecoveryEmailSent(true);
      setRecoverySentTo(email);
    }
    setSendingRecovery(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-md">
      <Card>
        <CardHeader>
          <CardTitle>
            <TypographyH2 text={"Were you provided login credentials?"} />
          </CardTitle>
          <CardDescription>
            <div>
              <TypographyP
                text={"Login bellow to get access to extra content."}
              />
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              {recoveryEmailSent ? (
                <div className="space-y-3">
                  <p className="text-green-500 text-sm">
                    Recovery link sent to{" "}
                    <span className="text-white">{recoverySentTo}</span>.
                  </p>
                  <p className="text-green-500 text-sm">
                    Check your inbox to reset your password.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {successMessage && (
                    <p className="text-green-500 text-sm">{successMessage}</p>
                  )}
                  <div className="flex flex-col gap-3">
                    <Button
                      type="button"
                      variant="link"
                      className="w-fit px-0"
                      onClick={handleRecoverPassword}
                      disabled={sendingRecovery}
                    >
                      Forgot your password?
                    </Button>
                    <Button type="submit" className="w-full cursor-pointer">
                      Login
                    </Button>
                  </div>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
