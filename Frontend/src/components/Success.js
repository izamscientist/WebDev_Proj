
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h2 className='text-3xl mb-4'>Booking Successful!</h2>
        <Link to='/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block'>Return to Homepage</Link>
      </div>
    </div>
  );
};

export default Success;
