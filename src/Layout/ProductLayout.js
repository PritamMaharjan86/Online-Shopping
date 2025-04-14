import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

const ProductLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
            <Navigation />
            <Outlet />

        </div>
    )
}

export default ProductLayout
