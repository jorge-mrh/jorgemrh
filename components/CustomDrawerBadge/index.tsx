import { Badge } from "@/components/ui/badge";
import { CustomBadgeProps } from "./types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

export default function CustomDrawerBadge({
  text,
  color,
  textColor = "text-white",
  icon,
  variant = "secondary",
}: CustomBadgeProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Badge variant={variant} className={`${color} ${textColor} h-6`}>
          {icon && <span className="mr-1">{icon}</span>}
          {text}
        </Badge>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{text}</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div></div>
        <DrawerFooter>
          <DrawerClose>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
