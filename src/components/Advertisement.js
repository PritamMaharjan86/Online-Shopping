import React from 'react'
import { useEffect, useState } from 'react';



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



const Advertisement = () => {


    const [currentAd, setCurrentAd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAd((prev) => (prev + 1) % ads.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);


    return (
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
    )
}

export default Advertisement
