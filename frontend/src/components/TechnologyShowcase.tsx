"use client";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiBootstrap,
  SiGithub,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiGit,
  SiDocker,
  SiGo,
  SiFramer,
  SiPostman,
  // SiGraphql,
  // SiPostgresql,
} from "react-icons/si";

export default function TechnologyShowcase() {
  const frontendItems = [
    { name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS", Icon: SiCss3, color: "text-[#1572B6]" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-[#000000]" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
    { name: "Framer", Icon: SiFramer, color: "text-[#000000]" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952B3]" },
  ];

  const backendItems = [
    { name: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express.js", Icon: SiExpress, color: "text-[#000000]" },
    { name: "GoLang", Icon: SiGo, color: "text-[#00ADD8]" },
  ];

  const databaseItems = [
    { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", Icon: SiMysql, color: "text-[#4479A1]" },
    { name: "Firebase", Icon: SiFirebase, color: "text-[#FFCA28]" },
    // { name: "GraphQL", Icon: SiGraphql, color: "text-[#E10098]" },
    // { name: "PostgreSQL", Icon: SiPostgresql, color: "text-[#336791]" }
  ];

  const toolsItems = [
    { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Figma", Icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "Git", Icon: SiGit, color: "text-[#F05032]" },
    { name: "Github", Icon: SiGithub, color: "text-[#181717]" },
    { name: "GitHub Actions", Icon: SiGithub, color: "text-[#2088FF]" },
    { name: "Postman", Icon: SiPostman, color: "text-[#FF6C37]" },
  ];

  function renderCategory(
    title: string,
    items: {
      name: string;
      Icon: React.ComponentType<{ className?: string }>;
      color: string;
    }[]
  ) {
    const sorted = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center uppercase">
          {title}
        </h2>

        <motion.ul
          role="list"
          className="flex flex-wrap justify-center gap-6 text-center"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {sorted.map(({ name, Icon, color }) => (
            <motion.li
              key={name}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div
                className={`w-14 h-14 rounded-full mx-3 bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-transform transform hover:scale-105`}
                aria-hidden="true"
                title={name}
              >
                <Icon className={`text-4xl ${color}`} aria-hidden="true" />
              </div>
              <span className="mt-2 text-sm text-center">{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  }

  return (
    <>
      {renderCategory("Front End", frontendItems)}

      <div className="flex flex-row flex-wrap justify-center items-start gap-0 lg:gap-24">
        <div className="w-full sm:w-[20rem]">
          {renderCategory("Back End", backendItems)}
        </div>

        <div className="w-full sm:w-[20rem]">
          {renderCategory("Database", databaseItems)}
        </div>
      </div>

      {renderCategory("Tools", toolsItems)}
    </>
  );
}
