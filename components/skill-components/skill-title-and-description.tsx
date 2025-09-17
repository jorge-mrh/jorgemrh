import { TypographyH2 } from "@/components/typography/h2";
import { TypographyP } from "@/components/typography/p";

export interface SkillTitleAndDescriptionProps {
  title: string;
  description: string;
}
export default function SkillTitleAndDescription(
  props: SkillTitleAndDescriptionProps
) {
  const { title, description } = props;
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:p-10 md:grid-cols-2">
      <div className="col-span-1 gap-3 flex flex-col">
        <TypographyH2 text={title} textSize="text-2xl" />
        <TypographyP text={description} />
      </div>
    </div>
  );
}
