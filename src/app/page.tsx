import Image from "next/image";
import Phone from "./_components/Phone";
import Email from "./_components/Email";
import Address from "./_components/Address";
import Mods from "./_components/Mods";
import AnimatedDiv from "./_components/AnimateDiv";
import Linkedin from "./_components/Linkden";
import Github from "./_components/Github";
function H2({ title }: { title: string }) {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white">
      {title}
    </h2>
  );
}

function H3({ title }: { title: string }) {
  return (
    <h3 className="font-medium text-base md:text-lg lg:text-xl  dark:text-gray-300">
      {title}
    </h3>
  );
}
function H3Justify({ title }: { title: string }) {
  return (
    <h3 className="font-medium text-base md:text-lg lg:text-xl text-justify dark:text-gray-300">
      {title}
    </h3>
  );
}

function H3Bold({ title }: { title: string }) {
  return (
    <h3 className="font-bold text-base md:text-lg lg:text-xl dark:text-white">
      {title}
    </h3>
  );
}

const skills = [
  "Next Js",
  "React",
  "Preact",
  "Astro",
  "Tailwind",
  "Drizzle",
  "Mongoose",
  "Typescript",
  "Javascript",
  "Git",
  "Payload CMS", 
];

const workExperience = [
  {
    title: "Software Engineer (Web Developer)",
    company: "Fantech Labs",
    dates: "September 2023 – Present",
    responsibilities:
      "At Fantech Labs, I have contributed to various web development projects, focusing primarily on front-end development. I utilized my skills in Next.js, React, Preact, Astro, Tailwind CSS, Drizzle, and Mongoose to develop robust web applications and implemented scalable solutions using TypeScript and JavaScript. Collaborating with cross-functional teams, I delivered high-quality software and gained experience in handling backend tasks within the Next.js framework using Drizzle and Mongoose. Additionally, I developed and maintained responsive, user-friendly websites.",
  },
  {
    title: "Freelance Web Developer",
    company: "Various Clients",
    dates: "2023 – Present",
    responsibilities:
      "As a freelance web developer, I have completed several personal projects for different clients, building and deploying web applications tailored to their specifications. I provided end-to-end development solutions, from initial consultation and design to implementation and maintenance. This experience has enhanced my expertise and kept me up-to-date with the latest industry trends and technologies.",
  },
];

const projects = [
  {
    title: "PDX Shuttle Service",
    description:
      "Built a shuttle service booking platform using Next.js and Tailwind CSS. Features include booking forms, Stripe payment integration, and email notifications for clients. The project includes four pages and enables users to book shuttle services efficiently.",
    liveLink: "https://www.pdxairportshuttle.com/", // Replace with actual live link
  },
  {
    title: "FYP Submission Portal",
    description:
      "Developed a comprehensive FYP submission platform with Next.js, Tailwind CSS, MongoDB, Mongoose, and Cloudinary. Features include student registration, FYP submission, admin and supervisor management, notifications, chat for ongoing FYPs, and role-based access control.",
    liveLink: "https://uo-fyp-portal.vercel.app/", // Replace with actual live link
  },
];

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto py-16 px-4 lg:px-8 text-black dark:text-white  ">
      <Mods />
      <div className="w-full relative overflow-hidden rounded-xl border flex flex-col gap-10 py-5 px-3 sm:px-5 lg:px-10 lg:py-12 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
      <AnimatedDiv/>
        <div className="flex flex-col gap-2 text-center lg:text-start z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl p-2 bg-gray-100 dark:bg-gray-700 font-bold w-full mx-auto tracking-wide">
            Mussaddiq Mahmood
          </h1>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold  px-2">
            Software Engineer and Web Developer
          </h4>
        </div>
        <div className="flex flex-col gap-7 px-2 z-10">
          <H2 title="SUMMARY" />
          <H3Justify title="Results-driven Software Engineer specializing in full-stack development with expertise in Next.js, React, Preact, and Astro. Proven track record of delivering robust web applications with a focus on front-end and back-end technologies. Experienced in working with TypeScript, JavaScript, and modern web frameworks. Eager to contribute to dynamic development environments." />
        </div>
            <div className="flex gap-10 justify-around w-full items-center mx-auto py-2 border-y-[2px] border-black dark:border-white">
              <a href="tel:03067663989" className="flex items-center gap-3">
                <div className="hidden dark:flex">
                  <Phone dark={true} />
                </div>
                <div className="flex dark:hidden">
                  <Phone dark={false} />
                </div>
              </a>
              <a
                href="mailto:mussaddiqmahmood7@gmail.com"
                className="flex items-center gap-3"
              >
                <div className="hidden dark:flex">
                  <Email dark={true} />
                </div>
                <div className="flex dark:hidden">
                  <Email dark={false} />
                </div>
              </a>
              <a
                href="https://github.com/mussaddiqmahmood7"
                className="flex items-center gap-3"
              >
                <div className="hidden dark:flex">
                  <Github dark={true} />
                </div>
                <div className="flex dark:hidden">
                  <Github dark={false} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mussaddiq-mahmood"
                className="flex items-center gap-3"
              >
                <div className="hidden dark:flex">
                  <Linkedin dark={true} />
                </div>
                <div className="flex dark:hidden">
                  <Linkedin dark={false} />
                </div>
              </a>
             
            </div>
         

          <div className="w-full flex flex-col gap-7">
            <H2 title="EDUCATION" />
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <H3Bold title="Bachelor of Science in Computer Science" />
                <H3 title="University of Okara" />
                <H3 title="2020 - 2024" />
              </div>
              <div className="flex flex-col">
                <H3Bold title="Intermediate in Computer Science" />
                <H3 title="Punjab Group Of Colleges Chishtian" />
                <H3 title="2018 - 2020" />
              </div>
            </div>
          </div>
          
        
        <div className="w-full h-[2px] rounded-full bg-black dark:bg-white z-10"></div>
        <div className="w-full flex flex-col gap-7 z-10">
          <H2 title="SKILLS" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((item, index) => (
              <div
                className="flex font-medium items-center gap-3 dark:text-white"
                key={index}
              >
                <div className="size-2 rounded-full bg-black dark:bg-white"></div>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] rounded-full bg-black dark:bg-white z-10"></div>
        <div className="w-full flex flex-col gap-7 z-10">
          <H2 title="WORK EXPERIENCE" />
          <div className="flex flex-col gap-5">
            {workExperience.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-lg font-bold bg-gray-100 dark:bg-gray-700">
                  {item.title}
                </h3>
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <h3 className="text-lg font-semibold">{item.dates}</h3>
                <div className="mt-1 text-justify dark:text-gray-300">
                  {item.responsibilities}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] rounded-full bg-black dark:bg-white z-10"></div>
        <div className="w-full flex flex-col gap-7 z-10">
          <H2 title="PROJECTS" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Note: The following projects are just my personal projects not company.
          </p>
          <div className="flex flex-col gap-5">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col">
                <H3Bold title={project.title} />
                <H3 title={project.description} />
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Live
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
