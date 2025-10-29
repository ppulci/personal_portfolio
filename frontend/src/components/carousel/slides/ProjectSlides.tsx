import React from "react";
import ProjectSlide from "./ProjectSlideTemplate";

export const ProjectSlides = [
  <ProjectSlide
    key="slide-1"
    title="Deepslate Tweaks"
    date="Created June 2022"
    description="
          Deepslate Tweaks is a Minecraft mod made with Java, using popular open
          source modding API's. It adds a quality-of-life improvements to the
          game, centered around the exploration players do while digging in the
          depths of their worlds. Gone are the days of spending precious time
          mining boring blocks of deepslate. With Deepslate Tweaks, you can
          avoid a tedious time sink that gets in the way of your fun. Available
          for download on both CurseForge and Modrinth!"
    techStack={["Java", "Gradle", "Forge API", "Fabric API", "IntelliJ IDEA"]}
    pageLink="https://github.com/ppulci/deepslatetweaks_forge"
    image="/deepslate_tweaks_logo.png"
    badges={true}
  />,
  <ProjectSlide
    key="slide-2"
    title="The Grate Escape!"
    date="Created August 2021"
    description="
          The Grate Escape is a vertical arcade platformer where you play as a
          piece of cheese climbing through the depths of a grater. It features
          an infinitely scrolling level with procedurally generated enemy 
          placements, ensuring every run feels unique! Built using
          Unity with C# and featuring original artwork and a custom soundtrack.
          Be sure to check out the adorable little cheeses and take part in the
          climb to see yourself out of the grate -- and onto the leaderboards!"
    techStack={["C#", "Unity", "Google Game Services", "Photoshop", "Audacity"]}
    pageLink="https://github.com/ppulci/TheGrateEscape"
    image="/TGE_main_menu.png"
    picHeight={325}
    picWidth={325}
  />,
  <ProjectSlide
    key="slide-3"
    title="Chrollo, Playable Character"
    date="Created April 2025"
    description="
          A custom character mod for the game Don't Starve Together,
          inspired by Chrollo Lucilfer from the anime Hunter x Hunter. This mod
          adds a new playable character with unique abilities and stats,
          enhancing the gameplay experience for players. The character features
          custom sprites, animations, and sound effects, all designed to fit
          seamlessly into the game's art style. Dive into the world of
          Don't Starve Together with Chrollo and explore new strategies and
          playstyles!"
    techStack={["Lua Programming Language", "Don't Starve Mod Tools", "Spriter", "Photoshop"]}
    pageLink="https://github.com/ppulci/DST_Custom_Character_Chrollo"
    image="/chrollo_dst_portrait.png"
  />,
  <ProjectSlide
    key="slide-4"
    title="Portfolio Website"
    date="Created September 2025"
    description="
        A personal portfolio website that I built myself (psst... it&apos;s
        the one you&apos;re on right now). It showcases my professional
        experience, projects, and technical skills. The frontend is built with
        React, TailwindCSS, Next.js, and Framer Motion for animations, while
        the backend runs on a Gin server written in Go. The site includes
        a few animations and a touch of personality to bring it all together."
    techStack={["React", "Next.js", "TailwindCSS", "Framer Motion", "TypeScript"]}
    pageLink="https://github.com/ppulci/Personal-Portfolio"
    image="/website_portfolio_code.png"
    picHeight={350}
    picWidth={350}
  />,
];

export default ProjectSlides;
