import TypographyH2 from "@/components/Typography/H1";

export default function ReactNativeDrawerContent() {
  return (
    <div className="grid grid-cols-2 items-center p-10">
      <div className="col-span-2">
        <TypographyH2 text={"some title"} />
      </div>
    </div>
  );
}
