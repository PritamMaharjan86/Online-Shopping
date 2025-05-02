import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Advertisement from '../components/Advertisement'

const products = [


    {
        id: 1,
        name: 'Desktops',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512503/shopping_website/products/desktop_o4dwq6.jpg',
        path: 'desktop',
    },
    {
        id: 2,
        name: 'Laptops',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512337/shopping_website/products/laptop_jjijr0.avif',
    },
    {
        id: 3,
        name: 'Headphones',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512562/shopping_website/products/headphones_jdd3ow.jpg',
    },
    {
        id: 4,
        name: 'Monitors',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512647/shopping_website/products/monitor_k9nxsv.jpg',
    },
    {
        id: 5,
        name: 'SmartPhones',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512711/shopping_website/products/smartphones_hsqs54.jpg',
    },
    {
        id: 6,
        name: 'Printers',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512786/shopping_website/products/printer_xszhra.jpg',
    },
    {
        id: 7,
        name: 'Cameras',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744512867/shopping_website/products/camera_ilja9d.jpg',
    },
    {
        id: 8,
        name: 'SmartWatches',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513094/shopping_website/products/smartwatch_cdirop.jpg',
    },
    {
        id: 9,
        name: 'TVs',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513192/shopping_website/products/tvs_r23dlg.jpg',
    },
    {
        id: 10,
        name: 'Ipads & Tablets',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513290/shopping_website/products/ipad_dmignb.jpg',
    },
    {
        id: 11,
        name: 'Gaming',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513344/shopping_website/products/gaming_ru0daz.jpg',
    },
    {
        id: 12,
        name: 'Projectors',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513454/shopping_website/products/projector_n9tgez.jpg',
        path: 'projector',
    },
    {
        id: 13,
        name: 'Software',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513512/shopping_website/products/software_trnzzq.jpg',
    },
    {
        id: 14,
        name: 'Audio & Speakers',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513578/shopping_website/products/speaker_ripbb0.avif',
    },
    {
        id: 15,
        name: 'Internet & Wi-Fi',
        image: 'https://res.cloudinary.com/dedpvue13/image/upload/v1744513635/shopping_website/products/router_pxyqgz.jpg',
    },
]




const Product = () => {

    useEffect(() => {
        document.title = 'Products at PrimTech store';
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">

            <Advertisement
            // label={"hot deals"}
            />

            <div className='flex flex-wrap justify-center items-center gap-6 p-8'>
                {products.map((product) => (
                    <Link to={product.path}
                        key={product.id}
                        className='bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 p-6 rounded-3xl w-60 flex flex-col items-center'>

                        <img
                            className='w-24 h-24 object-contain mb-4'
                            src={product.image}
                            alt={product.name}
                        />
                        <span className='text-lg font-semibold text-gray-800 text-center'>
                            {product.name}
                        </span>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Product
