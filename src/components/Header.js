import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-white flex'>
            <div className="mx-auto md:flex h-20 w-full md:max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-0">
                <a className="p-4 flex items-center justify-center md:justify-start flex-col text-primary dark:text-primary" href="#">

                    <Image
                        src="/cigna.png"
                        alt="Logo"
                        width={160}
                        height={160}
                        className="mr-4 hidden md:block"
                    />
                    <img src='./cigna.png' alt='' width={120} height={120} className="mr-4 block md:hidden" />
                </a>
            </div>
        </header>
    )
}

export default Header