import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AvatarM from "../assets/avtar1.png";
import AvatarF from "../assets/avtar2.png";
import AvatarF2 from "../assets/avtar3.png";

const TestimonialData = [
  {
    id: 1,
    img: AvatarM,
    name: "Deep Sarangi",
    comment: `"I went from 6.5 to 8.0 in just 3 months! The personalized feedback on my writing made all the difference."`,
  },
  {
    id: 2,
    img: AvatarF,
    name: "Swati Mishra",
    comment: `"The speaking simulator helped me overcome my nervousness. I aced my speaking test with 8.5!"`,
  },
  {
    id: 3,
    img: AvatarM,
    name: "Kunal More",
    comment: `"The band predictor was spot on. I knew exactly where I stood before taking the actual test."`,
  },
  {
    id: 4,
    img: AvatarF2,
    name: "Sarah Johnson",
    comment: `"I went from 6.5 to 8.0 in just 3 months! The personalized feedback on my writing made all the difference."`,
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TestimonialData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Function to calculate position of each card relative to center
  const getPosition = (cardIndex) => {
    const diff = (cardIndex - index + TestimonialData.length) % TestimonialData.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === TestimonialData.length - 1) return "left";
    return "hidden";
  };

  return (
    <section id="testimonial" className="bg-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center pb-8">
          Success <span className="text-secondary">Stories</span>
        </h1>
        <p className="text-lg text-center text-gray-600 ">
          Our learners are at the heart of everything we do. From speaking practice to AI-powered mock tests, students across the globe have achieved their goals with our platform. Hear directly from those who have transformed their preparation journey and see how we’re helping them succeed every step of the way.
        </p>

        <div className="relative flex justify-center items-center overflow-hidden h-[350px]">
          {TestimonialData.map((t, i) => {
            const pos = getPosition(i);
            return (
              <motion.div
                key={t.id}
                className="absolute bg-gray-50 p-6 rounded-lg w-70 md:w-90 shadow-sm flex flex-col gap-4 items-start justify-center py-7"
                animate={{
                  scale: pos === "center" ? 1 : 0.75,
                  opacity: pos === "center" ? 1 : pos === "hidden" ? 0 : 0.3,
                  x:
                    pos === "center"
                      ? 0
                      : pos === "left"
                      ? -310
                      : pos === "right"
                      ? 310
                      : 0,
                  zIndex: pos === "center" ? 10 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-1">
                  <img
                    src={t.img}
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <div className="flex text-yellow-400">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{t.comment}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;