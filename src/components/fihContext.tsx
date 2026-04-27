"use client";

import { createContext, useContext, useState } from "react";

type FihContextType = {
  count: number;
  setCount: (n: number) => void;
};

const fihContext = createContext<FihContextType | null>(null);

export function FihProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(3);

  return (
    <fihContext.Provider value={{ count, setCount }}>
      {children}
    </fihContext.Provider>
  );
}

export function useFihCount() {
  const context = useContext(fihContext);
  if (!context) {
    throw new Error("useFihCount must be used within a FihProvider");
  }
  return context;
}
