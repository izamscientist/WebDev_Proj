import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Must match the backend route exactly: /api/trips/
        const response = await fetch('http://localhost:8000/api/trips/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleBookNowClick = (booking) => {
    setSelectedBooking(booking);
    setShowPopup(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!selectedBooking) return;

    // Decrement seats
    const updatedBooking = {
      ...selectedBooking,
      available_seats: selectedBooking.available_seats - 1
    };

    try {
      // PUT to /api/trips/<id>/
      const response = await fetch(
        `http://localhost:8000/api/trips/${selectedBooking.id}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedBooking)
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update booking in the backend');
      }

      // Get the updated object
      const data = await response.json();

      // Update state so UI shows the new seat count
      setBookings((prevBookings) =>
        prevBookings.map((b) => (b.id === data.id ? data : b))
      );

      alert('Booking successful!');
      setShowPopup(false);

      // Clear form
      setFormData({ name: '', email: '', contact: '' });
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Error: Could not complete booking.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center min-h-screen'>
        <div className='bg-gray-200 p-8 mt-14 md:p-16 w-full md:max-w-4xl rounded-lg h-full lg:max-w-6xl mx-auto'>
          <h2 className='text-3xl mb-8'>Available Trips</h2>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th className='px-4 py-2'>Destination</th>
                  <th className='px-4 py-2'>Origin</th>
                  <th className='px-4 py-2'>Departure Time</th>
                  <th className='px-4 py-2'>Arrival Time</th>
                  <th className='px-4 py-2'>Available Seats</th>
                  <th className='px-4 py-2'>Capacity</th>
                  <th className='px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className='border px-4 py-2'>{booking.destination}</td>
                    <td className='border px-4 py-2'>{booking.origin}</td>
                    <td className='border px-4 py-2'>{booking.departure_time}</td>
                    <td className='border px-4 py-2'>{booking.arrival_time}</td>
                    <td className='border px-4 py-2'>{booking.available_seats}</td>
                    <td className='border px-4 py-2'>{booking.capacity}</td>
                    <td className='border px-4 py-2'>
                      {booking.available_seats > 0 && (
                        <button
                          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                          onClick={() => handleBookNowClick(booking)}
                        >
                          Book Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 w-full md:max-w-md'>
            <h2 className='text-xl mb-4'>Enter your details</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                  Name:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-3 py-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                  Email:
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-3 py-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='contact' className='block text-gray-700 font-bold mb-2'>
                  Contact Number:
                </label>
                <input
                  type='text'
                  id='contact'
                  name='contact'
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className='w-full px-3 py-2 border rounded'
                />
              </div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
              <button
                type='button'
                onClick={() => setShowPopup(false)}
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2'
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
