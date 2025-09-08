"use client";
import React, { useState } from "react";
import { ImagesUpload } from "@/components/ui/imagesUpload";

export function FileUploadDemo({handleFileUpload}: {handleFileUpload: (files: File[]) => void}) {

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <ImagesUpload onChange={handleFileUpload} />
    </div>
  );
}
