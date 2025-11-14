import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex justify-center mx-auto">
      <div className="pb-2.5">
      <h1 className="text-white text-2xl md:text-4xl font-medium pt-2.5 pb-5 md:pb-15 text-center">
        Days I <strong className="text-primary">Code</strong>
      </h1>
      <GitHubCalendar
        username="ezdev21"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
    </div>
  );
}

export default Github;
