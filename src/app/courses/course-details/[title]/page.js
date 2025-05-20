"use client";

import { useAppContext } from "@/components/context/AppContext";
import CourseContent from "@/components/coursedetailspage/coursecontentpage";
import CourseTutorials from "@/components/coursedetailspage/coursetutorials";
import CourseOverview from "@/components/coursedetailspage/overviewpage";
import CoursePracticeQuestion from "@/components/coursedetailspage/practicequestionpage";
import { Button } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CoursesDetails() {
  const { courses } = useAppContext();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const courseName = searchParams.get("coursename");

  const handleButtonClick = (path) => {
    router.push(`/courses/course-details/${path}?coursename=${courseName}`);
  };

  return (
    <>
      <div className="w-screen pt-15">
        <div className="w-auto m-2 p-2 sm:m-5 sm:p-5 gap-5 flex items-center flex-col">
          <div className="grid border-b-3 border-blue-600 pb-3 grid-cols-2  gap-2 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5">
            {[
              "Overview",
              "Course Content",
              "Tutorials",
              "Practice Question"
            ].map((item, index) => (
              <Button
                key={index}
                onClick={() =>
                  handleButtonClick(item.toLowerCase().replace(" ", "-"))
                }
                className={`${pathName.includes(item.toLowerCase().replace(" ", "-"))
                    ? "bg-blue-600! text-white!"
                    : "bg-white! text-blue-600!"
                  } border-3! rounded-2xl! border-blue-600!  font-bold! capitalize!`}
              >
                {item}
              </Button>
            ))}
          </div>

          {pathName.includes("overview") && (
            <CourseOverview course={courses.find((c) => c.courseName === courseName)} />
          )}
          {pathName.includes("course-content") && (
            <CourseContent course={courses.find((c) => c.courseName === courseName)} />
          )}
          {pathName.includes("tutorials") && (
            <CourseTutorials course={courses.find((c) => c.courseName === courseName)} />
          )}
          {pathName.includes("practice-question") && (
            <CoursePracticeQuestion
              course={courses.find((c) => c.courseName)}
            />
          )}
        </div>
      </div>
    </>
  );
}
