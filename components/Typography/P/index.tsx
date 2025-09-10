import { TypographyGeneralProps } from "../types/props";

export function TypographyP({ text, textSize }: TypographyGeneralProps) {
  return <p className={`leading-6 ${textSize}`}>{text}</p>;
}
