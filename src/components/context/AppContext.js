"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Header from "../header/header";
import { usePathname } from "next/navigation";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isScroll, setIsScroll] = useState(false);
  const pathName = usePathname();

  const values = {
    isScroll,
    setIsScroll,
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  return (
    <AppContext.Provider value={values}>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
