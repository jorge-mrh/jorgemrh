"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MotionWork } from "@/data/motion-work";

interface VideoDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  video: MotionWork | null;
}

export function VideoDrawer({ isOpen, onOpenChange, video }: VideoDrawerProps) {
  if (!video) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">{video.title}</DrawerTitle>
            <DrawerDescription>{video.description}</DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
              <iframe
                src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                className="h-full w-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={video.title}
              />
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
                {video.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                    </span>
                ))}
            </div>
          </div>
          
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
