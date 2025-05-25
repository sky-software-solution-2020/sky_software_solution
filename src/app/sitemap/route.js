import { courses } from "@/components/json/courses";
import { headers } from "next/headers";

export const dynamic = 'force-dynamic';

export async function GET(req) {
    const baseUrl = 'https://www.skysoftwaresolution.in'

    const staticPage = ['', '/courses', '/create-resume', '/events', '/about-us', "/testimonials"]

    const coursePages = ['overview', 'course-content', 'tutorials', 'practice-question'];

    const url = [
        ...staticPage.map(path => ({
            url: `${baseUrl}${path}`,
            lastModified: new Date().toISOString(),
        })),
        ...courses.flatMap(course => {
            return coursePages.map(page => ({
                url: `${baseUrl}/courses/course-details/${page}?coursename=${course.courseName}`,
                lastModified: new Date().toISOString(),
            }))
        })
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${url.map(({ url, lastModified }) => `<url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    </url>`
    ).join("")}</urlset>`


    return Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        }
    })
}
