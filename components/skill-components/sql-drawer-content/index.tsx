import skills from "@/public/skills.json";
import SkillTitleAndDescription from "../skill-title-and-description";
export default function SQLDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.SQL)?.SQL || "";
  return (
    <SkillTitleAndDescription
      title="My experience with SQL"
      description={skillDescription}
    />
  );
}
