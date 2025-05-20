'use client';

import { useState } from 'react';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    summary: '',
    objective: '',
    workExperience: [
      { jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: '' },
    ],
    education: [
      { degree: '', major: '', school: '', passingYear: '', gpa: '', board: '' },
    ],
    skills: { technical: '', soft: '', languages: '' },
    hobbies: '',
    certifications: '',
    projects: '',
    volunteerExperience: '',
    awards: '',
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.index !== undefined) {
      const section = dataset.section;
      const index = parseInt(dataset.index);
      const updatedSection = [...formData[section]];
      updatedSection[index][name] = value;
      setFormData((prevData) => ({
        ...prevData,
        [section]: updatedSection,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleAddWorkExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        { jobTitle: '', company: '', location: '', startDate: '', endDate: '', responsibilities: '' },
      ],
    }));
  };

  const handleRemoveWorkExperience = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: prevData.workExperience.filter((_, i) => i !== index),
    }));
  };

  const handleAddEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { degree: '', major: '', school: '', passingYear: '', gpa: '', board: '' },
      ],
    }));
  };

  const handleRemoveEducation = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Resume submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-20 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Create Your Job Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full p-2 border rounded"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Summary / Objective */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Summary / Objective</h2>
          <textarea
            name="summary"
            placeholder="Professional Summary"
            required
            className="w-full p-2 border rounded mb-2"
            value={formData.summary}
            onChange={handleChange}
          />
          <textarea
            name="objective"
            placeholder="Career Objective"
            required
            className="w-full p-2 border rounded"
            value={formData.objective}
            onChange={handleChange}
          />
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          {formData.workExperience.map((work, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-4 flex flex-col gap-3">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                data-section="workExperience"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={work.jobTitle}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                data-section="workExperience"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={work.company}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                data-section="workExperience"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={work.location}
                onChange={handleChange}
              />
              <div className="flex gap-4">
                <input
                  type="month"
                  name="startDate"
                  data-section="workExperience"
                  data-index={index}
                  required
                  className="w-full p-2 border rounded"
                  value={work.startDate}
                  onChange={handleChange}
                />
                <input
                  type="month"
                  name="endDate"
                  data-section="workExperience"
                  data-index={index}
                  required
                  className="w-full p-2 border rounded"
                  value={work.endDate}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="responsibilities"
                placeholder="Responsibilities & Achievements"
                data-section="workExperience"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={work.responsibilities}
                onChange={handleChange}
              />
              {
                index > 0 && <div className='w-full flex justify-end'>
                <button
                  type="button"
                  onClick={() => handleRemoveWorkExperience(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Remove
                </button>
              </div>
              }
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddWorkExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add More Work Experience
          </button>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-4 space-y-3">
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.degree}
                onChange={handleChange}
              />
              <input
                type="text"
                name="major"
                placeholder="Major"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.major}
                onChange={handleChange}
              />
              <input
                type="text"
                name="school"
                placeholder="School / College"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.school}
                onChange={handleChange}
              />
              <input
                type="month"
                name="passingYear"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.passingYear}
                onChange={handleChange}
              />
              <input
                type="text"
                name="gpa"
                placeholder="GPA"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.gpa}
                onChange={handleChange}
              />
              <input
                type="text"
                name="board"
                placeholder="Board / University"
                data-section="education"
                data-index={index}
                required
                className="w-full p-2 border rounded"
                value={edu.board}
                onChange={handleChange}
              />
              {
                index > 0 && <div className='w-full flex justify-end'>
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              }

            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEducation}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add More Education
          </button>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <textarea
            placeholder="Technical Skills"
            className="w-full p-2 border rounded mb-2"
            value={formData.skills.technical}
            onChange={(e) =>
              setFormData({ ...formData, skills: { ...formData.skills, technical: e.target.value } })
            }
          />
          <textarea
            placeholder="Soft Skills"
            className="w-full p-2 border rounded mb-2"
            value={formData.skills.soft}
            onChange={(e) =>
              setFormData({ ...formData, skills: { ...formData.skills, soft: e.target.value } })
            }
          />
          <textarea
            placeholder="Languages"
            className="w-full p-2 border rounded mb-2"
            value={formData.skills.languages}
            onChange={(e) =>
              setFormData({ ...formData, skills: { ...formData.skills, languages: e.target.value } })
            }
          />
        </section>

        {/* Hobbies */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
          <textarea
            placeholder="Hobbies"
            className="w-full p-2 border rounded mb-2"
            value={formData.hobbies}
            onChange={(e) =>
              setFormData({ ...formData, hobbies: e.target.value })
            }
          />
        </section>

        {/* Optional Sections */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Optional Sections</h2>
          <textarea
            name="projects"
            placeholder="Projects"
            className="w-full p-2 border rounded mb-2"
            value={formData.projects}
            onChange={handleChange}
          />
          <textarea
            name="certifications"
            placeholder="Certifications"
            className="w-full p-2 border rounded mb-2"
            value={formData.certifications}
            onChange={handleChange}
          />
          <textarea
            name="volunteerExperience"
            placeholder="Volunteer Experience"
            className="w-full p-2 border rounded mb-2"
            value={formData.volunteerExperience}
            onChange={handleChange}
          />
          <textarea
            name="awards"
            placeholder="Awards & Recognition"
            className="w-full p-2 border rounded mb-2"
            value={formData.awards}
            onChange={handleChange}
          />
        </section>

        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded mt-4 cursor-pointer">
          Submit Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
