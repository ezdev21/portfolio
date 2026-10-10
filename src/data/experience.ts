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
      "Designed and developed high-performance reporting modules that gave users real-time metrics and data-driven decision-making tools.",
      "Improved maintainability of the administration dashboard through systematic code reviews, refactoring, and resolving complex database issues.",
      "Led the investigation and resolution of production incidents, performance bottlenecks, database issues, and deployment failures, driving improvements in system reliability, performance, and operational stability.",
      "Owned delivery of multiple production features from technical design through deployment while coordinating priorities and resolving implementation blockers.",
    ],
  },
  {
    company: "BIRITU DIGITAL SAVING AND COOP",
    position: "Software Developer",
    date: "Sep 2024 - Feb 2025",
    responsibilities: [
      "Designed and delivered 50+ production-ready APIs for the mobile application, focusing on performance, reliable data flow, and clear documentation.",
      "Architected and shipped a high-performance administration dashboard for digital savings and cooperative management, streamlining day-to-day workflows for administrators.",
      "Built the cross-platform mobile application for Biritu from scratch using React Native and led it through the initial launch.",
      "Mentored junior engineers and interns, providing guidance on software architecture, API design, code quality, debugging and development practices.",
    ],
  },
  {
    company: "POOL TAXI",
    position: "Full-stack Developer",
    date: "Jun 2023 - Sep 2024",
    responsibilities: [
      "Developed robust APIs for a ride-hailing platform that scaled to 25k+ active drivers and passengers, enabling seamless cross-platform mobile integration and real-time data sync.",
      "Designed integrations with payment gateways, SMS providers, mapping services and third-party APIs.",
      "Implemented key product features including achievements, spin-and-win lottery, and backup systems.",
      "Managed deployments to VPS and cloud environments, including feature testing and production bug fixes.",
      "Designed and optimized backend architecture for core ride-hailing workflows, improving API performance, data reliability, and scalability while supporting seamless integration with cross-platform mobile clients.",
    ],
  },
  {
    company: "MADOT SOLUTIONS",
    position: "Junior Full-stack Developer",
    date: "Dec 2021 - Sep 2022",
    responsibilities: [
      "Designed and implemented backend features including authentication, authorization, and database architecture.",
      "Built and maintained user interfaces with React.js, Vue.js, Bootstrap, and Tailwind CSS.",
      "Converted Figma design prototypes into functional, dynamic web components using React and Tailwind stacks.",
      "Contributed to Logistics Systems and the Lideta Health Science College website through UI improvements and API development.",
      "Gathered, documented, and maintained software requirements throughout the project lifecycle.",
    ],
  },
  {
    company: "FREELANCE",
    position: "Freelance Developer",
    date: "Jan 2023 - Present",
    responsibilities: [
      "Owned end-to-end delivery of custom software projects, working directly with clients from requirements gathering and technical design through implementation, deployment and production support.",
      "Resolved critical bugs and shipped feature enhancements across client applications, improving system stability and client satisfaction.",
      "Designed and developed custom responsive portfolio websites that helped clients professionally showcase their work and personal brands.",
      "Maintained and contributed to open-source projects on GitHub focusing on clean code, documentation, and reusable components.",
    ],
  },
];

export default experiences;
