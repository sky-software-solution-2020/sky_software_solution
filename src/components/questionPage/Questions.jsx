'use client'

import { useSearchParams } from "next/navigation"
import { questions } from "../json/quiz_questions"
import { courses } from "../json/courses"
import { Button } from "@mui/material"
import { useState } from "react"

export default function Questions() {
   const params = useSearchParams()
   const value = params.get("value")
   const language = Buffer.from(value, 'hex').toString('utf-8')
   const question = questions.filter((q) => q.language === language)

   const getRandomItem = (array, count) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));

         [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      return arr.slice(0, count);
   };
   const randomQuestions = getRandomItem(question, 30)

   const [questionList, setQuestionList] = useState(randomQuestions.map((ques, idx) => ({
      ...ques,
      index: idx,
      answered: "",
      view: false
   })))

   const [activeQuestion, setActiveQuestion] = useState(questionList[0])
   const [selectedOption, setSelectedOption] = useState("")

   const handleSelectOption = (e, id) => {
      setSelectedOption(e.target.value)
      setQuestionList((prev) =>
         prev.map((q) =>
            q.id === id ? { ...q, answered: e.target.value } : q
         )
      );
   }

   return (
      <div className="h-screen w-screen grid xl:grid-cols-4 grid-cols-3">
         <div className="p-5 col-span-3">

            <div className="flex w-full justify-between border-b border-gray-300 pb-5">
               <h1 className="sm:text-3xl text-xl text-gray-600 font-bold">
                  {language}
               </h1>
               <h1 className="sm:text-3xl text-xl text-gray-600 font-bold">00 : 30 : 00</h1>
            </div>

            <div className="flex w-full p-5 flex-col gap-5">
               <p className="text-xl text-gray-600 font-semibold">{`Qns.${activeQuestion.index + 1} - ${activeQuestion.question}`}</p>

               {
                  activeQuestion.options.map((option, idx) => (
                     <label key={idx} className="flex items-center capitalize gap-3 border border-gray-400 p-2 text-[18px] rounded-xl">
                        <input type="radio" value={option} checked={selectedOption === option} onChange={(e) => handleSelectOption(e, activeQuestion.id)} />
                        {option}
                     </label>

                  ))
               }
            </div>

         </div>
         <div className="col-span-3 xl:col-span-1 p-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-5">
               <h1 className="sm:text-3xl text-2xl border-b border-gray-300 text-gray-600 font-bold pb-5">Question Overview</h1>
               <div className="grid grid-cols-4 gap-5 xl:grid-cols-4 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6">
                  {randomQuestions.map((ques, idx) => (
                     <Button key={idx} className={`border-3! text-gray-400! rounded-4xl! text-xl! p-0! ${activeQuestion.id === ques.id ? "border-blue-600!" : 'border-gray-300!'}`}>{idx + 1}</Button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-5">
               <ul className="flex flex-col sm:flex-row xl:flex-col gap-3 text-[18px]">
                  <li className="flex items-center gap-3">
                     <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center font-bold">15</span>
                     <b>Not Visited</b>
                  </li>
                  <li className="flex items-center gap-3">
                     <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center bg-yellow-300 text-white font-bold">15</span>
                     <b>Not Answered</b>
                  </li>
                  <li className="flex items-center gap-3">
                     <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center bg-green-500 text-white font-bold">15</span>
                     <b>Answered</b>
                  </li>
               </ul>

               <Button className="w-full! bg-blue-500! text-white! font-bold! capitalize! text-xl! ">Submit</Button>
            </div>

         </div>
      </div>
   )
}