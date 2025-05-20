import path from 'path'
import puppeteer from 'puppeteer';
import fs from 'fs'

export async function POST(req, res) {

  const { formData } = await req.json()

//   const folderPath = path.resolve(process.cwd(), "public", "resume")

//   const filename = formData.fullName.split(" ").join("-").toLowerCase()

//   const filePath = path.join(
//     folderPath, `${filename}.pdf`
//   )

//   const browser = await puppeteer.launch({
//     headless: "new",
//     args: ["--no-sandbox", "--disable-setuid-sandbox"]
//   })

//   const resumeHtml = generateResumeHTML(formData)

//   const page = await browser.newPage();
//   await page.setContent(resumeHtml, { waitUntil: "networkidle0" })

//   const pdfBuffer = await page.pdf({ format: "A4" })

//   fs.writeFileSync(filePath, pdfBuffer)

//   const deletionTimeout = 5 * 60 * 1000

//   const time = setTimeout(() => {
//     fs.unlink(filePath, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("File deleted successfully.");
//         clearTimeout(time)
//       }
//     })
//   }, deletionTimeout)

  return Response.json({
    message: "Resume generated Successfully.",
    data: formData
  })
}


// function generateResumeHTML(formData) {
//   return `


// `;
// }




