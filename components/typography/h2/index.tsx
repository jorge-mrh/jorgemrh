import { TypographyGeneralProps } from "@/components/typography/types";

export function TypographyH2({
  text,
  textSize = "text-3xl",
}: TypographyGeneralProps) {
  return (
    <h2 className={`scroll-m-20 pb-2 ${textSize} font-semibold tracking-tight`}>
      {text}
    </h2>
  );
}
