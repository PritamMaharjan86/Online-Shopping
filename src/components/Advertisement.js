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
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-yellow p-10">
            <div className="pt-10">
                <span className="font-bold text-4xl font-Title">{label}</span>

                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentAd * 100}%)` }}
                    >
                        {ads.map((ad) => (
                            <div
                                key={ad.id}
                                className="w-full flex justify-center flex-shrink-0"
                            >
                                <div className="relative w-full max-w-4xl h-full border-2 border-black bg-yellow shadow-[2px_2px_0px_0px_rgb(0,0,0)]">
                                    <img
                                        src={ad.image}
                                        alt={ad.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Advertisement;
