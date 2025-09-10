import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex row-auto gap-2">
        <Badge
          variant="secondary"
          className="bg-yellow-500 text-white dark:bg-yellow-600"
        >
          Typescript
        </Badge>
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          .NET
        </Badge>
      </div>
      <div></div>
    </div>
  );
}
