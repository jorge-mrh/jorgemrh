"use client";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";

import { TooltipProvider } from "@/components/ui/tooltip";
import { editorTheme } from "@/components/editor/themes/editor-theme";
import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function LoadSerializedStatePlugin({
  state,
}: {
  state?: SerializedEditorState | string | null;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!state) return;

    try {
      const parsed = typeof state === "string" ? JSON.parse(state) : state;

      const current = editor.getEditorState().toJSON();
      const incoming = parsed;

      // prevent unnecessary resets
      if (JSON.stringify(current) !== JSON.stringify(incoming)) {
        const newState = editor.parseEditorState(incoming);
        editor.setEditorState(newState);
      }
    } catch (err) {
      console.error("Failed to load serialized editor state", err);
    }
  }, [state, editor]);

  return null;
}

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export function Editor({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
}: {
  editorState?: EditorState;
  editorSerializedState?: SerializedEditorState;
  onChange?: (editorState: EditorState) => void;
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
}) {
  return (
    <div className="bg-background overflow-hidden rounded-lg w-full border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          ...(editorState ? { editorState } : {}),
        }}
      >
        <TooltipProvider>
          <Plugins />

          {editorSerializedState ? (
            <LoadSerializedStatePlugin state={editorSerializedState} />
          ) : null}

          <OnChangePlugin
            ignoreSelectionChange={true}
            onChange={(editorState) => {
              onChange?.(editorState);
              onSerializedChange?.(editorState.toJSON());
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
}
