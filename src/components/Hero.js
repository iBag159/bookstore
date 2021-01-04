import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './style/Hero.css';
SwiperCore.use([Navigation, Pagination]);

class Hero extends React.Component {
    state = {
        books: [
            {   id: "book1",
                title: "Maroc 2002",
                author: "Nicolas Sumpir",
                cover: "https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-27.jpg"
            },
            {   id: "book2",
                title: "Delicious Place",
                author: "Coco Simon",
                cover: "https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-28.jpg"
            },
            {   id: "book3",
                title: "Cup Cake Diraes",
                author: "Anna Hilton",
                cover: "https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-29.jpg"
            }, 
        ],
        colors: ["pink", "purple", "lightblue"]
    }
    render() {
        return (
            <Swiper
                spaceBetween={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                pagination={{ clickable: true }}
                navigation
            > 
                {
                    this.state.books.map( (book, index) => {
                        return <SwiperSlide key={book.id}>
                            <div className={`slide__container bg-${ this.state.colors[index] }`}>
                                <div className="slide__cover">
                                    <img src={book.cover} alt="cover-page"/>
                                </div>
                                <div className="slide__info">
                                    <h3 className="slide__info-title">{book.title}</h3>
                                    <p><i>By</i> <span>{book.author}</span></p>
                                    <p className="slide__info-synopsis">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>                        
                            </div>                    
                        </SwiperSlide>
                    }) 
                }
            </Swiper>
        );
    }
}

export default Hero;
