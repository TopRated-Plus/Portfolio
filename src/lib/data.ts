import portfolioContent from "@/content/portfolio.json";

export type ProjectCategory =
  | "AI Automation"
  | "CRM"
  | "Web dev"
  | "SaaS"
  | "CMS";
export type CategoryFilter = ProjectCategory | "All";

export type CaseStudy = {
  slug: string;
  title: string;
  category: ProjectCategory;
  url: string | null;
  images: string[];
  role: string;
  summary: string[];
  solution: string;
  whatIBuilt: string;
  outcome: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  stack: string[];
};

export type Metric = {
  value: number;
  suffix: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const content = portfolioContent;
export const categories = portfolioContent.categories as CategoryFilter[];
export const caseStudies = portfolioContent.projects as CaseStudy[];
export const metrics = portfolioContent.metrics as Metric[];
export const testimonials = portfolioContent.testimonials as Testimonial[];
