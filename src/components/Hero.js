import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import './style/Hero.css';

class Hero extends React.Component {
    render() {
        return (
            <Swiper
                spaceBetween={0}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
            >
                <SwiperSlide>
                    <div className="slide__container">
                        <div className="slide__cover">
                            <img src="https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-29.jpg" alt="cover-page"/>
                        </div>
                        <div className="slide__info">
                            <h3>Titulo del libro</h3>
                            <p><i>By</i> <span>Author Name</span></p>
                            <p className="slide__info-synopsis">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                            <button>Add to Cart</button>
                        </div>                        
                    </div>                    
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        );
    }
}

export default Hero;
