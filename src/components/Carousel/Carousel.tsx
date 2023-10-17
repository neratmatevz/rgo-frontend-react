import React from "react";

const Carousel = () => {

    return(
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.restaurantstore.it/pimages/slideshow-desktop-81-224-658.jpg" aria-hidden="true" />
                <div className="container">
                    <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p>Some representative placeholder content for the first slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="bd-placeholder-img " width="100%" height="100%" src="https://lotusfoodservices.co.id/upload/slider/Slider%20Rational%20-lotus-food-services-dfkc9.jpg" aria-hidden="true" />
                <div className="container">
                    <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
            </div>
            </div>
            <div className="carousel-item">            
                <img className="bd-placeholder-img" width="100%" height="100%" src="https://www.restaurantstore.it/pimages/slideshow-desktop-76-224-045.jpg" aria-hidden="true" />
                <div className="container">
                    <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
);
};

export default Carousel;