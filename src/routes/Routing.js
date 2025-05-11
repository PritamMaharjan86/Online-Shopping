import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Desktop from '../pages/Desktop';
import PageLagout from '../Layout/PageLayout';
import Projector from '../pages/Projector';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<PageLagout />}>
                        <Route exact path="/" element={<Home />} />
                        <Route path='product' element={<Product />} />
                        <Route path="desktop" element={<Desktop />} />
                        <Route path="projector" element={<Projector />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Routing