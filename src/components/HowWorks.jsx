import React from 'react'
import { FadeUp } from "./Hero";
import { motion } from "framer-motion";
import WorkPng from "../assets/Work.png";


function HowWorks() {
  return (
    <section id="works">
      <div className="container py-18 md:py-24 xl:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              How It <span className="text-secondary">Works?</span>
            </motion.h1>
            <div className="flex flex-col gap-4">
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 text-xl font-bold mr-4 z-10">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Sign Up</h3>
                  <p className="text-gray-500">Create your free account in under 2 minutes</p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeUp(0.3)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mr-4 z-10">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Choose Mode</h3>
                  <p className="text-gray-500">Select practice or full mock test</p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mr-4 z-10">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Get Feedback</h3>
                  <p className="text-gray-500">Instant AI evaluation with detailed analysis</p>
                </div>
              </motion.div>
              <motion.div
                variants={FadeUp(0.5)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 text-xl font-bold mr-4 z-10">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Track Progress</h3>
                  <p className="text-gray-500">Monitor improvements with our dashboard</p>
                </div>
              </motion.div>



            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={WorkPng}
            alt="character"
            className="w-[450px] md:max-w-[550px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default HowWorks
