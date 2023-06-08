const ButtonClient = ({ children, color }) => {
  return (
    <button
      className={`bg-[${color}] flex items-center gap-2 rounded-lg py-3 px-5 font-semibold text-white`}
    >
      {children}
    </button>
  );
};

export default ButtonClient;
