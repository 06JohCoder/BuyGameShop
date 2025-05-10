
import { Navigation, Autoplay } from 'swiper/modules';
import { getProductList, banners } from "../../services/productsService"
import Banner from "../../LogoImgae/Banner.png";
import Banner2 from "../../LogoImgae/Banner2.png";
import silde from "../../LogoImgae/slide.png";
import silde1 from "../../LogoImgae/slide1.png";
import silde2 from "../../LogoImgae/slide2.png";





// import Banner3 from "../../LogoImgae/Banner3";
import Banner3 from "../../LogoImgae/Banner3.png";
import { Link, Outlet } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './silde.css'; // Đảm bảo rằng đường dẫn này đúng và tệp tồn tại

// import "../../Product/product.scss";
// import "../../Product/productItem.scss";




function Silde() {
    const [hotProducts, sethotProducts] = useState([]);
    const [advertising, setAdvertising] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            const resultBanner = await banners();
            sethotProducts(result);
            setAdvertising(resultBanner);
            console.log("đây là result HotProduct: ", result);
            console.log("đây là result Banner: ", resultBanner);
        };
        fetchApi();
    }, []);

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);


    return (

        <>
            <h1>Đặc Quyền</h1>

            <div className="slider-container">
                <div className="banner">
                    {advertising.map((item) => (
                        (item.banner_1 || item.banner_2) && (
                            <div key={item.id} >
                                {item.banner_1 && (
                                    <img
                                        src={item.banner_1}
                                        alt={`Banner 1 of ${item.id}`}
                                        style={{ height: 'auto' }}
                                    />
                                )}
                                {item.banner_2 && (
                                    <img
                                        src={item.banner_2}
                                        alt={`Banner 2 of ${item.id}`}
                                        style={{ height: 'auto' }}

                                    />
                                )}
                            </div>
                        )
                    ))}
                    {/* 
                    <img src={Banner2} alt="Banner" style={{ height: 'auto' }} /> */}
                    {/* <img src={Banner3} alt='Banner' style={{ height: 'auto' }} /> */}
                </div>

                <div className="product-slider">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={4}
                        loop
                        navigation
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        slidesPerView={5}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1130: {
                                slidesPerView: 4,
                            },
                            1240: {
                                slidesPerView: 5,
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
                        {hotProducts.map((item) => (item.privilege === "true" && (
                            <li>
                                <SwiperSlide key={item.id}>

                                    <Link to={`/detail/${item.id}`}>
                                        <div className="product-card">
                                            <span className="badge">ĐẶC QUYỀN</span>
                                            <img src={item.image} alt="" className="product__image" />
                                            <h3 className="product__title">{item.name}</h3>
                                            <p className="product__price-new">{(item.priceOld - item.priceSale).toFixed(0)}$</p>
                                            <p className="product__price-old">{item.priceOld}$</p>
                                            <p className="product__price-sale"><s>-{item.priceSale}$</s></p>
                                            <p className="product__description">{item.description}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>

                            </li>)


                        ))}
                    </Swiper>









                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={4}
                        loop
                        // navigation
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <div style={{
                            height: '500px'
                        }} >
                            {/* <SwiperSlide>
                                <Link to="/">
                                    <img src={silde} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/">
                                    <img src={silde1} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to="/">
                                    <img src={silde2} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/">
                                    <img src={silde} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                </Link>
                            </SwiperSlide>
                          */}
                            {advertising.map((item) => (
                                (item.banner_3 || item.banner_4) && (
                                    <>
                                        {
                                            item.banner_3 && (
                                                <SwiperSlide>
                                                    <Link to="/">
                                                        <img src={item.banner_3} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                                    </Link>
                                                </SwiperSlide>
                                            )

                                        }
                                        {
                                            item.banner_4 && (
                                                <SwiperSlide>
                                                    <Link to="/">
                                                        <img src={item.banner_4} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                                    </Link>
                                                </SwiperSlide>
                                            )

                                        }
                                    </>


                                )

                            ))}



                            {/* <SwiperSlide>
                                <Link to="/">
                                    <img src={silde2} alt="Silde Image" style={{ borderRadius: '28px', marginTop: '10px', width: '100%' }} />
                                </Link>
                            </SwiperSlide> */}


                        </div>


                    </Swiper>























                </div>
            </div >



        </>

    );
}
export default Silde;



