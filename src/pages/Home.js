import React from 'react'
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            <Navigation />

            <div className='border-2 rounded-sm border-black m-2 p-2 bg-white w-1/4 mx-auto shadow-lg min-w-max'>
                <img className='w-40 h-40' src='https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp'></img>
                <div className="text-left">
                    <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                </div>

                <p className='font-bold'>BenQ TK700 4K HDR Gaming Projector</p>

                <p className=' border-2 rounded-sm m-8 w-max p-3 pl-10 pr-10 max-h-full items-center bg-yellow-300 font-Russo text-red-600 border-black shadow-lg'>$2395</p>

                <Button className='bg-black text-white font-bold p-3 w-max pl-12 pr-12' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
            </div>

        </div>
    )


}

export default Home;
