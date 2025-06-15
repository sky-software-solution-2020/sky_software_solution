'use client'


import { questions } from "@/components/json/quiz_questions";
import { courses } from "@/components/json/courses";
import { Button } from "@mui/material";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


export default function CourseQuizTest() {

  function filterCourseName(array) {
    let courseName = [];

    for (let question of array) {
      if (!courseName.includes(question.language)) {
        courseName.push(question.language);
      }
    }
    return courseName;
  }


  const courseName = filterCourseName(questions).map((name) => {
    const course = courses.find((course) => course.courseName.toLowerCase().includes(name.toLowerCase()))

    return {
      language: name,
      image: course.avatarImage,
      title: course.title
    }
  })


  return (
    <div className="w-screen">
      <div className="w-full flex items-center justify-center xl:mt-25 mt-20">
        <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-blue-600 italic">
          Quiz Test
        </h1>
      </div>
      <div className="w-full lg:p-10 p-5 flex flex-col items-center gap-5">
        {
          courseName.map((course, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row justify-between gap-5 w-full border-2 border-gray-300 p-3 rounded-xl">
              <div className="flex gap-5 w-full items-center">
                <img src={course.image} className="w-20 rounded-xl" />
                <div>
                  <p className="text-xl font-bold text-gray-600">{course.language}</p>
                  <p className="text-sm font-bold text-gray-600">{course.title}</p>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold text-gray-600">Question</p>
                <p className="text-xl font-bold text-gray-600">Total: 30</p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-600">Duration</p>
                <p className="text-xl font-bold text-gray-600">30 Min</p>
              </div>


              <Sheet>
                <SheetTrigger className="bg-blue-600 text-nowrap px-5 py-2 h-fit rounded-xl text-white font-bold cursor-pointer">
                  Start Quiz
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <div className="text-xl text-gray-600 flex flex-col gap-5 h-[95vh] overflow-auto pb-5 text-justify">
                      <h1 className="text-3xl font-bold text-blue-600">Quiz Test Instructions</h1>
                      <p>1. The <b>clock</b> has been set on the server and countdown timer at top right corner of your screen will display the remaining time for you to complete the exam. When the clock runs out the exams ends by default- you are not required to end or submit your exam</p>
                      <p>2. The questions palette at the right of screen shows one of the following status of each of the questions numbered </p>
                      <ul className="flex flex-col gap-5 pl-6 text-[18px]">
                        <li className="flex items-center gap-3">
                          <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center font-bold">15</span>
                          <p>You have <b>not visited </b>the question yet</p>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center bg-yellow-300 text-white font-bold">15</span>
                          <p>You have <b> not answered </b>the question</p>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="border border-gray-700 p-2 rounded-full h-8 w-8 text-sm flex items-center justify-center bg-green-500 text-white font-bold">15</span>
                          <p >You have <b>answered </b>the question</p>
                        </li>
                      </ul>
                      <p>3. To select a question to answer, you can do one of the following:</p>
                      <ul className="flex flex-col gap-5 pl-6 text-[18px]">
                        <li><p>Click on the <b>question</b> number on the question palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question</p></li>
                        <li><p>Click on <b>Save</b> and <b>Next</b> to save answer to current question to go to the next question in sequence</p></li>
                        <li><p>Click Next to save answer to current question</p></li>
                      </ul>
                      <p>4. For multiple choice type question</p>
                      <ul className="flex flex-col gap-5 pl-6 text-[18px]">
                        <li><p><b>a. To select your answer</b>, click on one of the <b >option</b> buttons</p></li>
                        <li><p><b>b. To change your answer</b>, click the another desired <b >option </b>button</p></li>
                        <li><p><b>c. To save your answer</b>, you MUST click on <b >save</b></p></li>
                        <li><p><b>d. To deselect a chosen answer</b>, click on the <b >Clear Response </b>button</p></li>
                      </ul>
                      <p>5. <b>To change an answer</b> to a question, first select the question and then click on the new answer option followed by a click on the save button</p>
                      <p>6. If quiz is <b>paused</b>, quiz can be continued from where left off within scheduled time</p>
                      <p>7. Sections in this question paper are displayed on the top bar of the screen. Questions  in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted</p>
                      <p>8. After clicking the  <b>save  button</b> on the last question for a section,you will automatically be taken to the first question of the next section</p>
                      <p>9. You can shuffle between sections and questions anytime during the examination as per your convenience</p>
                      <Button onClick={() => window.open(`/quiz-test/questions?status=true&id=${Math.floor(Math.random() * 90000000) + 10000000}&value=${Buffer.from(course.language).toString('hex')}`, 'popup', 'width=900,height=700,toolbar=no,menubar=no,status=no,location=no,resizable=yes')} className="bg-blue-600! font-bold! text-white! capitalize! text-xl!">Start Quiz</Button>
                    </div>

                  </SheetHeader>
                </SheetContent>
              </Sheet >


            </div >
          ))
        }
      </div >
    </div >
  );
}
