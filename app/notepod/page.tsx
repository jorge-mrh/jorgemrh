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
import { useCreateDocument } from "@/hooks/data/use-create-new-document";
import { useFetchDocument } from "@/hooks/data/use-fetch-document";
import { useFetchUserDocuments } from "@/hooks/data/use-fetch-user-documents";
import { useUpdateDocument } from "@/hooks/data/use-update-document";
import { useAuthStore } from "@/stores/authStore";
import { SerializedEditorState } from "lexical";
import { useEffect, useState } from "react";
import { useDeleteDocument } from "@/hooks/data/use-delete-document";

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
  const [currentDocId, setCurrentDocId] = useState<string | undefined>(
    undefined
  );

  const { data: docs } = useFetchUserDocuments({ user_id: user?.id });
  const { data: doc } = useFetchDocument(currentDocId ?? undefined);
  const createDoc = useCreateDocument(user?.id, editorState);
  const updateDoc = useUpdateDocument(currentDocId, editorState);
  const deleteDoc = useDeleteDocument(user?.id);

  const handleSaveWithName = (name: string) => {
    if (currentDocId) {
      updateDoc.mutate(name, {
        onError: (err) => console.error("Update failed:", err),
      });
    } else {
      createDoc.mutate(name, {
        onSuccess: (data) => setCurrentDocId(data.id),
        onError: (err) => console.error("Insert failed:", err),
      });
    }
  };

  const handleSelectDoc = (id: string) => {
    setCurrentDocId(id);
  };

  const handleNewDocument = () => {
    setCurrentDocId(undefined);
    setEditorState(initialValue);
  };

  const handleDeleteDoc = (id: string) => {
    deleteDoc.mutate(id, {
      onError: (err) => console.error("Delete failed:", err),
      onSuccess: () => {
        if (currentDocId === id) {
          handleNewDocument();
        }
      },
    });
  };

  useEffect(() => {
    if (doc?.content) {
      setEditorState(doc.content as SerializedEditorState);
    }
  }, [doc]);

  return (
    <SidebarProvider>
      <AppSidebar
        documents={docs || []}
        onSelectDoc={handleSelectDoc}
        onDeleteDoc={handleDeleteDoc}
      />
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
            currentName={docs?.find((d) => d.id === currentDocId)?.name}
            onSave={handleSaveWithName}
          />
        </header>
        <Editor
          editorSerializedState={editorState}
          onSerializedChange={(value) => setEditorState(value)}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
