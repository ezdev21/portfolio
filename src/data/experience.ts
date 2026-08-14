interface Experience {
  company: string;
  position: string;
  date: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "HADDIS ART",
    position: "Full-stack Developer",
    date: "Feb 2025 - Sep 2025",
    responsibilities: [
      "Coordinated with multi-disciplinary teams to design, execute, and deploy government solutions.",
      "Improved product speed and quality by revising and refactoring code written by less experienced developers.",
      "Designed and implemented mobile-first, user-friendly UI designs for responsive and accessible websites.",
      "Proposed improvements to code organization to improve code quality and overall performance.",
      "Debugged complex issues across the API and database using logs and dev-tools.",
    ],
  },
  {
    company: "BIRITU DIGITAL SAVING AND COOP",
    position: "Software Developer",
    date: "Sep 2024 - Feb 2025",
    responsibilities: [
      "Wrote easy-to-understand, documented API for the mobile app using Postman Collections.",
      "Involved in all phases of the Software Development Life Cycle, including user interface, API development, deployment, and mobile application development.",
      "Led the development of an easy-to-use and optimized administration dashboard for administrators.",
      "Launched cross platform mobile application of Biritu using React Native.",
      "Mentored interns, providing guidance on coding practices, design, and API development."
    ],
  },
  {
    company: "POOL TAXI",
    position: "Full-stack Developer",
    date: "Jun 2023 - Sep 2024",
    responsibilities: [
      "Built integrations for appropriate map services, SMS services, and payment gateways.",
      "Worked directly with the headquarters located in Nairobi, Kenya, using remote development technologies.",
      "Integrated core features like achievements, spin and win lottery system, backup system",
      "Managed large-scale software deployments to cloud platforms, including testing features and correcting code",
      "Completed several tasks with deadlines, which let me adapt to working under a tight deadline and learn how to divide/prioritize tasks."
    ],
  },
  {
    company: "MADOT SOLUTIONS",
    position: "Junior Full-stack Developer",
    date: "Dec 2021 - Sep 2022",
    responsibilities: [
      "Contributed to the development of Logistics Systems and Lideta Health Science College website, with UI improvement and API development",
      "Developed and maintained user interfaces using modern frameworks like React.js, Vue.js, Bootstrap and Tailwindcss.",
      "Designed and implemented backend features, including authentication, authorization and database architecture of application.",
      "Gathered, documented, and maintained software requirements throughout the project lifecycle.",
      "Converted design prototypes created in Figma into functional, dynamic web components using React and Tailwindcss."
    ],
  },
  {
    company: "FREELANCE",
    position: "Freelance Developer",
    date: "Jan 2023 - Present",
    responsibilities: [
      "Developed and maintained websites and web applications for various clients using different technologies",
      "Fixed small tasks and bugs for different clients on their existing applications in Freelance Ethiopia Afriwork.",
      "Developed portfolio websites for clients to showcase their work and skills.",
      "Fixed deployment issues for different clients on their applications hosted on various cloud platforms."
    ]
  },
];

export default experiences;
