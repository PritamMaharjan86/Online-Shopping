import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { CartContext } from '../context/Cartcontext';

const Home = () => {
    const [buttonText, setButtonText] = React.useState("Add to Cart");
    const [isAdded, setIsAdded] = React.useState(false);
    const { addToCart } = useContext(CartContext);

    const product = {
        id: 1,
        name: "BenQ TK700 4K HDR Gaming Projector",
        price: 2395,
        image: "https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/benq_monitor_rcqlfx.webp"
    };

    const handleCart = () => {
        addToCart(product);
        setButtonText("Added");
        setIsAdded(true);
        setTimeout(() => {
            setButtonText("Add to Cart");
            setIsAdded(false);
        }, 2000);
    };

    return (
        <div>
            <Navigation />
            <div className='grid grid-cols-4 gap-4 p-8 '>
                <div className='border-1 w-10/12 h-1/1 rounded-sm m-2 p-4 pb-10 bg-white shadow-lg'>
                    <div className='flex flex-col items-center '>
                        <img className='w-40 h-40' src={product.image} />
                    </div>
                    <div className="text-left">
                        <img className="w-12 h-8" src="https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/benq2951.logowik.com_ntllss.webp" />
                    </div>
                    <p className='font-bold '>{product.name}</p>
                    <div className='flex flex-col items-center'>
                        <p className='border-2 rounded-sm m-10 text-center w-40 p-2 text-2xl min-h-full items-center bg-yellow font-Title text-red-600 border-black shadow-[2px_2px_0px_0px_rgb(0,0,0)]'>${product.price}</p>
                        <Button className={`text-white font-bold p-4 w-60 ${isAdded ? 'bg-green-700' : 'bg-black'}`} label={buttonText} onClick={handleCart}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
