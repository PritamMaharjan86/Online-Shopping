import { useEffect, useState } from 'react';

const ads = [
    {
        id: 1,
        image:
            'https://images.ctfassets.net/xa93kvziwaye/3la5q66CxfMtjDk8dP0QTY/ec71de20be844b50125778b814ff0cb2/jb-au-20250417-fitness-apple-watch-series-10_carousel-homepage-desktop.png?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 1',
    },
    {
        id: 2,
        image:
            'https://images.ctfassets.net/xa93kvziwaye/3S4NpScgIoVLQaP3IUfesA/90e91d05b16660c06b2f0409e73a845e/JB-AU--3.JPG?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 2',
    },
    {
        id: 3,
        image:
            'https://images.ctfassets.net/xa93kvziwaye/ljX58WSaMVKt3lfwRPMKK/fd691623bcb5ae1ab24ee847532229ed/jb-au-20250417-computers-samsung-galaxy-tab-s10-s10fe-launch_carousel-homepage-desktop.png?fm=webp&f=top&fit=fill&w=2248&h=740&q=50',
        alt: 'Ad 3',
    },
];

const Advertisement = ({ label }) => {
    const [currentAd, setCurrentAd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAd((prev) => (prev + 1) % ads.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-yellow" >
            <div className="flex flex-col items-center gap-6 p-8 w-10/12 mx-auto" >
                <span className="font-bold text-4xl font-Title">{label}</span>
                <div className="relative overflow-hidden w-full max-w-4xl h-full border-2 bg-yellow border-black shadow-[2px_2px_0px_0px_rgb(0,0,0)]" >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentAd * 100}%)` }}
                    >
                        {ads.map((ad) => (
                            <img
                                key={ad.id}
                                src={ad.image}
                                alt={ad.alt}
                                className="w-full flex-shrink-0 h-full object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;
