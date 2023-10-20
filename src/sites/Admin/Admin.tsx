import React from "react";
import AdminListItem from "../../components/AdminListItem/AdminListItem";
import SubHeader from "../../components/SubHeader/SubHeader";

const Admin = () => {

    return (
        <div>
            <SubHeader naslovStrani="ADMIN" />


            <div className="container-fluid ">

                <div className="row m-5">
                    <div className="col-12 col-sm-8 col-lg-12">
                        <div className="row d-flex justify-content-end">
                            <div className="col-6">
                                <h3 className="text-dark"><u>Pregled obstoječih izdelkov:</u></h3>

                            </div>
                            <div className="col-3 ">


                                <button type="button" className="btn btn-success"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-plus-circle mb-1" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <span className="ms-2 ">Dodaj izdelek</span>
                                </button>

                            </div>
                        </div>
                        <ul className="list-group">
                            <AdminListItem />
                            <AdminListItem />
                            <AdminListItem />


                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Admin;