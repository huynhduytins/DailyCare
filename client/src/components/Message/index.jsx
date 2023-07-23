import { TextField } from "@mui/material";
import Chat from "./Chat";
import { FcAddImage } from "react-icons/fc";
import { AiOutlineSend } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";
import { useEffect, useRef, useState } from "react";

const Message = ({ info }) => {
  const [messages, setMessage] = useState([]);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="h-[440px] w-full overflow-auto bg-slate-50 px-10">
        <div className="mb-2 flex flex-col gap-3">
          <div className="mt-12 flex flex-col items-center">
            <div className="avatar m-0">
              <h2 className="uppercase">{info.firstName[0]}</h2>
            </div>
            <p className="mt-3 text-center font-bold">
              {info.firstName ?? ""} {info.lastName ? "- " + info.lastName : ""}
            </p>
          </div>
          {messages?.map((mess) => (
            <Chat owner={true} content={mess} />
          ))}
        </div>
      </div>
      <div className="relative mt-8">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setMessage((messages) => [...messages, value]);
            setValue("");
          }}
        >
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            className="h-[10px] w-full text-lg"
            placeholder="Type message..."
            defaultValue={value}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input type="file" id="file" className="invisible" />
          <label htmlFor="file" className="absolute top-2 right-12">
            <FcAddImage className="text-xl" />
          </label>
          <button type="submit" className="absolute top-2 right-2 text-xl">
            <AiOutlineSend className="text-blue-500" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Message;
