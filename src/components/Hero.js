import React, { useState } from 'react';

const Hero = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={`relative hidden md:flex flex-col md:flex-row-reverse items-center justify-between h-[70vh] object-fit bg-cover bg-center`} style={{ backgroundImage: `url(/hero-bg.png)` }}>
        {/* Desktop Form Component */}
        <div className="md:block hidden bg-white p-8 rounded-lg w-full xl:w-1/5 md:w-2/5 mt-8 md:mt-0 md:mr-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Subscribe Today</h2>
          <p className='text-md font-bold mb-6'>Complete this form to start receiving important Medicare information from Cigna Healthcare<sup className='text-[10px] font-normal'>SM</sup>.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div>
            <div className='mt-8'>
              <div className='flex items-center cursor-pointer' onClick={handleShow}>
                {!show ? (
                  <svg width="20px" height="20px" viewBox="0 0 24 24" className="fill-blue-600" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" /> </g></svg>
                ) : (
                  <svg width="20px" height="20px" viewBox="0 0 1024 1024" className="icon fill-blue-600" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" /></g></svg>
                )}
                <a className='text-md text-blue-600 font-bold decoration-none hover:underline ml-2' href='#'>Terms and Conditions</a>
              </div>

              {show && (
                <p className='text-md'>
                  By clicking Submit below, I agree to receive the latest updates about new products, services, and promotions which may be based on your health and health care activity.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-[200px] bg-[#0033FF] font-bold text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className='flex md:hidden flex-col items-center'>
        <div className='h-96 w-full bg-cover bg-center object-contain' style={{ backgroundImage: `url(/hero-bg-mobile2.png)` }} />

        {/* Mobile Form Component */}
        <div className="h-[600px] w-full md:hidden bg-white p-8 rounded-lg ">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Subscribe today.</h2>
          <p className='text-sm font-bold mb-6'>Complete this form to start receiving important Medicare information from Cigna Healthcare<sup className='text-[10px] font-normal'>SM</sup>.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div>
            <div className='mt-8'>
              <div className='flex items-center mb-2' onClick={handleShow}>
                {!show ? (
                  <svg width="18px" height="18px" viewBox="0 0 24 24" className="fill-blue-600" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" /> </g></svg>
                ) : (
                  <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon fill-blue-600" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" /></g></svg>
                )}
                <a className='text-md text-blue-600 font-bold decoration-none hover:underline ml-2' href='#'>Terms and Conditions</a>
              </div>

              {show && (
                <p className='text-sm'>
                  By clicking Submit below, I agree to receive the latest updates about new products, services, and promotions which may be based on your health and health care activity.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-[200px] bg-[#0033FF] font-bold text-white p-6 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
