import React from 'react'
import { IoMdClose,IoMdCheckmark  } from "react-icons/io";


function Pricing() {
  return (
    <div id="pricing" className="py-7 mt-11 md:py-10 md:mt-14 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-center font-bold pb-4 ">
            Simple, <span className="text-secondary">Transparent</span> Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your IELTS preparation
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Free Trial</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Basic practice tests
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Limited AI feedback
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdClose className="h-4 w-4 text-red-500 mr-2" />
                No mock tests
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdClose className="h-4 w-4 text-red-500 mr-2" />
                No expert evaluation
              </li>
            </ul>
            <button className="w-full bg-[#e1f1f7] text-[#407180] hover:bg-[#d2e7ee] font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>

          {/* Most Popular Plan */}
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-[#76a6b5] transform scale-105 relative">
            <div className="absolute top-0 right-0 bg-[#76a6b5] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Full mock tests
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Detailed AI feedback
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                2 expert evaluations/month
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Progress tracking
              </li>
            </ul>
            <button className="w-full bg-[#76a6b5] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#5e91a0] transition duration-300 transform hover:scale-105">
              Choose Plan
            </button>
          </div>

          {/* One-time Payment Plan */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Coaching Package
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$399</span>
              <span className="text-gray-500">/one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Everything in Premium
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                10 expert evaluations
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                4 coaching sessions
              </li>
              <li className="flex items-center text-gray-600">
                <IoMdCheckmark className="h-4 w-4 text-green-500 mr-2" />
                Personalized study plan
              </li>
            </ul>
            <button className="w-full bg-[#e1f1f7] text-[#407180] hover:bg-[#d2e7ee] font-bold py-3 px-6 rounded-lg transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p>
            All plans include 7-day money back guarantee. Need help choosing?{" "}
            <a href="#" className="text-orange-400 hover:text-orange-600">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
