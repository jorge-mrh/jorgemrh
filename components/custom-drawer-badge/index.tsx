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
  drawerContent,
}: CustomBadgeProps) {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer">
        <Badge variant={variant} className={`${color} ${textColor} h-6`}>
          {icon && <span className="mr-1">{icon}</span>}
          {text}
        </Badge>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{text}</DrawerTitle>
        </DrawerHeader>
        <div className="px-6 pb-6">
          {drawerContent || (
            <div className="text-center text-muted-foreground">
              No additional information available.
            </div>
          )}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="w-[20%] mx-auto cursor-pointer">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
