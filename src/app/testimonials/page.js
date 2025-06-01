'use client'

import { useAppContext } from "@/components/context/AppContext";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";



export default function Testemonials() {
  const [textExpand, setTextExpand] = useState("");
  const { testimonials } = useAppContext()

  return (
    <div className="w-screen">
      <div className="w-full flex items-center justify-center xl:mt-25 mt-20">
        <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-blue-600 italic underline">
          Message from Students
        </h1>
      </div>
      <div className="w-100% lg:p-10 p-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {testimonials.length > 0 &&
          testimonials.map((card, index) => <div key={index} className="w-full h-full flex flex-col items-center text-gray-600">
            <div
              className={
                "rounded-lg relative bg-gray-300  overflow-hidden w-full transition-all duration-300 ease-out"}

            >
              <div className="w-full flex items-center justify-center gap-5 p-4">
                <div className="w-18 rounded-full overflow-hidden p-1 border-2 border-blue-600">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold text-nowrap text-red-500">
                    {card.name}
                  </h1>
                  <p className="text-sm font-semibold text-gray-600"><b>{card.Course}</b></p>
                </div>
              </div>
              <div className="p-4">
                <p
                  className={`text-justify relative transition-all duration-300 ease-in-out ${textExpand === index ? "line-clamp-none" : "line-clamp-4"
                    }`}
                >
                  {card.message}
                </p>
              </div>
              <div className="w-full flex items-center justify-center px-4 pb-4">
                <IconButton onClick={() => setTextExpand(textExpand === index ? "" : index)} className="p-0!">
                  {textExpand === index ? <IoIosArrowDropupCircle className="text-4xl text-blue-600" /> : <IoIosArrowDropdownCircle className="text-4xl text-blue-600" />}
                </IconButton>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}
