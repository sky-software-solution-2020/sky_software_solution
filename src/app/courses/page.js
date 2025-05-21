"use client";

import { useAppContext } from "@/components/context/AppContext";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image"

export default function Courses() {
  const {courses} = useAppContext()
  const router = useRouter();

  function filterCategory(array) {
    let category = [];

    for (let course of array) {
      if (!category.includes(course.category)) {
        category.push(course.category);
      }
    }
    return category;
  }

  const category = filterCategory(courses);

  const handleRedirectCourseDetailsPage = (coursename) => {
    router.push(`/courses/course-details/overview?coursename=${coursename}`);
  };

  

  return (
    <>
      <div className="w-screen pt-15">
        <div className="w-auto m-2 p-2 sm:m-5 sm:p-5 gap-5 flex items-center flex-col">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 border-b-4 pb-2 border-blue-600 inline-block">
            Our Courses
          </h1>
          <div className="w-full p-2 xl:p-5 xl:px-25 flex flex-col gap-10">
            {category.map((cete, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-8 border-b-3 border-gray-300 pb-10"
              >
                <p className="capitalize text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600">
                  {cete}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-15 lg:gap-x-20 gap-y-10">
                  {courses.length > 0 &&
                    courses
                      .filter((course) => course.category === cete)
                      .map((course, idx) => (
                        <div className="flex flex-col gap-3" key={idx}>
                          <img 
                            className="rounded-2xl w-full"
                            src={course.avatarImage}
                            alt={course.courseName}
                          />
                          <Button
                            className="bg-blue-600! rounded-2xl! text-white! font-bold! capitalize!"
                            onClick={() =>
                              handleRedirectCourseDetailsPage(course.courseName)
                            }
                          >
                            {course.courseName}
                          </Button>
                        </div>
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
