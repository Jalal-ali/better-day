import React from 'react'
import { motion } from 'framer-motion';
import about from '../assets/about.jpg'
import mission from '../assets/mission.jpg'
import getInvolve from '../assets/involve.jpg'

const About = () => {
  return (
    <>
      {/* 1st section  */}
      <div className="w-full my-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content (Left on desktop, top on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }}  className="md:w-1/2 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2471A3] mb-6">About Us</h1>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Welcome to <strong>The Better Day</strong>, an NGO dedicated to ensuring access to clean water across Pakistan. Our mission is to install water wells in regions where this vital resource is unavailable, transforming lives and communities one well at a time. Clean water is a basic human right, yet many areas still lack access to it. We are committed to changing this by targeting underserved communities and improving health outcomes. By providing sustainable water solutions, we aim to enhance the quality of life for countless individuals. Join us in our mission to bring clean water to every corner of Pakistan. Your support through donations, volunteering, or spreading the word can make a significant difference. Together, we can ensure that every community has the clean water it needs to thrive.</p>
              </div>
            </motion.div>

            {/* Image Placeholder (Right on desktop, bottom on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }} className="md:w-1/2 w-full">
              <div className="bg-[#2470a367] rounded-lg p-0.5 aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={about}
                  alt="Get involved with The Better Day"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* 2nd section  */}
      <div className="w-full my-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image (Left on desktop, top on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }}  className="md:w-1/2 w-full">
              <div className="bg-[#2470a367] p-0.5 rounded-lg aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={mission}
                  alt="Get involved with The Better Day"
                />
              </div>
            </motion.div>

            {/* Text Content (Right on desktop, bottom on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }} className="md:w-1/2 w-full md:order-2 order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2471A3] mb-6">Our Mission</h1>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  At <strong>The Better Day</strong>,  we believe access to clean water is a fundamental human right. Our goal is to provide clean water to every corner of Pakistan, ensuring no community is left behind. By installing water wells in underserved areas, we strive to improve health and enhance the overall quality of life for countless individuals. Clean water is essential for well-being, and we are dedicated to making it available where it is most needed. Join us in our mission to transform lives by supporting our efforts to bring clean water to every community in Pakistan. Together, we can make a significant difference.
                </p>

              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3rd section  */}
      <div className="w-full my-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content (Left on desktop, top on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }}  className="md:w-1/2 w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2471A3] mb-6">Get Involved</h1>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Join us in our mission to bring clean water to every region of Pakistan. Your support can make a significant difference in the lives of many. Whether through donations, volunteering, or spreading the word, every contribution counts.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {/* Button 1 */}
                  <button className="bg-[#2471A3] hover:bg-[#1d5d8a] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 shadow-md">
                    Donate
                  </button>

                  {/* Button 2 */}
                  <button className="bg-[#2471A3] hover:bg-[#1d5d8a] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 shadow-md">
                    Volunteer
                  </button>

                  {/* Button 3 */}
                  <button className="bg-[#2471A3] hover:bg-[#1d5d8a] text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 shadow-md">
                    Spread the Word
                  </button>
                </div>

              </div>
            </motion.div>

            {/* Image Placeholder (Right on desktop, bottom on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1] // Smooth deceleration
              }} className="md:w-1/2 w-full">
              <div className="bg-[#2470a367] rounded-lg p-0.5 aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={getInvolve}
                  alt="Get involved with The Better Day"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About