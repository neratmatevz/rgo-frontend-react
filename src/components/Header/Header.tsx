import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <header className="bg-dark py-5 header-photo">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">OGLEJTE SI NAŠO PONUDBO</h1>
                    <p className="lead fw-normal text-white-70 mb-0">RABLJENA GOSTINSKA OPREMA V ODLIČNEM STANJU</p>
                </div>
            </div>
        </header>
    );
};

export default  Header;