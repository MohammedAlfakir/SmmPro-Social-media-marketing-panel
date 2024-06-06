"use client";
import { useState } from "react";
import "../SectionsStyle.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SMM?",
      answer:
        "An SMM, or Social Media Marketing, involves utilizing platforms like Instagram, Facebook, Twitter, YouTube, and others to promote either yourself or your business. If you're seeking to enhance your online visibility, our SMM services are your optimal solution. We specialize in elevating your online presence across various social media platforms, all at the most affordable rates.",
    },
    {
      question: "Why do individuals seek SMM panels?",
      answer:
        "People seek SMM panels to automate and optimize their social media marketing endeavors. These platforms typically provide an array of tools and services, including post scheduling, account management, and the purchase of followers and likes. They serve as efficient solutions for businesses and individuals aiming to enhance their brand or product promotion across social media platforms like Facebook, Instagram, and Twitter.",
    },
    {
      question: "Do you provide support?",
      answer:
        "Yes, we provide support for all our products. You can reach out to us through the contact form on our website or via email.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-box">
      <div className="faq__container">
        {faqs.map((faq, index) => (
          <div className="faq__item_outer" key={index}>
            <div className="faq__item item">
              <div
                className="head flex justify-between w-full"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="title">{faq.question}</h5>
                <button
                  className={`toggle ${openIndex === index ? "open" : ""}`}
                />
              </div>
              {openIndex === index && (
                <div className="body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
