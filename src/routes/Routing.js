import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Cart from '../pages/Cart';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing