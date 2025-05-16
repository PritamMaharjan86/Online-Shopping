import { Link } from 'react-router-dom'
import Button from './Button'
import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiStore2Line } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { CartContext } from '../context/Cartcontext';
import SearchBar from './SearchBar';




const Navigation = () => {

    const { cartItems } = React.useContext(CartContext);


    const handleCart = () => {
        alert("Cart is empty");
    }

    const handleStores = () => {
        alert("Stores are closed");
    }




    return (
        <>
            <div className='sticky top-0 z-20 '>
                <div class="flex h-16 p-10 max-w-full items-center gap-x-4 outline outline-black/5 bg-yellow shadow-none dark:-outline-offset-1 dark:outline-white/10">
                    <div>
                        <button
                            onClick={() => (window.location.href = '/')}
                            className="text-left"
                        >
                            <div className="text-5xl font-bold text-black uppercase font-Heading">jb-hifi</div>
                            <div className="text-black text-sm uppercase font-Title">always cheap prices</div>
                        </button>

                    </div>

                    <div className="flex justify-center items-center h-screen w-1/3">
                        <div className=" w-full ml-20 mt-5">
                            <SearchBar />
                        </div>
                    </div>



                    <div className='ml-auto flex items-center gap-x-8 mr-6 font-normal'>

                        <div className='flex flex-col items-center'>
                            <Button label={<RiSignpostLine className='text-xl' />} onClick={handleCart}></Button>
                            <span className='text-sm'>Track order</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <Button label={<RiStore2Line className='text-xl' />} onClick={handleStores}></Button>
                            <span className='text-sm'>Stores</span>
                        </div>

                        <Link to="/login">
                            <div className='flex flex-col items-center'>
                                <Button label={<RiUserLine className='text-xl' />} />
                                <span className='text-sm'>Log in</span>
                            </div>
                        </Link>

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

                    </div>
                </div>

            </div>
            <div className="mx-auto flex max-w-full items-center gap-x-4 bg-black p-2 h-10 shadow-lg outline ">
                <ul className='text-white text-md flex justify-center space-x-12 m-1 ml-5 font-bold tracking-wide gap-2'>
                    <Link
                        to="/product">
                        Products
                    </Link>
                    <Link
                        to="/contact">
                        Brands
                    </Link>
                    <Link
                        to="/home">
                        Deals & Catalogues
                    </Link>

                    <Link
                        to="/contact">
                        Clearance
                    </Link>
                    <Link
                        to="/home">
                        Services
                    </Link>

                    <Link
                        to="/contact">
                        Join JB Perks
                    </Link>

                    <Link
                        to="/contact">
                        Gift Cards
                    </Link>

                    <Link
                        to="/contact">
                        News & Reviews
                    </Link>
                </ul>
            </div>
        </>


    )
}

export default Navigation
