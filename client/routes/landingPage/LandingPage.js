import React from 'react'
import MainSection from './components/MainSection/MainSection.js'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import TopTen from './components/TopTen/TopTen'
import Categories from './components/Categories/Categories'

const LandingPage = () => {
    return (
        <div>
            <MainSection />
            <FeaturedSection />
            <TopTen />
            <Categories />
        </div>
    )
};

export default LandingPage;