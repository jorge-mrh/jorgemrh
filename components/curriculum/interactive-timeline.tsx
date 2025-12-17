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
    const sortedData = useMemo(() => [...curriculumData].reverse(), []);

    return (
        <>
            <div className="hidden md:flex w-full h-[600px] relative items-center justify-center overflow-hidden bg-neutral-950/50 rounded-xl border border-neutral-800">
                <DesktopTimeline data={sortedData} />
            </div>
            <div className="md:hidden w-full relative bg-neutral-950/50 rounded-xl border border-neutral-800 p-4">
                <MobileTimeline data={sortedData} />
            </div>
        </>
    );
}

function DesktopTimeline({ data }: { data: ExperienceItem[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const ITEM_WIDTH = 280;
    const GAP = 100;
    const totalWidth = data.length * (ITEM_WIDTH + GAP);

    const centerOffset = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;

    return (
        <>
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
                {data.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        item={item}
                        itemWidth={ITEM_WIDTH}
                    />
                ))}
            </motion.div>
        </>
    );
}

function MobileTimeline({ data }: { data: ExperienceItem[] }) {
    return (
        <div className="relative flex flex-col gap-8 pl-4 py-8">
            {/* Vertical Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-neutral-800" />

            {data.map((item) => (
                <MobileTimelineItem key={item.id} item={item} />
            ))}
        </div>
    );
}

function MobileTimelineItem({ item }: { item: ExperienceItem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex gap-6">
            {/* Dot */}
            <div className={cn(
                "w-4 h-4 rounded-full border-2 mt-1.5 flex-shrink-0 z-10 bg-background transition-colors duration-300",
                isOpen ? "border-primary bg-primary" : "border-neutral-700 bg-neutral-900"
            )} />

            <div
                className="flex flex-col gap-2 w-full pr-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex flex-col">
                    <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                    <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.organization}</p>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2 pb-4 space-y-4">
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
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {item.technologies.map(tech => (
                                        <Badge key={tech} variant="secondary" className="text-[10px] px-1 py-0 h-5">{tech}</Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
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
