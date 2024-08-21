import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-[#333333]">
            <div class="md:mx-auto mx-6 max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <p className='text-white text-[12px] md:text-md'>&copy; 2023 Cigna Healthcare. All rights reserved.</p>

                <div className='mt-12 text-white block'>
                    <div className='underline mb-4 text-[12px] md:text-md'>
                        <a href="#" target="_blank" rel="noreferrer">Cigna Medicare.com</a>
                    </div>
                    <div className='mb-4 text-[12px] md:text-md'>
                        <a href="#" className='mr-2 underline' target="_blank" rel="noreferrer">Privacy</a>
                        <span> | </span>
                        <a href="#" className='ml-2 underline' target="_blank" rel="noreferrer">Privacy Privacidad</a>
                    </div>
                    <div className='mb-4 text-[12px]'>
                        <a href="#" className='mr-2 underline' target="_blank" rel="noreferrer">Notice of Nondiscrimination</a>
                        <span> | </span>
                        <a href="#" className='ml-2 underline' target="_blank" rel="noreferrer">Politica Anti-Discriminacion</a>
                    </div>
                    <div className='mb-4 text-[12px] md:text-md'>
                        <a href="#" className='mr-2 underline' target="_blank" rel="noreferrer">Language Assistance</a> <span> | </span>
                        <a href="#" className='mr-2 underline' target="_blank" rel="noreferrer"> Servicios de asistencia de</a>
                    </div>

                    <hr />

                    <div className='text-white mt-4 text-[12px] md:text-md'>
                        <p>Cigna Healthcare products and services are provided exclusively by or through operating subsidiaries of The Cigna Group. The Cigna names, logos, and marks, including THE CIGNA GROUP and CIGNA HEALTHCARE, are owned by Cigna Intellectual Property, Inc.
                            To file a marketing complaint, contact Cigna Healthcare at 1-800-668-3813 (TTY 711), Monday-Friday, 7:30 a.m.-7:30 p.m. CT, or call 1-800-MEDICARE (24 hours a day/7 days a week). Please include the agent/broker name if possible.
                            Subsidiaries of The Cigna Group contract with Medicare to offer Medicare Advantage HMO and PPO plans and Part D Prescription Drug Plans (PDP) in select states, and with select State Medicaid programs. Enrollment in a Cigna Healthcare product depends on contract renewal.</p>
                    </div>

                    <div className='mt-2 text-white text-[12px] md:text-md'>
                        <p>Cigna Healthcare</p>
                        <p>500 Great Circle Blvd</p>
                        <p>Nashville, TN 37228</p>
                    </div>

                    <div className='flex justify-between mt-2 text-white text-[12px] md:text-md'>
                        <p className='mb-2'>INT_24_1032813_C</p>
                        <p className='mb-2'>977873 08/23</p>
                    </div>
                    <p className='text-white text-[12px] md:text-md'>Date Last Updated: 10/01/2023</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer