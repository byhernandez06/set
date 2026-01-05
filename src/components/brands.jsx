import React from 'react'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import logo1 from "../assets/img/react-native.svg"
import logo2 from "../assets/img/dotnet.svg"
import logo3 from "../assets/img/python.svg"
import logo4 from "../assets/img/nodejs.svg"
import logo5 from "../assets/img/angular.svg"
import logo6 from "../assets/img/aws.svg"
import logo7 from "../assets/img/vuejs.svg"
import logo8 from "../assets/img/redux.svg"
import logo9 from "../assets/img/git.svg"
import logo10 from "../assets/img/mysql.svg"

const brandsData = [
    { id: 1, brand_logo: logo1 },
    { id: 2, brand_logo: logo2 },
    { id: 3, brand_logo: logo3 },
    { id: 4, brand_logo: logo4 },
    { id: 5, brand_logo: logo5 },
    { id: 6, brand_logo: logo6 },
    { id: 7, brand_logo: logo7 },
    { id: 8, brand_logo: logo8 },
    { id: 9, brand_logo: logo9 },
    { id: 10, brand_logo: logo10 },
]

const Brands = () => {
    return (
        <div className="brands-area pt-70 pb-70">
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    modules={[Autoplay]}
                >
                    {brandsData.map(({ id, brand_logo }) => (
                        <SwiperSlide key={id}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8 },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="image" style={{ textAlign: 'center' }}>
                                    <img
                                        src={brand_logo}
                                        alt="brand"
                                        style={{ maxWidth: '100px', height: 'auto' }}
                                    />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Brands;
