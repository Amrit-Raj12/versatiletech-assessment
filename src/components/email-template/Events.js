import React from 'react'

const Events = () => {
    return (
        <div className=''>
            {/* Time Section */}
            <div className='bg-[#216095] flex items-center justify-center px-4 py-2'>
                <p className='text-white font-bold text-lg'>TIME</p>
            </div>
            
            {/* Counseling Call Section */}
            <div className='flex flex-col sm:flex-row gap-4 py-2 mb-4'>
                <div className='w-full sm:w-1/3 flex items-center justify-center py-6'>
                   
                    <svg width="86px" height="86px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <defs> <style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke:#8A8A8A;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}" }} /> </defs> <g data-name="Layer 2" id="Layer_2"> <g data-name="E405, Clock, Media, media player, multimedia" id="E405_Clock_Media_media_player_multimedia"> <circle className="cls-1" cx={256} cy={256} r={246} /> <line className="cls-1" x1={256} x2={256} y1="63.48" y2={10} /> <line className="cls-1" x1={256} x2={256} y1={502} y2="448.52" /> <line className="cls-1" x1="392.13" x2="429.95" y1="119.87" y2="82.05" /> <line className="cls-1" x1="82.05" x2="119.87" y1="429.95" y2="392.13" /> <line className="cls-1" x1="448.52" x2={502} y1={256} y2={256} /> <line className="cls-1" x1={10} x2="63.48" y1={256} y2={256} /> <line className="cls-1" x1="392.13" x2="429.95" y1="392.13" y2="429.95" /> <line className="cls-1" x1="82.05" x2="119.87" y1="82.05" y2="119.87" /> <polyline className="cls-1" points="256 127.65 256 245.3 135.44 295.88" /> </g> </g> </g></svg>
                </div>
                <div className='w-full sm:w-4/6 bg-[#F9F9F9] h-auto p-4'>
                    <p className='text-[1.2rem] sm:text-[1.35rem] text-[#8A8A8A]'>Counseling calls average 30 - 45 minutes.</p>
                </div>
            </div>
            
            {/* Medication List Section */}
            <div className='bg-[#216095] flex items-center justify-center px-4 py-2'>
                <p className='text-white font-bold text-lg'> MEDICATION LIST</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 py-2 mb-4'>
                <div className='w-full sm:w-1/3 flex items-center justify-center py-6'>
                    
                    <svg fill="#8A8A8A" height="86px" width="86px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path id="XMLID_15_" d="M196.1,41.2c0,2.4-2,4.4-4.5,4.4H68.4c-2.5,0-4.5-2-4.5-4.4V9.3c0-2.4,2-4.4,4.5-4.4h123.2 c2.5,0,4.5,2,4.5,4.4V41.2z M186.1,10.6H180v29.2h6.1V10.6z M158.9,10.6h-6.1v29.2h6.1V10.6z M172.5,10.6h-6.1v29.2h6.1V10.6z" /> <path id="XMLID_10_" d="M186.1,53.8v191.4c0,4.6-3.8,8.4-8.6,8.4H82.5c-4.8,0-8.7-3.8-8.7-8.4V53.8H186.1z M175.1,66.2H85v123.9 h90.1V66.2z M153,180.5l-9.5-17.3l-9.5,17.3h-8.8l14-25.3l-16.8-30.6c-0.9,0.1-1.7,0.2-2.6,0.2h-11.1v32.7H96V78.4h25.1 c15.2,0,21.8,9.5,21.8,23c0,8.9-3.3,15.8-9.3,19.8l12.1,22.2l9.2-16.7h8.8l-13.6,24.7l15.9,29.1H153z M130.3,101.7 c0-8.5-3.4-13.7-13.5-13.7h-8.1v27.4h9C124.4,115.3,130.3,111.6,130.3,101.7" /> </g></svg>
                </div>
                <div className='w-full sm:w-4/6 bg-[#F9F9F9] h-auto p-4'>
                    <p className='text-[1.2rem] sm:text-[1.35rem] text-[#8A8A8A]'>
                        The pharmacist will need to review all your medications, medical conditions, and allergies. Please have these details available for reference.
                    </p>
                </div>
            </div>
            
            {/* Reminder Section */}
            <div className='bg-[#216095] flex items-center justify-center px-4 py-2'>
                <p className='text-white font-bold text-lg'> REMINDER</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 py-2 mb-4'>
                <div className='w-full sm:w-1/3 flex items-center justify-center py-6'>
                <svg fill="#8A8A8A" height="86px" width="86px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 194.75 194.75" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M75.965,84.61h42.819v26.25H75.965V84.61z M65.965,84.61H23.146v26.25h42.819V84.61z M128.785,110.86h42.819V84.61h-42.819 V110.86z M65.965,120.86H23.146v26.25h42.819V120.86z M194.75,58.287v95.517c0,8.641-7.029,15.67-15.669,15.67H15.669 c-8.64,0-15.669-7.029-15.669-15.67V58.287c0-7.947,6.465-14.412,14.411-14.412h5.552V30.276c0-2.762,2.239-5,5-5h16.673 c2.761,0,5,2.238,5,5v13.599h101.477V30.276c0-2.762,2.239-5,5-5h16.673c2.761,0,5,2.238,5,5v13.599h5.552 C188.285,43.875,194.75,50.34,194.75,58.287z M158.113,56.61h6.673V35.276h-6.673V56.61z M29.963,56.61h6.673V35.276h-6.673V56.61z M181.604,79.61c0-2.762-2.239-5-5-5h-52.819H70.965H18.146c-2.761,0-5,2.238-5,5v36.25v36.25c0,2.762,2.239,5,5,5h52.819h52.819 h52.819c2.761,0,5-2.238,5-5v-36.25V79.61z M128.785,147.11h42.819v-26.25h-42.819V147.11z M118.785,120.86H75.965v26.25h42.819 V120.86z" /> </g></svg>
                </div>
                <div className='w-full sm:w-4/6 bg-[#F9F9F9] h-auto p-4'>
                    <p className='text-[1.2rem] sm:text-[1.35rem] text-[#8A8A8A]'>
                        If you schedule a counseling call, you will receive a reminder text and/or email within 24 hours of your scheduled call time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Events
