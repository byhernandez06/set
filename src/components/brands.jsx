import React from 'react'
import {motion} from "framer-motion"
import logo1 from "../assets/img/react-native.svg"
import logo2 from "../assets/img/dotnet.svg"
import logo3 from "../assets/img/python.svg"
import logo4 from "../assets/img/nodejs.svg"
import logo5 from "../assets/img/angular.svg"
import brand_1 from "../assets/img/01.png"
import brand_2 from "../assets/img/02.png"
import brand_3 from "../assets/img/03.png"
import brand_4 from "../assets/img/04.png"
import brand_5 from "../assets/img/05.png"
const brandsData = [
    {
        id: 1,
        brand_logo: logo1
    },
    {
        id: 2,
        brand_logo: logo2
    },
    {
        id: 3,
        brand_logo: logo3
    },
    {
        id: 4,
        brand_logo: logo4
    },
    {
        id: 5,
        brand_logo: logo5
    },
]
const Brands = () => {
    return (
        <div className="brands-area pt-70 pb-70">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {
                        brandsData.map(({ id, brand_logo }) => {
                            return (
                                <motion.div key={id} className="col-lg-2 col-md-2 col-6"
                                    initial={{
                                        opacity: 0,
                                        y: 150
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="image" width="300" height="300">
                                        <img src={brand_logo} alt="image" />
                                    </div>
                                </motion.div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Brands