import React from 'react'
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <>
    <div className="w-full bg-gray-50 py-12">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col lg:flex-row gap-8 items-center">
      {/* Contact Form - Left Side */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#2471A3] mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2471A3] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2471A3] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
              <textarea 
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2471A3] focus:border-transparent"
                placeholder="Your message here"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#2471A3] hover:bg-[#1d5d8a] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="lg:w-1/2 w-full">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={contact}
            alt="Our team helping communities"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact