import { Outlet } from "react-router-dom"

import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import SplashScreen from "../components/common/SplashScreen"

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-text transition-colors duration-300 dark:bg-slate-950 dark:text-white">

            <SplashScreen />

            <Navbar />

            <main className="min-h-screen pt-20 lg:pt-24">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}