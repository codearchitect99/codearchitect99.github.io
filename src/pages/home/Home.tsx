// Home.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import {pofolData} from "./pofolData.ts";

interface PortfolioProject {
	title: string;
	src: string;
}

export const Home = () => {
	// const [selectedProject, setSelectedProject] = useState<PortfolioProject>(projectData.project[0]);
	const [selectedActivity, setSelectedActivity] = useState<PortfolioProject>(pofolData.activities[0]);
	const [markdownContent, setMarkdownContent] = useState("");
	
	useEffect(() => {
		fetch(selectedActivity.src)
			.then((res) => res.text())
			.then(setMarkdownContent)
			.catch(() => setMarkdownContent("마크다운 파일을 불러오는 데 실패했습니다."));
	}, [selectedActivity]);
	
	return (
		<main className="flex flex-col items-center px-4 py-8 space-y-16">
			
			{/* Hero Section */}
			<section id="hero" className="w-full max-w-3xl text-center py-12 border-b border-gray-300">
				<h1 className="text-4xl font-bold mb-4">안녕하세요, 저는 백엔드 개발자입니다</h1>
				<p className="text-lg text-gray-600">
					Java, Spring 기반 백엔드와 React 기반 프론트엔드를 다루는 풀스택 개발자입니다.
				</p>
			</section>
			
			<section id="about" className="w-full max-w-3xl border-b border-gray-300 pb-8">
				<h2 className="text-2xl font-semibold mb-4">About Me</h2>
				<p>
					저는 Java와 Spring을 기반으로 한 백엔드 개발을 주력으로 하고 있으며, TypeScript와 React를 활용한 프론트엔드에도 익숙합니다. 복잡한 시스템 아키텍처 설계와 코드 품질에 관심이 많습니다.
				</p>
			</section>
			
			<section id="skills" className="w-full max-w-3xl border-b border-gray-300 pb-8">
				<h2 className="text-2xl font-semibold mb-4">Skills</h2>
				<ul className="list-disc pl-5">
					<li>Java, Spring Boot</li>
					<li>TypeScript, React</li>
					<li>AWS, Docker, MariaDB</li>
					<li>CI/CD, GitHub Actions, CircleCI</li>
				</ul>
			</section>
			
			<section id="projects" className="w-full max-w-3xl border-b border-gray-300 pb-8">
				<h2 className="text-2xl font-semibold mb-4">Projects</h2>
				
				<div className="flex flex-wrap gap-2 mb-6">
					{pofolData.activities.map((proj) => (
						<button
							key={proj.title}
							onClick={() => setSelectedActivity(proj)}
							className={`px-4 py-2 rounded-full border text-sm ${
								selectedActivity.title === proj.title
									? "bg-blue-600 text-white border-blue-600"
									: "text-gray-600 border-gray-300"
							}`}
						>
							{proj.title}
						</button>
					))}
				</div>
				
				<div className="prose prose-blue max-w-none">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeHighlight]}
					>
						{markdownContent}
					</ReactMarkdown>
				</div>
			</section>
			
			<section id="contact" className="w-full max-w-3xl text-center pb-8">
				<h2 className="text-2xl font-semibold mb-4">Contact</h2>
				<p>📧 your.email@example.com</p>
				<p>🔗 <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></p>
			</section>
		</main>
	);
};
