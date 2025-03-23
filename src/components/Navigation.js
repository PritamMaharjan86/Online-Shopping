import { Link } from 'react-router-dom'

import React from 'react'

const Navigation = () => {
    return (
        <div>
            <div class="mx-auto flex max-w-full items-center gap-x-4 bg-white p-6 shadow-lg outline outline-black/5 dark:bg-orange-500 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <div className="text-5xl font-bold text-black uppercase">Primswed</div>
                    <p className="text-black text-md uppercase">Your tech store</p>
                </div>
            </div>
            <div className="mx-auto flex max-w-full items-center gap-x-4 bg-black p-3 shadow-lg outline">
                <ul className='text-white text-xl flex justify-center space-x-10 m-1'>
                    <Link
                        to="/home">
                        Home
                    </Link>

                    <Link
                        to="/contact">
                        Contact Us
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
