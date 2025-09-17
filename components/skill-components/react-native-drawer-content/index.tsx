import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";

export default function ReactNativeDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.ReactNative)?.ReactNative || "";
  return (
    <SkillTitleAndDescription
      title="My experience with React Native"
      description={skillDescription}
    />
  );
}
