import SkillTitleAndDescription from "../skill-title-and-description";
import skills from "@/public/skills.json";
export default function VideoDrawerContent() {
  const skillDescription =
    skills.development.find((item) => item.Vídeo)?.Vídeo || "";
  return (
    <SkillTitleAndDescription
      title="My experience with Video"
      description={skillDescription}
    />
  );
}
