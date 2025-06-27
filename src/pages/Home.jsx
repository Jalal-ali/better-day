import React, { useState } from 'react'
import Flag from "react-world-flags";
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
        {/* Banner Image with Text (from previous example) */}
        <div className="relative">
          <img
            className="w-full h-[485px] object-cover "
            src={topBanner}
            alt="top image"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
          <div className="absolute inset-0 flex items-center">
            <div className="text-white max-w-[50%] pl-10 md:pl-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Need Your Support</h2>
              <p className="text-lg mb-6">
                Your contribution can transform lives by providing essential clean water to communities in need.
                Help us make a difference—support our mission today!
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors">
                  Join Us
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-2 px-6 rounded transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Donation Section */}
        <div className="container mx-auto px-4 md:px-6 -mt-20 z-10 relative">
          <div className="bg-[#2471A3] rounded-lg shadow-xl p-6">
            {/* Navigation Links */}
            <div className="overflow-x-auto mb-6 scrollbar-hide">
              <div className="flex space-x-8 md:justify-center">
                {['Orphan Support', 'Sadaqah Jariyah', 'Zakat', 'Water Aid', 'Legacy', 'Contact'].map((item) => (
                  <div key={item} className="flex flex-col items-center min-w-[100px]">
                    <div className="w-auto rounded-full flex items-center justify-center mb-2">
                      <img
                        src={iconMap[item]}
                        alt={item}
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Form */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Currency Selector */}
              <div className="flex-1 bg-white rounded-lg p-2 flex items-center">
                {/* <select className="p-2 border rounded-md text-sm text-gray-700">
            <span><img src={globe} alt="" /><option value="PKR">PKR</option></span>
      
      <option value="USD">🇺🇸 USD</option>
      <option value="EUR">🇪🇺 EUR</option>
      <option value="GBP">🇬🇧 GBP</option>
      <option value="CAD">🇨🇦 CAD</option>
    </select> */}
                <div className="relative inline-block w-auto">
                  {/* Button */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex items-center justify-between border px-3 py-2 rounded-md bg-white text-gray-700"
                  >
                    <div className="flex items-center gap-2 mx-1">
                      <Flag code={selected.country} style={{ width: 20, height: 14 }} />
                      {selected.label}
                    </div>
                    <span>▼</span>
                  </button>

                  {/* Dropdown options */}
                  {open && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow border rounded-md">
                      {currencies.map((currency) => (
                        <div
                          key={currency.code}
                          onClick={() => handleSelect(currency)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
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
                  className="bg-white border-none outline-none text-gray-700 w-auto ml-2"
                />
              </div>

              {/* Category Selector */}
              <div className="flex-1 bg-white rounded-lg p-2 flex items-start relative">
                <select className="bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 w-full h-full py-2 px-3 pr-8 appearance-none text-start focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="where_most_needed">Where Most Needed</option>
                  <option value="water_projects">Water Projects</option>
                  <option value="orphan_support">Orphan Support</option>
                </select>

                {/* Custom arrow */}
                <div className="pointer-events-none absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>


              {/* Quick Donate Button */}
              <div className="flex-1 bg-blue-200 rounded-lg p-2 flex items-center justify-between">
  <button className="bg-gradient-to-r from-[#2471A3] to-[#165e8d] text-white font-bold py-2 px-4 rounded-full hidden md:block">
    QUICK DONATE
  </button>

  <div className="flex items-center space-x-3">
    {/* Visa */}
    <img src={Visa} alt="" className='w-10 h-10' />

    {/* MasterCard */}
        <img src={masterCard} alt="" className='w-10 h-10' />


    {/* PayPal */}
            <img src={paypal} alt="" className='w-10 h-10' />


    {/* Apple Pay (optional) */}
            <img src={applepay} alt="" className='w-10 h-10' />

  </div>
</div>


            </div>
          </div>
        </div>
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
        {/* Feature Cards */}
        <div className="container mx-auto md:px-20 px-2 py-12 my-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              <div
                key={index}
                data-aos={index === 0 ? 'fade-right' : index === 1 ? 'flip-left' : 'fade-left'}
                className="bg-white p-6 rounded-lg shadow-lg aos-init"
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
              </div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div className="w-full">
          <div className="mx-auto py-12">
            <div className="bg-[#2471A3] md:h-[80vh] py-5 md:py-2 md:px-20 text-white p-2 md:p-8 flex flex-wrap items-center">
              <div className="md:w-1/2 w-full mb-3 md:mb-0">
                <img
                  data-aos="zoom-in"
                  className="w-full h-auto rounded-lg aos-init"
                  src="https://preview.colorlib.com/theme/lovecare/images/bg_1.jpg.webp"
                  alt="Project Image"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 md:px-5 w-full">
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
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="w-full my-0">
          <div className="container bg-[#F7F9F9] md:px-10 px-2 mx-auto py-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:p-8 p-2 md:pr-40 w-full md:w-2/3">
                <h1 className="text-[#2471A3] text-3xl uppercase font-bold">
                  Welcome to The Better Day
                </h1>
                <h2 className="text-2xl text-gray-400 mt-2 mb-4">
                  Bringing Clean Water to Communities
                </h2>
                <p className="text-gray-700 mb-6">
                  At The Better Day, our mission is to provide clean, accessible water
                  through hand pumps, transforming lives and supporting brighter
                  futures. Many communities still lack reliable access to safe
                  drinking water, but with each hand pump we install, we bring health,
                  hygiene, and hope closer to those in need.
                </p>
                <p className="text-gray-700 mb-6">
                  Our hand pumps reduce the time spent fetching water, allowing
                  children to focus on their education and families to improve their
                  lives. Join us in making a better day for countless individuals by
                  supporting our clean water initiatives.
                </p>
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
                    <div key={index} className="bg-[#2471A3] rounded-lg p-4 flex flex-col items-center">
                      {/* Icon Container */}
                      <div className="relative w-12 h-12 rounded-full mb-2 bg-white flex items-center justify-center">
                        {/* Centered Image */}
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      {/* Text Label */}
                      <span className="text-white font-bold text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* donation form section  */}
              <div
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
              </div>


            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default Home