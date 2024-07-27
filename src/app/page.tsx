import Image from "next/image";
import Phone from "./_components/Phone";
import Email from "./_components/Email";
import Address from "./_components/Address";

function H2({ title }: { title: string }) {
  return <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>;
}

function H3({ title }: { title: string }) {
  return <h3 className="font-medium text-base md:text-lg lg:text-xl text-justify">{title}</h3>;
}

function H3Bold({ title }: { title: string }) {
  return <h3 className="font-bold text-base md:text-lg lg:text-xl">{title}</h3>;
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
  "Git",  // Added skill
  "Payload CMS" // Added skill
];

const workExperience = [
  {
    title: "Software Engineer (Web Developer)",
    company: "Fantech Labs",
    dates: "September 2023 – Present",
    responsibilities: 'At Fantech Labs, I have contributed to various web development projects, focusing primarily on front-end development. I utilized my skills in Next.js, React, Preact, Astro, Tailwind CSS, Drizzle, and Mongoose to develop robust web applications and implemented scalable solutions using TypeScript and JavaScript. Collaborating with cross-functional teams, I delivered high-quality software and gained experience in handling backend tasks within the Next.js framework using Drizzle and Mongoose. Additionally, I developed and maintained responsive, user-friendly websites.'
  },
  {
    title: "Freelance Web Developer",
    company: "Various Clients",
    dates: "2023 – Present",
    responsibilities: 'As a freelance web developer, I have completed several personal projects for different clients, building and deploying web applications tailored to their specifications. I provided end-to-end development solutions, from initial consultation and design to implementation and maintenance. This experience has enhanced my expertise and kept me up-to-date with the latest industry trends and technologies.',
  },
];

const projects = [
  {
    title: "Umrah Crown Project",
    description: "Developed a website using Next.js and Tailwind CSS where users can request Umrah after booking a form. The platform includes an admin panel for managing hotels, packages, blogs, and a shop page for adding, updating, or removing products. Users can purchase products, and the admin can manage product inventory.",
    liveLink: "https://example.com/umrah-crown", // Replace with actual live link
  },
  {
    title: "PDX Shuttle Service",
    description: "Built a shuttle service booking platform using Next.js and Tailwind CSS. Features include booking forms, Stripe payment integration, and email notifications for clients. The project includes four pages and enables users to book shuttle services efficiently.",
    liveLink: "https://example.com/pdx-shuttle", // Replace with actual live link
  },
  {
    title: "FYP Submission Portal",
    description: "Developed a comprehensive FYP submission platform with Next.js, Tailwind CSS, MongoDB, Mongoose, and Cloudinary. Features include student registration, FYP submission, admin and supervisor management, notifications, chat for ongoing FYPs, and role-based access control.",
    liveLink: "https://example.com/fyp-submission", // Replace with actual live link
  },
];

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto py-6 lg:py-12 px-4 lg:px-8 text-black">
      <div className="w-full rounded-xl border flex flex-col gap-8 py-5 px-3 sm:px-5 lg:px-10 lg:py-12 bg-white shadow-md">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl p-2 bg-gray-100 font-bold w-fit mx-auto tracking-wide">
            Mussaddiq Mahmood
          </h1>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide px-2">
            Software Engineer and Web Developer
          </h4>
        </div>
        <div className="flex flex-col gap-7 px-2">
          <H2 title="SUMMARY" />
          <H3 title="Results-driven Software Engineer specializing in full-stack development with expertise in Next.js, React, Preact, and Astro. Proven track record of delivering robust web applications with a focus on front-end and back-end technologies. Experienced in working with TypeScript, JavaScript, and modern web frameworks. Eager to contribute to dynamic development environments." />
        </div>
        <div className="w-full h-[2px] rounded-full bg-black"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
          <div className="w-full flex flex-col gap-7">
            <H2 title="EDUCATION" />
            <div className="flex flex-col gap-2">
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
          <div className="w-full flex flex-col gap-7">
            <H2 title="CONTACT" />
            <div className="flex flex-col gap-2">
              <a href="tel:03067663989" className="flex items-center gap-3">
                <Phone dark={false} />
                <H3 title="03067663989" />
              </a>
              <a
                href="mailto:mussaddiqmahmood7@gmail.com"
                className="flex items-center gap-3"
              >
                <Email dark={false} />
                <H3 title="mussaddiqmahmood7@gmail.com" />
              </a>
              <div className="flex items-center gap-3">
                <Address dark={false} />
                <H3 title="Okara, Punjab Pakistan" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] rounded-full bg-black"></div>
        <div className="w-full flex flex-col gap-7">
          <H2 title="SKILLS" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((item, index) => (
              <div className="flex font-medium items-center gap-3" key={index}>
                <div className="size-2 rounded-full bg-black"></div>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] rounded-full bg-black"></div>
        <div className="w-full flex flex-col gap-7">
          <H2 title="WORK EXPERIENCE" />
          <div className="flex flex-col gap-5">
            {workExperience.map((item, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-lg font-bold bg-gray-100">{item.title}</h3>
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <h3 className="text-lg font-semibold">{item.dates}</h3>
                <div className="mt-1 text-justify">
                  {item.responsibilities}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] rounded-full bg-black"></div>
        <div className="w-full flex flex-col gap-7">
          <H2 title="PROJECTS" />
          <p className="text-sm text-gray-600">
            Note: The following projects are personal and not related to my work at Fantech Labs due to company policy.
          </p>
          <div className="flex flex-col gap-5">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col">
                <H3Bold title={project.title} />
                <H3 title={project.description} />
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
