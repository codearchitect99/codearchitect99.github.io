import React, { useState } from "react";
import { Profile, UserProfile } from "./ResumeTypes";
import resumeData from "./resume.json";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [lang, setLang] = useState<"ko" | "en">("en");
  const data: UserProfile = resumeData;
  const profile: Profile = data[lang];

  return (
    <div className={`min-h-screen flex flex-col items-center py-10 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-700 text-white rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={() => setLang(lang === "ko" ? "en" : "ko")} className="px-4 py-2 bg-blue-600 text-white rounded">
          {lang === "ko" ? "English" : "한국어"}
        </button>
      </div>

      <div className={`w-full max-w-3xl shadow-lg rounded-2xl p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">{profile.basic_info.name}</h1>
          <p className="text-gray-600">{profile.summary}</p>
        </header>

        {/* Contact Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Contact</h2>
          <p>Email: {profile.basic_info.contact.email}</p>
          <p>Phone: {profile.basic_info.contact.phone}</p>
          <p>GitHub: <a href={profile.basic_info.github} className="text-blue-500">{profile.basic_info.github}</a></p>
          <p>Portfolio: <a href={profile.basic_info.portfolio} className="text-blue-500">{profile.basic_info.portfolio}</a></p>
          <p>LinkedIn: <a href={profile.basic_info.linkedin} className="text-blue-500">{profile.basic_info.linkedin}</a></p>
        </section>

        {/* Tech Stack */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h3 className="font-semibold">Languages</h3>
              <ul>{profile.tech_stack.languages.map((lang, idx) => <li key={idx}>{lang}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold">Backend</h3>
              <ul>{profile.tech_stack.backend.map((tech, idx) => <li key={idx}>{tech}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold">Database</h3>
              <ul>{profile.tech_stack.database.map((db, idx) => <li key={idx}>{db}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold">Infrastructure</h3>
              <ul>{profile.tech_stack.infrastructure.map((infra, idx) => <li key={idx}>{infra}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold">Tools</h3>
              <ul>{profile.tech_stack.tools.map((tool, idx) => <li key={idx}>{tool}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
          {profile.work_experience.map((exp, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-medium">{exp.company}</h3>
              <p className="text-gray-500 text-sm">{exp.role} ({exp.period})</p>
              <p className="font-semibold">{exp.project}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Projects</h2>
          {profile.projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="text-gray-500 text-sm">{project.period}</p>
              <p>{project.description}</p>
              <h4 className="font-semibold mt-2">Features:</h4>
              <ul className="list-disc list-inside">
                {project.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Education</h2>
          <p className="font-medium">{profile.education.university} - {profile.education.major} {profile.education.double_major && `, ${profile.education.double_major}`}</p>
          <p className="text-gray-500 text-sm">{profile.education.period} | GPA: {profile.education.gpa}</p>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Certifications</h2>
          <ul className="list-disc list-inside">
            {profile.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
          </ul>
        </section>

        {/* Additional Info */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Additional Info</h2>
          <p>Blog: <a href={profile.additional_info.blog} className="text-blue-500">{profile.additional_info.blog}</a></p>
          <p>Languages:</p>
          <ul>
            <li>Korean: {profile.additional_info.languages.korean}</li>
            <li>English: {profile.additional_info.languages.english}</li>
            <li>Japanese: {profile.additional_info.languages.japanese}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
