import React from "react";
import "./AboutUs.css";
import CollapsableAccordion from "../../components/CollapsableAccordion/CollapsableAccordion";
import SubHeader from "../../components/SubHeader/SubHeader";

const AboutUs = () => {

    return (
        <>
        <SubHeader naslovStrani={"O NAS"}/>
        

        <div className="bg-white py-5 mt-5">            
            <div className="container py-5"> 
                
                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 px-5 mx-auto shadow-lg"><img src="https://5.imimg.com/data5/SELLER/Default/2022/3/NK/MO/AT/49746400/fast-food-equipment-500x500.jpg"  className="img-fluid mb-4 mb-lg-0" /></div>
                    <div className="col-lg-6 mt-5"><i className="fa fa-leaf fa-2x mb-3 text-primary" />
                        
                        <h2 className="font-weight-light">Ukvarjamo se s prodajo ...</h2>

                        <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>

                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row align-items-center ">
                    <h3 className="text-start font-italic mb-3">POGOSTA VPRAŠANJA:</h3>
                    <div className="col-lg-6 order-1 order-lg-1 "><i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                        
                        <CollapsableAccordion/>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-2 order-lg-2 shadow-lg"><img src="https://media.istockphoto.com/id/1212014290/photo/commercial-kitchen.jpg?s=612x612&w=0&k=20&c=AdxXyhpdveui7xOx9u7zvpqwzwMI_mKYyZFqPj-UmNI="  className="img-fluid mb-4 mb-lg-0" /></div>
                </div>
            </div>
        </div>
        </>



    );
};

export default AboutUs;