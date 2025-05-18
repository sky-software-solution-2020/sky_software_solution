export default function CourseContent({ course }) {
  return (
    <>
      {course && (
        <div className="w-screen px-5">
          <div className="uppercase mt-5 text-center w-full text-2xl sm:text-3xl font-bold text-blue-600">
            {course.title}
          </div>
          <div className="mt-10 w-auto flex gap-5 mx-2 sm:mx-15 lg:mx-24 xl:mx-72 flex-col">
            {course["course-content"].content.map((item, idx) => (
              <div className="flex flex-col gap-3" key={idx}>
                <h1 className="bg-blue-600 w-fit px-2 py-1 text-2xl font-bold text-white rounded-xl">
                  {item.title}
                </h1>

                <table>
                  <tbody>
                    {item.points.map((point, i) => (
                      <tr
                        key={i}
                        className="text-[18px] font-semibold text-gray-500"
                      >
                        <td className="pb-2 flex items-center">
                          <pre>
                            <b>{i + 1}.</b>{" "}
                          </pre>{" "}
                          {point}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
