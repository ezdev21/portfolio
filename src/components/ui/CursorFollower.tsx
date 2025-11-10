import { useEffect, useState } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen text-white pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    >
      <div className="w-10 h-10 rounded-full border-2 border-white animate-pulse flex justify-center items-center">
         <div className="rounded-full w-2 h-2 bg-white"></div>
      </div>
    </div>
  );
};

export default CursorFollower;
