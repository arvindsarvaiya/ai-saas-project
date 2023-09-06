"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("06437028-0170-4816-8f2a-4e62e1b44d0c");
  }, []);

  return null;
};
