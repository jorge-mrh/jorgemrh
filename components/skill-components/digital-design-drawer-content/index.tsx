import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function DigitalDesignDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item["Digital Design"])?.[
      "Digital Design"
    ] || "";
  return (
    <SkillTitleAndDescription
      title="My experience with Digital Design"
      description={skillDescription}
    />
  );
}
