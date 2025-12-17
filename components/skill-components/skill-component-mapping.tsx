import React from "react";
import GenericSkillDrawer from "./generic-skill-drawer";
import ReactDrawerContent from "./react-drawer-content";
import CSSDrawerContent from "./css-drawer-content";

export const getSkillComponent = (skillName: string): React.ReactNode => {
  const componentMap: Record<string, React.ReactNode> = {
    TypeScript: <GenericSkillDrawer skillName="TypeScript" />,
    React: <ReactDrawerContent />,
    "React Native": <GenericSkillDrawer skillName="React Native" jsonKey="ReactNative" />,
    JavaScript: <GenericSkillDrawer skillName="JavaScript" />,
    HTML: <GenericSkillDrawer skillName="HTML" />,
    CSS: <CSSDrawerContent />,
    ".NET": <GenericSkillDrawer skillName=".NET" />,
    SQL: <GenericSkillDrawer skillName="SQL" />,
    "Print Design": <GenericSkillDrawer skillName="Print Design" />,
    "Digital Design": <GenericSkillDrawer skillName="Digital Design" />,
    "Digital Marketing": <GenericSkillDrawer skillName="Digital Marketing" />,
    "Motion Design": <GenericSkillDrawer skillName="Motion Design" />,
    Vídeo: <GenericSkillDrawer skillName="Vídeo" />,
    Gaming: <GenericSkillDrawer skillName="Gaming" />,
    "Game Dev": <GenericSkillDrawer skillName="Game Dev" />,
    "Fantasy & Sci-Fi": <GenericSkillDrawer skillName="Fantasy & Sci-Fi" />,
    "Movies & Shows": <GenericSkillDrawer skillName="Movies & Shows" />,
    Travel: <GenericSkillDrawer skillName="Travel" />,
    Dogs: <GenericSkillDrawer skillName="Dogs" />,
  };

  return componentMap[skillName] || null;
};
