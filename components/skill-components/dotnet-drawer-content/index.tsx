import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function DotNetDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item[".NET"])?.[".NET"] || "";
  return (
    <SkillTitleAndDescription
      title="My experience with .NET"
      description={skillDescription}
    />
  );
}
