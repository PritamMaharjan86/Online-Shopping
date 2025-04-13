import React, { useContext, useState } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { CartContext } from '../context/Cartcontext';

const Home = () => {
    const { addToCart } = useContext(CartContext);

    const products = [
        {
            id: 1,
            name: "BenQ TK700 4K HDR Gaming Projector",
            price: 2395.93,
            image: "https://res.cloudinary.com/dedpvue13/image/upload/v1743488671/shopping_website/products/benq_monitor_rcqlfx.webp",
            logo: "https://res.cloudinary.com/dedpvue13/image/upload/v1743590808/shopping_website/logos/benq2951.logowik.com_ntllss.webp"
        },
        {
            id: 2,
            name: "Philips NeoPix 113 Projector",
            price: 147,
            image: "https://res.cloudinary.com/dedpvue13/image/upload/v1744186762/shopping_website/products/philips_rxbtti.webp",
            logo: "https://res.cloudinary.com/dedpvue13/image/upload/v1744189986/shopping_website/logos/Phillips_Logo_Design_History_Evolution_16_1024x1024_dcgmdl.webp"
        },
        {
            id: 3,
            name: "Samsung the Freestyle Projector",
            price: 1295,
            image: "https://res.cloudinary.com/dedpvue13/image/upload/v1744186796/shopping_website/products/samsung_tgae71.webp",
            logo: "https://res.cloudinary.com/dedpvue13/image/upload/v1744190203/shopping_website/logos/Samsung-logo_mjoc1q.jpg"
        },
        {
            id: 4,
            name: "Nebula Capsule 3 Laser Google TV Projector",
            price: 1595,
            image: "https://res.cloudinary.com/dedpvue13/image/upload/v1744191388/shopping_website/products/nebula_cnvard.webp",
            logo: "https://res.cloudinary.com/dedpvue13/image/upload/v1744191457/shopping_website/logos/nebula-by-kryolan-logo-vector_fcx50u.png"
        },
    ];

    const offers = [
        {
            id: 1,
            logo: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744191388/shopping_website/products/nebula_cnvard.webp',
            title: 'Samsung Mega Sale',
            offer: 'Up to 40% off',
            bgColor: 'bg-blue-200',
        },
        {
            id: 2,
            logo: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744186796/shopping_website/products/samsung_tgae71.webp',
            title: 'BenQ Bright Deals',
            offer: 'Flat $100 Off',
            bgColor: 'bg-pink-200',
        },
        // Add more...
    ];


    const [buttonStates, setButtonStates] = useState({});

    const handleCart = (product) => {
        addToCart(product);
        setButtonStates(prev => ({
            ...prev,
            [product.id]: { text: "Added", isAdded: true }
        }));

        setTimeout(() => {
            setButtonStates(prev => ({
                ...prev,
                [product.id]: { text: "Add to Cart", isAdded: false }
            }));
        }, 2000);
    };

    return (
        <div>
            <Navigation />

            <div className="flex overflow-x-auto gap-4 p-4">
                {offers.map((item) => (
                    <div key={item.id} className={`min-w-[250px] p-4 rounded-lg shadow-md ${item.bgColor}`}>
                        <img src={item.logo} alt="brand" className="h-10 object-contain mb-2" />
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm">{item.offer}</p>
                    </div>
                ))}
            </div>



            <div className='flex flex-wrap justify-center items-center gap-3 p-6'>
                {products.map(product => {
                    const state = buttonStates[product.id] || { text: "Add to Cart", isAdded: false };
                    return (
                        <div
                            key={product.id}
                            className='w-[300px] h-[500px] flex flex-col justify-between rounded-md p-4 bg-white shadow-lg'
                        >
                            {/* Image */}
                            <div className='flex justify-center items-center'>
                                <img className='w-40 h-40 object-contain' src={product.image} alt={product.name} />
                            </div>

                            {/* Logo */}
                            <div className='text-left'>
                                <div className='w-12 h-10 flex items-center justify-center overflow-hidden'>
                                    <img src={product.logo} alt="Brand Logo" className='object-contain w-full h-full' />
                                </div>
                            </div>

                            {/* Product name */}
                            <p className='font-bold text-lg'>{product.name}</p>

                            {/* Price + Button */}
                            <div className='flex flex-col items-center mt-4 p-4 '>
                                <p className='border-2 rounded-sm mb-4 text-center w-40 p-2 text-2xl bg-yellow font-Title text-red-600 border-black shadow-[2px_2px_0px_0px_rgb(0,0,0)]'>
                                    ${product.price}
                                </p>
                                <Button
                                    className={`text-white font-bold p-4 w-64 m-3 ${state.isAdded ? 'bg-green-700' : 'bg-black'}`}
                                    label={state.text}
                                    onClick={() => handleCart(product)}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Home;
