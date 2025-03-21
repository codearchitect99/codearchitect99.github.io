import {useState} from "react";
import {Activity, BasicInfo, Certification, Education, Project, Skills, WorkExperience} from "./resumeTypes.ts";
import {FaBlogger, FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin} from "react-icons/fa";
import profile from "/src/assets/profile.jpg";
import {resumeData} from "./resumeData.ts";
import React from "react";

export const Resume = () => {
	const [basicInfo] = useState<BasicInfo>(resumeData.basicInfo);
	const [skills] = useState<Skills>(resumeData.skills);
	const [projects] = useState<Project[]>(resumeData.projects);
	const [workExperience] = useState<WorkExperience[]>(resumeData.workExperience);
	const [education] = useState<Education[]>(resumeData.education);
	const [certifications] = useState<Certification[]>(resumeData.certifications);
	const [activities] = useState<Activity[]>(resumeData.activities);
	
	return (
		<div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex justify-center py-4">
			<div className="w-full max-w-4xl shadow-lg rounded-lg p-8 flex flex-col gap-4 bg-white dark:bg-gray-800">
				{/* Basic Info */}
				<section id="basic_info" className="border-b border-gray-400 pb-2 flex gap-6">
					<div className="w-4/5">
						<h1 className="text-black dark:text-white text-4xl font-bold">
							{basicInfo.name}
						</h1>
						<p className="text-gray-600 dark:text-gray-300 text-xl py-1">
							{basicInfo.job}
						</p>
						<div className="mt-2 space-x-4 text-base flex items-start flex-wrap">
							{basicInfo.github && (
								<a
									href={basicInfo.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline flex items-center gap-1"
								>
									<FaGithub/> GitHub
								</a>
							)}
							{basicInfo.portfolio && (
								<a
									href={basicInfo.portfolio}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline flex items-center gap-1"
								>
									<FaExternalLinkAlt/> 포트폴리오
								</a>
							)}
							{basicInfo.linkedin && (
								<a
									href={basicInfo.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline flex items-center gap-1"
								>
									<FaLinkedin/> LinkedIn
								</a>
							)}
							{basicInfo.blog && (
								<a
									href={basicInfo.blog}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:underline flex items-center gap-1"
								>
									<FaBlogger/> 기술 블로그
								</a>
							)}
						</div>
						{basicInfo.email && (
							<p className="text-gray-500 dark:text-gray-200 mt-1 text-base flex items-center gap-1">
								<FaEnvelope/> {basicInfo.email}
							</p>
						)}
						{basicInfo.about && (
							<p className="text-contents-description leading-relaxed mt-2">
								{basicInfo.about.split('\n').map((line, idx) => (
									<React.Fragment key={idx}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
						)}
					</div>
					{profile && (
						<div className="w-1/5 flex justify-center items-center">
							<img
								src={profile}
								alt="Profile"
								className="w-52 h-52 rounded-full shadow-2xl flex-shrink-0"
							/>
						</div>
					)}
				</section>
				
				{/* Skills */}
				<section id="skills" className="border-b border-gray-400 pb-2 flex gap-4">
					<div className="w-1/5 flex flex-col items-end">
						<h2 className="text-lg font-semibold">기술 스택</h2>
						<p className="text-gray-500 dark:text-gray-200 text-sm">Skills</p>
					</div>
					<div className="text-gray-700 dark:text-gray-300 text-sm w-4/5">
						{skills.backend.length > 0 && (
							<div className="flex space-x-1">
								<p className={"text-contents-description font-semibold"}>Backend:</p>
								<div className="flex space-x-1">
									{skills.backend.map((value: string, index: number) => (
										<p key={`backend-${index}`} className={"text-contents-description badge-skill"}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.front.length > 0 && (
							<div className="flex space-x-1">
								<p className={"text-contents-description font-semibold"}>Frontend:</p>
								<div className="flex space-x-1">
									{skills.front.map((value: string, index: number) => (
										<p key={`front-${index}`} className={"text-contents-description badge-skill"}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.infra.length > 0 && (
							<div className="flex space-x-1">
								<p className={"text-contents-description font-semibold"}>Infra:</p>
								<div className="flex space-x-1">
									{skills.infra.map((value: string, index: number) => (
										<p key={`infra-${index}`} className={"text-contents-description badge-skill"}>{value}</p>
									))}
								</div>
							</div>
						)}
					</div>
				</section>
				
				{/* Work experiences */}
				{workExperience.length > 0 && (
					<section id="experience" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/5 flex flex-col items-end">
							<h2 className="text-lg font-semibold">인턴 & 실무 경험</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Work Experience</p>
						</div>
						<div className="w-4/5 space-y-1">
							{workExperience.map((work: WorkExperience, index: number) => (
								<div key={`work-${index}`} className="border-b border-gray-300 border-dashed pb-2">
									<p className="text-contents-title">{work.company} - {work.position}</p>
									<p className="text-contents-caption">{work.date}</p>
									<ul className="list-disc pl-5 text-contents-description whitespace-pre-line">
										{work.description.map((value: string, idx: number) => (
											<li key={`work-desc-${index}-${idx}`}>{value}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				)}
				
				
				{/* Projects */}
				{projects.length > 0 && (
					<section id="projects" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/5 flex flex-col items-end">
							<h2 className="text-lg font-semibold">프로젝트 경험</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Projects</p>
						</div>
						<div className="w-4/5 space-y-1">
							{projects.map((project: Project, index: number) => (
								<div key={`project-${index}`} className="border-b border-gray-300 border-dashed pb-2">
									<p className="text-contents-title">{project.title} | {project.project_type} - {project.sub_title}</p>
									<p className="text-contents-caption">{project.date}</p>
									
									<ul className="list-disc pl-5 text-contents-description whitespace-pre-line">
										{project.description.map((value: string, idx: number) => (
											<li key={`project-desc-${index}-${idx}`}>{value}</li>
										))}
									</ul>
									
									{project.contribution.length > 0 && (
										<>
											<p className="text-contents-description font-medium">주요 역할</p>
											<ul className="list-disc pl-5 text-contents-description whitespace-pre-line">
												{project.contribution.map((value: string, idx: number) => (
													<li key={`project-contrib-${index}-${idx}`}>{value}</li>
												))}
											</ul>
										</>
									)}
								</div>
							))}
						</div>
					</section>
				)}
				
				{/* Activities */}
				{activities.length > 0 && (
					<section id="activity" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/5 flex flex-col items-end">
							<h2 className="text-lg font-semibold">활동</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Activity</p>
						</div>
						<div className="w-4/5 space-y-1">
							{activities.map((activity: Activity, index: number) => (
								<div key={`activity-${index}`} className="border-b border-gray-300 border-dashed pb-2">
									<p className="text-contents-title">{activity.title}</p>
									<p className="text-contents-caption">{activity.date}</p>
									
									<ul className="list-disc pl-5 text-contents-description whitespace-pre-line">
										{activity.description.map((value: string, idx: number) => (
											<li key={`activity-desc-${index}-${idx}`}>{value}</li>
										))}
									</ul>
									
									{activity.contribution.length > 0 && (
										<>
											<p className="text-contents-description font-medium">주요 역할</p>
											<ul className="list-disc pl-5 text-contents-description whitespace-pre-line">
												{activity.contribution.map((value: string, idx: number) => (
													<li key={`activity-contrib-${index}-${idx}`}>{value}</li>
												))}
											</ul>
										</>
									)}
								</div>
							))}
						</div>
					</section>
				)}
				
				{/* Education */}
				{education.length > 0 && (
					<section id="education" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/5 flex flex-col items-end">
							<h2 className="text-lg font-semibold">교육 & 학력</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Education</p>
						</div>
						<div className="w-4/5 space-y-1">
							{education.map((edu: Education, index: number) => (
								<div key={`education-${index}`} className="border-b border-gray-300 border-dashed pb-2">
									<p className="text-contents-title">{edu.institution} - {edu.degree}</p>
									<p className="text-contents-caption">{edu.date}</p>
								</div>
							))}
						
						</div>
					</section>
				)}
				
				{/* Certifications */}
				{certifications.length > 0 && (
					<section id="certifications" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/5 flex flex-col items-end">
							<h2 className="text-lg font-semibold">자격증</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Certifications</p>
						</div>
						<div className="w-4/5 space-y-1">
							{certifications.map((cert: Certification, index: number) => (
								<div key={`certification-${index}`} className="border-b border-gray-300 border-dashed pb-2">
									<p className="text-contents-title">{cert.name}</p>
									<p className="text-contents-caption">{cert.date}</p>
								</div>
							))}
						</div>
					</section>
				)}
			
			
			</div>
		</div>
	);
};