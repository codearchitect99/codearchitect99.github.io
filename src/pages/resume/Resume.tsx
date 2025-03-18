import {useState} from "react";
import {Activity, BasicInfo, Certification, Education, Project, Skills, WorkExperience} from "./resumeTypes.ts";
import resume from "./resume.json";
import {FaBlogger, FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin} from "react-icons/fa";
import profile from "/src/assets/profile.jpg";

export const Resume = () => {
	const [basicInfo] = useState<BasicInfo>(resume.basicInfo);
	const [skills] = useState<Skills>(resume.skills);
	const [projects] = useState<Project[]>(resume.projects);
	const [workExperience] = useState<WorkExperience[]>(resume.workExperience);
	const [education] = useState<Education[]>(resume.education);
	const [certifications] = useState<Certification[]>(resume.certifications);
	const [activities] = useState<Activity[]>(resume.activities);
	
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center py-4">
			<div className="w-full max-w-4xl shadow-lg rounded-lg p-8 flex flex-col gap-4 bg-gray-100 dark:bg-gray-800">
				{/* 기본 정보 */}
				<section id="basic_info" className="border-b border-gray-400 pb-2 flex gap-4">
					<div className="w-3/4">
						<h1 className="text-black dark:text-white text-3xl font-bold">{basicInfo.name}</h1>
						<p className="text-gray-600 dark:text-gray-300  text-base">{basicInfo.job}</p>
						<div className="mt-2 space-x-4 text-sm flex items-start flex-wrap">
							<a href={basicInfo.github} target="_blank" rel="noopener noreferrer"
							   className="text-blue-600 hover:underline flex items-center gap-1">
								<FaGithub/> GitHub
							</a>
							<a href={basicInfo.portfolio} target="_blank" rel="noopener noreferrer"
							   className="text-blue-600 hover:underline flex items-center gap-1">
								<FaExternalLinkAlt/> 포트폴리오
							</a>
							<a href={basicInfo.linkedin} target="_blank" rel="noopener noreferrer"
							   className="text-blue-600 hover:underline flex items-center gap-1">
								<FaLinkedin/> LinkedIn
							</a>
							<a href={basicInfo.blog} target="_blank" rel="noopener noreferrer"
							   className="text-blue-600 hover:underline flex items-center gap-1">
								<FaBlogger/> 기술 블로그
							</a>
						</div>
						<p className="text-gray-500 dark:text-gray-200  mt-1 text-sm flex items-center gap-1">
							<FaEnvelope/> {basicInfo.email}
						</p>
						<p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-2">
							{basicInfo.about}
						</p>
					</div>
					<div className="w-1/4 flex justify-center items-center">
						<img
							src={profile}
							alt="Profile"
							className="w-32 h-36 rounded-full shadow-md flex-shrink-0"
						/>
					</div>
				</section>
				
				<section id="skills" className="border-b border-gray-400 pb-2 flex gap-4">
					<div className="w-1/4 flex flex-col items-end">
						<h2 className="text-lg font-semibold">기술 스택</h2>
						<p className="text-gray-500 dark:text-gray-200 text-sm">Skills</p>
					</div>
					<div className="text-gray-700 dark:text-gray-300 text-sm w-3/4">
						{skills.languages.length > 0 && (
							<div className="flex space-x-1">
								<p>Language:</p>
								<div className="flex space-x-1">
									{skills.languages.map((value: string, index: number) => (
										<p key={`language-${index}`}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.backendTechnologies.length > 0 && (
							<div className="flex space-x-1">
								<p>Backend:</p>
								<div className="flex space-x-1">
									{skills.backendTechnologies.map((value: string, index: number) => (
										<p key={`backend-${index}`}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.frontendTechnologies.length > 0 && (
							<div className="flex space-x-1">
								<p>Frontend:</p>
								<div className="flex space-x-1">
									{skills.frontendTechnologies.map((value: string, index: number) => (
										<p key={`front-${index}`}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.databases.length > 0 && (
							<div className="flex space-x-1">
								<p>Database:</p>
								<div className="flex space-x-1">
									{skills.databases.map((value: string, index: number) => (
										<p key={`database-${index}`}>{value}</p>
									))}
								</div>
							</div>
						)}
						{skills.infrastructure.length > 0 && (
							<div className="flex space-x-1">
								<p>Infra:</p>
								<div className="flex space-x-1">
									{skills.infrastructure.map((value: string, index: number) => (
										<p key={`infra-${index}`}>{value}</p>
									))}
								</div>
							</div>
						)}
					</div>
				</section>
				
				{projects.length > 0 && (
					<section id="projects" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/4 flex flex-col items-end">
							<h2 className="text-lg font-semibold">프로젝트 경험</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Projects</p>
						</div>
						<div className="w-3/4 space-y-1">
							{projects.map((project: Project, index: number) => (
								<div key={`project-${index}`} className="border-b border-gray-300 border-dashed">
									<p className="text-base font-medium">{project.title}</p>
									<p className="text-gray-600 dark:text-gray-300 text-xs">{project.date}</p>
									<p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">
										{project.description}
									</p>
								</div>
							))}
						</div>
					</section>
				)}
				
				{workExperience.length > 0 && (
					<section id="experience" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/4 flex flex-col items-end">
							<h2 className="text-lg font-semibold">인턴 & 실무 경험</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Work Experience</p>
						</div>
						<div className="w-3/4 space-y-1">
							{workExperience.map((workExperience: WorkExperience, index: number) => (
								<div key={`workExperience-${index}`} className="border-b border-gray-300 border-dashed">
									<div className="flex space-x-1">
										<p className="text-base font-medium">{workExperience.company}</p>
										<p>-</p>
										<p className="text-base font-medium">{workExperience.position}</p>
									</div>
									<p className="text-gray-600 dark:text-gray-300 text-xs">{workExperience.date}</p>
									<p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{workExperience.description}</p>
								</div>
							))}
						</div>
					</section>
				)}
				
				{education.length > 0 && (
					<section id="education" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/4 flex flex-col items-end">
							<h2 className="text-lg font-semibold">교육 & 학력</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Education</p>
						</div>
						<div className="w-3/4 space-y-1">
							{education.map((education: Education, index: number) => (
								<div key={`education-${index}`} className="border-b border-gray-300 border-dashed">
									<div className="flex space-x-1">
										<p className="text-base font-medium">{education.institution}</p>
										<p>-</p>
										<p className="text-base font-medium">{education.degree}</p>
									</div>
									<p className="text-gray-600 dark:text-gray-300 text-xs">{education.date}</p>
								</div>
							))}
						
						</div>
					</section>
				)}
				
				{certifications.length > 0 && (
					<section id="certifications" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/4 flex flex-col items-end">
							<h2 className="text-lg font-semibold">자격증</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Certifications</p>
						</div>
						<div className="w-3/4 space-y-1">
							{certifications.map((certification: Certification, index) => (
								<div key={`certification-${index}`} className="border-b border-gray-300 border-dashed">
									<p className="text-base font-medium">{certification.name}</p>
									<p className="text-gray-600 dark:text-gray-300 text-xs">{certification.date}</p>
								</div>
							))}
						</div>
					</section>
				)}
				
				{activities.length > 0 && (
					<section id="activity" className="border-b border-gray-400 pb-2 flex gap-4">
						<div className="w-1/4 flex flex-col items-end">
							<h2 className="text-lg font-semibold">활동</h2>
							<p className="text-gray-500 dark:text-gray-200 text-sm">Activity</p>
						</div>
						<div className="w-3/4 space-y-1">
							{activities.map((activity: Activity, index: number) => (
								<div key={`activity-${index}`} className="border-b border-gray-300 border-dashed">
									<p className="text-base font-medium">{activity.title}</p>
									<p className="text-gray-600 dark:text-gray-300 text-xs">{activity.date}</p>
									<p className="text-gray-700 dark:text-gray-300 mt-1 text-sm">{activity.description}</p>
								</div>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
};