import {
  Cloud,
  Code2,
  Database,
  Github,
  Globe,
  LucideIcon,
  Terminal,
} from "lucide-react";

export type Skill = {
  category: string;
  icon: LucideIcon;
  items: Array<{
    name: string;
    description: string;
    years: number;
    proficiency: number;
  }>;
  color: string;
  description: string;
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: Globe,
    items: [
      {
        name: "React",
        description:
          "Building complex user interfaces with React and its ecosystem. Experienced with hooks, context, custom hooks, advanced performance optimization, and state management solutions.",
        years: 5,
        proficiency: 95,
      },
      {
        name: "Next.js",
        description:
          "Developing enterprise-level applications with server-side rendering, static generation, and dynamic routing. Expert in API routes and middleware implementation.",
        years: 3,
        proficiency: 90,
      },
      {
        name: "TypeScript",
        description:
          "Writing type-safe code with advanced TypeScript features. Experienced in creating custom types, generics, and maintaining large-scale typed codebases.",
        years: 4,
        proficiency: 92,
      },
      {
        name: "Framer Motion",
        description:
          "Creating engaging animations and micro-interactions. Skilled in gesture-based animations and complex transition orchestration.",
        years: 2,
        proficiency: 85,
      },
    ],
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    description: "Building beautiful, responsive user interfaces",
  },
  {
    category: "Backend",
    icon: Terminal,
    items: [
      {
        name: "Node.js",
        description:
          "Building scalable server applications with Express and NestJS. Expert in async programming, middleware architecture, and RESTful API design.",
        years: 4,
        proficiency: 88,
      },
      {
        name: "Python",
        description:
          "Developing data processing pipelines and REST APIs with FastAPI and Django. Experienced in automation scripts and data analysis.",
        years: 3,
        proficiency: 85,
      },
      {
        name: "GraphQL",
        description:
          "Designing and implementing GraphQL APIs with Apollo Server. Skilled in schema design, resolvers, and real-time subscriptions.",
        years: 2,
        proficiency: 82,
      },
      {
        name: "REST",
        description:
          "Creating robust RESTful APIs with proper security, caching, and documentation. Expert in API versioning and best practices.",
        years: 5,
        proficiency: 95,
      },
    ],
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    description: "Crafting robust server-side solutions",
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: [
      {
        name: "Docker",
        description:
          "Containerizing applications and creating efficient multi-stage builds. Experienced in Docker Compose for local development environments.",
        years: 3,
        proficiency: 85,
      },
      {
        name: "AWS",
        description:
          "Managing cloud infrastructure with various AWS services including EC2, S3, Lambda, and ECS. Skilled in serverless architecture.",
        years: 4,
        proficiency: 88,
      },
      {
        name: "CI/CD",
        description:
          "Setting up automated pipelines with GitHub Actions and Jenkins. Expert in implementing continuous deployment strategies.",
        years: 3,
        proficiency: 86,
      },
      {
        name: "Kubernetes",
        description:
          "Orchestrating container deployments and managing microservices architecture. Experience with Helm charts and custom operators.",
        years: 2,
        proficiency: 80,
      },
    ],
    color: "bg-gradient-to-br from-orange-500 to-amber-500",
    description: "Automating deployment and scaling",
  },
  {
    category: "Database",
    icon: Database,
    items: [
      {
        name: "PostgreSQL",
        description:
          "Designing efficient database schemas and optimizing complex queries. Expert in indexing strategies and performance tuning.",
        years: 4,
        proficiency: 90,
      },
      {
        name: "MongoDB",
        description:
          "Building scalable NoSQL solutions with proper indexing and aggregation pipelines. Experienced in replication and sharding.",
        years: 3,
        proficiency: 85,
      },
      {
        name: "Redis",
        description:
          "Implementing caching strategies and real-time features. Skilled in pub/sub patterns and data structures.",
        years: 2,
        proficiency: 82,
      },
      {
        name: "Prisma",
        description:
          "Creating type-safe database clients and managing migrations. Expert in schema design and relation management.",
        years: 2,
        proficiency: 88,
      },
    ],
    color: "bg-gradient-to-br from-purple-500 to-violet-500",
    description: "Managing and optimizing data storage",
  },
  {
    category: "Tools",
    icon: Github,
    items: [
      {
        name: "Git",
        description:
          "Managing version control with advanced git workflows. Expert in branching strategies and conflict resolution.",
        years: 6,
        proficiency: 95,
      },
      {
        name: "VS Code",
        description:
          "Customizing development environment with extensions and snippets. Creating efficient workflows with shortcuts and tasks.",
        years: 5,
        proficiency: 92,
      },
      {
        name: "Webpack",
        description:
          "Configuring build processes and optimizing bundle sizes. Experience with code splitting and custom loaders.",
        years: 4,
        proficiency: 85,
      },
      {
        name: "Jest",
        description:
          "Writing comprehensive test suites with mock functions and snapshots. Skilled in TDD and test coverage optimization.",
        years: 4,
        proficiency: 88,
      },
    ],
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    description: "Leveraging modern development tools",
  },
  {
    category: "Languages",
    icon: Code2,
    items: [
      {
        name: "JavaScript",
        description:
          "Expert-level knowledge of modern JavaScript including ES6+ features, async programming, and design patterns.",
        years: 7,
        proficiency: 95,
      },
      {
        name: "Python",
        description:
          "Proficient in Python development with focus on data processing, automation, and web applications.",
        years: 4,
        proficiency: 88,
      },
      {
        name: "SQL",
        description:
          "Advanced knowledge of SQL query optimization, stored procedures, and database design principles.",
        years: 5,
        proficiency: 90,
      },
      {
        name: "Bash",
        description:
          "Creating automation scripts and managing Linux systems. Experience with shell scripting and system administration.",
        years: 3,
        proficiency: 82,
      },
    ],
    color: "bg-gradient-to-br from-indigo-500 to-blue-500",
    description: "Mastering multiple programming languages",
  },
];
