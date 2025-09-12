import { TypographyGeneralProps } from "@/components/typography/types";

export default function TypographyH1({
  text,
  textSize = "text-4xl",
}: TypographyGeneralProps) {
  return (
    <h1
      className={`scroll-m-20 ${textSize} font-extrabold tracking-tight text-balance`}
    >
      {text}
    </h1>
  );
}
