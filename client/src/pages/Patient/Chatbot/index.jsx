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

const Chatbot = () => {
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
      messages: [systemMessage, ...apiMessages],
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
        className={`fixed bottom-24 right-10 h-[500px] w-1/5 overflow-hidden`}
      >
        <MainContainer
          className={`z-50 border-[#bbbeff] shadow-lg ${
            openChat ? "h-full border-2 p-2" : "h-[0%] border-0 p-0"
          } duration-500`}
        >
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
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
      <div
        onClick={() => setOpenChat(!openChat)}
        className="fixed bottom-6 right-6 h-16 w-20 cursor-pointer overflow-hidden rounded-full bg-[#fff3f3] p-2"
      >
        <img
          src="../../../../src/assets/bot.svg"
          className={`absolute top-0 left-2 w-16 duration-500 ${
            openChat ? "translate-y-full" : "translate-y-0"
          }`}
        />
        <img
          src="../../../../src/assets/arrow.svg"
          alt=""
          className={`absolute top-2 left-5 w-10 duration-500 ${
            openChat ? "translate-y-0" : "-translate-y-full"
          }`}
        />
      </div>
    </>
  );
};

export default Chatbot;
