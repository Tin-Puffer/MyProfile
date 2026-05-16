import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Laptop,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import {
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siTypescript,
} from "simple-icons";

const simpleIconMap = {
  javascript: siJavascript,
  typescript: siTypescript,
  git: siGit,
  github: siGithub,
  html5: siHtml5,
  css: siCss,
};

const lucideMap = {
  mail: Mail,
  map: MapPin,
  phone: Phone,
  award: Award,
  badge: BadgeCheck,
  shield: ShieldCheck,
  sparkles: Sparkles,
  arrow: ArrowUpRight,
  cloud: Cloud,
  database: Database,
  workflow: Workflow,
  code: Code2,
  braces: Braces,
  laptop: Laptop,
  star: Star,
  filecode: FileCode2,
  gitbranch: GitBranch,
};

export function SimpleBrandIcon({ icon, className = "" }) {
  const data = simpleIconMap[icon];

  if (!data) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={data.path} />
    </svg>
  );
}

export function GlyphIcon({ icon, className = "", strokeWidth = 1.85 }) {
  const Component = lucideMap[icon];

  if (!Component) {
    return null;
  }

  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}

export function SalesforceCloud({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M8.3 18.5c-2.7 0-4.8-2-4.8-4.5 0-2.3 1.8-4.2 4.1-4.5.7-2.8 3.3-4.8 6.3-4.8 3.5 0 6.4 2.7 6.6 6.1 1.2.5 2 1.8 2 3.2 0 1.9-1.5 3.4-3.5 3.4H8.3Z"
        fill="currentColor"
      />
      <path
        d="M8.3 18.5c-2.7 0-4.8-2-4.8-4.5 0-2.3 1.8-4.2 4.1-4.5.7-2.8 3.3-4.8 6.3-4.8 3.5 0 6.4 2.7 6.6 6.1 1.2.5 2 1.8 2 3.2 0 1.9-1.5 3.4-3.5 3.4H8.3Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <path d="M9.4 12.8h5.1v1.4H9.4z" fill="#090909" opacity=".2" />
    </svg>
  );
}
