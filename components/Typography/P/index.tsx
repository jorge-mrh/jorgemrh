import { TypographyGeneralProps } from "@/components/typography/types";

export function TypographyP({ text, textSize }: TypographyGeneralProps) {
  return <p className={`leading-6 ${textSize}`}>{text}</p>;
}
