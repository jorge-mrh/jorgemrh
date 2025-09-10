import { LoginForm } from "@/components/Login";
import TypographyH1 from "@/components/Typography/H1";
import { TypographyH2 } from "@/components/Typography/H2";
import { TypographyP } from "@/components/Typography/P";
import { Badge } from "@/components/ui/badge";
import { EyeClosed } from "lucide-react";
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* COLUMN 1 */}
      <div>
        <div className="flex row-auto gap-2 mb-2">
          <Badge
            variant="secondary"
            className="bg-yellow-500 text-white dark:bg-yellow-600 h-6"
          >
            Typescript
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white dark:bg-blue-600 h-6"
          >
            .NET
          </Badge>
        </div>
        <div>
          <TypographyH1 text={"Welcome"} />
        </div>
      </div>
      {/* COLUMN 2 */}
      <div className="flex justify-center">
        <LoginForm className="max-w-120 min-w-90 mt-5" />
      </div>
    </div>
  );
}
