"use server"

import CoursesDetailPage from "@/components/coursedetails/coursedetailpage";


export async function generateMetadata({ params }) {
  const { coursename, title } = await params


  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
   const decodedCourseName = decodeURIComponent(coursename);
  const res = await fetch(`${baseUrl}/api/v1/courses`);
  const courses = await res.json();
  const course = courses.find(c => c.courseName === decodedCourseName);

  return {
    title: `${title.replace(title[0], title[0].toUpperCase())} - ${decodedCourseName.replace(decodedCourseName[0], decodedCourseName[0].toUpperCase())}`,
    description: course.overview.description,
    openGraph: {
      title: `${title.replace(title[0], title[0].toUpperCase())} - ${decodedCourseName.replace(decodedCourseName[0], decodedCourseName[0].toUpperCase())}`,
      description: course.overview.description,
      images: [course.avatarImage, ...course.coverImages],

    },
    icons: {
      icon: course.avatarImage,
      shortcut: course.avatarImage
    }
  }

}


export default async function CoursesDetails({ params }) {
  const { coursename } = await params


  return (
    <>
      <CoursesDetailPage courseName={coursename} />
    </>
  );
}
