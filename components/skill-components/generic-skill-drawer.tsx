import skills from "@/public/skills.json";
import SkillTitleAndDescription from "./skill-title-and-description";

interface GenericSkillDrawerProps {
    skillName: string;
    jsonKey?: string; // Optional key if it differs from displayed name
}

export default function GenericSkillDrawer({ skillName, jsonKey }: GenericSkillDrawerProps) {
    const key = jsonKey || skillName;

    // Flatten the skills array to find the item
    // The JSON structure is { "development": [ { "TypeScript": "..." }, ... ] }
    // We need to find the object that has the key
    const skillItem = skills.development.find((item: any) => item[key]);
    const description = skillItem ? skillItem[key as keyof typeof skillItem] : "Description not found.";

    return (
        <SkillTitleAndDescription
            title={`My experience with ${skillName}`}
            description={description || "Description not found."}
        />
    );
}
