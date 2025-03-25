import { Link } from 'react-router-dom'

import React from 'react'

const Navigation = () => {
    return (
        <div>
            <div class="mx-auto flex  max-w-full items-center gap-x-4 bg-white p-4 shadow-lg outline outline-black/5 dark:bg-yellow-300 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <div className="ml-5 text-3xl font-bold text-black uppercase font-Acme">Primswed</div>
                    <p className="ml-10 text-black text-sm uppercase font-Acme">Your tech store</p>
                </div>
            </div>
            <div className="mx-auto flex max-w-full items-center gap-x-4 bg-black p-3 shadow-lg outline">
                <ul className='text-white text-lg flex justify-center space-x-10 m-1 font-Acme'>
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
