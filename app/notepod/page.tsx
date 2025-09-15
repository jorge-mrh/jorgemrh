"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Editor } from "@/components/blocks/editor-x/editor";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import supabase from "@/lib/supabase";
import { useAuthStore } from "@/stores/authStore";
import { SerializedEditorState } from "lexical";
import { useEffect, useState } from "react";

export const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello World 🚀",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState;

export default function NotePod() {
  const user = useAuthStore((state) => state.user);
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue);
  const [docs, setDocs] = useState<Array<{ id: string; name: string }>>([]);
  const [currentDocId, setCurrentDocId] = useState<string | null>(null);

  useEffect(() => {
    if (!user?.id) return;

    const loadDocs = async () => {
      const { data, error } = await supabase
        .from("documents")
        .select("id, name")
        .eq("user_id", user.id);

      if (!error && data) setDocs(data);
    };

    loadDocs();
  }, [user?.id]);

  const handleSave = async () => {
    if (!user?.id) return;

    if (currentDocId) {
      // update
      const { error } = await supabase
        .from("documents")
        .update({
          content: editorState,
          updated_at: new Date().toISOString(),
        })
        .eq("id", currentDocId);

      if (error) console.error("Update failed:", error);
    } else {
      // create new
      const { data, error } = await supabase
        .from("documents")
        .insert([
          {
            user_id: user.id,
            name: "Untitled Document",
            content: editorState,
          },
        ])
        .select("id")
        .single();

      if (!error && data) setCurrentDocId(data.id);
      if (error) console.error("Insert failed:", error);
    }
  };

  const handleSelectDoc = async (id: string) => {
    setCurrentDocId(id);

    const { data, error } = await supabase
      .from("documents")
      .select("name, content")
      .eq("id", id)
      .single();

    console.log("Selected Doc Data:", data);
    console.log("Selected Doc Error:", error);

    if (!error && data) {
      //setCurrentDocName(data.name);
      setEditorState(data.content as SerializedEditorState);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar documents={docs} onSelectDoc={handleSelectDoc} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
          <button
            onClick={handleSave}
            className="ml-auto rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </header>
        <div className="flex p-4">
          <Editor
            editorSerializedState={editorState}
            onSerializedChange={(value) => setEditorState(value)}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
