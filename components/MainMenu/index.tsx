import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Download, SquareMousePointer, View } from "lucide-react";
import Link from "next/link";

function getCVFileName() {
  const currentYear = new Date().getFullYear();
  return `jmrh_cv_${currentYear}.pdf`;
}

export default function MainMenu() {
  return (
    <div className="p-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="relative">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>curriculum</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full mt-1">
              <ul className="w-30">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/jmrh_cv.pdf"
                      download={getCVFileName()}
                      className="flex-row items-center gap-2"
                    >
                      <Download />
                      Download
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/jmrh_cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-row items-center gap-2"
                    >
                      <View />
                      View
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/curriculum"
                      className="flex-row items-center gap-2"
                    >
                      <SquareMousePointer />
                      Interactive
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>fun stuff</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full mt-1 ">
              <ul className="w-30">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/justgoup"
                      className="flex-row items-center gap-2"
                    >
                      Just Go Up
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
