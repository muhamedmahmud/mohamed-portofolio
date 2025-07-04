"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content, Ultra } from "next/font/google";

const Tab_data = [
  {
    tittle: "Hard Skills",
    id: "hardSkills",
    Content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, Python,
          C++, c#, Java, Assembly.
        </li>
        <li>
          <strong>Frameworks & Libraries:</strong> React.js, Next.js, Bootstrap,
          Tailwind CSS, jQuery
        </li>
        <li>
          <strong>Tools:</strong> Git, GitHub, VS Code, Netlify, Vercel,
          Firebase (Basic), Figma
        </li>
        <li>
          <strong>Core Concepts:</strong> Object-Oriented Programming (OOP),
          Data Structures & Algorithms, Relational Databases, REST APIs
        </li>
      </ul>
    ),
  },
  {
    tittle: "Soft Skills",
    id: "softSkills",
    Content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem Solving</li>
        <li>Presentation</li>
        <li>Time Management</li>
        <li>Adaptability</li>
        <li>Self-Learning</li>
      </ul>
    ),
  },
  {
    tittle: "Education",
    id: "education",
    Content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>B.Sc. in Computer and Information Science</strong> – Ain Shams
          University (2021 – Present)
        </li>
        <li>
          <strong>Front-End Development Diploma</strong> – Route Academy (March
          2024 – September 2024)
        </li>
      </ul>
    ),
  },
  {
    tittle: "Certification",
    id: "certification",
    Content: (
      <ul className="list-disc pl-2">
        <li>
          Front-End Development Diploma – Route Academy (March 2024 – September
          2024)
        </li>
        <li>
          Front-End Internship – CognoRise Info Tech (July 2024 – August 2024)
        </li>
        <li>Programming Basics for Kids – iSchool Instructor Program</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hardSkills");
  const [isPending, startTransition] = useTransition();
  const handleCange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          alt="About-photo"
          src="/imgs/aboutsec.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4  ">About Me</h2>
          <p className="text-base lg:text-lg ">
            Hi, I'm <strong>Mohamed Mahmoud</strong>, a passionate Front-End
            Developer with a strong focus on building modern, responsive web
            applications. Currently pursuing a{" "}
            <strong>B.Sc. in Computer and Information Science</strong>
            at Ain Shams University, I specialize in using{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>, and
            <strong>JavaScript</strong> to create dynamic user experiences.
            <br />
            I'm always eager to learn new technologies and take on challenging
            projects that help me grow as a developer.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleCange("hardSkills")}
              active={tab === "hardSkills"}
            >
              Hard Skills
            </TabButton>
            <TabButton
              selectTab={() => handleCange("softSkills")}
              active={tab === "softSkills"}
            >
              Soft Skills
            </TabButton>
            <TabButton
              selectTab={() => handleCange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleCange("certification")}
              active={tab === "certification"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_data.find((t) => t.id === tab)?.Content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
