import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Help & Support',
      items: ['Customer Service', 'Returns & Exchanges', 'Shipping Info', 'FAQs', 'Contact Us'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms & Conditions'],
    },
    {
      title: 'Quick Links',
      items: ['Smartphones', 'Laptops', 'Accessories', 'New Arrivals', 'Best Sellers'],
    },
  ];

  return (
    <footer className="bg-gray-200 border-t-8 border-yellow-400 px-6 py-10 text-black mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <section className="md:w-1/2">
          <div className="flex items-center gap-4 mb-3">
            <img
              className="w-12 h-12"
              src="https://res.cloudinary.com/dedpvue13/image/upload/v1726537260/extras/Ellipse_1_jivxjp.png"
              alt="PrimTech Logo"
            />
            <h1 className="font-bold uppercase text-3xl font-Heading">PrimTech</h1>
          </div>
          <p className="italic text-gray-800 font-light mb-2 ml-14">Nepal's Largest Tech Store</p>
          <p className="text-gray-700 font-light ml-4 md:ml-14 w-9/12">
            Welcome to Primtech Store – your ultimate online destination for top-notch electronics in Nepal.
            Discover the latest smartphones, laptops, tablets, smartwatches, and accessories—all in one place.
            With unbeatable prices, easy returns, and fast, free delivery, shopping for tech has never been this smooth.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:w-1/2">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-bold uppercase text-lg font-Heading mb-2">{section.title}</h2>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-800 font-light hover:underline hover:text-yellow-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <div className="text-center text-sm text-gray-600 mt-10 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} PrimTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
