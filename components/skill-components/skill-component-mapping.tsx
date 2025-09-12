import React from "react";
import TypeScriptDrawerContent from "./typescript-drawer-content";
import ReactDrawerContent from "./react-drawer-content";
import ReactNativeDrawerContent from "./react-native-drawer-content";

export const getSkillComponent = (skillName: string): React.ReactNode => {
  const componentMap: Record<string, React.ReactNode> = {
    TypeScript: <TypeScriptDrawerContent />,
    React: <ReactDrawerContent />,
    "React Native": <ReactNativeDrawerContent />,
    JavaScript: <></>,
    HTML: <></>,
    CSS: <></>,
    ".NET": <></>,
    SQL: <></>,
    "Print Design": <></>,
    "Digital Design": <></>,
    "Digital Marketing": <></>,
    "Motion Design": <></>,
    Photography: <></>,
    Vídeo: <></>,
    Gaming: <></>,
    "Game Dev": <></>,
    "Fantasy & Sci-Fi": <></>,
    "Movies & Shows": <></>,
    Travel: <></>,
    Dogs: <></>,
  };

  return componentMap[skillName] || null;
};
