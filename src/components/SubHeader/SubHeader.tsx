import React, { useEffect, useState } from "react";
import "./SubHeader.css";
import { useLocation } from "react-router-dom";


interface SubHeaderProps{
    naslovStrani:string
}

const SubHeader = (props:SubHeaderProps) => {
    return(
        <div className="container-fluid headerImage shadow-lg border-dark border-bottom ">
                <div >
                    <div className="container py-5">
                        <div className="row h-25 align-items-center py-3 text-lg-start text-sm-center">
                            <h1 className=" font fade-in-text"><strong>{props.naslovStrani}</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SubHeader;