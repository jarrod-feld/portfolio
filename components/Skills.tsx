"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "vercel",
  "jest",
  "git",
  "github",
  "visualstudiocode",
  "python",
  
];

function Skills() {
  return (
    <div className="my-10 py-20 bg-black">
      <h1 className="heading">
        Skills &amp;{" "}
        <span className="text-red">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
