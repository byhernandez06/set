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
                                Desarrollo de Software a la medida
                            </h1>
                            <p>Cree soluciones informáticas de alto rendimiento para sus proyectos con una calidad, velocidad y consistencia sin precedentes.</p>
                            {/* <div className="searchwrapper">
                                <div className="searchbox">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <form>
                                                <input type="text" className="form-control" placeholder="Search by Keywords..." />
                                            </form>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-control category" id="provider" name="provider">
                                                <option>deepai</option>
                                                <option>stabilityai</option>
                                                <option>replicate</option>
                                                <option>openai</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3">
                                            <form>
                                                <button className="btn" type="submit">Generate</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-tag">
                                <p>Popular Tag:</p>
                                <Link to="/blog">Business</Link>
                                <Link to="/blog">Animation</Link>
                                <Link to="/blog">Creative</Link>
                                <Link to="/blog">Realistic</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={man} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="scroll-down">
                    <Link to="#features">
                        <div className="mouse"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner