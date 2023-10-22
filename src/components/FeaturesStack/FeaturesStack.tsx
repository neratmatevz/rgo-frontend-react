import React, { useRef } from "react";
import "./FeaturesStack.css";

const FeaturesStack = () => {
    

    return (
        <div >
            <div className="row featurette" >
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <img src="https://www.hallsintl.com/image/cache/catalog/g-pro-6-a-gas-500x500.jpg" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} />
                </div>
            </div>
            <hr className="featurette-divider " />
            <div className="row featurette ">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1 ">
                    <img src="https://www.hallsintl.com/image/cache/catalog/g-pro-16-ac-gas-500x500.jpg" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} />
                </div>
            </div>
            <hr className="featurette-divider " />
            <div className="row featurette ">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <img src="https://www.fines.si/wp-content/uploads/2017/01/pro-cook-f1-frontal-5.png" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} />

                </div>
            </div>
            <hr className="featurette-divider " />
        </div>
    );
};

export default FeaturesStack;