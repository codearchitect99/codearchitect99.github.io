import React from "react";
import { Profile } from "./ResumeTypes";

interface ContentsProps {
  profile: Profile;
}

const Contents: React.FC<ContentsProps> = ({profile}) => {
  return (
    <div className="w-full h-full flex flex-col">

      <div className="card shadow-xl p-4 w-full max-w-4xl">
        {/* 기본 정보 섹션 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* 이름 */}
            <div>
              <img src="profile.jpg" alt="profile" className="rounded-full w-32 h-32 border-4 border-gray-300 shadow-lg" />
              <h1 className="text-2xl font-bold">{profile.basic_info.name}</h1>
            </div>
          </div>
          {/* 요약 */}
          <div>
            <p className="text-gray-500">{profile.summary}</p>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Tech Stack</h2>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(profile.tech_stack).map(([category, items]) => (
              <div key={category} className="mb-2">
                <h3 className="font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {items.map((item: string, idx: number) => (
                    <span key={idx} className="badge badge-primary badge-outline">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Education</h2>
          <p className="font-medium">{profile.education.university}</p>
          <p className="text-gray-500">{profile.education.major} {profile.education.double_major ? `/ ${profile.education.double_major}` : ""}</p>
          <p>GPA: {profile.education.gpa}</p>
          <p className="text-gray-500">{profile.education.period}</p>
        </section>

        {/* 경력 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Work Experience</h2>
          {profile.work_experience.map((exp, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-medium">{exp.company}</h3>
              <p className="text-gray-500">{exp.role} ({exp.period})</p>
              <p className="font-semibold">{exp.project}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 프로젝트 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Projects</h2>
          {profile.projects.map((project, index) => (
            <div key={index} className="collapse collapse-arrow p-3 rounded-lg mt-2 bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">{project.name}</div>
              <div className="collapse-content">
                <p className="text-gray-500">{project.period}</p>
                <p>{project.description}</p>
                <h4 className="font-semibold mt-2">Features:</h4>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* 활동 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Activities</h2>
          {profile.activities.map((activity, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-medium">{activity.organization}</h3>
              <p className="text-gray-500">{activity.activity} ({activity.period})</p>
              <ul className="list-disc list-inside">
                {activity.tasks.map((task, idx) => <li key={idx}>{task}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* 자격증 */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Certifications</h2>
          <ul className="list-disc list-inside">
            {profile.certifications.map((cert, idx) => <li key={idx}>{cert}</li>)}
          </ul>
        </section>

        {/* 추가 정보 */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-2">Additional Info</h2>
          <p>Blog: <a href={profile.additional_info.blog} className="text-blue-500">{profile.additional_info.blog}</a></p>
          <p>Languages: Korean ({profile.additional_info.languages.korean}), English ({profile.additional_info.languages.english}), Japanese ({profile.additional_info.languages.japanese})</p>
        </section>
      </div>
    </div>
  );
};

export default Contents;
