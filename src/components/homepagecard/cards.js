import { Button } from "@mui/material";
import Image from "next/image"


export function ProductCard({ course }) {

  return (
    <div className=" relative w-full h-full p-2.5 bg-white rounded-4xl">
      <Image
        className="w-full rounded-4xl"
        src={course.avatarImage}
        alt={course.courseName}
      />
      <div className="flex flex-col">
        <div className="pb-8!">
          <h1 className="text-sm font-bold p-1.5 md:text-xl capitalize">{course.courseName}</h1>
          <p className="flex items-center text-[18px] p-1.5 text-justify">{course.title}</p>
        </div>


        <Button className="bg-blue-600! absolute! bottom-2! right-5! text-white! font-bold! p-2! text-sm! md:text-xl">
          Learn More
        </Button>

      </div>
    </div>
  );
}
