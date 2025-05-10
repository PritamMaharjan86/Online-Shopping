import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PageLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">
            <Navigation />
            <Outlet />
            <Footer />

        </div>
    )
}

export default PageLayout
