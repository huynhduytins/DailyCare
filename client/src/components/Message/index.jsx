import { Input, TextField } from "@mui/material";
import Chat from "./Chat";
import { FcAddImage } from "react-icons/fc";
import { AiOutlineSend } from "react-icons/ai";

const Message = () => {
  return (
    <>
      <div className="h-[550px] w-full overflow-auto">
        <div className="flex flex-col gap-5">
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
          <Chat /> <Chat owner={true} />
        </div>
      </div>
      <div className="relative mt-16">
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          className="h-[10px] w-full text-lg"
          placeholder="Type message..."
        />
        <input type="file" id="file" className="invisible" />
        <label htmlFor="file" className="absolute top-2 right-12">
          <FcAddImage className="text-xl" />
        </label>
        <button className="absolute top-2 right-2 text-xl">
          <AiOutlineSend className="text-blue-500" />
        </button>
      </div>
    </>
  );
};

export default Message;
