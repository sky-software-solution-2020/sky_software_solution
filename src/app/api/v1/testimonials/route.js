import { testimonials } from "@/components/json/testimonials";

export async function GET(req, res) {
  return Response.json(testimonials);
}
