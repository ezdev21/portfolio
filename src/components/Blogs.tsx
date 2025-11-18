
interface Blog {
  id: number;
  title: string;
  date: string;
  summary: string;
  url: string;
}

const Blogs = () => {
  const blogData: Blog[] = [
    {
      id: 1,
      title: "Understanding React Hooks",
      date: "2025-11-16",
      summary: "A deep dive into React Hooks and how they can improve your code.",
      url: "https://example.com/react-hooks",
    },
    {
      id: 2,
      title: "TypeScript Tips for React",
      date: "2025-10-10",
      summary: "Learn best practices for using TypeScript with React.",
      url: "https://example.com/typescript-react",
    },
    {
      id: 3,
      title: "Building a Portfolio Website",
      date: "2025-09-05",
      summary: "Step-by-step guide to building your personal portfolio website.",
      url: "https://example.com/portfolio-website",
    },
  ];

  return (
    <div className="card py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">My Blogs</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-secondary rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
            <p className="text-gray-500 mb-4">{blog.summary}</p>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
