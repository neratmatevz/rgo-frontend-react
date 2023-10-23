import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <header >
            <nav className="navbar navbar-expand-md navbar-light fixed-top " >
                <div className="container-fluid ">
                    <Link to={"/home"} className="navbar-brand"><img src="https://mir-s3-cdn-cf.behance.net/user/50/8b64f8478156865.63de953817c5c.png" alt="logo" /></Link>
                    <button className="navbar-toggler border border-dark  border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="justify-content-center  navbar-collapse collapse  " style={{height:60}} aria-expanded={expanded} id="navbarCollapse">
                        <ul className="navbar-nav mb-2 mb-md-0 ">
                            <li className="nav-item m-1 headerItem" >
                                <Link to={"/home"} className="nav-link fs-6  text-dark onClickMenu" ><strong>DOMOV</strong></Link>
                            </li>
                            <li className="nav-item m-1 headerItem " >
                                <Link to={"/products"} className="nav-link fs-6  text-dark onClickMenu" ><strong>GOSTINSKA OPREMA</strong></Link>
                            </li>
                            <li className="nav-item m-1 headerItem">
                                <Link to={"/aboutus"} className="nav-link fs-6  text-dark onClickMenu" ><strong>O NAS</strong></Link>
                            </li>
                            <li className="nav-item m-1 headerItem">
                                <Link to={"/contact"} className="nav-link fs-6 text-dark  onClickMenu" ><strong>KONTAKT</strong></Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    );
};

export default Header;