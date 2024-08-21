import React from 'react'

const Header = () => {
  return (
    <header className='mb-4'>
        <h3 className='text-gray-500 font-bold flex'><span className='hidden md:flex mr-1'>Desktop</span> <span className='flex md:hidden mr-1'>Mobile</span>  Version</h3>
        <p className='text-gray-500'><spnan className="font-bold">From:</spnan> Express Scripts Specialty Distribution Services (sdspharmacy@orders.express-scripts.com)</p>
        <p className='text-gray-500'><spnan className="font-bold">Subject:</spnan> Scheduled counseling call successfully canceled</p>
        <p className='text-gray-500'><spnan className="font-bold">Pre-header:</spnan> Call to reschedule soon</p>
    </header>
  )
}

export default Header