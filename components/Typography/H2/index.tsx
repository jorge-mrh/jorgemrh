import { TypographyGeneralProps } from "../types";

export function TypographyH2({ text }: TypographyGeneralProps) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
      {text}
    </h2>
  );
}
