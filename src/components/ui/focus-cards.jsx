"use client";
import { cn } from "@heroui/react";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

export const Card = React.memo(
  ({ card, index, hovered, setHovered, setTextExpand, textExpand }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
      key={index}
    >
      <div className="w-full flex items-center justify-center gap-5 p-4">
        <div className="w-30 rounded-full overflow-hidden p-1 border-2 border-blue-600">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-nowrap text-red-500">
            {card.name}
          </h1>
          <p className="text-sm font-semibold">{card.jobPalce}</p>
        </div>
      </div>
      <div className="p-4">
        <p
          className={`text-justify relative transition-all duration-300 ease-in-out ${
            textExpand === index ? "line-clamp-none" : "line-clamp-4"
          }`}
        >
          {card.message}
        </p>
      </div>
      <div className="w-full flex items-center justify-center px-4 pb-4">
        <IconButton onClick={() => setTextExpand( textExpand === index ? "" : index)} className="p-0!">
          {textExpand === index ? <IoIosArrowDropupCircle className="text-4xl text-blue-600" /> : <IoIosArrowDropdownCircle className="text-4xl text-blue-600" />}
        </IconButton>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);
  const [textExpand, setTextExpand] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          setTextExpand={setTextExpand}
          textExpand={textExpand}
        />
      ))}
    </div>
  );
}
