export interface TocEntry {
	id: string;
	text: string;
	level: number;
}

export interface DocContent {
	title: string;
	description: string;
	lastUpdated: string;
	toc: TocEntry[];
	html: string;
}

export interface BlogContent {
	title: string;
	description: string;
	lastUpdated: string;
	html: string;
}

export interface LandingContent {
	heroTitle: string;
	heroSubtitle: string;
	trustLine: string;
	ctaOpen: string;
	ctaHow: string;
	whatIsTitle: string;
	whatIsText: string;
	howToTitle: string;
	steps: { title: string; text: string }[];
	featuresTitle: string;
	features: { icon: string; title: string; text: string }[];
	desktopTitle: string;
	desktopText: string;
	desktopFeatures: string[];
	ctaDownload: string;
	ctaAllPlatforms: string;
	learnMoreTitle: string;
	learnMoreLinks: { href: string; title: string; text: string }[];
}

export interface DocsIndexContent {
	title: string;
	description: string;
	intro: string;
	docs: { title: string; description: string; href: string; icon: string }[];
}

export interface BlogIndexContent {
	title: string;
	description: string;
	intro: string;
	posts: { title: string; description: string; href: string; date: string }[];
}

export interface LocaleContent {
	docs: Record<string, DocContent>;
	blog: Record<string, BlogContent>;
	landing: LandingContent;
	docsIndex: DocsIndexContent;
	blogIndex: BlogIndexContent;
}
