import { Link } from 'react-router-dom'
import Button from './Button'
import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiStore2Line } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { CartContext } from '../context/Cartcontext';



const Navigation = () => {

    const { cartItems } = React.useContext(CartContext);



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
            <div class="mx-auto flex h-20 max-w-full items-center gap-x-4 outline outline-black/5 bg-yellow shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <div>
                    <div className="ml-8 text-3xl font-bold text-black uppercase font-Heading">PS Store</div>
                    <a className="ml-12 text-black text-sm uppercase font-Title font-normal">all in one tech</a>

                </div>

                <div className='ml-auto flex items-center gap-x-8 mr-8'>
                    <Link to="/login">
                        <div className='flex flex-col items-center'>
                            <Button label={<RiUserLine className='text-xl' />} />
                            <span className='text-sm'>Login</span>
                        </div>
                    </Link>

                    <div className='flex flex-col items-center'>
                        <Button label={<RiStore2Line className='text-xl' />} onClick={handleStores}></Button>
                        <span className='text-sm'>Stores</span>
                    </div>

                    <div className='relative'>
                        <Link to="/cart" className="flex flex-col items-center no-underline text-inherit">
                            {cartItems.length > 0 && (
                                <span className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/2 bg-red-600 text-xs rounded-full w-4 h-4 text-white font-bold text-center'>
                                    {cartItems.length}
                                </span>
                            )}

                            <Button label={<RiShoppingCart2Line className='text-xl' />} />
                            <span className='text-sm'>Cart</span>
                        </Link>
                    </div>


                    <div className='flex flex-col items-center'>
                        <Button label={<RiSignpostLine className='text-xl' />} onClick={handleCart}></Button>
                        <span className='text-sm'>Delivery</span>
                    </div>

                </div>
            </div>
            <div className="mx-auto flex max-w-full items-center gap-x-4 bg-black p-2 h-10 shadow-lg outline">
                <ul className='text-white text-md flex justify-center space-x-12 m-1 ml-5 font-bold '>
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
