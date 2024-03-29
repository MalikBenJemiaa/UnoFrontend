import React from 'react';
import Hero from './Hero';
import BestSellingProducts from "./BestSellingProducts";
import BestPromoProducts from "./BestPromoProducts";
import PhotosBanner from "./PhotosBanner";
import MoreProducts from "./MoreProducts";
import "./NavBar.css"
const Landing = ({OpenAuth}) => {
    return (
        <>
            {/* <NavbarStandard OpenAuth={OpenAuth}/> */}
            {/* <CategoryBanner/> */}
            <Hero/>
            <BestSellingProducts />
            <BestPromoProducts />
            <PhotosBanner />
            <MoreProducts />
            {/* <FooterStandard />   */}
        </>
    );
};

export default Landing;
