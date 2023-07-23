import { useState } from "react";
import Drop from "./Drop";
import News from "../News";
import Chatbot from "../Chatbot";

const questions = [
  {
    title: "How Doctor Can Ease Your Pain?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How do I withdraw from a subject?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "Understand Doctor Before You Regret?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "What types of systems do you support?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "We Teach You How To Feel Better?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How Can I Contact You?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How do I withdraw from a subject?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "What’s a payment statement?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How Can I Contact You?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How do I withdraw from a subject?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "Understand Doctor Before You Regret?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
  {
    title: "How Doctor Can Ease Your Pain?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi consequuntur.",
  },
];

const FAQ = () => {
  const [activeLeft, setActiveLeft] = useState(-1);
  const [activeRight, setActiveRight] = useState(-1);

  return (
    <main>
      <h2 className="mt-52 text-center text-7xl font-bold text-[#1f2278]">
        FAQ's
      </h2>
      <div className="mt-20 mb-24 flex justify-center gap-14">
        <div className="flex flex-col gap-2">
          {questions.slice(0, 6).map((question, idx) => {
            return (
              <Drop
                question={question}
                hanldeActive={setActiveLeft}
                active={activeLeft === idx}
                idx={idx}
                key={question}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {questions.slice(6, 12).map((question, idx) => {
            return (
              <Drop
                question={question}
                key={question}
                hanldeActive={setActiveRight}
                active={activeRight === idx}
                idx={idx}
              />
            );
          })}
        </div>
      </div>
      <News />
      <Chatbot />
    </main>
  );
};

export default FAQ;
