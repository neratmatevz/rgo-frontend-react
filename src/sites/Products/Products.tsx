import React from "react";
import Product from "../../components/Product/Product";
import SubHeader from "../../components/SubHeader/SubHeader";

const Products = () => {

    return (
        <section >
            <SubHeader naslovStrani={"GOSTINSKA OPREMA"}/>
            
            <div className="container px-4 px-lg-5 mt-3">                           
                <div className="row justify-content-between">
                    <div className="col-lg-1 col-1 col-md-1"> 
                        <div className="btn-group mb-5">
                        <button type="button" className="btn btn-secondary dropdown-toggle border border-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtriraj
                        </button>
                        <ul className="dropdown-menu">
                            <li ><button className="dropdown-item">Vsa oprema</button></li>
                            <li ><button className="dropdown-item">Hladilniki</button></li>
                            <li ><button className="dropdown-item">Friteze</button></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-1 col-4 col-md-2"> 
                        <div className="btn-group mb-5">
                        <button type="button" className="btn btn dropdown-toggle border border-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            Sortiraj
                        </button>
                        <ul className="dropdown-menu">
                            <li ><button className="dropdown-item">Ceneje naprej</button></li>
                            <li ><button className="dropdown-item">Dražje naprej</button></li>
                            <li ><button className="dropdown-item">Novejše naprej</button></li>
                        </ul>
                        </div>
                    </div>
                </div>

                

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    
                </div>
            </div>
        </section>
    );
};

export default Products;