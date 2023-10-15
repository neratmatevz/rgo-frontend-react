import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Upsss!</span> Stran ni najdena.</p>
                <p className="lead">
                Iskana stran ne obstaja.
                </p>
                <Link to={"home"} className="btn btn-primary">Domov</Link>
            </div>
        </div>

    );
};

export default PageNotFound;