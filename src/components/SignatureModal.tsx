import React, { useState, useEffect } from "react";

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (signature: string) => void;
}

const LOCAL_STORAGE_KEY = "user_email_signature";

export const SignatureModal: React.FC<SignatureModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [signature, setSignature] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setSignature(stored);
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, signature);
    if (onSave) onSave(signature);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Edit Signature</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-md text-sm"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          placeholder="Enter your signature..."
        />

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
