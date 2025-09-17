import * as React from "react";
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
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

interface AppSidebarProps {
  documents: { id: string; name: string }[];
  onSelectDoc?: (id: string) => void;
  onDeleteDoc: (id: string) => void;
}

export function AppSidebar({
  documents,
  onSelectDoc,
  onDeleteDoc,
  ...props
}: AppSidebarProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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
                <ContextMenu>
                  <ContextMenuTrigger asChild>
                    <SidebarMenuButton
                      className="w-full text-left cursor-pointer"
                      onClick={() => onSelectDoc?.(doc.id)}
                    >
                      {doc.name}
                    </SidebarMenuButton>
                  </ContextMenuTrigger>

                  <ContextMenuContent>
                    <Dialog
                      open={deleteDialogOpen}
                      onOpenChange={setDeleteDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <ContextMenuItem
                          className="cursor-pointer"
                          onSelect={(e) => e.preventDefault()}
                        >
                          <Trash2 />
                          Delete
                        </ContextMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            Are you sure you want to delete {doc.name}?
                          </DialogTitle>
                          <DialogDescription>
                            Removing a document is permanent.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-2 mt-4">
                          <button
                            onClick={() => setDeleteDialogOpen(false)}
                            className="px-3 py-1 rounded border cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              onDeleteDoc(doc.id);
                              setDeleteDialogOpen(false);
                            }}
                            className="flex items-center gap-5 px-3 py-1 rounded bg-blue-600 text-white cursor-pointer"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </ContextMenuContent>
                </ContextMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
