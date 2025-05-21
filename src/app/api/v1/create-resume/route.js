import path from 'path'
import puppeteer from 'puppeteer';
import fs from 'fs'
import { sequelize } from '@/lib/db';
import UserResume from '@/models/resume';

export async function POST(req, res) {

  const { formData } = await req.json()

  

  try {
    await sequelize.authenticate()
    await UserResume.sync()

    await UserResume.create({ ...formData })

    const folderPath = path.resolve(process.cwd(), "public", "resume")

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const filename = formData.fullName.split(" ").join("-").toLowerCase()

  const filePath = path.join(
    folderPath, `${filename}.pdf`
  )

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  })

  const resumeHtml = generateResumeHTML(formData)

  const page = await browser.newPage();
  await page.setContent(resumeHtml, { waitUntil: "networkidle0" })

  const pdfBuffer = await page.pdf({ format: "A4" })

  fs.writeFileSync(filePath, pdfBuffer)

  const deletionTimeout = 5 * 60 * 1000

  const time = setTimeout(() => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File deleted successfully.");
        clearTimeout(time)
      }
    })
  }, deletionTimeout)

  return Response.json({
    message: "Resume generated Successfully.",
  })
  } catch (err) {
    console.log(err);
    
    return Response.json({
    message: err.message,
  })
  }

  
}


function generateResumeHTML(formData) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${formData.fullName} - Resume</title>
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        color: rgb(48, 48, 48);
      }
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
      }
    </style>
  </head>
  <body
    style="
      font-family: 'Roboto', sans-serif;
    "
  >
    <div
      style="
        width: auto;
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      "
    >
      <div
        style="
          background-color: rgb(218, 217, 217);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          border-radius: 20px;
        "
      >
        <div
          style="
            border-radius: 10%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px solid rgb(0, 100, 255);
          "
        >
          <img
            src=${formData.profileImage}
            width="150"
            style="object-fit: contain"
          />
        </div>

        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: rgb(48, 48, 48);
          "
        >
          <h1
            style="
              font-weight: bold;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              color: rgb(71, 71, 71);
              text-transform: uppercase;
            "
          >
            ${formData.fullName}
          </h1>
          <h3
            style="
              color: rgb(0, 100, 255);
              margin: 0;
              text-transform: uppercase;
            "
          >
            Contact Information
          </h3>
          <div style="display: flex; flex-direction: column; gap: 4px">
            <p style="margin: 0; padding: 0; font-weight: bold">Phone:</p>
            <p style="margin: 0; padding: 0">${formData.phone}</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px">
            <p style="margin: 0; padding: 0; font-weight: bold">Email:</p>
            <p style="margin: 0; padding: 0">${formData.email}</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px">
            <p style="margin: 0; padding: 0; font-weight: bold">Address:</p>
            <p style="margin: 0; padding: 0; text-align: justify">
             ${formData.address}
            </p>
          </div>
        </div>
      </div>
      <div
        style="
          grid-column: span 2;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        "
      >
        <h3
          style="color: rgb(0, 100, 255); margin: 0; text-transform: uppercase"
        >
          Professional Summary
        </h3>

        <p
          style="
            margin: 0;
            padding: 0;
            color: rgb(48, 48, 48);
            text-align: justify;
          "
        >
          ${formData.summary}
        </p>

        <h3
          style="
            color: rgb(0, 100, 255);
            margin: 0;
            margin-top: 10px;
            text-transform: uppercase;
             border-top: 2px solid rgb(91, 157, 255);
            padding-top: 20px;
          "
        >
          Career Objective
        </h3>

        <p
          style="
            margin: 0;
            padding: 0;
            color: rgb(48, 48, 48);
            text-align: justify;
          "
        >
          ${formData.objective}
        </p>

        ${(formData.skills.technical || formData.skills.soft || formData.skills.languages) ? `<h3
          style="
            color: rgb(0, 100, 255);
            margin: 0;
            margin-top: 10px;
            text-transform: uppercase;
            border-top: 2px solid rgb(91, 157, 255);
            padding-top: 20px;
          "
        >
          Skills
        </h3>
       ${formData.skills.technical ? ` <div style="display: flex; gap: 4px; color: rgb(48, 48, 48)">
          <p
            style="margin: 0; padding: 0; font-weight: bold; text-wrap: nowrap"
          >
            Technical Skills :
          </p>
          <p style="margin: 0; padding: 0; text-align: justify">
            ${formData.skills.technical}
          </p>
        </div>` : ""
      }
        ${formData.skills.soft ?
        `<div style="display: flex; gap: 4px; color: rgb(48, 48, 48)">
          <p
            style="margin: 0; padding: 0; font-weight: bold; text-wrap: nowrap"
          >
            Soft Skills :
          </p>
          <p style="margin: 0; padding: 0; text-align: justify">
             ${formData.skills.soft}
          </p>
        </div>` : ""
      }
      ${formData.skills.languages ? `<div
          style="
            display: flex;
            gap: 4px;
            color: rgb(48, 48, 48);
          "
        >
          <p
            style="margin: 0; padding: 0; font-weight: bold; text-wrap: nowrap"
          >
            Language :
          </p>
          <p style="margin: 0; padding: 0; text-align: justify">
            ${formData.skills.languages}
          </p>
        </div>` : ""
      }
        ` : ""}

        ${formData.hobbies ? `<h3
          style="
            color: rgb(0, 100, 255);
            margin: 0;
            margin-top: 10px;
            text-transform: uppercase;
            border-top: 2px solid rgb(91, 157, 255);
            padding-top: 20px;
          "
        >
          Hobbies
        </h3>

        <p
          style="
            margin: 0;
            padding: 0;
            color: rgb(48, 48, 48);
            text-align: justify;
          "
        >
          ${formData.hobbies}
        </p>` : ""
    }
      </div>
    </div>

    <div style="width: auto; padding-left: 20px; padding-right: 20px">
      <h3
        style="
          color: rgb(0, 100, 255);
          margin-top: 10px;
          text-transform: uppercase;
        "
      >
        Education
      </h3>

      <div
        style="
          border: 2px solid rgb(91, 157, 255);
          border-radius: 20px;
          overflow: hidden;
        "
      >
        <table>
          <thead>
            <tr>
              <th>Degree Name</th>
              <th>Major Subject</th>
              <th style="text-align: left">School / Collage Name</th>
              <th>Passing Year</th>
              <th>GPA</th>
              <th style="text-align: left">Board / University Name</th>
            </tr>
          </thead>
          <tbody>
          ${formData.education.map((deg, idx) => `<tr>
              <td style="text-align: center">${deg.degree}</td>
              <td style="text-align: center">${deg.major}</td>
              <td>${deg.school}</td>
              <td style="text-align: center">${deg.passingYear}</td>
              <td style="text-align: center">${deg.gpa}</td>
              <td>${deg.board}</td>
            </tr>`).join("")}
            
          </tbody>
        </table>
      </div>
    </div>

    <div style="width: auto; padding-left: 20px; padding-right: 20px">
      <h3 style="color: rgb(0, 100, 255); text-transform: uppercase">
        Work Experience
      </h3>

      <div
        style="
          border: 2px solid rgb(91, 157, 255);
          border-radius: 20px;
          overflow: hidden;
        "
      >
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th style="text-align: left">Company Name</th>
              <th style="text-align: left">Location</th>
              <th>Joining Year</th>
              <th>Relieving Year</th>
              <th>Responsibilities & Achievements</th>
            </tr>
          </thead>
          <body>
          ${formData.workExperience.map((work, idx) => `<tr>
              <td style="text-align: center">${work.jobTitle}</td>
              <td>${work.company}</td>
              <td>${work.location}</td>
              <td style="text-align: center">${work.startDate}</td>
              <td style="text-align: center">${work.endDate}</td>
              <td>${work.responsibilities}</td>
            </tr>`).join("")}
          </body>
        </table>
      </div>
    </div>



    ${(formData.certifications || formData.projects || formData.volunteerExperience || formData.awards) ? `<div style="width: auto; padding-left: 20px; padding-right: 20px">
      <h3 style="color: rgb(0, 100, 255); text-transform: uppercase">
        Other Informations
      </h3>

      <div style="display: flex; flex-direction: column; gap: 10px">
        ${formData.projects ? `<div style="display: flex; gap: 5px">
          <p style="font-weight: bold; margin: 0">Projects :</p>
          <p style="margin: 0">
            ${formData.projects}
          </p>
        </div>` : ""
      }
        ${formData.certifications ? `<div style="display: flex; gap: 5px">
          <p style="font-weight: bold; margin: 0">Certifications :</p>
          <p style="margin: 0">
            ${formData.certifications}
          </p>
        </div>` : ""
      }
        ${formData.volunteerExperience ? `<div style="display: flex; gap: 5px">
          <p style="font-weight: bold; margin: 0">Volunteer Experience :</p>
          <p style="margin: 0">
            ${formData.volunteerExperience}
          </p>
        </div>` : ""
      }
        ${formData.awards ? `<div style="display: flex; gap: 5px">
          <p style="font-weight: bold; margin: 0">Awards & Recognition :</p>
          <p style="margin: 0">
            ${formData.awards}
          </p>
        </div>` : ""
      }
      </div>
    </div>` : ""
    }
  </body>
</html>


`;
}




