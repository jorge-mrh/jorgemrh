export type ExperienceType = "work" | "education";

export interface ExperienceItem {
    id: string;
    type: ExperienceType;
    title: string;
    organization: string;
    period: string;
    location?: string;
    description?: string;
    technologies?: string[];
    achievements?: string[];
}

export const curriculumData: ExperienceItem[] = [
    {
        id: "sdilab",
        type: "work",
        title: "Frontend Developer",
        organization: "SDILab",
        period: "2024 – Current",
        description: "Frontend development focusing on performance and user experience.",
        technologies: ["React", "React-Native", "TypeScript", "TanStack Query", "Kendo React", "MUI", "Vitest"],
        achievements: [
            "Implemented TanStack Query caching with safe, targeted cache updates, cutting perceived latency.",
            "Built customizable Kendo React data grid with filtering, grouping, and persistent configurations.",
            "Built reusable UI components with MUI and implemented comprehensive unit tests.",
        ],
    },
    {
        id: "codevision",
        type: "work",
        title: "Software Developer",
        organization: "Codevision",
        period: "2022 – 2024",
        description: "Full stack development for education platforms.",
        technologies: [".NET", "JavaScript", "SQL", "C#", "MongoDB"],
        achievements: [
            "Developed features for education platform covering digital classrooms and absence management.",
            "Refactored legacy jQuery codebase to ES6+ JavaScript classes.",
            "Automated data lifecycle management with scheduled C# + MongoDB jobs.",
        ],
    },
    {
        id: "minsait",
        type: "work",
        title: "Junior Systems Engineer",
        organization: "Minsait",
        period: "2021 – 2022",
        description: "Development for financial sector.",
        technologies: ["C#", "SharePoint", "SoapUI"],
        achievements: [
            "Developed HR application modules for Caixa Geral de Depósitos using SharePoint and C#.",
            "Used SoapUI for API testing and endpoint analysis.",
        ],
    },
    {
        id: "upskill",
        type: "education",
        title: "UPSKILL – Digital Skills & Jobs",
        organization: "",
        period: "2020 – 2021",
        description: "Intensive training program in software development.",
        technologies: [".NET", "JavaScript", "HTML", "CSS", "React-Native"],
    },
    {
        id: "signa",
        type: "work",
        title: "Graphic Designer",
        organization: "SIGNA Design",
        period: "2017 – 2020",
        technologies: ["Marketing", "UI/UX", "Design Gráfico"],
    },
    {
        id: "ucp",
        type: "education",
        title: "Bachelor’s Degree in Communication Science",
        organization: "Portuguese Catholic University",
        period: "2014 – 2018",
        technologies: ["Communication", "Journalism", "Copywriting"],
    },
];
