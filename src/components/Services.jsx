import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import { LuPencilLine } from "react-icons/lu";
import { IoDocumentTextOutline ,IoMicOutline  } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Speaking Practice",
    description: "Practice with AI feedback, pronunciation analysis, and real-time evaluation.",
    icon: <IoMicOutline className="text-primary h-8 w-8" />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mock Tests",
    description: "Full-length simulated exams that mirror the real IELTS test experience.",
    icon: <IoDocumentTextOutline className="text-primary h-8 w-8" />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "AI Band Score",
    description: "Instant, personalized scoring with 95% accuracy compared to human examiners.",
    icon: <FiBarChart2 className="text-primary h-8 w-8" />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Writing Evaluation",
    description: "Detailed feedback on essays from certified IELTS examiners and AI analysis.",
    icon: <LuPencilLine className="text-primary h-8 w-8" />,
    delay: 0.5,
  },
  
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="container py-18 md:py-24 xl:py-32 ">
        <h1 className="text-4xl text-center font-bold pb-4">
          Why Choose Our <span className="text-secondary">Platform</span></h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">Advanced AI technology combined with expert IELTS strategies</p>
        <div className="grid grid-cols-1 pt-10 xl:pt-18 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {ServicesData.map((service,index) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              key={index}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-5 hover:bg-[#f8f8f8] hover:translate-y-[-5px] duration-300 hover:shadow-lg"
            >
              <div className="feature-card p-3 rounded-lg transition duration-300 text-center" >
                <div className="flex justify-center">
                  <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
