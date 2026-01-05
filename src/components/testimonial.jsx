import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules"
import 'swiper/css';

import user_1 from '../assets/img/user-1.jpg'
import user_2 from '../assets/img/user-2.jpg'
import user_3 from '../assets/img/user-3.jpg'
import user_4 from '../assets/img/user-4.jpg'
import TestimonialCard from './common/testimonialCard';

const testimonialData = [
    {
        id: 1,
        name: "Misión",
        position: "",
        img: user_1,
        rating: 4,
        review: 'Brindar siempre un servicio oportuno, de calidad y apegado a nuestra filosofía de cliente céntrica.'
    },
    {
        id: 2,
        name: "Visión",
        position: "",
        img: user_3,
        rating: 5,
        review: 'Ser la alternativa preferida dentro de los mercados que operamos en desarrollo de software, aplicaciones y sitios web.'
    }
]

const Testimonial = () => {
    const swiperRef = useRef();

    return (
        <div className="testimonial-area ptb-100">
            <div className='container'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className='image-courser'
                    modules={[Navigation, Autoplay]}
                >
                    {
                        testimonialData.map(({ id, img, position, rating, review, name }) => {
                            return (
                                <SwiperSlide key={id}> <TestimonialCard img={img} position={position} name={name} rating={rating} review={review} /> </SwiperSlide>
                            )
                        })
                    }
                    <div className='d-flex align-items-center justify-content-center mt-3 gap-2  '>
                        <div onClick={() => swiperRef.current?.slidePrev()}><i className="fi fi-tr-arrow-left"></i></div>
                        <div onClick={() => swiperRef.current?.slideNext()}><i className="fi fi-tr-arrow-right"></i></div>
                    </div>
                </Swiper>

            </div>
        </div>
    )
}

export default Testimonial