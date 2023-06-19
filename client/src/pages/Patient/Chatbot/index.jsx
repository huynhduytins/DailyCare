import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { message: "Hello, I am ChatGPT!", sender: "ChatGPT" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
      <div
        className={`fixed bottom-24 right-10 z-50 h-[500px] w-1/5 overflow-hidden ${
          !openChat && "-z-50"
        }`}
      >
        <MainContainer
          className={`z-50 border-2 border-[#bbbeff] p-2 shadow-lg ${
            openChat ? "h-full" : "h-0 border-0 p-0"
          } duration-500`}
        >
          <ChatContainer>
            <MessageList
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {messages.map((message, index) => {
                return <Message key={index} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
      <img
        src="../../../../src/assets/technology.svg"
        className="fixed bottom-6 right-6 w-16 cursor-pointer rounded-full bg-[#fff1f1] p-2"
        onClick={() => setOpenChat(!openChat)}
      />
    </>
  );
};

export default Chatbox;
