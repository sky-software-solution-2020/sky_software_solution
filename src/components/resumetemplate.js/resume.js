// components/templates/ResumeTemplate.js
export default function ResumeTemplate({ data }) {
  return (
    <html lang="en">
      <head>
        <title>{data.fullName}'s Resume</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="p-10 text-gray-800 font-sans">
        <div className="max-w-3xl mx-auto bg-white border border-gray-300 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-blue-700">{data.fullName}</h1>
          <p className="text-sm text-gray-600 mb-2">{data.email} | {data.phone} | {data.linkedin}</p>
          <hr className="my-4" />

          {data.summary && (
            <>
              <h2 className="text-xl font-semibold">Professional Summary</h2>
              <p className="mb-4">{data.summary}</p>
            </>
          )}

          <h2 className="text-xl font-semibold">Work Experience</h2>
          {data.workExperience?.map((job, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{job.jobTitle} - {job.company}</p>
              <p className="text-sm italic text-gray-600">{job.startDate} – {job.endDate}</p>
              <p>{job.responsibilities}</p>
            </div>
          ))}

          <h2 className="text-xl font-semibold">Education</h2>
          {data.education?.map((edu, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{edu.degree}, {edu.major}</p>
              <p className="text-sm italic text-gray-600">{edu.university}, {edu.graduationDate}</p>
              <p>{edu.relevantCourses}</p>
            </div>
          ))}

          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc ml-5">
            {data.skills?.technical?.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)}
          </ul>

          {data.projects && (
            <>
              <h2 className="text-xl font-semibold mt-4">Projects</h2>
              <p>{data.projects}</p>
            </>
          )}
        </div>
      </body>
    </html>
  );
}
