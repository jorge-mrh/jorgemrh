"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionValue,
    PanInfo,
} from "framer-motion";
import { curriculumData, ExperienceItem } from "./data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronRight, X } from "lucide-react";

export default function InteractiveTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState<string | null>(null);

    const x = useMotionValue(0);

    const ITEM_WIDTH = 280;
    const GAP = 100;
    const totalWidth = curriculumData.length * (ITEM_WIDTH + GAP);

    const centerOffset = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;

    // Reverse data to show Oldest -> Newest (Left -> Right)
    const sortedData = useMemo(() => [...curriculumData].reverse(), []);

    return (
        <div className="w-full h-[600px] relative flex items-center justify-center overflow-hidden bg-neutral-950/50 rounded-xl border border-neutral-800">
            {/* Background Line */}
            <div className="absolute w-full h-[1px] bg-neutral-800" />

            {/* Draggable Container */}
            <motion.div
                ref={containerRef}
                className="flex items-center gap-[100px] cursor-grab active:cursor-grabbing px-[50vw]"
                drag="x"
                dragConstraints={{ left: -totalWidth + centerOffset, right: centerOffset }}
                style={{ x }}
                whileTap={{ cursor: "grabbing" }}
            >
                {sortedData.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        item={item}
                        itemWidth={ITEM_WIDTH}
                    />
                ))}
            </motion.div>
        </div>
    );
}

function TimelineItem({
    item,
    itemWidth,
}: {
    item: ExperienceItem;
    itemWidth: number;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const isActive = isHovered || isLocked;

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Start 5s timer to lock
        if (!isLocked) {
            timerRef.current = setTimeout(() => {
                setIsLocked(true);
            }, 5000);
        }
    };

    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        // Only unhover if not locked
        setIsHovered(false);
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLocked(false);
        setIsHovered(false);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    return (
        <motion.div
            className={cn(
                "relative flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 ease-spring group",
                isActive ? "z-10 scale-100 opacity-100" : "scale-75 opacity-40 grayscale blur-[1px]"
            )}
            style={{
                width: itemWidth,
            }}
            animate={{
                y: isActive ? 0 : 20
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Dot on the line */}
            <div className={cn(
                "w-4 h-4 rounded-full border-2 mb-8 transition-colors duration-300",
                isActive ? "bg-primary border-primary shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "bg-neutral-900 border-neutral-700"
            )} />

            {/* Card Content */}
            <div className={cn(
                "bg-card border border-border rounded-xl p-6 w-full shadow-xl transition-all duration-500",
                isActive ? "h-auto opacity-100" : "h-[100px] overflow-hidden opacity-80"
            )}>
                <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-mono text-muted-foreground block">{item.period}</span>
                    {isLocked && (
                        <button
                            onClick={handleClose}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                <h3 className="font-bold text-lg leading-tight mb-1">{item.title}</h3>
                <p className="text-sm text-primary mb-4 font-medium">{item.organization}</p>

                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}

                        {item.achievements && item.achievements.length > 0 && (
                            <ul className="space-y-2">
                                {item.achievements.map((ach, i) => (
                                    <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                                        <ChevronRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {item.technologies && (
                            <div className="flex flex-wrap gap-1 mt-4">
                                {item.technologies.slice(0, 4).map(tech => (
                                    <Badge key={tech} variant="secondary" className="text-[10px] px-1 py-0 h-5">{tech}</Badge>
                                ))}
                                {item.technologies.length > 4 && (
                                    <Badge variant="outline" className="text-[10px] px-1 py-0 h-5">+{item.technologies.length - 4}</Badge>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
