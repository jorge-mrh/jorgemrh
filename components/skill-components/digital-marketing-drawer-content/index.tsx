import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function DigitalMarketingDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item["Digital Marketing"])?.[
      "Digital Marketing"
    ] || "";
  return (
    <SkillTitleAndDescription
      title="My experience with Digital Marketing"
      description={skillDescription}
    />
  );
}
