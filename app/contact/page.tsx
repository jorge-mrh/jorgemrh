"use client";
import { FormEvent, useState } from "react";
import { TypographyP } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import supabase from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";
import { useFetchUserProfile } from "@/hooks/data/use-fetch-user-profile";
import {
  Contact as ContactType,
  useFetchContacts,
} from "@/hooks/data/use-fetch-contacts";
import { useQueryClient } from "@tanstack/react-query";
import { Check, Eye } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const user = useAuthStore((state) => state.user);
  const queryClient = useQueryClient();
  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useFetchUserProfile(user?.id);
  const isOwner = !!profile && profile.role_id === 1;
  const {
    data: contacts = [],
    isLoading: contactsLoading,
    error: contactsError,
  } = useFetchContacts(isOwner);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const markAsSeen = async (id: string) => {
    const { error } = await supabase
      .from("contacts")
      .update({ seen: true })
      .eq("id", id);

    if (error) {
      toast.error("Failed to mark as seen");
      return;
    }

    // Optimistic update or refetch
    queryClient.invalidateQueries({ queryKey: ["contacts"] });
    toast.success("Marked as seen");
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    if (!email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        message: "Email and message are required.",
      });
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("contacts").insert([
      {
        email: email.trim(),
        message: message.trim(),
        profile_id: user?.id ?? null,
      },
    ]);

    if (error) {
      setFeedback({
        type: "error",
        message: "Could not send your message. Please try again.",
      });
    } else {
      setFeedback({
        type: "success",
        message: "Message sent. Thanks for reaching out!",
      });
      setEmail("");
      setMessage("");
    }

    setSubmitting(false);
  };

  const renderOwnerMessages = () => {
    if (contactsLoading) {
      return <TypographyP text="Loading messages..." />;
    }

    if (contactsError || profileError) {
      return (
        <TypographyP text="Could not load messages. Please try again later." />
      );
    }

    if (!contacts.length) {
      return <TypographyP text="No messages yet." />;
    }

    return (
      <div className="flex flex-col gap-3">
        {contacts.map((contact: ContactType) => (
          <div
            key={contact.id}
            className="border border-gray-800 rounded-md p-3 space-y-2 relative"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-gray-500">
                {new Date(contact.created_at || "").toLocaleString("en-US", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </span>
              <div className="flex gap-2">
                {!contact.seen && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-primary hover:bg-primary/20"
                    onClick={() => markAsSeen(contact.id)}
                    title="Mark as Seen"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Mark Seen
                  </Button>
                )}
                {contact.seen && (
                  <span className="text-[10px] uppercase tracking-wide text-green-400 flex items-center gap-1 border border-green-900/50 bg-green-900/20 px-2 rounded-full">
                    <Check className="w-3 h-3" /> Seen
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">{contact.email}</span>
              {contact.profile_id && (
                <span className="text-xs text-gray-400">
                  Profile ID: {contact.profile_id}
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed whitespace-pre-wrap">{contact.message}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Label htmlFor="email">Email</Label>
      <Input
        className="md:w-[30%]"
        id="email"
        type="email"
        placeholder="mail@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Label htmlFor="message">Your message</Label>
      <Textarea
        className="h-35"
        placeholder="Type your message here."
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button
        type="submit"
        className="w-[25%] md:w-[15%] mr-auto cursor-pointer"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "SEND"}
      </Button>
      {feedback && (
        <p
          className={`text-sm ${feedback.type === "error" ? "text-red-500" : "text-green-500"
            }`}
        >
          {feedback.message}
        </p>
      )}
    </form>
  );

  return (
    <div className="flex flex-col gap-3 w-full">
      <TypographyP
        textSize="text-sm"
        text="If you are a recruiter or just interested in a project get in touch with me. You can also ask for login credentials to see what I'm working on."
      />
      {profileLoading && user ? (
        <TypographyP text="Checking permissions..." />
      ) : isOwner ? (
        renderOwnerMessages()
      ) : (
        renderForm()
      )}
    </div>
  );
}
