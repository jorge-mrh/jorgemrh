"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Editor } from "@/components/blocks/editor-x/editor";
import DocumentSaveDialog from "@/components/document-save-dialog";
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

  const handleSaveWithName = async (name: string) => {
    if (!user?.id) return;

    if (currentDocId) {
      // update existing
      const { error } = await supabase
        .from("documents")
        .update({
          content: editorState,
          name,
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
            name,
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

    if (!error && data) {
      setEditorState(data.content as SerializedEditorState);
    }
  };

  const handleNewDocument = () => {
    setCurrentDocId(null);
    setEditorState(initialValue);
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
          <button
            onClick={handleNewDocument}
            className="rounded border px-3 py-1 hover:bg-gray-800"
          >
            New Document
          </button>
          <DocumentSaveDialog
            currentName={docs.find((d) => d.id === currentDocId)?.name}
            onSave={handleSaveWithName}
          />
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
