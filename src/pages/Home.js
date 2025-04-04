import React from 'react'
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className='grid grid-cols-4 gap-4 p-8'>

                <div className='border-1 rounded-sm m-2 p-4 pb-10 bg-white w-1/6 mx-auto shadow-lg min-w-max'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img></div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>

                    <p className='font-bold '>BenQ TK700 4K HDR Gaming Projector</p>
                    <div className='flex flex-col items-center p-8'>
                        <p className='border-2 rounded-sm m-8 w-max p-3 pl-10 pr-10 max-h-full items-center bg-yellow-300 font-Russo text-red-600 border-black shadow-[2px_2px_0px_0px_rgb(0,0,0)]'>$2395</p>

                        <Button className='bg-black text-white font-bold p-3 max-w-full pl-12 pr-12 ' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
                    </div>
                </div>

                <div className='border-1 rounded-sm m-2 p-4 pb-10 bg-white w-1/6 mx-auto shadow-lg min-w-max'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img></div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>

                    <p className='font-bold '>BenQ TK700 4K HDR Gaming Projector</p>
                    <div className='flex flex-col items-center p-8'>
                        <p className=' border-2 rounded-sm m-8 w-max p-3 pl-10 pr-10 max-h-full items-center bg-yellow-300 font-Russo text-red-600 border-black shadow-lg'>$2395</p>

                        <Button className='bg-black text-white font-bold p-3 max-w-full pl-12 pr-12 ' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
                    </div>
                </div>

                <div className='border-1 rounded-sm m-2 p-4 pb-10 bg-white w-1/6 mx-auto shadow-lg min-w-max'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img></div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>

                    <p className='font-bold '>BenQ TK700 4K HDR Gaming Projector</p>
                    <div className='flex flex-col items-center p-8'>
                        <p className=' border-2 rounded-sm m-8 w-max p-3 pl-10 pr-10 max-h-full items-center bg-yellow-300 font-Russo text-red-600 border-black shadow-lg'>$2395</p>

                        <Button className='bg-black text-white font-bold p-3 max-w-full pl-12 pr-12 ' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
                    </div>
                </div>

                <div className='border-1 rounded-sm m-2 p-4 pb-10 bg-white w-1/6 mx-auto shadow-lg min-w-max'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img></div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>

                    <p className='font-bold '>BenQ TK700 4K HDR Gaming Projector</p>
                    <div className='flex flex-col items-center p-8'>
                        <p className=' border-2 rounded-sm m-8 w-max p-3 pl-10 pr-10 max-h-full items-center bg-yellow-300 font-Russo text-red-600 border-black shadow-lg'>$2395</p>

                        <Button className='bg-black text-white font-bold p-3 max-w-full pl-12 pr-12 ' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
                    </div>
                </div>

            </div>

        </div>
    )


}

export default Home;
