import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function DocumentSaveDialog({
  currentName,
  onSave,
}: {
  currentName?: string;
  onSave: (name: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(currentName || "");

  const handleSaveClick = () => {
    if (name.trim()) {
      onSave(name.trim());
      setOpen(false);
    }
  };

  useEffect(() => {
    setName(currentName || "");
  }, [currentName]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="rounded border px-3 py-1 hover:bg-gray-800">
          {currentName ? "Update Document" : "Save as..."}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {currentName ? "Update Document" : "Save Document"}
          </DialogTitle>
          <DialogDescription>
            {currentName
              ? "Change the name of your document and save."
              : "Enter a name for your new document."}
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Document name"
          className="border p-2 w-full rounded mt-2"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1 rounded border"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveClick}
            className="px-3 py-1 rounded bg-blue-600 text-white"
          >
            {currentName ? "Update" : "Save"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
