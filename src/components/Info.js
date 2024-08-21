import React from 'react'

const Info = () => {
    return (
        <div className='m-16 grid grid-cols-12 md:mx-auto mx-6 max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
            <div className='md:col-span-8 col-span-12'>
                <h1 className='md:text-[3rem] text-2xl font-serif font-bold text-blue-600 md:leading-tight'>Medicare information to help you make the right choice.</h1>

                <div className='md:mt-10 mt-4'>
                    <h3 className='text-blue-600 md:text-[24px] text-xl mb-6 md:mb-2'>From a health plan that&apos;s been right by yodur side. </h3>
                    <p>Whether you&apos;re starting your Medicare journey or already a few steps in, it&apos;s important to know what&apos;s new, how it impacts you and when to take action. That&apos;s where we can help. We&apos;re tuned in to the latest Medicare news as it happens. We&apos;ll deliver it in a way that&apos;s easy to understand, so you can stay informed and ensure you have the right coverage for your healthcare needs. Important information with a Free Medicare Decision Guide reflecting Medicare plan options to fit your current and future needs.</p>

                </div>


                <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="rounded-lg py-4 flex flex-col items-center md:block md:flex-row md:items-start md:justify-between bg-white">
                    <svg className='fill-blue-600 mb-4' width="106px" height="106px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>clipboard-check</title> <path d="M26 5.25h-2c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1.25v22.5h-18.5v-22.5h1.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-2c-0.414 0-0.75 0.336-0.75 0.75v0 24c0 0.414 0.336 0.75 0.75 0.75h20c0.414-0 0.75-0.336 0.75-0.75v0-24c-0-0.414-0.336-0.75-0.75-0.75v0zM11 8.749h10c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-2.019c0.477-0.616 0.766-1.398 0.769-2.248v-0.001c0-2.071-1.679-3.75-3.75-3.75s-3.75 1.679-3.75 3.75v0c0.003 0.851 0.292 1.633 0.775 2.258l-0.006-0.009h-2.019c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM13.75 5c0-0 0-0.001 0-0.001 0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.249v-0zM20.326 13.494l-6.792 7.424-1.886-1.873c-0.136-0.136-0.323-0.22-0.531-0.22-0.414 0-0.749 0.335-0.749 0.749 0 0.209 0.085 0.398 0.223 0.534l0 0 2.44 2.424 0.015 0.006 0.007 0.015c0.13 0.122 0.306 0.197 0.499 0.197 0.199 0 0.38-0.080 0.512-0.21l-0 0 0.027-0.011 0.005-0.011 0.017-0.012 7.317-8c0.122-0.133 0.197-0.311 0.197-0.506 0-0.414-0.335-0.749-0.749-0.749-0.219 0-0.415 0.094-0.552 0.243l-0 0.001z" /> </g></svg>
                    <p className='text-md'><span className='font-bold'>Important information</span> with a Free Medicare Decision Guide reflecting Medicare plan options to fit your current and future needs.</p>
                    </div>
                    <div className="rounded-lg py-4 flex flex-col items-center md:block md:flex-row md:items-start md:justify-between bg-white">
                    <svg className='fill-blue-600 mb-4' width="106px" height="106px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M 13 2 C 11.355469 2 10 3.355469 10 5 L 10 16.8125 L 9.34375 16.125 L 9.09375 15.90625 C 7.941406 14.753906 6.058594 14.753906 4.90625 15.90625 C 3.753906 17.058594 3.753906 18.941406 4.90625 20.09375 L 4.90625 20.125 L 13.09375 28.21875 L 13.15625 28.25 L 13.1875 28.3125 C 14.535156 29.324219 16.253906 30 18.1875 30 L 19.90625 30 C 24.441406 30 28.09375 26.347656 28.09375 21.8125 L 28.09375 14 C 28.09375 12.355469 26.738281 11 25.09375 11 C 24.667969 11 24.273438 11.117188 23.90625 11.28125 C 23.578125 9.980469 22.394531 9 21 9 C 20.234375 9 19.53125 9.300781 19 9.78125 C 18.46875 9.300781 17.765625 9 17 9 C 16.648438 9 16.316406 9.074219 16 9.1875 L 16 5 C 16 3.355469 14.644531 2 13 2 Z M 13 4 C 13.554688 4 14 4.445313 14 5 L 14 16 L 16 16 L 16 12 C 16 11.445313 16.445313 11 17 11 C 17.554688 11 18 11.445313 18 12 L 18 16 L 20 16 L 20 12 C 20 11.445313 20.445313 11 21 11 C 21.554688 11 22 11.445313 22 12 L 22 16 L 24.09375 16 L 24.09375 14 C 24.09375 13.445313 24.539063 13 25.09375 13 C 25.648438 13 26.09375 13.445313 26.09375 14 L 26.09375 21.8125 C 26.09375 25.277344 23.371094 28 19.90625 28 L 18.1875 28 C 16.722656 28 15.457031 27.476563 14.40625 26.6875 L 6.3125 18.6875 C 5.867188 18.242188 5.867188 17.757813 6.3125 17.3125 C 6.757813 16.867188 7.242188 16.867188 7.6875 17.3125 L 12 21.625 L 12 5 C 12 4.445313 12.445313 4 13 4 Z" /></g></svg>

                    <p className='text-md'><span className='font-bold'>Exclusive access to FREE Medicare</span> Webinars to build your Medicare confidence by learning the four parts of Medicare: Part A, Part B, Part C and Part D.Webinars to build your Medicare confidence by learning the four parts of Medicare: Part A, Part B, Part C and Part D.</p>
                    </div>
                    <div className="rounded-lg py-4 flex flex-col items-center md:block md:flex-row md:items-start md:justify-between bg-white">
                   <svg className='fill-blue-600 mb-4' width="106px" height="106px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.75 32.75" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M29.375,1.25h-1.123c0.029-0.093,0.059-0.186,0.059-0.289c0-0.53-0.432-0.961-0.963-0.961s-0.961,0.431-0.961,0.961 c0,0.103,0.028,0.196,0.059,0.289h-3.68c0.029-0.093,0.059-0.186,0.059-0.289C22.823,0.431,22.393,0,21.861,0 C21.331,0,20.9,0.431,20.9,0.961c0,0.103,0.029,0.196,0.059,0.289h-3.681c0.029-0.093,0.058-0.186,0.058-0.289 c0-0.53-0.43-0.961-0.961-0.961s-0.961,0.431-0.961,0.961c0,0.103,0.028,0.196,0.058,0.289h-3.681 c0.029-0.093,0.059-0.186,0.059-0.289C11.85,0.431,11.419,0,10.889,0c-0.531,0-0.962,0.431-0.962,0.961 c0,0.103,0.028,0.196,0.058,0.289h-3.68c0.03-0.093,0.059-0.186,0.059-0.289C6.364,0.43,5.934,0,5.403,0 C4.872,0,4.441,0.431,4.441,0.961c0,0.103,0.028,0.196,0.058,0.289H3.375c-1.518,0-2.75,1.233-2.75,2.75v26 c0,1.518,1.232,2.75,2.75,2.75H26.27l5.855-5.855V4C32.125,2.484,30.893,1.25,29.375,1.25z M30.625,26.273l-0.311,0.311h-2.006 V8.943c0-1.576-1.289-2.864-2.863-2.864H7.306c-1.576,0-2.864,1.289-2.864,2.864v18.14c0,1.576,1.289,2.864,2.864,2.864h18.139 c0.176,0,0.347-0.021,0.514-0.053v1.045l-0.311,0.311H3.375c-0.689,0-1.25-0.561-1.25-1.25V5h28.5V26.273z M9.954,9.734V8.257 h1.049v5.053H9.804l-1.08-1.95c-0.299-0.538-0.63-1.19-0.876-1.782L7.825,9.585c0.031,0.666,0.046,1.378,0.046,2.203v1.521h-1.05 V8.256h1.335l1.049,1.852c0.299,0.531,0.6,1.163,0.825,1.732h0.022C9.977,11.173,9.954,10.492,9.954,9.734z M6.828,15.149h19.094 v11.457c0,0.525-0.431,0.955-0.955,0.955H7.783c-0.526,0-0.955-0.43-0.955-0.955V15.149z M15.002,10.244v0.929h-1.86v1.198h2.077 v0.938h-3.223V8.256h3.119v0.937h-1.973v1.05L15.002,10.244L15.002,10.244z M15.67,8.257h1.223l0.382,2.083 c0.113,0.601,0.217,1.253,0.299,1.764h0.015c0.083-0.549,0.203-1.155,0.33-1.778l0.427-2.069h1.215l0.405,2.129 c0.112,0.594,0.194,1.133,0.269,1.694h0.016c0.076-0.561,0.188-1.153,0.292-1.753l0.412-2.069h1.162l-1.304,5.053h-1.235 l-0.427-2.174c-0.098-0.509-0.182-0.981-0.24-1.557h-0.016c-0.088,0.569-0.172,1.048-0.291,1.557l-0.479,2.174h-1.253L15.67,8.257 z M23.891,13.384c-0.576,0-1.146-0.15-1.433-0.307l0.233-0.945c0.308,0.16,0.779,0.314,1.266,0.314 c0.523,0,0.802-0.216,0.802-0.545c0-0.314-0.239-0.496-0.847-0.713c-0.839-0.292-1.387-0.756-1.387-1.49 c0-0.864,0.72-1.523,1.912-1.523c0.569,0,0.988,0.122,1.289,0.256l-0.254,0.92c-0.203-0.096-0.562-0.238-1.059-0.238 c-0.494,0-0.732,0.225-0.732,0.487c0,0.323,0.283,0.463,0.937,0.712c0.891,0.328,1.312,0.792,1.312,1.507 C25.928,12.664,25.277,13.384,23.891,13.384z" /> <path d="M8.145,17.275h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.398-0.477-0.398H8.145 c-0.263,0-0.477,0.179-0.477,0.398C7.667,17.096,7.882,17.275,8.145,17.275z" /> <path d="M8.145,19.066h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,18.887,7.882,19.066,8.145,19.066z" /> <path d="M8.145,20.857h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,20.678,7.882,20.857,8.145,20.857z" /> <path d="M8.145,22.648h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,22.469,7.882,22.648,8.145,22.648z" /> <path d="M8.145,24.439h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,24.26,7.882,24.439,8.145,24.439z" /> <path d="M8.145,26.23h7.213c0.262,0,0.477-0.18,0.477-0.397c0-0.219-0.215-0.397-0.477-0.397H8.145 c-0.263,0-0.477,0.179-0.477,0.397C7.667,26.051,7.882,26.23,8.145,26.23z" /> <path d="M17.394,17.275h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.398-0.478-0.398h-7.211 c-0.263,0-0.478,0.179-0.478,0.398C16.916,17.096,17.131,17.275,17.394,17.275z" /> <path d="M17.394,19.066h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,18.887,17.131,19.066,17.394,19.066z" /> <path d="M17.394,20.857h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,20.678,17.131,20.857,17.394,20.857z" /> <path d="M17.394,22.648h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,22.469,17.131,22.648,17.394,22.648z" /> <path d="M17.394,24.439h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,24.26,17.131,24.439,17.394,24.439z" /> <path d="M17.394,26.23h7.211c0.264,0,0.478-0.18,0.478-0.397c0-0.219-0.214-0.397-0.478-0.397h-7.211 c-0.263,0-0.478,0.179-0.478,0.397C16.916,26.051,17.131,26.23,17.394,26.23z" /> </g> </g> </g></svg>

                    <p className='text-md'><span className='font-bold'>Relevant monthly health and wellness articles</span> and the latest Medicare news and reminders.</p>
                    </div>
                    <div className="rounded-lg py-4 flex flex-col items-center md:block md:flex-row md:items-start md:justify-between bg-white">
                    <svg className='stroke-blue-600 mb-4' width="106px" height="106px"  viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M14.665 9.605H2.995C2.715 9.605 2.495 9.825 2.495 10.105V15.265C2.495 15.545 2.715 15.765 2.995 15.765H4.495V18.505L7.16501 15.765H14.665C14.945 15.765 15.165 15.545 15.165 15.265V10.105C15.165 9.825 14.935 9.605 14.665 9.605Z"  strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> <path d="M15.175 12.655H15.165"  strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.83496 7.575V6.995C8.83496 6.715 9.05496 6.495 9.33496 6.495H21.005C21.275 6.495 21.505 6.715 21.505 6.995V12.325C21.505 12.505 21.365 12.655 21.185 12.655H19.505"  strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> <path d="M8.83496 9.605V9.575"  strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> <path d="M19.505 12.655V15.385L16.835 12.655"  strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>


                    <p className='text-md'><span className='font-bold'>Access to licensed Benefit Advisors</span> to get one-on-one support to review your Medicare options and get the answers to your important Medicare questions.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Info