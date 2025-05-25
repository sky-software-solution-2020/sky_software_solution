import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel2";
import { LuTimer } from "react-icons/lu";
import { IoLanguage } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaRegMoneyBill1 } from "react-icons/fa6";
export default function CourseOverview({ course }) {
  return (
    <>
      {course && (
        <div className="w-screen">
          <div className="w-auto flex gap-10 mx-2  sm:mx-15 lg:mx-24 xl:mx-72 flex-col lg:flex-row  justify-evenly ">
            <div className="w-full flex flex-col gap-5">
              <Carousel className="w-full rounded-3xl overflow-hidden">
                <CarouselContent>
                  {course.coverImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        style={{ userSelect: "none" }}
                        className="w-full rounded-3xl"
                        src={image}
                        alt={`image-${index}`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className=" text-center w-full text-xl sm:text-3xl font-bold text-blue-600">
                {course.title}
              </div>
            </div>

            <div className="px-5 py-3 w-full gap-3 border flex flex-col items-center border-gray-600 rounded-3xl">
              <h1 className="text-2xl font-bold text-gray-800">
                Course Feature
              </h1>
              <div className="flex flex-col w-full ">
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <LuTimer className="text-3xl" />
                    <span>Duration</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">
                    {course.overview.courseFeature.duration}
                  </p>
                </div>
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <IoLanguage className="text-3xl" />
                    <span>Language</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">
                    {course.overview.courseFeature.language}
                  </p>
                </div>
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <PiCertificateFill className="text-3xl" />
                    <span>Certificate</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">Yes</p>
                </div>
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <FaChalkboardTeacher className="text-3xl" />
                    <span>Expert trainers</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">Yes</p>
                </div>
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <IoIosTime className="text-3xl" />
                    <span>Flexible Timing</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">Yes</p>
                </div>
                <div className="w-full flex items-center justify-between border-t-2 border-gray-600 py-3">
                  <p className="text-gray-500 flex items-center gap-2 text-xl font-bold">
                    <FaRegMoneyBill1 className="text-3xl" />
                    <span>Fee Installements</span>
                  </p>
                  <p className="text-xl font-bold text-blue-600">Yes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 w-auto flex gap-5 mx-3 sm:mx-15 lg:mx-24 xl:mx-72 flex-col">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold text-gray-600">Description</h1>
              <p className="text-[18px] text-justify font-semibold text-gray-500">
                {course.overview.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold text-gray-600">
                Course Content Overview
              </h1>

              {course.overview.content.map((point, idx) => (
                <li key={idx} className="text-[18px] text-justify font-semibold text-gray-500">
                  {point}
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
