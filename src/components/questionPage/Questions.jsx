'use client'

import { useSearchParams } from "next/navigation"
import { questions } from "../json/quiz_questions"
import { Button } from "@mui/material"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { FiCheckCircle } from "react-icons/fi"
import { RxCrossCircled } from "react-icons/rx"


export default function Questions() {
   const params = useSearchParams()
   const value = params.get("value")
   const language = value ? Buffer.from(value, 'hex').toString('utf-8') : 'Default Language';
   const filteredQuestions = questions.filter((q) => q.language === language);

   const [questionList, setQuestionList] = useState([]);
   const [activeQuestion, setActiveQuestion] = useState(null);
   const [isSubmit, setIsSubmit] = useState(false)
   const [submitReason, setSubmitReason] = useState("")
   const [timeLeft, setTimeLeft] = useState(30 * 60);
   const [isTestStart, setIsTestStart] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [score, setScore] = useState(0);

   const getRandomItem = (array, count) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.slice(0, count);
   };

   useEffect(() => {
      if (filteredQuestions.length > 0) {
         const randomQuestions = getRandomItem(filteredQuestions, 30);
         const initialQuestionList = randomQuestions.map((ques, idx) => ({
            ...ques,
            index: idx,
            answered: "",
            view: idx === 0 ? true : false
         }));
         setQuestionList(initialQuestionList);
         setActiveQuestion(initialQuestionList[0]);
      }
   }, [language]);

   if (activeQuestion === null) {
      return (
         <div className="h-screen w-screen flex items-center justify-center">
            <div>Loading questions...</div>
         </div>
      );
   }

   const handleSelectOption = (e, id) => {
      setQuestionList((prev) =>
         prev.map((q) =>
            q.id === id ? { ...q, answered: e.target.value } : q
         )
      );
   }

   const CountdownTimer = () => {
      useEffect(() => {
         if (timeLeft === 0) {
            setIsSubmit(true)
            setSubmitReason("Timeout!")
            return;
         }

         const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
         }, 1000);

         return () => clearInterval(timer);
      }, [timeLeft]);

      const formatTime = (seconds) => {
         const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
         const s = (seconds % 60).toString().padStart(2, '0');
         return `${m} : ${s}`;
      };

      return (
         <div className="sm:text-3xl text-xl text-gray-600 font-bold" style={{ color: timeLeft <= 600 ? 'red' : "" }}>
            {formatTime(timeLeft)}
         </div>
      );
   };

   const handleSubmit = () => {
      setIsSubmit(false)
      const totalscore = questionList.reduce((a, b) => {
         if (b.answered === b.answer) {
            return a + 1
         }
         return a + 0
      }, 0)

      setScore(totalscore)
      setIsSubmitted(true)
   }

   useEffect(() => {
      if (isSubmitted) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "auto"
      }
   }, [isSubmitted])

   return (
      <>
         {
            !isTestStart ?
               <div className="flex items-center justify-center h-screen w-screen flex-col gap-3">
                  <p className="text-2xl font-bold text-gray-600">Total Questions : 30</p>
                  <p className="text-2xl font-bold text-gray-600">Time Duration : 30 min</p>
                  <Button onClick={() => setIsTestStart(true)} className="bg-blue-600! text-white! font-bold! capitalize! w-[250px]">Start Test</Button>
               </div> : isSubmitted ? <div className="flex items-center justify-center h-screen w-screen flex-col gap-3 p-5">
                  <p className={`text-4xl font-bold text-center ${score <= 30 && score > 25 ? "text-emerald-600" : score <= 25 && score > 20 ? "text-green-600" : score <= 20 && score > 15 ? "text-blue-600" : score <= 15 && score > 10 ? "text-yellow-600" : score <= 10 && score > 5 ? "text-orange-600" : score <= 10 && score >= 0 ? "text-red-600" : ""}`}>
                     {score <= 30 && score > 25 ? "Excellent! Outstanding performance!" : score <= 25 && score > 20 ? "Very Good! Almost there." : score <= 20 && score > 15 ? "Good. Keep it up!" : score <= 15 && score > 10 ? "Average. You can do better." : score <= 10 && score > 5 ? "Poor. Work harder to improve." : score <= 10 && score >= 0 ? "Very Poor. Needs a lot of improvement." : ""}
                  </p>
                  <p className={`text-7xl font-bold ${score <= 30 && score > 25 ? "text-emerald-600" : score <= 25 && score > 20 ? "text-green-600" : score <= 20 && score > 15 ? "text-blue-600" : score <= 15 && score > 10 ? "text-yellow-600" : score <= 10 && score > 5 ? "text-orange-600" : score <= 10 && score >= 0 ? "text-red-600" : ""}`}>{score}</p>
                  <p className="text-2xl font-bold text-gray-600">Out of  {questionList.length}</p>
                  <p className="text-2xl font-bold text-gray-600">Total Answered Questions :   {questionList.filter(q => q.answered !== "").length}</p>
                  <p className="text-2xl font-bold text-gray-600">Total Right Questions :  {score}</p>
                  <p className="text-2xl font-bold text-gray-600">Total Wrong Questions  : {questionList.filter(q => q.answered !== "").length - score}</p>
                  <Sheet>
                     <SheetTrigger className="bg-blue-600 text-white font-bold p-2 rounded-lg cursor-pointer">
                        Review Your Answers
                     </SheetTrigger>
                     <SheetContent side="bottom">
                        <SheetHeader>
                           <SheetTitle  ></SheetTitle>
                           <div className="text-xl text-gray-600 flex flex-col gap-5 xl:h-[95vh] h-[85vh] overflow-auto pb-5 text-justify">
                              <h1 className="text-3xl font-bold text-blue-600">Your Answers </h1>
                              {
                                 questionList.map((ques, idx) => (
                                    <div key={idx} className={`flex flex-col gap-3 ${idx !== questionList.length - 1 ? "border-b-2 border-gray-300" : ""} pb-5`}>
                                       <p className="text-xl text-gray-600 font-semibold">{`Qns.${idx + 1} - ${ques.question}`}</p>
                                       {
                                          ques.answered !== ques.answer && <p className="text-red-600 flex items-center gap-2 m-0">
                                             <RxCrossCircled className="text-2xl" /> {ques.answered === "" ? "Not Answered" : ques.answered}
                                          </p>
                                       }
                                       <p className="text-green-600 flex items-center gap-2 m-0">
                                          <FiCheckCircle className="text-2xl" /> {ques.answer}
                                       </p>
                                    </div>
                                 ))
                              }
                           </div>

                        </SheetHeader>
                     </SheetContent>
                  </Sheet >

               </div> :
                  <div className="h-screen w-screen grid xl:grid-cols-4 grid-cols-3">
                     <div className="p-5 col-span-3">

                        <div className="flex w-full justify-between border-b border-gray-300 pb-5">
                           <h1 className="sm:text-3xl text-xl text-gray-600 font-bold">
                              {language}
                           </h1>
                           <CountdownTimer />
                        </div>

                        <div className="flex flex-col gap-10">
                           <div className="flex w-full p-5 flex-col gap-5">
                              <p className="text-xl text-gray-600 font-semibold">{`Qns.${activeQuestion.index + 1} - ${activeQuestion.question}`}</p>

                              {
                                 activeQuestion.options.map((option, idx) => (
                                    <label key={idx} className="flex items-center capitalize gap-3 border border-gray-400 p-2 text-[18px] rounded-xl">
                                       <input type="radio" value={option} checked={questionList[activeQuestion.index].answered === option} onChange={(e) => handleSelectOption(e, activeQuestion.id)} />
                                       {option}
                                    </label>
                                 ))
                              }
                           </div>


                           <div className="flex w-full justify-between">
                              <Button onClick={() => setQuestionList((prev) =>
                                 prev.map((q) =>
                                    q.id === activeQuestion.id ? { ...q, answered: "" } : q
                                 )
                              )} className="font-bold! text-gray-600! capitalize! text-xl!">Clear</Button>
                              <div className="flex items-center gap-5">

                                 <Button disabled={activeQuestion.index === 0} className="bg-blue-600! text-white! disabled:opacity-60! font-bold! capitalize!" onClick={() => {
                                    setActiveQuestion(questionList[activeQuestion.index - 1]);
                                    setQuestionList((prev) =>
                                       prev.map((q) =>
                                          q.index === activeQuestion.index - 1 ? { ...q, view: true } : q
                                       )
                                    );
                                 }}>Previous</Button>


                                 <Button disabled={activeQuestion.index < questionList.length - 1 ? false : true} className="bg-blue-600! disabled:opacity-60! text-white! font-bold! capitalize!" onClick={() => {
                                    setActiveQuestion(questionList[activeQuestion.index + 1]);
                                    setQuestionList((prev) =>
                                       prev.map((q) =>
                                          q.index === activeQuestion.index + 1 ? { ...q, view: true } : q
                                       )
                                    );
                                 }}>Next</Button>

                              </div>

                           </div>

                        </div>
                     </div>
                     <div className="col-span-3 xl:col-span-1 p-5 flex flex-col justify-between gap-10">
                        <div className="flex flex-col gap-5">
                           <h1 className="sm:text-3xl text-2xl border-b border-gray-300 text-gray-600 font-bold pb-5">Question Overview</h1>
                           <div className="grid grid-cols-4 gap-5 xl:grid-cols-4 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6">
                              {questionList.map((ques, idx) => (
                                 <Button
                                    key={idx}
                                    onClick={() => {
                                       setActiveQuestion({ ...ques, view: true });
                                       setQuestionList((prev) =>
                                          prev.map((q) =>
                                             q.id === ques.id ? { ...q, view: true } : q
                                          )
                                       );
                                    }}
                                    className={`border-3! text-gray-400! ${ques.answered !== "" ? "bg-green-600! text-white!" : ques.view === true ? "bg-yellow-300! text-white!" : ""} rounded-4xl! text-xl! p-0! ${activeQuestion && activeQuestion.index === ques.index ? "border-blue-600!" : 'border-gray-300!'}`}
                                 >
                                    {idx + 1}
                                 </Button>
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

                           <Button onClick={() => {
                              setTimeLeft(0)
                              setIsSubmit(true)
                              setSubmitReason("Thank You!")
                           }} className="w-full! bg-blue-500! text-white! font-bold! capitalize! text-xl! ">Submit</Button>
                        </div>

                     </div>
                  </div>
         }


         <div className={`bg-white/40 flex items-center justify-center h-screen w-screen fixed top-0 left-0 transition-transform ease-in-out ${isSubmit ? "scale-100 bg-black/10" : "scale-0"}`}>
            <div className="bg-white p-5 rounded-2xl flex flex-col gap-3" style={{ boxShadow: '0 0px 20px rgba(0,0,0,0.2)' }}>
               <h1 className="text-2xl font-bold text-gray-600 text-center border-b pb-3 border-gray-300">{submitReason}, Submit your test</h1>
               <p className="text-xl font-semibold text-gray-800">Total Answered Question : <b className="text-green-600">{questionList.filter(q => q.answered !== "").length}</b></p>
               <p className="text-xl font-semibold text-gray-800">Total Not Answered Question : <b className="text-red-600">{questionList.filter(q => q.answered === "").length}</b></p>

               <Button className="bg-blue-600! text-white! font-bold! capitalize!" onClick={handleSubmit}>Submit Quiz</Button>
            </div>
         </div>

      </>
   )
}