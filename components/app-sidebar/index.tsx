import * as React from "react";
import { Divide, GalleryVerticalEnd, Minus, Plus } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  documents: { id: string; name: string }[];
  onSelectDoc?: (id: string) => void;
};

export function AppSidebar({
  documents,
  onSelectDoc,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div>
              <span className="font-bold pl-2">Documents</span>
            </div>
            <Separator className="mt-2" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {documents.map((doc) => (
              <SidebarMenuItem key={doc.id}>
                <SidebarMenuButton asChild>
                  <button
                    className="w-full text-left cursor-pointer"
                    onClick={() => onSelectDoc?.(doc.id)}
                  >
                    {doc.name}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
