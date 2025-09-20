"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Download,
  LogIn,
  LogOut,
  SquareMousePointer,
  View,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuthStore } from "@/stores/authStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "@/components/login";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Suspense } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function getCVFileName() {
  const currentYear = new Date().getFullYear();
  return `jmrh_cv_${currentYear}.pdf`;
}

export default function MobileMenu() {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const signOut = useAuthStore((state) => state.signOut);

  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  if (loading) return null;

  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <Menu size={28} />
      </SheetTrigger>
      <SheetContent side="left" className="w-64 px-5">
        <SheetHeader>
          {/* Accessible title but hidden visually */}
          <VisuallyHidden>
            <SheetTitle>Main navigation</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          <Link href="/" className="text-lg">
            home
          </Link>
          <Link href="/contact" className="text-lg">
            contact
          </Link>

          {user && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="curriculum">
                <AccordionTrigger className="text-lg">
                  curriculum
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-3">
                  <Link
                    href="/jmrh_cv.pdf"
                    download={getCVFileName()}
                    className="flex items-center gap-2"
                  >
                    <Download size={16} /> Download
                  </Link>
                  <Link
                    href="/jmrh_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <View size={16} /> View
                  </Link>
                  <Link href="/curriculum" className="flex items-center gap-2">
                    <SquareMousePointer size={16} /> Interactive
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="funstuff">
                <AccordionTrigger className="text-lg">
                  fun stuff
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pl-3">
                  <Link href="/justgoup" className="flex items-center gap-2">
                    <Download size={16} /> Just Go Up
                  </Link>
                  <Link href="/notepod" className="flex items-center gap-2">
                    <Download size={16} /> NotePod
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {user ? (
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 text-red-600 mt-4"
            >
              <LogOut size={20} /> Sign out
            </button>
          ) : (
            <Dialog open={openLoginDialog} onOpenChange={setOpenLoginDialog}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2">
                  <LogIn size={20} /> Login
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Login</DialogTitle>
                <Suspense fallback={<p>Loading login...</p>}>
                  <LoginForm />
                </Suspense>
              </DialogContent>
            </Dialog>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
