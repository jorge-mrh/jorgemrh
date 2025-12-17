import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database, LayoutTemplate, Store } from "lucide-react";

export default function ReactDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.React)?.React || "";

  const tools = [
    {
      name: "Next.js",
      description: "React Framework",
      icon: LayoutTemplate,
    },
    {
      name: "Zustand",
      description: "State Management",
      icon: Store,
    },
    {
      name: "TanStack Query",
      description: "Data Fetching",
      icon: Database,
    },
    {
      name: "MUI | Shadcn",
      description: "UI Libraries",
      icon: LayoutTemplate,
    },
    {
      name: "KendoReact",
      description: "UI Components",
      icon: LayoutTemplate,
    },
  ];

  return (
    <SkillTitleAndDescription
      title="My experience with React"
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
