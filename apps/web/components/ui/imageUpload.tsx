import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { IconUpload, IconX } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: { x: 0, y: 0 },
  animate: { x: 20, y: -20, opacity: 0.9 },
};

const secondaryVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const ImageUpload = ({
  onChange,
}: {
  onChange: (file: File | null) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    const imageFile = newFiles.find((f) => f.type.startsWith("image/"));
    if (!imageFile) {
      setError("Please upload a valid image (JPEG, PNG, GIF, etc.)");
      return;
    }

    setError("");
    setFile(imageFile);
    onChange(imageFile);
  };

  const removeFile = () => {
    setFile(null);
    onChange(null);
    setError("");
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp", ".svg"],
    },
    onDrop: handleFileChange,
    onDropRejected: () => {
      setError("Invalid file type. Please upload an image.");
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="single-image-upload"
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
            Upload Image
          </p>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-20 text-red-500 text-sm mt-2"
            >
              {error}
            </motion.p>
          )}

          <div className="relative w-full mt-10 max-w-md mx-auto">
            {file ? (
              <motion.div
                layoutId="single-image-preview"
                className={cn(
                  "relative group bg-white dark:bg-neutral-900 rounded-md p-3",
                  "shadow-sm hover:shadow-md transition-shadow"
                )}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeFile();
                  }}
                  className="absolute -top-2 -right-2 z-50 bg-red-500 text-white p-1 rounded-full "
                >
                  <IconX className="h-3 w-3" />
                </button>

                <div className="relative h-40 w-full rounded-md overflow-hidden bg-gray-100 dark:bg-neutral-800">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                </div>
              </motion.div>
            ) : (
              <>
                <motion.div
                  layoutId="image-upload"
                  variants={mainVariant}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[10rem] mx-auto rounded-md",
                    "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                  )}
                >
                  {isDragActive ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-neutral-600 flex flex-col items-center text-sm"
                    >
                      Drop it
                      <IconUpload className="h-4 w-4 mt-1" />
                    </motion.p>
                  ) : (
                    <div className="flex flex-col items-center">
                      <IconUpload className="h-6 w-6 text-neutral-600 dark:text-neutral-300 mb-1" />
                      <span className="text-xs text-neutral-500">
                        Click to upload
                      </span>
                    </div>
                  )}
                </motion.div>

                <motion.div
                  variants={secondaryVariant}
                  className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[10rem] mx-auto rounded-md"
                ></motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
