import { TypographyGeneralProps } from "../types/props";

export function TypographyP({ text }: TypographyGeneralProps) {
  return <p className="leading-7">{text}</p>;
}
