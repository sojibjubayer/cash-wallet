import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';

const Registration = () => {
  const notify = () => toast('Registration successful!');

  const [pinError, setPinError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const pin = form.pin.value;
    const balance = 1000;
    const status = 'pending';
    const position = 'user';
    const user = { name, email, balance, phone, pin,position, status };

    // Validate PIN length
    if (pin.length < 5) {
      setPinError('PIN must be 5 digits or more');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/users', user, {
        withCredentials: true,
      });

      if (response.data.error) {
        toast("No user found");
      } else {
        
        notify();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", name); 
        localStorage.setItem("phone", phone); 
        form.reset();
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-200">
      <div className="max-w-md w-full space-y-4 p-6 bg-yellow-400">
        <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
        <form onSubmit={handleRegistration}>
          <input name="name" type="text" className="p-1 my-2" placeholder="Your name" required /> <br />
          <input name="email" className="p-1" type="email" placeholder="Your email" /> <br />
          <input name="phone" className="p-1 my-2" type="number" placeholder="Your mobile number" /> <br />
          <input name="pin" className="p-1" type="password" placeholder="Your PIN" /> <br />
          {pinError && <p className="text-red-500">{pinError}</p>}
          <button className="btn mt-2">Register</button>
        </form>
        <div className="text-center">
          <p className="text-sm text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 font-semibold p-1 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Registration;
