import SkillTitleAndDescription from "../skill-title-and-description";
import skills from "@/public/skills.json";
export default function PrintDesignDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item["Print Design"])?.["Print Design"] ||
    "";
  return (
    <SkillTitleAndDescription
      title="My experience with Print Design"
      description={skillDescription}
    />
  );
}
