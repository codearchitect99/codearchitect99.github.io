export interface BasicInfo {
	name: string;
	job: string;
	github: string;
	portfolio: string;
	linkedin: string;
	blog: string;
	email: string;
	about: string;
}

export interface Skills {
	languages: string[];
	backendTechnologies: string[];
	frontendTechnologies: string[];
	databases: string[];
	infrastructure: string[];
}

export interface Project {
	title: string;
	date: string;
	description: string;
}

export interface WorkExperience {
	company: string;
	position: string;
	date: string;
	description: string;
}

export interface Education {
	degree: string;
	institution: string;
	date: string;
}

export interface Certification {
	name: string;
	date: string;
}

export interface Activity {
	title: string;
	date: string;
	description: string;
}

export interface ResumeType {
	basicInfo: BasicInfo;
	skills: Skills;
	projects: Project[];
	workExperience: WorkExperience[];
	education: Education[];
	certifications: Certification[];
	activities: Activity[];
}
