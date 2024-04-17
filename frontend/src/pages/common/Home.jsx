import React from 'react'
import Header from '../../components/layout/Header'
import LandingHome from '../../components/layout/LandingHome'
import Products from '../../components/layout/Products'
import Footer from '../../components/layout/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <LandingHome />
            <Products />
            <Footer />
        </>
    )
}

export default Home
