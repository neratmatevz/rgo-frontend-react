import React from "react";
import "./AboutUs.css";
import Contact from "../Contact/Contact";

const AboutUs = () => {

    return (
        <>
        <div className="bg-light">
            <div className="container py-5">
                <div className="row h-75 align-items-center py-3">
                    <div className="col-lg-6">
                        <h1 className="display-4">O PODJETJU</h1>
                        <p className="lead text-muted mb-0">Blablablablablablba.</p>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block"><img src="https://st2.depositphotos.com/3591429/10566/i/450/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg"  className="img-fluid" /></div>
                </div>
            </div>
        </div>

        <div className="bg-white py-5">
            <div className="container py-5">          
                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 px-5 mx-auto shadow-lg"><img src="https://5.imimg.com/data5/SELLER/Default/2022/3/NK/MO/AT/49746400/fast-food-equipment-500x500.jpg"  className="img-fluid mb-4 mb-lg-0" /></div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary" />
                        <h2 className="font-weight-light">Ukvarjamo se s prodajo ...</h2>
                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                </div>
                <div className="row align-items-center ">
                    <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                        <h2 className="font-weight-light">Ukvarjamo se s prodajo ...</h2>
                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2 shadow-lg"><img src="https://media.istockphoto.com/id/1212014290/photo/commercial-kitchen.jpg?s=612x612&w=0&k=20&c=AdxXyhpdveui7xOx9u7zvpqwzwMI_mKYyZFqPj-UmNI="  className="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>
        </div>
        </>



    );
};

export default AboutUs;