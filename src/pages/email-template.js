import Banner from '@/components/email-template/Banner'
import Events from '@/components/email-template/Events'
import Footer from '@/components/email-template/Footer'
import Header from '@/components/email-template/Header'
import React from 'react'

const EmailTemplate = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border rounded-lg shadow-lg">
      <Header />
      <Banner />
      <p className="text-gray-700 mb-4 text-xl">
        Hi [firstName],
      </p>
      <p className="text-gray-700 mb-4 text-xl">
        You have successfully canceled your scheduled
        counseling call. In order to receive your
        prescription, you must complete a counseling call
        with one of our pharmacists.
      </p>
      <p className="text-gray-700 mb-4 text-xl">
        Call  <a href="tel:+8669973688" className='text-[#0c558e] text-bold underline'>(866) 997-3688</a> Monday through Friday, 7 a.m. to 8
        p.m. CT to complete your counseling call with a
        pharmacist.
      </p>
      <p className="text-gray-700 mb-4 text-xl">
        The REMS patient counseling call provides important
        information about the safe use of your medication and
        an opportunity to discuss any questions or concerns
        with our pharmacists.
      </p>
      <Events />
      <div className='bg-[#1E5E93] text-[#1E5E93] h-[4px] my-4' />
      
      <p className="text-[1.35rem] text-[#8A8A8A] mb-2">
        Than you,
      </p>
      <p className="text-[1.35rem] text-[#8A8A8A] mb-2">
      Express Scripts Specialty Distribution Services
      </p>
      <Footer />
    </div>
  )
}

export default EmailTemplate