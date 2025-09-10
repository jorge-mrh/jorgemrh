import { Badge } from "@/components/ui/badge";
import { CustomBadgeProps } from "./types";

export default function CustomBadge({
  text,
  color,
  textColor = "text-white",
  icon,
  variant = "secondary",
}: CustomBadgeProps) {
  return (
    <Badge variant={variant} className={`${color} ${textColor} h-6`}>
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </Badge>
  );
}
