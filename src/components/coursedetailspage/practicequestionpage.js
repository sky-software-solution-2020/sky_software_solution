export default function CoursePracticeQuestion({ course }) {
  return (
    <>
      {course && (
        <div className="w-screen px-5">
          <div className="mt-5 text-center w-full text-xl sm:text-3xl font-bold">
            <span className="bg-blue-600 text-white p-2 rounded-2xl">
              {course["practice-question"].title}
            </span>
          </div>

          <div className="mt-10 w-auto flex gap-5 mx-2 sm:mx-15 lg:mx-24 xl:mx-72 flex-col">
            <table>
              <tbody>
                {course["practice-question"].questions.map((item, i) => (
                  <tr
                    key={i}
                    className="text-[18px] font-semibold text-gray-500"
                  >
                    <td className=" text-justify pb-2 flex items-center">
                      {" "}
                      <pre>
                        <b>{i + 1}.</b>{" "}
                      </pre>{" "}
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
