'use client' 

import axios from "axios";
import { useState } from "react";

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    linkedin: "",
    location: "",
    summary: "",
    objective: "",
    workExperience: [
      { jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: "" },
    ],
    education: [
      { degree: "", major: "", university: "", graduationDate: "", gpa: "", relevantCourses: "" },
    ],
    skills: { technical: "", soft: "", languages: "" },
    certifications: "",
    projects: "",
    volunteerExperience: "",
    awards: "",
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.index !== undefined) {
      const { section, index } = dataset;
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData((prevData) => ({ ...prevData, [section]: updatedSection }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleAddWorkExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, { jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: "" }],
    }));
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { degree: "", major: "", university: "", graduationDate: "", gpa: "", relevantCourses: "" }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/v1/create-resume", {formData}, {
      headers: {
         'Content-Type': 'application/json',
      }
    })

    console.log(response);
    
    alert("Resume submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-20 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Job Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input type="text" name="fullName" placeholder="Full Name" required className="input" value={formData.fullName} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="input" value={formData.phone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" required className="input" value={formData.email} onChange={handleChange} />
            <input type="url" name="linkedin" placeholder="LinkedIn URL (optional)" className="input" value={formData.linkedin} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location (optional)" className="input col-span-2" value={formData.location} onChange={handleChange} />
          </div>
        </section>

        {/* Summary / Objective */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Summary / Objective (Optional)</h2>
          <textarea name="summary" placeholder="Professional Summary" className="textarea mb-2" value={formData.summary} onChange={handleChange} />
          <textarea name="objective" placeholder="Career Objective" className="textarea" value={formData.objective} onChange={handleChange} />
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          {formData.workExperience.map((work, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-4 flex flex-col gap-3">
              <input type="text" placeholder="Job Title" name="jobTitle" data-section="workExperience" data-index={index} className="input" value={work.jobTitle} onChange={handleChange} />
              <input type="text" placeholder="Company Name" name="company" data-section="workExperience" data-index={index} className="input" value={work.company} onChange={handleChange} />
              <input type="text" placeholder="Location" name="location" data-section="workExperience" data-index={index} className="input" value={work.location} onChange={handleChange} />
              <div className="flex gap-4">
                <input type="month" name="startDate" data-section="workExperience" data-index={index} className="input" value={work.startDate} onChange={handleChange} />
                <input type="month" name="endDate" data-section="workExperience" data-index={index} className="input" value={work.endDate} onChange={handleChange} />
              </div>
              <textarea name="responsibilities" placeholder="Responsibilities & Achievements" data-section="workExperience" data-index={index} className="textarea" value={work.responsibilities} onChange={handleChange} />
            </div>
          ))}
          <button type="button" onClick={handleAddWorkExperience} className="btn">Add More Work Experience</button>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-4 space-y-3">
              <input type="text" placeholder="Degree Name" name="degree" data-section="education" data-index={index} className="input" value={edu.degree} onChange={handleChange} />
              <input type="text" placeholder="Major/Minor" name="major" data-section="education" data-index={index} className="input" value={edu.major} onChange={handleChange} />
              <input type="text" placeholder="University" name="university" data-section="education" data-index={index} className="input" value={edu.university} onChange={handleChange} />
              <input type="month" placeholder="Graduation Date" name="graduationDate" data-section="education" data-index={index} className="input" value={edu.graduationDate} onChange={handleChange} />
              <input type="number" step="0.01" placeholder="GPA (Optional)" name="gpa" data-section="education" data-index={index} className="input" value={edu.gpa} onChange={handleChange} />
              <textarea name="relevantCourses" placeholder="Relevant Courses / Honors / Awards" data-section="education" data-index={index} className="textarea" value={edu.relevantCourses} onChange={handleChange} />
            </div>
          ))}
          <button type="button" onClick={handleAddEducation} className="btn">Add More Education</button>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <textarea placeholder="Technical Skills" className="textarea mb-2" value={formData.skills.technical} onChange={(e) => setFormData({ ...formData, skills: { ...formData.skills, technical: e.target.value } })} />
          <textarea placeholder="Soft Skills" className="textarea mb-2" value={formData.skills.soft} onChange={(e) => setFormData({ ...formData, skills: { ...formData.skills, soft: e.target.value } })} />
          <textarea placeholder="Languages" className="textarea mb-2" value={formData.skills.languages} onChange={(e) => setFormData({ ...formData, skills: { ...formData.skills, languages: e.target.value } })} />
        </section>

        {/* Optional Sections */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Optional Sections</h2>
          <textarea name="projects" placeholder="Projects" className="textarea mb-2" value={formData.projects} onChange={handleChange} />
          <textarea name="certifications" placeholder="Certifications" className="textarea mb-2" value={formData.certifications} onChange={handleChange} />
          <textarea name="volunteerExperience" placeholder="Volunteer Experience" className="textarea mb-2" value={formData.volunteerExperience} onChange={handleChange} />
          <textarea name="awards" placeholder="Awards & Recognition" className="textarea mb-2" value={formData.awards} onChange={handleChange} />
        </section>

        <button type="submit" className="btn w-full mt-4">Submit Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
