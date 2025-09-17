import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function JavaScriptDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.JavaScript)?.JavaScript || "";
  return (
    <SkillTitleAndDescription
      title="My experience with JavaScript"
      description={skillDescription}
    />
  );
}
