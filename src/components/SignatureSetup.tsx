import React, { useEffect, useRef, useState } from "react";
import { X, Edit3, Eye, Type } from "lucide-react";

interface SignatureSetupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignatureSetup: React.FC<SignatureSetupProps> = ({ isOpen, onClose }) => {
  const [signatures, setSignatures] = useState([
    {
      id: 1,
      name: "Default",
      content:
        "Best regards,\nJohn Doe\nSoftware Engineer\njohn.doe@company.com",
      isDefault: true,
    },
    { id: 2, name: "Casual", content: "Thanks!\nJohn", isDefault: false },
  ]);
  const [editingSignature, setEditingSignature] = useState<number | null>(null);
  const [signatureName, setSignatureName] = useState("");
  const [signatureContent, setSignatureContent] = useState("");
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const defaultSignature = signatures.find(sig => sig.isDefault);
    if (defaultSignature) {
      sessionStorage.setItem("defaultSignature", defaultSignature.content);
    }
  }, [signatures]);

  const handleEdit = (signature: any) => {
    setEditingSignature(signature.id);
    setSignatureName(signature.name);
    setSignatureContent(signature.content);
    setIsCreatingNew(false);
  };

  const handleCreateNew = () => {
    setEditingSignature(null);
    setSignatureName("");
    setSignatureContent("");
    setIsCreatingNew(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSave = () => {
    if (isCreatingNew) {
      const newSignature = {
        id: Date.now(),
        name: signatureName,
        content: signatureContent,
        isDefault: signatures.length === 0,
      };
      setSignatures([...signatures, newSignature]);
    } else if (editingSignature) {
      setSignatures(
        signatures.map((sig) =>
          sig.id === editingSignature
            ? { ...sig, name: signatureName, content: signatureContent }
            : sig
        )
      );
    }
    setEditingSignature(null);
    setIsCreatingNew(false);
    setSignatureName("");
    setSignatureContent("");
  };

  const handleDelete = (id: number) => {
    setSignatures(signatures.filter((sig) => sig.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setSignatures(
      signatures.map((sig) => ({ ...sig, isDefault: sig.id === id }))
    );
  };

  const handleCancel = () => {
    setEditingSignature(null);
    setIsCreatingNew(false);
    setSignatureName("");
    setSignatureContent("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Email Signatures
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {isCreatingNew || editingSignature ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Signature Name
                </label>
                <input
                  type="text"
                  value={signatureName}
                  onChange={(e) => setSignatureName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter signature name"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Signature Content
                  </label>
                  <button
                    onClick={() => setPreviewMode(!previewMode)}
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700"
                  >
                    {previewMode ? (
                      <Edit3 className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                    <span>{previewMode ? "Edit" : "Preview"}</span>
                  </button>
                </div>

                {previewMode ? (
                  <div className="w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50">
                    <div className="whitespace-pre-wrap text-sm text-gray-900">
                      {signatureContent || "No content yet..."}
                    </div>
                  </div>
                ) : (
                  <textarea
                    value={signatureContent}
                    onChange={(e) => setSignatureContent(e.target.value)}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter your signature content"
                  />
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!signatureName.trim() || !signatureContent.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Save Signature
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Signatures
                </h3>
                <button
                  onClick={handleCreateNew}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Create New
                </button>
              </div>

              <div className="space-y-3">
                {signatures.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Type className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No signatures created yet</p>
                    <p className="text-sm">
                      Click "Create New" to add your first signature
                    </p>
                  </div>
                ) : (
                  signatures.map((signature) => (
                    <div
                      key={signature.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">
                            {signature.name}
                          </h4>
                          {signature.isDefault && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          {!signature.isDefault && (
                            <button
                              onClick={() => handleSetDefault(signature.id)}
                              className="text-green-600 border border-green-600 hover:text-green-700 hover:border-green-700 text-sm rounded px-2 py-1"
                            >
                              Set Default
                            </button>
                          )}
                          
                          <button
                            onClick={() => handleEdit(signature)}
                            className="text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700 text-sm rounded px-2 py-1"
                          >
                            Edit
                          </button>

                          {!signature.isDefault && (
                            <button
                              onClick={() => handleDelete(signature.id)}
                              className="text-red-600 border border-red-600 hover:text-red-700 hover:border-red-700 text-sm rounded px-2 py-1"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                        <div className="whitespace-pre-wrap">
                          {signature.content}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignatureSetup;
