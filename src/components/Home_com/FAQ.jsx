// src/components/FAQ.jsx
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // استيراد الأيقونات

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for creating custom designs.",
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React using npm with the command: npm install react.",
    },
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        question: "What is Tailwind CSS?",
        answer:
          "Tailwind CSS is a utility-first CSS framework for creating custom designs.",
      },
      {
        question: "How do I install React?",
        answer:
          "You can install React using npm with the command: npm install react.",
      },
  ];

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="py-10">
            <h1 className="container text-2xl font-bold"> FAQ</h1>


    <div className="py-16 my-4 bg-bac_bg">
        
      <div className="container max-w-4xl p-6 mx-auto">
         <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-white border rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full text-lg font-semibold text-left"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-secondary" />
                ) : (
                  <FaChevronDown className="text-secondary" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default FAQ;
