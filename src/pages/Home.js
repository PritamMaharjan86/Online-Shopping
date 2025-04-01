import React from 'react'
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            <Navigation />

            <p>BenQ TK700 4K HDR Gaming Projector</p>
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' label="Add to Cart" onClick={() => alert("Product added to cart")}  ></Button>
            <p>Price: $1499.99</p>

        </div>
    )


}

export default Home;
