import { ReactNode } from "react";

type Skill = {
  name: string;
  type: "language" | "library" | "framework" | "database" | "tool";
  description: ReactNode;
};
export const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    type: "language",
    description:
      "I have 2+ years of experience with it, I used it for building Front-end.",
  },
  {
    name: "React",
    type: "library",
    description:
      "My go-to UI library, with 1.5+ years of building applications with it, be it: dashboards, websites.",
  },
  {
    name: "TypeScript",
    type: "language",
    description:
      "I write anything larger than a Todo app with it, I have a good understanding of the language including: generics, type inference and discrimination",
  },
  {
    name: "Material UI",
    type: "library",
    description:
      "Built 3 dashboards with it. comfortable with its API and styling system, and have a good amount of custom abstractions I've created along the way",
  },
  {
    name: "React Query",
    type: "library",
    description:
      "The solution I use for managing server-side state. I take extra care in organizing query keys to enable optimistic UI and invalidation stale data.",
  },
  {
    name: "Redux Toolkit",
    type: "library",
    description:
      "The solution I use for managing server-side state and for state mangement. I take extra care in organizing query keys to enable optimistic UI and invalidation stale data.",
  },
  {
    name: "Zod",
    type: "library",
    description: "I am using Zod for form validation.",
  },
  {
    name: "Yup",
    type: "library",
    description: "I am using Yup for form validation.",
  },
  {
    name: "Tailwind",
    type: "framework",
    description:
      "I starting to enjoy it from +6 Month, especially with shadcn/ui",
  },
  {
    name: "Radix UI",
    type: "library",
    description:
      "I'm using it via shadcn/ui and pairing it with tailwindcss has been great so far.",
  },
  {
    name: "Git",
    type: "tool",
    description:
      "Very comfortable with it, including branching, solving merge conflicts and rebasing.",
  },
  {
    name: "HTML",
    type: "language",
    description:
      "I've got grasp on the available elements and their semantic uses.",
  },
  {
    name: "CSS",
    type: "language",
    description:
      "Used it in many forms: SASS, and Tailwind, experienced and comfortable with converting designs files to responsive web pages.",
  },
  {
    name: "SASS",
    type: "language",
    description:
      "Used it in the past, although currently the need for it is decreasing as more of it features are getting implemented in CSS",
  },
  {
    name: "Linux",
    type: "tool",
    description: "I use it as my daily OS.",
  },
];
