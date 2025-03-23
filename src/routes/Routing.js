import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing