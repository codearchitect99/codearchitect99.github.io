// Home.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import { pofolData } from "./pofolData.ts";
import {PortfolioProject} from "./pofolDataTypes.ts";
import {ProjectTabs} from "./ProjectTabs.tsx";
import {HiOutlineMail} from "react-icons/hi";
import {FaGithub } from "react-icons/fa";
import {GoLocation} from "react-icons/go";
// import {ImagePreviewModal} from "./ImagePreviewModal.tsx";

export const Home = () => {
	// const imageModules = import.meta.glob('/src/assets/images/project/kakao/*', { eager: true, as: 'url' });
	// const imageUrls = Object.values(imageModules) as string[];
	
	const categoryTabs = [
		{
			label: "System Design",
			data: pofolData.systemDesign,
		},
		{
			label: "UI Development",
			data: pofolData.uiDevelopment,
		},
		{
			label: "System Feature",
			data: pofolData.systemFeature,
		},
		{
			label: "Collaboration",
			data: pofolData.collaboration,
		},
	];
	
	const allProjects = categoryTabs.flatMap((tab) => tab.data);
	
	const [selectedTab, setSelectedTab] = useState(-1);
	const [selectedActivity, setSelectedActivity] = useState<PortfolioProject>(allProjects[0]);
	const [markdownContent, setMarkdownContent] = useState("");
	
	useEffect(() => {
		fetch(selectedActivity.src)
			.then((res) => res.text())
			.then(setMarkdownContent)
			.catch(() => setMarkdownContent("마크다운 파일을 불러오는 데 실패했습니다."));
	}, [selectedActivity]);
	
	return (
		<main className="flex flex-col items-center space-y-8">
			<section id="header"
			         className="w-full h-[20vh] flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-300"
			>
				<div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4 w-full max-w-4xl px-4">
					<section id="contacts" className="text-base text-gray-700 md:ml-4 flex flex-col">
						<div className="flex justify-start gap-1">
							<HiOutlineMail className="text-xl text-blue-600" />
							<a href="mailto:ysw991106@gmail.com" className="hover:underline hover:text-blue-800 transition">
								ysw991106@gmail.com
							</a>
						</div>
						<div className="flex justify-start gap-1">
							<p className="flex items-center justify-center gap-2">
								<GoLocation className="text-xl text-red-500" />
								Jeju, South Korea
							</p>
						</div>
						<div className="flex justify-start gap-1">
							<p className="flex items-center justify-center gap-2">
								<FaGithub className="text-xl text-gray-800 dark:text-white" />
								<a href="https://github.com/codearchitect99" target="_blank" rel="noopener noreferrer"
								   className="hover:underline hover:text-blue-800 transition">
									GitHub
								</a>
							</p>
						</div>
					</section>
					
					<section id="name" className="text-center">
						<h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
							<p className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
								Seongwon Yang
							</p>
						</h1>
					</section>
				</div>
			</section>
			
			<section id="about" className="w-full max-w-3xl border-b border-gray-300 pb-8 px-4">
				<h2 className="text-2xl font-semibold mb-4">About Me</h2>
				<p className="text-gray-700 leading-relaxed">
					복잡한 시스템을 구조적으로 이해하고, 흐름을 정리해 나가는 과정에 흥미를 느끼는 개발자입니다.
					작은 기능 하나에도 설계의 의도를 담아 신중하게 접근하며, 유지보수성과 확장성을 고려한 안정적인 개발을 지향합니다.
					<br/><br/>
					무엇이 왜 그렇게 동작하는지를 깊이 이해하려고 노력하며, 단순한 구현을 넘어서 원리를 탐구하는 과정을 즐깁니다.
					아직 배워야 할 부분이 많지만, 책임감 있는 태도로 팀에 기여하며 함께 성장할 수 있는 개발자가 되고자 합니다.
					변화에 유연하게 대응하되, 기본에 충실한 개발자가 되는 것을 목표로 하고 있습니다.
					꾸준한 학습과 기록을 통해 개발자로서의 방향성을 단단하게 다져가고 있습니다.
				</p>
			</section>
			
			<section id="skills" className="w-full max-w-3xl border-b border-gray-300 pb-8 px-4">
				<h2 className="text-2xl font-semibold mb-4">Skills</h2>
				<ul className="list-disc pl-5 space-y-1 text-gray-700">
					<li>
						<strong>Language & Backend</strong>: Java (Corretto 21), Spring Boot 3.x, JPA (Hibernate), Gradle, REST API
					</li>
					<li>
						<strong>Frontend</strong>: TypeScript, React (v19), Tailwind CSS (v4), HTML/CSS
					</li>
					<li>
						<strong>Database</strong>: MariaDB, MySQL
					</li>
					<li>
						<strong>DevOps & Infra</strong>: Docker, AWS EC2, Vercel
					</li>
					<li>
						<strong>Testing</strong>: JUnit
					</li>
					<li>
						<strong>Tools & Collaboration</strong>: Git, GitHub, GitHub Projects, GitHub Docs, Figma, Jira, Confluence,
						Agit
					</li>
				</ul>
			</section>
			
			<section id="projects" className="w-full max-w-3xl border-b border-gray-300 pb-8 px-4">
				<h2 className="text-2xl font-semibold mb-4">Projects</h2>
				
				<ProjectTabs
					tabs={categoryTabs}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				<div className="prose prose-blue max-w-none mt-6">
					
					{/*<ImagePreviewModal imagePaths={imageUrls}/>*/}
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
						{markdownContent}
					</ReactMarkdown>
				</div>
			</section>
		</main>
	);
};
