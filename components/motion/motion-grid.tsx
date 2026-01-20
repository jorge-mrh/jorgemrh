"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { MOTION_WORK, MotionWork } from "@/data/motion-work";
import { VideoDrawer } from "./video-drawer";
import { Card, CardContent } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export function MotionGrid() {
  const [selectedVideo, setSelectedVideo] = useState<MotionWork | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleVideoClick = (video: MotionWork) => {
    setSelectedVideo(video);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MOTION_WORK.map((work) => (
          <motion.div key={work.id} variants={item}>
            <Card
              className="group cursor-pointer overflow-hidden border-none bg-muted/50 hover:bg-muted transition-colors duration-300"
              onClick={() => handleVideoClick(work)}
            >
              <CardContent className="p-0 relative aspect-video">
                {/* Thumbnail */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={`https://lh3.googleusercontent.com/d/${work.driveId}=w800`}
                    alt={work.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold truncate">{work.title}</h3>
                  <p className="text-white/70 text-sm truncate">{work.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <VideoDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        video={selectedVideo}
      />
    </>
  );
}
