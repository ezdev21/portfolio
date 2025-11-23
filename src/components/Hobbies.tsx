import {
  FaCamera,
  FaHiking,
  FaBook,
  FaCode,
  FaMusic,
  FaDumbbell,
  FaGamepad,
} from "react-icons/fa";

interface Hobby {
  title: string;
  description: string;
  icon: JSX.Element;
}

const hobbies: Hobby[] = [
  {
    title: "Photography",
    description: "Capturing moments and exploring creative perspectives.",
    icon: <FaCamera className="text-4xl text-primary-foreground" />,
  },
  {
    title: "Hiking",
    description: "Enjoying nature and staying active outdoors.",
    icon: <FaHiking className="text-4xl text-primary-foreground" />,
  },
  {
    title: "Reading",
    description: "Diving into books on tech, psychology, and fantasy.",
    icon: <FaBook className="text-4xl text-primary-foreground" />,
  },
  {
    title: "Gaming",
    description: "Playing story-rich and competitive games to unwind.",
    icon: <FaGamepad className="text-4xl text-primary-foreground" />,
  },
  {
    title: "Music",
    description: "Listening to and discovering new genres.",
    icon: <FaMusic className="text-4xl text-primary-foreground" />,
  },
  {
    title: "Fitness",
    description: "Staying active through workouts and strength training.",
    icon: <FaDumbbell className="text-4xl text-primary-foreground" />,
  },
];

const Hobbies = () => {
  return (
    <section className="card py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        My Hobbies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="p-6 bg-secondary rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              {hobby.icon}
              <h3 className="text-xl font-semibold">{hobby.title}</h3>
            </div>
            <p className="text-gray-400">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
