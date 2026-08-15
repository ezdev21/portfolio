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
      "Collaborated with cross-functional teams to design, execute, and deliver scalable enterprise-grade solutions.",
      "Enhanced maintainability of the administration dashboard through comprehensive code reviews, refactoring, diagnosing and resolving complex database issues",
      "Architected responsive, accessible, and mobile-first user interfaces to deliver seamless, intuitive digital experiences.",
      "Proposed improvements to code organization to improve code quality and overall performance.",
      "Designed and developed a suite of high-performance reporting modules, empowering users with data-driven decision-making tools and real-time metrics.",
    ],
  },
  {
    company: "BIRITU DIGITAL SAVING AND COOP",
    position: "Software Developer",
    date: "Sep 2024 - Feb 2025",
    responsibilities: [
      "Designed and maintained well-documented APIs for mobile application services, ensuring seamless integration and scalability.",
      "Architected and delivered a high-performance administration dashboard for digital savings and cooperative management, streamlining workflows for administrators.",
      "Developed the cross-platform mobile application for Biritu from scratch using React Native, leading the project through its initial launch phase.",
      "Mentored interns on software engineering fundamentals, driving excellence in code quality, system design, and API development.",
    ],
  },
  {
    company: "POOL TAXI",
    position: "Full-stack Developer",
    date: "Jun 2023 - Sep 2024",
    responsibilities: [
      "Built integrations for appropriate map services, SMS services, and payment gateways.",
      "Integrated core features like achievements, spin and win lottery system, backup system",
      "Managed software deployments to vps and cloud platforms, including testing features and correcting code",
      "Completed several tasks with deadlines, which let me adapt to working under a tight deadline and learn how to divide/prioritize tasks.",
    ],
  },
  {
    company: "MADOT SOLUTIONS",
    position: "Junior Full-stack Developer",
    date: "Dec 2021 - Sep 2022",
    responsibilities: [
      "Contributed to the development of Logistics Systems and Lideta Health Science College website, with UI improvement and API development.",
      "Developed and maintained user interfaces using modern frameworks like React.js, Vue.js, Bootstrap and Tailwindcss.",
      "Designed and implemented backend features, including authentication, authorization and database architecture of application.",
      "Gathered, documented, and maintained software requirements throughout the project lifecycle.",
      "Converted design prototypes created in Figma into functional, dynamic web components using React and Tailwindcss.",
    ],
  },
  {
    company: "FREELANCE",
    position: "Freelance Developer",
    date: "Jan 2023 - Present",
    responsibilities: [
      "Delivered and supported custom web applications and sites for varied clients utilizing adaptable technology stacks.",
      "Resolved critical bugs and delivered feature enhancements across diverse client applications, ensuring high system stability and client satisfaction.",
      "Designed and developed custom, responsive portfolio websites that empower clients to professionally showcase their work and personal brands.",
      "Diagnosed and resolved deployment failures across applications, ensuring reliable and seamless releases.",
    ],
  },
];

export default experiences;
