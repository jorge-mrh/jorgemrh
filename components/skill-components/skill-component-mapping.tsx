import React from "react";
import TypeScriptDrawerContent from "./typescript-drawer-content";
import ReactDrawerContent from "./react-drawer-content";
import ReactNativeDrawerContent from "./react-native-drawer-content";
import JavaScriptDrawerContent from "./javascript-drawer-content";
import HTMLDrawerContent from "./html-drawer-content";
import CSSDrawerContent from "./css-drawer-content";
import DotNetDrawerContent from "./dotnet-drawer-content";
import SQLDrawerContent from "./sql-drawer-content";
import PrintDesignDrawerContent from "./print-design-drawer-content";
import DigitalDesignDrawerContent from "./digital-design-drawer-content";
import DigitalMarketingDrawerContent from "./digital-marketing-drawer-content";
import MotionDesignDrawerContent from "./motion-design-drawer-content";
import VideoDrawerContent from "./video-drawer-content";
import GamingDrawerContent from "./gaming-drawer-content";
import GameDevDrawerContent from "./game-dev-drawer-content";
import FanSciDrawerContent from "./fansci-drawer-content";
import MovShowDrawerContent from "./movshow-drawer-content";
import TravelDrawerContent from "./travel-drawer-content";
import DogsDrawerContent from "./dogs-drawer-content";

export const getSkillComponent = (skillName: string): React.ReactNode => {
  const componentMap: Record<string, React.ReactNode> = {
    TypeScript: <TypeScriptDrawerContent />,
    React: <ReactDrawerContent />,
    "React Native": <ReactNativeDrawerContent />,
    JavaScript: <JavaScriptDrawerContent />,
    HTML: <HTMLDrawerContent />,
    CSS: <CSSDrawerContent />,
    ".NET": <DotNetDrawerContent />,
    SQL: <SQLDrawerContent />,
    "Print Design": <PrintDesignDrawerContent />,
    "Digital Design": <DigitalDesignDrawerContent />,
    "Digital Marketing": <DigitalMarketingDrawerContent />,
    "Motion Design": <MotionDesignDrawerContent />,
    Vídeo: <VideoDrawerContent />,
    Gaming: <GamingDrawerContent />,
    "Game Dev": <GameDevDrawerContent />,
    "Fantasy & Sci-Fi": <FanSciDrawerContent />,
    "Movies & Shows": <MovShowDrawerContent />,
    Travel: <TravelDrawerContent />,
    Dogs: <DogsDrawerContent />,
  };

  return componentMap[skillName] || null;
};
