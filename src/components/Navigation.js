import { Link } from 'react-router-dom'
import Button from './Button'
import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiStore2Line } from "react-icons/ri";



const Navigation = () => {



    const handleCart = () => {
        alert("Cart is empty");
    }

    const handleUser = () => {
        alert("User not exists");
    }

    const handleStores = () => {
        alert("Stores are closed");
    }




    return (
        <div>
            <div class="mx-auto flex  max-w-full items-center gap-x-4  p-4 outline outline-black/5 bg-yellow-300 shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <div className="ml-5 text-3xl font-bold text-black uppercase font-Russo">Primswed</div>
                    <p className="ml-10 text-black text-sm uppercase font-Russo">Your tech store</p>
                </div>

                <div className='ml-auto flex items-center gap-x-8 mr-8'>
                    <Button label={<RiUserLine className='text-2xl' />} onClick={handleUser}></Button>
                    <Button label={<RiStore2Line className='text-2xl' />} onClick={handleStores}></Button>
                    <Button label={<RiShoppingCart2Line className='text-2xl' />} onClick={handleCart}></Button>

                </div>
            </div>
            <div className="mx-auto flex max-w-full items-center gap-x-4 bg-black p-2 shadow-lg outline">
                <ul className='text-white text-lg flex justify-center space-x-12 m-1 ml-5 font-Russo'>
                    <Link
                        to="/home">
                        Products
                    </Link>

                    <Link
                        to="/contact">
                        Brands
                    </Link>
                    <Link
                        to="/home">
                        Deals & Offers
                    </Link>

                    <Link
                        to="/contact">
                        Clearance
                    </Link>
                    <Link
                        to="/home">
                        Gift Cards
                    </Link>

                    <Link
                        to="/contact">
                        Join Us
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
