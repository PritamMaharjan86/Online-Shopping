import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

const ads = [
    {
        id: 1,
        image: 'https://images.ctfassets.net/xa93kvziwaye/3la5q66CxfMtjDk8dP0QTY/ec71de20be844b50125778b814ff0cb2/jb-au-20250417-fitness-apple-watch-series-10_carousel-homepage-desktop.png?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 1',
    },
    {
        id: 2,
        image: 'https://images.ctfassets.net/xa93kvziwaye/3S4NpScgIoVLQaP3IUfesA/90e91d05b16660c06b2f0409e73a845e/JB-AU--3.JPG?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 2',
    },
    {
        id: 3,
        image: 'https://images.ctfassets.net/xa93kvziwaye/ljX58WSaMVKt3lfwRPMKK/fd691623bcb5ae1ab24ee847532229ed/jb-au-20250417-computers-samsung-galaxy-tab-s10-s10fe-launch_carousel-homepage-desktop.png?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 3',
    },
];





const Product = () => {

    useEffect(() => {
        document.title = 'Products at PrimTech store';
    }, []);

    const [currentAd, setCurrentAd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAd((prev) => (prev + 1) % ads.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">

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

            <div className=' bg-yellow'>
                <div className="flex flex-col items-center gap-6 p-8 w-10/12 mx-auto ">
                    <span className='font-bold text-4xl font-Title p-2'>Hot Deals</span>

                    <div className="relative w-full max-w-4xl h-72">
                        {ads.map((ad, index) => (
                            <img
                                key={ad.id}
                                src={ad.image}
                                alt={ad.alt}
                                className={`absolute top-0 left-0 w-fit h-fit object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${index === currentAd ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Product
