// Home.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github.css';
import { pofolData } from "./pofolData.ts";

interface PortfolioProject {
	title: string;
	src: string;
}

const ProjectCategory = ({
	                         title,
	                         description,
	                         data,
	                         selectedActivity,
	                         setSelectedActivity,
                         }: {
	title: string;
	description: string;
	data: PortfolioProject[];
	selectedActivity: PortfolioProject;
	setSelectedActivity: (project: PortfolioProject) => void;
}) => (
	<div className="mb-8">
		<h3 className="text-xl font-semibold mb-1">{title}</h3>
		<p className="text-gray-600 mb-3">{description}</p>
		<div className="flex flex-wrap gap-2">
			{data.map((proj) => (
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
	</div>
);

export const Home = () => {
	const [selectedActivity, setSelectedActivity] = useState<PortfolioProject>(pofolData.systemDesign[0]);
	const [markdownContent, setMarkdownContent] = useState("");
	
	useEffect(() => {
		fetch(selectedActivity.src)
			.then((res) => res.text())
			.then(setMarkdownContent)
			.catch(() => setMarkdownContent("마크다운 파일을 불러오는 데 실패했습니다."));
	}, [selectedActivity]);
	
	return (
		<main className="flex flex-col items-center px-4 py-8 space-y-16">
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
				
				<ProjectCategory
					title="⚙️ 서비스 구조 설계 및 운영 (System Design & Service Operation)"
					description="데이터 모델링부터 배포까지, 전체 서비스 구조를 직접 설계하고 운영한 경험"
					data={pofolData.systemDesign}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				<ProjectCategory
					title="🎨 사용자 경험 중심의 화면 구현 (User-Centered Interface Development)"
					description="직관적인 UI 설계와 실제 사용 흐름을 고려한 인터페이스 구현 경험"
					data={pofolData.uiDevelopment}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				<ProjectCategory
					title="🔧 기능 중심의 시스템 개발 (Feature-Oriented System Development)"
					description="사용자 중심 기능을 안정적이고 신뢰성 있게 구현한 경험"
					data={pofolData.systemFeature}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				<ProjectCategory
					title="🤝 협업 및 커뮤니케이션 (Collaboration & Communication)"
					description="다양한 환경에서의 협업 경험과 커뮤니케이션 역량"
					data={pofolData.collaboration}
					selectedActivity={selectedActivity}
					setSelectedActivity={setSelectedActivity}
				/>
				
				<div className="prose prose-blue max-w-none">
					<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
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
