"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "expo",
  "jest",
  "appstore",
  "apple",
  "postgresql",
  "sqlite",
  "django",
  "python",
  "eslint",
  "prettier",
  "git",
  "github",
  "mui",
  "html5",
  "css3",
  "vercel",
];

function Skills() {
  return (
    <div className="my-10 py-20 bg-black" id="skills">
      <h1 className="heading">
        Skills &amp;{" "}
        <span className="text-red-500">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
