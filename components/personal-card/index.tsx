import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypographyP } from "../typography/P";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookUser, GitBranch, MousePointerClick, Play } from "lucide-react";
export default function PersonalCard() {
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Card className="flex justify-center max-w-100 max-h-15">
          <CardContent>
            <div className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/72821099?v=4" />
                <AvatarFallback>JH</AvatarFallback>
              </Avatar>
              <TypographyP text="Jorge Henriques | @jorgemrh" />
              <MousePointerClick className="justify-self-end" size={16} />
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/jorge-mrh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <GitBranch size={14} /> Github
          </a>
          <a
            href="https://linkedin.com/in/jorgemrh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <BookUser size={14} /> Linkedin
          </a>
          <a
            href="https://www.youtube.com/jorgemrh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Play size={14} /> Youtube
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
