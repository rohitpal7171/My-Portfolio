import type { FC, SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  CodeXml,
  GitCommit,
  BrainCircuit,
  Lightbulb,
  Users,
  ShieldCheck,
  ArrowRight,
  Mic,
  BookOpen,
  Rocket,
} from "lucide-react";

const ReactJsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="-11.5 -10.23174 23 20.46348">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const ReduxIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 18 18">
    <path fill="#764ABC" d="M14.28,2.34c-1.95-1.95-5.12-1.95-7.07,0L5.79,3.76,4.39,2.34,3,3.76l1.41,1.41L3,6.59,4.41,8l1.41-1.41,1.41,1.41c1.95,1.95,5.12,1.95,7.07,0l1.41-1.41-1.41-1.41,1.41-1.41-1.41-1.41Z"/>
    <path fill="#764ABC" d="M3.72,15.66c1.95,1.95,5.12,1.95,7.07,0l1.41-1.41,1.41,1.41,1.41-1.41-1.41-1.41,1.41-1.41-1.41-1.41-1.41,1.41c-1.95,1.95-5.12,1.95-7.07,0L2.31,10.18l1.41-1.41-1.41-1.41-1.41,1.41Z"/>
  </svg>
);

const JavaScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32">
    <path fill="#F7DF1E" d="M0 0h32v32H0z"/>
    <path d="M21.033 24.288l1.41-8.24h-4.502s.18-1.023.27-1.533c.125-.7.225-1.536.225-1.536s.015-.135.045-.27c.03-.135.09-.285.09-.285s.075-.21.135-.345c.06-.135.15-.27.15-.27s.12-.195.195-.3c.075-.105.18-.21.18-.21.21-.24.375-.405.375-.405s.27-.24.36-.315c.09-.075.135-.105.135-.105l.135-.09s.09-.06.12-.075c.03-.015.045-.03.045-.03l.09-.045s.045-.03.06-.03c.015,0,.03,0,.03,0l.09-.03c.015,0,.03-.015.045-.015.015,0,.03,0,.03,0 .015,0,.03,0,.045,0h5.415l-1.92,11.235-4.74 2.58-4.14-2.22.27-1.56,2.37.99,2.835-1.56zM13.238 24.513c-.225.39-.525.675-.885.855-.36.18-.78.27-1.26.27-.6,0-1.095-.09-1.485-.27-.39-.18-.705-.45-1.005-.81-.225-.315-.405-.705-.51-1.17-.105-.465-.15-1.005-.15-1.62 0-.66.045-1.215.135-1.665.09-.45.24-.84.45-1.17.21-.33.48-.585.81-.765.33-.18.705-.27,1.125-.27.525,0,.96.075,1.305.225.345.15.63.375.855.675.225.3.39.675.495,1.125.105.45.15.975.15,1.575,0,.69-.06,1.275-.18,1.755-.12.48-.3,s.9-.54,1.26zM11.393 20.37c-.15.225-.33.405-.54.525-.21.12-.45.18-.72.18-.27,0-.51-.06-.705-.18-.195-.12-.345-.3-.435-.54-.09-.24-.135-.525-.135-.855,0-.36.045-.66.135-.9.09-.24.24-.435.435-.585.195-.15.435-.225.72-.225.27,0,.51.075.705.225.195.15.345.345.435.585.09.24.135.54.135.9s-.045.63-.135.855z"/>
  </svg>
);

const TypeScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32">
    <path fill="#3178C6" d="M0 0h32v32H0z"/>
    <path fill="#FFF" d="M13.2,23.5V8.2h-3V5h9.3v3.2h-3v15.3H13.2z M24.4,14.6c0,1.8-0.5,3.3-1.6,4.5s-2.5,1.8-4.3,1.8 c-1.5,0-2.8-0.4-3.8-1.2s-1.5-1.9-1.5-3.3c0-1.6,0.5-2.9,1.6-3.9s2.5-1.5,4.3-1.5c0.8,0,1.5,0.1,2.1,0.4s1.1,0.6,1.5,1.1l-2.1,2.2 c-0.2-0.2-0.5-0.4-0.8-0.5s-0.6-0.2-1-0.2c-0.8,0-1.5,0.3-2,0.8s-0.8,1.2-0.8,2.1c0,0.9,0.3,1.6,0.8,2.1s1.2,0.8,2.1,0.8 c1.3,0,2.3-0.5,2.8-1.4h-2.1v-2.5H24.4V14.6z"/>
  </svg>
);

const Html5Icon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32">
    <path fill="#E34F26" d="M4 2h24l-2 22-10 3-10-3z"/>
    <path fill="#EF652A" d="M16 4v24.5l8.5-2.5L25 4z"/>
    <path fill="#EBEBEB" d="M16 14v-4h9l-.5 4.5L16 14.5zM16 20v4.5l4.5-1.5.5-5H16z"/>
    <path fill="#FFFFFF" d="M16 14v-4H7l.5 4.5L16 14.5zM16 20v4.5l-4.5-1.5L11 15h5z"/>
  </svg>
);

const Css3Icon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 32 32">
    <path fill="#1572B6" d="M4 2h24l-2 22-10 3-10-3z"/>
    <path fill="#33A9DC" d="M16 4v24.5l8.5-2.5L25 4z"/>
    <path fill="#EBEBEB" d="M16 14v-4h9l-.5 4.5L16 14.5zM16 20v4.5l4.5-1.5.5-5H16z"/>
    <path fill="#FFFFFF" d="M16 14v-4H7l.5 4.5L16 14.5zM16 20v4.5l-4.5-1.5L11 15h5z"/>
  </svg>
);

const BootstrapIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 16 16">
        <path fill="#7952B3" d="M.5 3.5A.5.5 0 0 1 1 3h14a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-9zM1 4v3h14V4H1zm0 4v5h14V8H1z"/>
        <path fill="#7952B3" d="M4.5 10.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.5h-4v2zM5 9h3v1.5H5V9z"/>
    </svg>
);

const GitIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 16 16">
    <path fill="#F05033" d="M15.5 7.8l-5.8-5.8c-0.4-0.4-1-0.6-1.6-0.6H3.9C3.1 1.4 2.4 2.1 2.4 2.9v10.2c0 0.8 0.7 1.5 1.5 1.5h4.2c0.1 0 0.2 0 0.2-0.1 0.3-0.1 0.6-0.2 0.8-0.4l5.8-5.8C15.8 8.8 16 8.3 15.5 7.8z M9.1 12.3c-0.1 0.1-0.2 0.2-0.3 0.2s-0.3-0.1-0.4-0.2L6.3 10c-0.2-0.2-0.2-0.5 0-0.7s0.5-0.2 0.7 0l1.8 1.8 3.5-3.5c0.2-0.2 0.5-0.2 0.7 0s0.2 0.5 0 0.7L9.1 12.3z"/>
  </svg>
);

const GithubIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const RestApiIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10V4a2 2 0 00-2-2H4a2 2 0 00-2 2v6m18 10V14a2 2 0 00-2-2H4a2 2 0 00-2 2v6m4-8l4 4 4-4m-8 8l4-4 4 4"/>
  </svg>
);

const RelayIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path fill="#F26B00" d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M17,14c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S18.7,14,17,14z M7,10c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.7,10,7,10z M12,19c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,19,12,19z"/>
  </svg>
);

const GraphQlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path fill="#E10098" d="M4.3.4l15.4,8.9-3.2,5.5-3.6-2.1L4.3.4z M23.5,8.1L19.9,2l-3.2,5.5,3.6,2.1,3.2-1.5z M4.3,23.6l8.6-4.9-3.2-5.5-8.6,4.9,3.2,5.5z M20.3,18.4l-8.6,4.9,3.2,5.5,8.6-4.9-3.2-5.5z M12,13.8c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8-.8,1.8-1.8,1.8z M4,9.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S5,9.9,4,9.9z M4,17.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S5,17.9,4,17.9z M20,9.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S21,9.9,20,9.9z M20,17.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S21,17.9,20,17.9z M8,5.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S9,5.9,8,5.9z M16,21.9c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8S17,21.9,16,21.9z"/>
  </svg>
);


export const skills = [
  {
    category: "Frontend Development",
    icon: CodeXml,
    list: [
      { name: "React.js", icon: ReactJsIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "HTML5", icon: Html5Icon },
      { name: "CSS3", icon: Css3Icon },
      { name: "Bootstrap", icon: BootstrapIcon },
    ],
  },
  {
    category: "Tools & APIs",
    icon: GitCommit,
    list: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "REST APIs", icon: RestApiIcon },
      { name: "Relay", icon: RelayIcon },
      { name: "GraphQL", icon: GraphQlIcon },
    ],
  },
  {
    category: "Soft Skills",
    icon: BrainCircuit,
    list: [
      { name: "Problem-solving", icon: Lightbulb },
      { name: "Team collaboration", icon: Users },
      { name: "Code reviews", icon: ShieldCheck },
      { name: "Rapid learning", icon: Rocket },
      { name: "Adaptability", icon: ArrowRight },
      { name: "Communication", icon: Mic },
      { name: "Ownership", icon: BookOpen },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  description: string[];
  icon: LucideIcon;
}

export const experience: Experience[] = [
  {
    role: "Software Developer",
    company: "MikeLegal",
    period: "Jul 2023 – Present",
    location: "Remote (Gurugram, India)",
    isCurrent: true,
    description: [
      "Spearheading frontend development in a fast-paced legal-tech team.",
      "Building scalable, maintainable components using ReactJS, Redux, TypeScript, and JavaScript.",
      "Collaborating cross-functionally to enhance user experiences for clients in the legal domain.",
    ],
    icon: Briefcase,
  },
  {
    role: "Software Developer",
    company: "Appointy India",
    period: "Jun 2021 – Jun 2023",
    location: "On-site (Bhopal, India)",
    description: [
      "Designed and developed intuitive UIs for enterprise products.",
      "Maintained complex codebases, ensured performance optimization, and adhered to industry best practices.",
      "Contributed to a stable and modular frontend architecture using React, Redux, and modern tooling.",
    ],
    icon: Briefcase,
  },
  {
    role: "Web Development Intern",
    company: "Appointy India",
    period: "Nov 2020 – Jun 2021",
    location: "Remote",
    description: [
      "Gained hands-on experience fixing real-world issues and bugs.",
      "Explored advanced technologies like GraphQL and Relay while working on live systems.",
    ],
    icon: Briefcase,
  },
  {
    role: "Web Development Intern",
    company: "FIZ Robotic Solutions",
    period: "Jul 2019 – Nov 2020",
    location: "On-site (Gwalior, India)",
    description: [
      "Collaborated with UI/UX and backend teams to deliver secure, responsive websites.",
      "Focused on cross-browser compatibility, web standards, and frontend performance.",
    ],
    icon: Briefcase,
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "ITM Group of Institutions, Computer Science",
    period: "2017 - 2021",
  },
  {
    degree: "12th Grade",
    institution: "Delhi Public Academy",
    period: "Completed in 2017",
  },
  {
    degree: "10th Grade",
    institution: "No.1 Air force School",
    period: "Completed in 2015",
  },
];

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: "IPSuite – AI-Powered Legal Intelligence Platform",
    description: [
      "Developed and maintained scalable UI components using React and Ant Design for a legal-tech platform focused on IP and trademark management.",
      "Integrated REST APIs and implemented Redux for efficient state management and data flow.",
      "Delivered intuitive legal dashboards and automation features in collaboration with cross-functional teams."
    ],
    tech: ["React.js", "Redux", "Ant Design", "REST APIs"],
    icon: Briefcase,
  },
  {
    title: "MatterSuite – Legal Practice Management Software",
    description: [
      "Built dynamic and responsive UIs for modules like matter tracking, task management, and collaboration tools using React.js and Material UI.",
      "Used Relay and GraphQL to fetch and manage data efficiently with optimized performance.",
      "Ensured a consistent user experience by closely working with design and backend teams."
    ],
    tech: ["React.js", "Material UI", "Relay", "GraphQL"],
    icon: Briefcase,
  },
  {
    title: "CaseFox – Legal Billing & Case Management SaaS",
    description: [
      "Designed and implemented the entire frontend architecture for a legal billing platform from scratch using React.js and Material UI.",
      "Developed responsive interfaces for case management, billing, time tracking, and client modules.",
      "Integrated Redux and REST APIs to ensure seamless data interaction and a smooth user experience."
    ],
    tech: ["React.js", "Material UI", "Redux", "REST APIs"],
    icon: Briefcase,
  }
];
