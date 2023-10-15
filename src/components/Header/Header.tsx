import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
                <div className="container-fluid ">
                    <Link to={"/home"} className="navbar-brand">RGO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="justify-content-center  navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav mb-2 mb-md-0 ">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">DOMOV</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/aboutus"} className="nav-link" >O NAS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link" >GOSTINSKA OPREMA</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    );
};

export default Header;