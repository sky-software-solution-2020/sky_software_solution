import { courses } from "@/components/json/courses";


export async function GET(req, res) {
  return Response.json(courses);
}
