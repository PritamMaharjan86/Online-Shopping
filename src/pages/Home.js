import React from 'react'
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className='grid grid-cols-4 gap-4 p-8 '>

                <div className='border-1 w-10/12 h-1/1 rounded-sm m-2 p-4 pb-10 bg-white shadow-lg'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img></div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>

                    <p className='font-bold '>BenQ TK700 4K HDR Gaming Projector</p>
                    <div className='flex flex-col items-center'>
                        <p className='border-2 rounded-sm m-10 text-center w-40 p-2 text-2xl min-h-full items-center bg-yellow font-Title text-red-600 border-black shadow-[2px_2px_0px_0px_rgb(0,0,0)]'>$2395</p>

                        <Button className='bg-black text-white font-bold p-4 w-60' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
                    </div>
                </div>

                

            </div>

        </div>
    )


}

export default Home;
