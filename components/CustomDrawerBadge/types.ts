import { ReactNode } from "react";

export interface CustomBadgeProps {
  text: string;
  color: string;
  textColor: string;
  icon?: ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | null
    | undefined;
}
