import { Link } from 'react-router-dom'
import Button from './Button'
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiStore2Line } from "react-icons/ri";
import { RiSignpostLine } from "react-icons/ri";
import { CartContext } from '../context/Cartcontext';
import SearchBar from './SearchBar';
import React, { useState, useEffect } from 'react';

const Navigation = () => {

    const { cartItems } = React.useContext(CartContext);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleCart = () => {
        alert("Cart is empty");
    }

    const handleStores = () => {
        alert("Stores are closed");
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY < lastScrollY - 10) {
                setShowNavbar(true); // Scroll up
            } else if (currentY > lastScrollY + 10) {
                setShowNavbar(false); // Scroll down
            }

            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);



    return (
        <>
            <div className='sticky top-0 z-20 '>
                <div class="flex h-16 p-10 max-w-full items-center gap-x-4 bg-yellow">
                    <div>
                        <button
                            onClick={() => (window.location.href = '/')}
                            className="text-left"
                        >
                            <div className="text-5xl font-bold text-black uppercase font-Heading">primtech</div>
                            <div className="text-black text-sm uppercase font-Title">your tech center</div>
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
            <div className={`p-2 mx-auto flex max-w-full items-center gap-x-4 bg-black h-10 shadow-lg fixed left-0 z-10 w-full transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}>
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
