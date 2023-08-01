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
          "project-id": "a9a17cac-08cb-487e-a010-e7ca8f07666a",
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
            headers: { "PRIVATE-KEY": "de5684d8-a96d-4f40-b702-b147f77f8d53" },
          })
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      });
  }, []);

  return (
    <ChatEngine
      height="calc(86vh)"
      projectID="a9a17cac-08cb-487e-a010-e7ca8f07666a"
      userName={email}
      userSecret={email}
    />
  );
}
