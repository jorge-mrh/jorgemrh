import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="flex justify-center mt-15">
      <div className="flex flex-col gap-10 w-full max-w-md">
        <div className="grid gap-3 w-60">
          <Label htmlFor="username">Email</Label>
          <Input
            id="username"
            type="text"
            placeholder="mail@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </div>
    </div>
  );
}
