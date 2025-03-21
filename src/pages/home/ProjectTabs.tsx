import { PortfolioProject } from "./pofolDataTypes";

export const ProjectTabs = ({
	                            tabs,
	                            selectedTab,
	                            setSelectedTab,
	                            selectedActivity,
	                            setSelectedActivity,
                            }: {
	tabs: { label: string; data: PortfolioProject[] }[];
	selectedTab: number;
	setSelectedTab: (index: number) => void;
	selectedActivity: PortfolioProject;
	setSelectedActivity: (project: PortfolioProject) => void;
}) => {
	const allProjects = tabs.flatMap((tab) => tab.data);
	
	return (
		<div className="space-y-6">
			{/* 상위 탭 (카테고리) */}
			<div className="flex flex-wrap gap-3">
				<button
					onClick={() => {
						setSelectedTab(-1);
						setSelectedActivity(allProjects[0]);
					}}
					className={`px-2 py-1 rounded-xl border-2 text-sm font-bold transition ${
						selectedTab === -1
							? "bg-blue-600 text-white border-blue-600"
							: "text-gray-700 border-gray-300 hover:border-gray-400"
					}`}
				>
					All
				</button>
				{tabs.map((tab, idx) => (
					<button
						key={tab.label}
						onClick={() => {
							setSelectedTab(idx);
							setSelectedActivity(tab.data[0]);
						}}
						className={`px-2 py-1.5 rounded-xl border-2 text-sm font-bold transition ${
							selectedTab === idx
								? "bg-blue-600 text-white border-blue-600"
								: "text-gray-700 border-gray-300 hover:border-gray-400"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>
			
			{/* 하위 탭 (프로젝트 목록) */}
			<div className="flex flex-wrap gap-2">
				{(selectedTab === -1 ? allProjects : tabs[selectedTab].data).map((proj) => (
					<button
						key={proj.title}
						onClick={() => setSelectedActivity(proj)}
						className={`px-1.5 py-1 rounded-full border text-sm transition ${
							selectedActivity.title === proj.title
								? "bg-blue-600 text-white border-blue-600"
								: "text-gray-600 border-gray-300 hover:border-gray-400"
						}`}
					>
						{proj.title}
					</button>
				))}
			</div>
		</div>
	);
};