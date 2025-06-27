import React, { useState } from 'react'
import Flag from "react-world-flags";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import topBanner from "../assets/top img.jpg"
import orphanSupport from '../assets/donation icons/orphan.png'
import sadaqahJariyah from '../assets/donation icons/sadqah.png'
import zakat from '../assets/donation icons/zakat.png'
import waterAid from '../assets/donation icons/water.png'
import legacy from '../assets/donation icons/legacy.png'
import contact from '../assets/donation icons/contact.png'
import donation from '../assets/donation icons/donation.png'
import friends from '../assets/donation icons/friends.png'
import volunteer from '../assets/donation icons/volunteer.png'
import heart from '../assets/donation icons/heart.svg'
import globe from '../assets/donation icons/globe.svg'
import Visa from '../assets/visa.svg'
import masterCard from '../assets/mastercard.svg'
import paypal from '../assets/paypal.svg'
import applepay from '../assets/applepay.svg'
const Home = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const currencies = [
    { code: "USD", label: "USD", country: "US" },
    { code: "EUR", label: "EUR", country: "EU" },
    { code: "GBP", label: "GBP", country: "GB" },
    { code: "CAD", label: "CAD", country: "CA" },
    { code: "PKR", label: "PKR", country: "PK" },
  ];

  const [selected, setSelected] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (currency) => {
    setSelected(currency);
    setOpen(false); // close dropdown after selection
  };
  const iconMap = {
    'Orphan Support': orphanSupport,
    'Sadaqah Jariyah': sadaqahJariyah,
    'Zakat': zakat,
    'Water Aid': waterAid,
    'Legacy': legacy,
    'Contact': contact
  };
  return (
    <>


      <div className="relative">
        {/* Banner Image with Text */}
        <div className="relative">
          {/* Banner Image with Text - Responsive */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[485px]">
            <img
              className="w-full h-full object-cover "
              src={topBanner}
              alt="top image"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />

            {/* Text container - responsive behavior */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4">
              {/* Mobile/Tablet: Centered content */}
              <div className="text-white w-full max-w-full text-center md:hidden">
                <motion.h2 initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1], // Better ease-out than CSS's ease-out
                    type: "spring", // Optional: for bouncier motion
                    stiffness: 100 // Spring physics adjustment
                  }} className=" text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                  We Need Your Support
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3
                  }} className="paragraph-fade text-sm sm:text-base mb-3 sm:mb-4 leading-tight sm:leading-normal">
                  Your contribution can transform lives by providing essential clean water to communities in need.
                  Help us make a difference—support our mission today!
                </motion.p>
                <div className="flex flex-col xs:flex-row justify-center gap-2 sm:gap-3">
                  <motion.button
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                    Join Us
                  </motion.button>

                  {/* Secondary Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>

              {/* Desktop: Original left-aligned content */}
              <div className="hidden md:block text-white max-w-[50%] pl-10 lg:pl-20">
                <motion.h2 initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1], // Better ease-out than CSS's ease-out
                    type: "spring", // Optional: for bouncier motion
                    stiffness: 100 // Spring physics adjustment
                  }} className=" text-3xl lg:text-4xl font-bold mb-4">We Need Your Support</motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3
                  }} className="paragraph-fade text-lg mb-6">
                  Your contribution can transform lives by providing essential clean water to communities in need.
                  Help us make a difference—support our mission today!
                </motion.p>
                {/* buttons  */}
                <div className="flex space-x-4">

                  <motion.button
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                    Join Us
                  </motion.button>

                  {/* Secondary Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-6 rounded transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </div>


        </div>



        {/* New Donation Section */}
        <div className="container mx-auto px-4 sm:px-6 -mt-10 md:-mt-20 z-10 relative">
          <div className="bg-[#2471A3] rounded-lg shadow-xl p-4 md:p-6">
            {/* Navigation Links */}
            <div className="overflow-x-auto mb-4 md:mb-6 scrollbar-hide">
              <div className="flex space-x-4 md:space-x-8 w-max md:w-full md:justify-center">
                {['Orphan Support', 'Sadaqah Jariyah', 'Zakat', 'Water Aid', 'Legacy', 'Contact'].map((item, index) => (
                  <div key={item} className="flex flex-col items-center min-w-[80px] md:min-w-[100px]">
                    <div
                      className="bounce-circle w-auto rounded-full flex items-center justify-center mb-1 md:mb-2"
                      style={{
                        animationDelay: `${index * 0.15}s` // Use index instead of item
                      }}
                    >
                      <img
                        src={iconMap[item]}
                        alt={item}
                        className="w-8 h-8 md:w-[50px] md:h-[50px]"
                      />
                    </div>
                    <span className="text-white text-xs md:text-sm font-medium text-center">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Form */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Currency Selector */}
              <div className="flex-1 bg-white rounded-lg p-2 flex items-center">
                <div className="relative inline-block w-full">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between border px-3 py-2 rounded-md bg-white text-gray-700 text-sm md:text-base"
                  >
                    <div className="flex items-center gap-2 mx-1">
                      <Flag code={selected.country} style={{ width: 20, height: 14 }} />
                      {selected.label}
                    </div>
                    <span>▼</span>
                  </button>

                  {open && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow border rounded-md">
                      {currencies.map((currency) => (
                        <div
                          key={currency.code}
                          onClick={() => handleSelect(currency)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-sm md:text-base"
                        >
                          <Flag code={currency.country} style={{ width: 20, height: 14 }} />
                          {currency.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  placeholder="150"
                  className="bg-white border-none outline-none text-gray-700 w-20 md:w-auto ml-2 text-sm md:text-base"
                />
              </div>

              {/* Category Selector */}
              <div className="flex-1 bg-white rounded-lg p-2 flex items-start relative">
                <select className="bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 w-full h-full py-2 px-3 pr-8 appearance-none text-start focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base">
                  <option value="where_most_needed">Where Most Needed</option>
                  <option value="water_projects">Water Projects</option>
                  <option value="orphan_support">Orphan Support</option>
                </select>
                <div className="pointer-events-none absolute right-3 md:right-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Quick Donate Button */}
              <div className="flex-1 bg-blue-200 rounded-lg p-2 flex flex-col md:flex-row items-center justify-between gap-2">
                <button className="bg-gradient-to-r from-[#2471A3] to-[#165e8d] text-white font-bold py-2 px-4 rounded-full w-full md:w-auto text-sm md:text-base">
                  QUICK DONATE
                </button>
                <div className="flex items-center justify-center md:justify-end space-x-2 md:space-x-3">
                  <img src={Visa} alt="Visa" className='w-8 h-8 md:w-10 md:h-10' />
                  <img src={masterCard} alt="MasterCard" className='w-8 h-8 md:w-10 md:h-10' />
                  <img src={paypal} alt="PayPal" className='w-8 h-8 md:w-10 md:h-10' />
                  <img src={applepay} alt="Apple Pay" className='w-8 h-8 md:w-10 md:h-10' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        {/*  Cards */}
        <div className="container mx-auto md:px-20 px-2 py-12 my-20">
          <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: donation,
                title: 'GIVE DONATION',
                text: 'Give donations for the events which we are conducting for the children and senior citizens.',
                link: 'Give Donation →'
              },
              {
                img: volunteer,
                title: 'BECOME VOLUNTEER',
                text: 'Give donations for the events which we are conducting for the children and senior citizens.',
                link: 'Learn More →'
              },
              {
                img: friends,
                title: 'SHARE TO FRIENDS',
                text: 'Give donations for the events which we are conducting for the children and senior citizens.',
                link: 'Share Now →'
              }
            ].map((card, index) => (
              <motion.div
                initial={{ opacity: 0, x: -90 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: "easeOut"
                }}
                key={index}
                className="slide-righ bg-white p-6 rounded-lg shadow-lg aos-init"
              >
                <img
                  alt={card.title}
                  src={`${card.img}`}
                  className="mx-auto mb-4 w-50 h-50"
                />
                <h2 className="text-xl text-black font-bold mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-4">{card.text}</p>
                <a href="#" className="text-[#2471A3] font-semibold">
                  {card.link}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div className="w-full">
          <div className="mx-auto py-12">
            <div className="bg-[#2471A3] md:h-[80vh] py-5 md:py-2 md:px-20 text-white p-2 md:p-8 flex flex-wrap items-center">
              <div className="md:w-1/2 w-full mb-3 md:mb-0">
                <motion.img
                  initial={{ opacity: 0, x: 600 }} // Starts way off-screen left
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.19, 1, 0.3, 1] // Smooth deceleration
                  }}
                  className="w-full h-auto rounded-lg"
                  src="https://preview.colorlib.com/theme/lovecare/images/bg_1.jpg.webp"
                  alt="Project Image"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -400 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1] // Smooth deceleration
                }}
                className="md:w-1/2 md:pl-8 md:px-5 w-full">
                <p className="uppercase tracking-wide text-sm font-bold mb-2">
                  Projects
                </p>
                <h2 className="text-3xl font-extrabold mb-3">Project AquaLift</h2>
                <p className="text-md leading-relaxed mb-2" style={{ lineHeight: '1.425' }}>
                  Project AquaLift is dedicated to enhancing access to clean water
                  by installing hand pumps in communities that need them most. Just
                  as lifting a well brings life-sustaining water to the surface, our
                  project brings essential resources to areas struggling with water
                  scarcity.
                  <br /><br />
                  Through Project AquaLift, we assess the specific needs of each
                  community and provide hand pumps to ensure a reliable and safe
                  water supply. This initiative not only improves health and hygiene
                  but also empowers families and supports local development.
                  <br /><br />
                  Join us in making a lasting impact by helping us bring clean water
                  and hope to those in need.
                </p>
                <a href="#" className="text-white font-semibold underline">
                  Learn More →
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="w-full my-0">
          <div className="container bg-[#F7F9F9] md:px-10 px-2 mx-auto py-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:p-8 p-2 md:pr-40 w-full md:w-2/3">
                <motion.h1 initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,        // Only animate once
                    margin: "-10%",    // Start animation 20% before element enters viewport
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 10         // Added for better spring control
                  }} className="text-[#2471A3] text-3xl uppercase font-bold">
                  Welcome to The Better Day
                </motion.h1>
                <motion.h2 initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }} className="text-2xl text-gray-400 mt-2 mb-4">
                  Bringing Clean Water to Communities
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3
                  }} className="text-gray-700 mb-6">
                  At The Better Day, our mission is to provide clean, accessible water
                  through hand pumps, transforming lives and supporting brighter
                  futures. Many communities still lack reliable access to safe
                  drinking water, but with each hand pump we install, we bring health,
                  hygiene, and hope closer to those in need.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.3
                  }}
                  className="text-gray-700 mb-6">
                  Our hand pumps reduce the time spent fetching water, allowing
                  children to focus on their education and families to improve their
                  lives. Join us in making a better day for countless individuals by
                  supporting our clean water initiatives.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: heart,
                      text: 'Start Donating'
                    },
                    {
                      icon: globe,
                      text: 'Join Our Community'
                    },
                    {
                      icon: heart,
                      text: 'Be A Volunteer'
                    }
                  ].map((item, index) => (
                    <motion.div key={index}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.3 // Each item gets 0.3s more delay than previous
          }} className="bg-[#2471A3]  rounded-lg p-4 flex flex-col items-center">
                      {/* Icon Container */}
                      <div className=" relative w-12 h-12 rounded-full mb-2 bg-white flex items-center justify-center">
                        {/* Centered Image */}
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      {/* Text Label */}
                      <span className="text-white font-bold text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* donation form section  */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
                data-aos="fade-up-left"
                className="bg-[#2471A3] rounded-lg text-white p-8 w-full md:w-1/3 aos-init"
              >
                <h2 className="text-xl font-bold mb-4">Donate Now</h2>
                <p className="mb-6">Giving is the greatest act of grace</p>

                <form className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block mb-1 text-sm font-medium">Your Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg text-gray-800 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block mb-1 text-sm font-medium">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full p-3 rounded-lg text-gray-800 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  {/* Amount Field */}
                  <div>
                    <label className="block mb-1 text-sm font-medium">Amount to Give</label>
                    <div className="relative">
                      <input
                        type="number"
                        className="w-full p-3 rounded-lg text-gray-800 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Amount"
                      />
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="pt-2">
                    <label className="block mb-3 text-sm font-medium">Payment Method</label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="payment"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="paypal" className="ml-2 text-sm">Paypal</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="credit-card"
                          name="payment"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="credit-card" className="ml-2 text-sm">Credit Card</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="payoneer"
                          name="payment"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="payoneer" className="ml-2 text-sm">Payoneer</label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-6 bg-white text-[#2471A3] hover:bg-gray-100 font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md"
                  >
                    Donate Now
                  </button>
                </form>
              </motion.div>


            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default Home