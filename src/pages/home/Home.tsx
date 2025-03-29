// Home.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import { projectData } from "./projectData.ts";
import {ProjectDataTypes} from "./projectDataTypes.ts";
import {ProjectTabs} from "./ProjectTabs.tsx";
import {HiOutlineMail} from "react-icons/hi";
import {FaGithub } from "react-icons/fa";
import {GoLocation} from "react-icons/go";
import {ImagePreviewModal} from "./ImagePreviewModal.tsx";
import {myInfo} from "../myInfo.ts";
import imagesByFolder from "./imageUtils.ts";

export const Home = () => {
	
	const categoryTabs = [
		{
			label: "System Design",
			data: projectData.systemDesign,
		},
		{
			label: "UI Development",
			data: projectData.uiDevelopment,
		},
		{
			label: "System Feature",
			data: projectData.systemFeature,
		},
		{
			label: "Collaboration",
			data: projectData.collaboration,
		},
	];
	
	const allProjects = categoryTabs.flatMap((tab) => tab.data);
	
	const [selectedTab, setSelectedTab] = useState(-1);
	const [selectedActivity, setSelectedActivity] = useState<ProjectDataTypes>(allProjects[0]);
	const [markdownContent, setMarkdownContent] = useState("");
	const [imageUrls, setImageUrls] = useState<string[]>(imagesByFolder[selectedActivity.name]);
	
	
	useEffect(() => {
		fetch(selectedActivity.src)
			.then((res) => res.text())
			.then(setMarkdownContent)
			.catch(() => setMarkdownContent("마크다운 파일을 불러오는 데 실패했습니다."));
		
		setImageUrls(imagesByFolder[selectedActivity.name]);
		
	}, [selectedActivity]);
	
	return (
		<main className="flex flex-col items-center space-y-8">
			<section
				id="header"
				className="w-full h-[20vh] flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
			>
				<div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-4 w-full max-w-4xl px-4">
					<section
						id="contacts"
						className="text-base text-gray-700 dark:text-gray-300 md:ml-4 flex flex-col"
					>
						<div className="flex justify-start gap-1">
							<HiOutlineMail className="text-xl text-blue-600 dark:text-blue-400" />
							<a
								href={`mailto:${myInfo.email}`}
								className="hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition"
							>
								{myInfo.email}
							</a>
						</div>
						<div className="flex justify-start gap-1">
							<p className="flex items-center justify-center gap-2">
								<GoLocation className="text-xl text-red-500 dark:text-red-400" />
								{myInfo.location}
							</p>
						</div>
						<div className="flex justify-start gap-1">
							<p className="flex items-center justify-center gap-2">
								<FaGithub className="text-xl text-gray-800 dark:text-white" />
								<a
									href={myInfo.github}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition"
								>
									GitHub
								</a>
							</p>
						</div>
					</section>
					
					<section id="name" className="text-center">
						<h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white tracking-tight">
							<p className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
								{myInfo.eng_name}
							</p>
						</h1>
					</section>
				</div>
			</section>
			
			<section
				id="about"
				className="w-full max-w-3xl border-b border-gray-300 dark:border-gray-700 pb-8 px-4"
			>
				<h2 className="text-h2">About Me</h2>
				<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
					{myInfo.about}
				</p>
			</section>
			
			<section
				id="skills"
				className="w-full max-w-3xl border-b border-gray-300 dark:border-gray-700 pb-8 px-4"
			>
				<h2 className="text-h2">Skills</h2>
				<ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
					<li>
						<strong>Backend: </strong>{myInfo.skills.backend.toString()}
					</li>
					<li>
						<strong>Frontend: </strong>{myInfo.skills.front.toString()}
					</li>
					<li>
						<strong>Infra: </strong>{myInfo.skills.infra.toString()}
					</li>
					<li>
						<strong>Development support tools: </strong>{myInfo.skills.etc.toString()}
					</li>
				</ul>
			</section>
			
			<section
				id="projects"
				className="w-full max-w-3xl border-b border-gray-300 dark:border-gray-700 pb-8 px-4"
			>
				<h2 className="text-h2">Projects</h2>
				
				<ProjectTabs
					tabs={categoryTabs}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				{imageUrls && (
					<ImagePreviewModal imagePaths={imageUrls} />
				)}
				
				<div className="prose prose-blue dark:prose-invert max-w-none mt-6">
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
						{markdownContent}
					</ReactMarkdown>
				</div>
			</section>
		</main>
	);
};
