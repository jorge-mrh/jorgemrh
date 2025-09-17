import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function MotionDesignDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item["Motion Design"])?.[
      "Motion Design"
    ] || "";
  return (
    <SkillTitleAndDescription
      title="My experience with Motion Design"
      description={skillDescription}
    />
  );
}
