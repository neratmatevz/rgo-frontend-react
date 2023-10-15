import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">RGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center " id="navbarCollapse">
                        <ul className="navbar-nav mb-2 mb-md-0 ">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link"  >Domov</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/aboutus"} className="nav-link" >O Nas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link" >Gostinska oprema</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    );
};

export default Header;