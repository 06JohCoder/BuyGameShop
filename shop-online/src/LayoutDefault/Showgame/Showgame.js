import "./Showgame.scss"
import { useEffect, useState } from "react";
import { Showgame } from "../../services/productsService"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

function ShowGame() {

    const [newShowgame, setNewShowgame] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await Showgame();
            setNewShowgame(result);
            console.log("đây là result newShowgame: ", result);
        }
        fetchApi();
    }, [])




    return (
        <>
            <div className="resoin">
                <h1>Các Game Đã Bán Trên Steam</h1>
                <div class="banner-container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={4}
                        loop
                        // navigation
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        slidesPerView={8}
                        breakpoints={{
                            320: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 8,
                            },
                        }}
                    >


                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide> */}
                        {newShowgame.map((item) => (
                            <li>

                                <SwiperSlide key={item.id}>
                                    <Link to="/">

                                        <div class="banner " key={item.id}>
                                            {/* <h2>{item.title}</h2> */}
                                            <img src={item.image_url} alt={item.name} />

                                        </div>

                                    </Link>
                                </SwiperSlide>

                            </li>


                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}
export default ShowGame;