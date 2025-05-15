import React from 'react';

const UnderConstruction = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">


            <div className="relative w-0 h-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-black animate-bounce">

                <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] border-l-transparent border-r-transparent border-b-white z-0" />


                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 translate-y-10 text-4xl font-black text-orange-400 z-10">
                    !
                </div>
            </div>


            <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-orange-500 drop-shadow-xl tracking-wide font-Heading">
                Under Construction
            </h1>


            <p className="mt-4 text-lg md:text-md text-gray-600 max-w-md text-center font-Paragraph ">
                We're working on something exciting! Please check back soon.
            </p>


            <div className="mt-8 w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default UnderConstruction;
