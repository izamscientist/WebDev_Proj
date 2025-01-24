import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import iconwave from './imgs/wave.png';
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Welcome to BlueSea, your gateway to unforgettable adventures on the high seas!<br></br><br></br>

              At BlueSea, we're passionate about helping you find the perfect cruise experience tailored to your desires. Whether you're dreaming of exploring exotic destinations, indulging in luxury amenities, or simply unwinding with panoramic ocean views, we're here to turn your cruise dreams into reality.

              With a wide range of cruise lines, itineraries, and destinations to choose from, our user-friendly platform makes booking your next voyage a breeze. From family-friendly cruises to romantic getaways and everything in between, we offer something for every type of traveler.

              Our team of experienced travel experts is dedicated to providing you with personalized service and insider knowledge to ensure that your cruise experience exceeds your expectations. From selecting the ideal stateroom to arranging shore excursions and special amenities, we're with you every step of the way.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At BlueSea, we understand that planning a cruise can be overwhelming, which is why we're committed to making the process as seamless and stress-free as possible. With our easy-to-use booking platform and responsive customer support, you can focus on what matters most – creating unforgettable memories with your loved ones.
            </p>
             <div className="flex justify-center mt-8">
              <img src={iconwave} alt="Cruise Ship" className="w-64 p-5" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
