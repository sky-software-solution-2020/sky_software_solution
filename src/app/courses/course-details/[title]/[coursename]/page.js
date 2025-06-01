import CoursesDetailPage from "@/components/coursedetails/coursedetailpage";
import axios from "axios";


export async function generateMetadata({ params }) {
  const { coursename, title } = await params


  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const courses = await axios.get(
    `${baseUrl}/api/v1/courses`
  );

  const course = courses.data.find(c => c.courseName === coursename)

  return {
    title: `${title.replace(title[0], title[0].toUpperCase())} - ${coursename.replace(coursename[0], coursename[0].toUpperCase())}`,
    description: course.overview.description,
    openGraph: {
      title: `${title.replace(title[0], title[0].toUpperCase())} - ${coursename.replace(coursename[0], coursename[0].toUpperCase())}`,
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
