
import { questions } from "@/components/json/quiz_questions";

export default function CourseQuizTest({course}) {
  const getRandomItem = (array, count) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.slice(0, count);
  };

  // console.log(
  //   getRandomItem(
  //     Array.from({ length: 10000 }, (_, i) => i + 1),
  //     20
  //   )
  // );
  return (
    <div className="w-screen">
      <div className="w-auto m-2 p-2 sm:m-5 sm:p-5 bg-blue-600"></div>
    </div>
  );
}
