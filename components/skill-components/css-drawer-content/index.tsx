import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
import {
  Card,
} from "@/components/ui/card";
import { Palette } from "lucide-react";

export default function CSSDrawerContent() {
  const skillDescription =
    skills.development.find((item: any) => item.CSS)?.CSS || "";

  const tools = [
    {
      name: "TailwindCSS",
      description: "Utility-first CSS Framework",
      icon: Palette,
    }
  ];

  return (
    <SkillTitleAndDescription
      title="My experience with CSS"
      description={skillDescription}
    >
      <div className="flex flex-col gap-4">
        {tools.map((tool) => (
          <Card key={tool.name} className="flex flex-row items-center gap-4 p-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <tool.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{tool.name}</span>
              <span className="text-muted-foreground text-xs">
                {tool.description}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </SkillTitleAndDescription>
  );
}
