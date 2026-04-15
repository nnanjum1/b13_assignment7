import React from 'react'
import NavBar from '../components/shared/NavBar'
import { RiHomeLine } from "react-icons/ri";
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

            <NavBar />

            <main className="grow">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}

export default MainLayout