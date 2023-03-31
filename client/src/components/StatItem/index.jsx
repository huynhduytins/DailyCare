const StatItem = ({ num, text, icon }) => {
  return (
    <article
      className={`rounded border-b-[5px] ${
        text === "Urgent Patient"
          ? "border-red-500"
          : text === "Pending Patients"
          ? "border-yellow-500"
          : "border-blue-500"
      } bg-white px-8 py-10`}
    >
      <header className="flex items-center justify-between">
        <span
          className={`text-5xl font-bold ${
            text === "Urgent Patient"
              ? "text-red-500"
              : text === "Pending Patients"
              ? "text-yellow-500"
              : "text-blue-500"
          }`}
        >
          {num}
        </span>
        <span
          className={`flex h-[50px] w-[60px] items-center justify-center rounded ${
            text === "Urgent Patient"
              ? "bg-red-200"
              : text === "Pending Patients"
              ? "bg-yellow-200"
              : "bg-blue-200"
          }`}
        >
          {icon}
        </span>
      </header>
      <h5 className="m-0 mt-4 text-left text-xl capitalize tracking-wider">
        {text}
      </h5>
    </article>
  );
};

export default StatItem;
