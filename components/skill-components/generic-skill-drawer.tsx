import skills from "@/public/skills.json";
import SkillTitleAndDescription from "./skill-title-and-description";

interface GenericSkillDrawerProps {
    skillName: string;
    jsonKey?: string;
}

export default function GenericSkillDrawer({ skillName, jsonKey }: GenericSkillDrawerProps) {
    const key = jsonKey || skillName;

    const skillItem = skills.development.find((item: any) => item[key]);
    const description = skillItem ? skillItem[key as keyof typeof skillItem] : "Description not found.";

    return (
        <SkillTitleAndDescription
            title={`My experience with ${skillName}`}
            description={description || "Description not found."}
        />
    );
}
