"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Header from "../header/header";
import { usePathname } from "next/navigation";
import Footer from "../footer/footer";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isScroll, setIsScroll] = useState(false);
  const [courses, setCourses] = useState([]);

  const pathName = usePathname();

  const values = {
    isScroll,
    setIsScroll,
    courses
  };

  const firstLoad = useRef(true);

  useEffect(() => {
    if (!firstLoad.current) {
      window.location.reload();
    }

    firstLoad.current = false;
  }, [pathName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await axios.get(
          `https://sky-backend-seven.vercel.app/api/v1/courses/all-courses`
        );

        setCourses(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCourse();
  }, []);

  return (
    <AppContext.Provider value={values}>
      <div className="container">
        <Header home={pathName === "/"} />
        <main>{children}</main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
