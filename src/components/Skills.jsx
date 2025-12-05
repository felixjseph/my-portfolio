import React from "react";
import { Cpu, Globe, Database, Laptop } from "lucide-react";

const ServiceCard = ({ title, icon: Icon, children }) => (
  <div className="group p-6 max-w-xs md:max-w-sm w-full mx-auto rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
    {Icon && (
      <div className="flex justify-left md:justify-start mb-3 text-green-500 ease-in-out duration-300 group-hover:scale-105">
        <Icon className="w-12 h-12" />
      </div>
    )}
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{children}</p>
  </div>
);



const SkillCard = ({ title, skills }) => (
  <div className="p-4 max-w-xs md:max-w-sm w-full mx-auto rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 mb-3">
    <h4 className="font-semibold text-xl mb-6">{title}</h4>

    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-3 group">
          <img
            src={skill.icon}
            alt={skill.label}
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-125"
          />
          <span className="text-slate-700 text-sm">{skill.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-12 max-w-6xl mx-auto px-4">
        <div className="text-center">
            <h1 className="relative bottom-8 text-6xl md:text-6xl bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent font-extrabold mb-3">
            Technical Skills
            </h1>
            <div className="relative bottom-7 w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
                <p className="text-slate-600 text-lg md:text-base mb-18">
                    A diverse set of technologies and tools I work with to bring ideas to life.
                </p>
        </div>

        {/*<div className="grid md:grid-cols-3 gap-6 mb-6">
            <ServiceCard
            title="Full Stack Web Development"
            icon={Globe}
            >
            Modern web applications built with cutting-edge technologies and best practices.
            </ServiceCard>

            <ServiceCard
            title="Frontend & Mobile Development"
            icon={Laptop}
            >
            Interactive and responsive user interfaces with React and mobile-first design.
            </ServiceCard>

            <ServiceCard
            title="Backend & Database"
            icon={Database}
            >
            Scalable server-side solutions, RESTful APIs, and solid database design.
            </ServiceCard>
        </div>*/}

        {/*<div className="text-center flex justify-center mt-6">
            <h1 className="text-2xl md:text-2xl bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-extrabold flex items-center gap-2 mb-2 mt-2">
                <Cpu className="w-6 h-6 text-purple-400"/>
            Tech Stack
            </h1>
        </div>*/}

        <div className="grid md:grid-cols-5 gap-4">
        <SkillCard
          title="Frontend"
          skills={[
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              label: "HTML5",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              label: "CSS3",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "JavaScript",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              label: "React",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
              label: "Vite",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
              label: "Tailwind CSS",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
              label: "Axios",
            },
             {
              icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
              label: "React Router",
            },
          ]}
        />

        <SkillCard
          title="Backend"
          skills={[
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              label: "Node.js",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
              label: "Spring Boot",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
              label: "Django",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              label: "Java",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
              label: "Kotlin",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
              label: "Oauth2",
            },
          ]}
        />

        <SkillCard
          title="Database & Mobile"
          skills={[
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              label: "MySQL",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              label: "PostgreSQL",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
              label: "AWS RDS",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
              label: "Android Studio",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original-wordmark.svg",
              label: "Jetpack Compose",
            },
          ]}
        />

        <SkillCard
          title="Tools"
          skills={[
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              label: "GitHub",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              label: "Docker",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
              label: "Figma",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
              label: "Vercel",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
              label: "Trello",
            },
             {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
              label: "Postman",
            },
          ]}
        />

        <SkillCard
          title="Others"
          skills={[
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
              label: "Adobe Illustrator",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
              label: "Adobe Photoshop",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
              label: "Adobe Premiere Pro",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
              label: "Notion",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
              label: "VS Code",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
              label: "IntelliJ IDEA",
            },
            {
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
              label: "Git",
            },
          ]}
        />
      </div>
            <div className="text-center">
                 <p className="text-slate-600 text-md md:text-base mt-8 md:mt-6 italic">
                    Always learning and expanding my skillset...
                </p>
            </div>
    </section>
  );
}
