"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If we are in the server, don't render anything
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  )
}