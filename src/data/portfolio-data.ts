import {
  Briefcase,
  CodeXml,
  GitCommit,
  BrainCircuit,
  Braces,
  Network,
  Code,
  Type,
  FileCode,
  Gem,
  Component,
  Github,
  Link2,
  Rocket,
  GitBranch,
  Lightbulb,
  Users,
  ShieldCheck,
  ArrowRight,
  Mic,
  BookOpen,
} from "lucide-react";

export const skills = [
  {
    category: "Frontend Development",
    icon: CodeXml,
    list: [
      { name: "React.js", icon: Braces },
      { name: "Redux", icon: Network },
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Type },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Gem },
      { name: "Bootstrap", icon: Component },
    ],
  },
  {
    category: "Tools & APIs",
    icon: GitCommit,
    list: [
      { name: "Git & GitHub", icon: Github },
      { name: "REST APIs", icon: Link2 },
      { name: "Relay", icon: Rocket },
      { name: "GraphQL", icon: GitBranch },
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

export const experience = [
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

export const education = [
  {
    degree: "Bachelor of Technology",
    institution: "ITM Group of Institutions, Computer Science",
  },
  {
    degree: "12th Grade",
    institution: "Delhi Public Academy",
  },
  {
    degree: "10th Grade",
    institution: "No.1 Air force School",
  },
];
