import React from "react";
import TypeScriptDrawerContent from "@/components/SkillComponents/TypeScriptDrawerContent";

export const getSkillComponent = (skillName: string): React.ReactNode => {
  const componentMap: Record<string, React.ReactNode> = {
    TypeScript: <TypeScriptDrawerContent />,
    JavaScript: <div>JavaScript content coming soon...</div>,
    React: <div>React content coming soon...</div>,
  };

  return componentMap[skillName] || null;
};
