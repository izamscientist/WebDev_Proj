import React from 'react';
import Navbar from './Navbar'; 
import imgcrb from './imgs/carb.jpg';
import imgmdt from './imgs/mdt.jpg';
import imgstn from './imgs/stn.jpg';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <header className='main-header bg-blue-500 py-20 text-center justify-center items-center'>
        <p style={{fontSize:30}}>Welcome</p>
        <br></br>
        Book your cruise trip today...
      </header>

      <main className='maint-cont py-20 px-4'>
        <div className='header1 text-3xl px-2 text-center mb-8 md:text-left '>
          <p>Visit various destinations</p>
        </div>

        <div className='grid grid-cols-1 p-10 gap-5 md:grid-cols-2 xl:grid-cols-3'>
          <div className='card-cont bg-gray-100  rounded-lg p-2'>
            <div className='heading text-2xl text-black mb-3'>
              Caribbean
            </div>
            <div>
              <img src={imgcrb}></img>
            </div>
            <div className='p-3'>
              <p className='card-text'> Dive into a paradise of turquoise waters and pristine beaches on a Caribbean Cruise, where tropical islands and vibrant marine life await exploration amidst the gentle rhythms of island life.</p>
            </div>
            
          </div>

          <div className='card-cont bg-gray-100  rounded-lg p-2'>
            <div className='heading text-2xl text-black mb-3'>
              Mediterean
            </div>
            <div>
              <img src={imgmdt}></img>
            </div>
            <div className='p-3'>
            <p className='card-text'>Experience the allure of ancient history and picturesque coastlines as you sail through the Mediterranean, where each port tells a story of civilizations past.</p>
            </div>
         
          </div>

          <div className='card-cont bg-gray-100  rounded-lg p-2'>
            <div className='heading text-2xl text-black mb-3'>
              Southern
            </div>
            <div>
              <img src={imgstn}></img>
            </div>
            <div className='p-3'>
            <p className='card-text'>Embark on a journey of vibrant cultures and sun-kissed shores in the Southern Cruise, where lush landscapes and charming towns beckon travelers seeking relaxation and advent.</p>
            </div>
          
          </div>          
        </div>
        
        <div className='secondary bg-gray-100 flex flex-col w-full p-6 mt-5 items-center'>
            <p className='text-3xl mb-3'> Whatever your destination</p>
            <p className='text-3xl md:ml-40 mb-7'> We'll find you a trip</p>
            <div className='flex justify-center'>
            <Link to="/booking"><button className='bookbtn-main bg-blue-500 transition duration-300 hover:bg-blue-700 p-2 text-2xl text-white rounded-md '>Book Now</button></Link>
            </div>
          </div>
      </main>

    </div>
  );
};

export default HomePage;