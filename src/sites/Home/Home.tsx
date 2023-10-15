import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import MarketingCircles from "../../components/MarketingCircles/MarketingCircles";
import FeaturesStack from "../../components/FeaturesStack/FeaturesStack";

const Home = () => {
    return(
        <main>
            <Carousel />
            <div className="container marketing">
            <FeaturesStack/>
            <MarketingCircles />
            </div>
        </main>
        
    );
};

export default Home;