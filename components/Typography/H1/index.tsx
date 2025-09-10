import { TypographyGeneralProps } from "../types/props";

export default function TypographyH1({ text }: TypographyGeneralProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  );
}
