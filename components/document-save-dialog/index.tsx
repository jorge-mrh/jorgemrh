import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DocumentSaveDialog({
  onSave,
}: {
  onSave: (name: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSaveClick = () => {
    if (name.trim()) {
      onSave(name.trim());
      setOpen(false);
      setName("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="ml-auto rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700">
          Save
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Document</DialogTitle>
          <DialogDescription>Enter a name for your document</DialogDescription>
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
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
