import React from 'react'
import man from "../assets/img/man.png"
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container-fluid">
                <div className="row align-items-center g-0">
                    <div className="col-lg-6">
                        <div className="content">
                            {/* <span className="banner-top-title">Fully Dynamic</span> */}
                            <h1>
                                {/* <span className="grd-color-1" >SetOnline</span>  */}
                                Software que automatiza y ordena negocios
                            </h1>
                            <p>Diseñamos sistemas, apps y plataformas web que hablan el idioma de tu empresa</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={man} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner