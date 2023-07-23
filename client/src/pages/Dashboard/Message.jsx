import { ChatEngine } from "react-chat-engine";
import { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../context/appContext";

export default function MyMessage() {
  const { email } = useAppContext();
  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "40cdb4b5-8ef7-439d-9f13-a0fb2a40ab9c",
          "user-name": email,
          "user-secret": email,
        },
      })
      .then((r) => console.log(r))
      .catch(() => {
        let formData = new FormData();
        formData.append("username", email);
        formData.append("secret", email);
        axios
          .post("https://api.chatengine.io/users/", formData, {
            headers: { "PRIVATE-KEY": "ccd44c80-6199-44dc-b264-0cb3b088a0ed" },
          })
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      });
  }, []);

  return (
    <ChatEngine
      height="calc(86vh)"
      projectID="40cdb4b5-8ef7-439d-9f13-a0fb2a40ab9c"
      userName={email}
      userSecret={email}
    />
  );
}
