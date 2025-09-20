"use client";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <TypographyP
        textSize="text-sm"
        text="If you are a recruiter or just interested in a project get in touch with me. You can also ask for login credentials to see what I'm working on."
      />
      <form className="flex flex-col gap-4">
        <Label htmlFor="username">Email</Label>
        <Input
          className="md:w-[30%]"
          id="username"
          type="text"
          placeholder="mail@example.com"
          required
        />
        <Label htmlFor="message">Your message</Label>
        <Textarea
          className="h-35"
          placeholder="Type your message here."
          id="message"
        />
        <Button className="w-[25%] md:w-[15%] mr-auto cursor-pointer">
          SEND
        </Button>
      </form>
    </div>
  );
}
