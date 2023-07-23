const Chat = ({ owner, content }) => {
  return (
    <div className={`flex items-end gap-3 ${owner ? "flex-row-reverse" : ""}`}>
      {!owner && (
        <div className="avatar m-0 h-10 w-10 rounded-full text-sm">
          <h2 className="uppercase">A</h2>
        </div>
      )}
      <div
        className={`max-w-[400px] rounded-lg ${
          owner
            ? "mr-1 bg-blue-300 text-slate-50"
            : "bg-green-200 text-slate-500"
        } px-3 py-1 font-bold`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Chat;
