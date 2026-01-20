"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Download,
  LogIn,
  LogOut,
  SquareMousePointer,
  View,
  Film,
} from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/stores/authStore";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import LoginForm from "../login";
import { Suspense, useState } from "react";
import { ModeToggle } from "../theme-toggle";
import { DialogTitle } from "@radix-ui/react-dialog";

function getCVFileName() {
  const currentYear = new Date().getFullYear();
  return `jmrh_cv_${currentYear}.pdf`;
}

export default function MainMenu() {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const signOut = useAuthStore((state) => state.signOut);

  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="relative gap-0 md:gap-5">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>curriculum</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full mt-1">
              <ul className="w-30">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/jorge_henriques_cv-en.pdf"
                      download={getCVFileName()}
                      className="flex-row items-center gap-2"
                    >
                      <Download />
                      Download
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/jorge_henriques_cv-en.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-row items-center gap-2"
                    >
                      <View />
                      View
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/curriculum"
                      className="flex-row items-center gap-2"
                    >
                      <SquareMousePointer />
                      Interactive
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/motion"
                      className="flex-row items-center gap-2"
                    >
                      <Film />
                      Motion Work
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {user && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>fun stuff</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute top-full mt-1 ">
                <ul className="w-30">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/justgoup"
                        className="flex-row items-center gap-2"
                      >
                        <Download />
                        Just Go Up
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/notepod"
                        className="flex-row items-center gap-2"
                      >
                        <Download />
                        NotePod
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/glifos"
                        className="flex-row items-center gap-2"
                      >
                        <Download />
                        Glifos
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              {user ? (
                <LogOut
                  onClick={() => signOut()}
                  className="cursor-pointer"
                  size={35}
                  color="red"
                />
              ) : (
                <Dialog
                  open={openLoginDialog}
                  onOpenChange={setOpenLoginDialog}
                >
                  <DialogTrigger asChild className="cursor-pointer">
                    <LogIn size={20} />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Login</DialogTitle>
                    <Suspense fallback={<p>Loading login...</p>}>
                      <LoginForm />
                    </Suspense>
                  </DialogContent>
                </Dialog>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div >
  );
}
