import { useDocumentContext } from "@/ContextManager";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";

const FileUpload: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const { userId } = useAuth();
  const { document, clearMessages, setDocument } = useDocumentContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setMessage(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("user_id", document?.user_id ?? userId ?? "");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASEPATH}/rag/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("Upload successful!");
        setSelectedFile(null);
        setIsOpen(false);
        setDocument({
          _id: "",
          filename: data?.filename,
          user_id: userId ?? "",
          updated_at: data?.updated_at,
        });
        localStorage.removeItem("conversations");
      } else {
        setMessage(data.error || "Upload failed");
      }
      clearMessages();
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`mr-10 p-1.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 ${
          document?.filename ? "border-emerald-600" : "border-red-600"
        } border-[3px]`}
        title={document?.filename ? document?.filename : "Upload Document"}
      >
        <Image width={20} height={20} src="/upload.svg" alt="upload" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 transition-opacity">
          <div className="bg-transparent w-full max-w-md mx-4 p-0">
            <div className="relative bg-[#121212] text-white rounded-2xl shadow-xl p-6 space-y-6 transform transition-all duration-300 scale-95 hover:scale-100">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold text-center">
                Upload a Document
              </h2>

              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/upload.svg"
                    alt="upload"
                    className="h-8"
                  />

                  <span className="text-gray-400 text-sm">
                    {selectedFile ? "Change File" : "Click to upload"}
                  </span>
                </label>
              </div>

              {selectedFile && (
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                  FT
                  <div className="text-sm">
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-gray-400">
                      {(selectedFile.size / 1024).toFixed(2)} KB ·{" "}
                      {selectedFile.type || "Unknown"}
                    </p>
                  </div>
                </div>
              )}

              {message && (
                <p
                  className={`text-sm ${
                    message.includes("successful")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUpload;
