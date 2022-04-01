import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Testimonials.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


const Testimonials = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                // background: '#FEF9E7'
            }} container item xs={12}>
                <Typography style={{ fontWeight: 900 }} variant="h4" gutterBottom component="div">
                    Testimonials
                </Typography>
                <Swiper

                    // spaceBetween={30}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={"auto"}

                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    // loop='true'
                    // pagination={true}
                    modules={[Autoplay, Pagination, EffectCoverflow,]}
                    className=".swiper-container"
                >
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>

                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </SwiperSlide>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>
                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </SwiperSlide>

                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>
                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </SwiperSlide>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>
                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >
                        </SwiperSlide>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>
                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >

                        </SwiperSlide>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <SwiperSlide>
                            <div className='testimonials'>
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card">
                                                <div className="layer"></div>
                                                <div className="content">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis nisi nesciunt quibusdam beatae quaerat quis optio. Libero vero unde saepe repellendus soluta vitae accusamus!</p>
                                                    <div className='imgBx'>
                                                        <img src="https://images.newscientist.com/wp-content/uploads/2017/06/14111650/00000-00568744.jpg?crop=16:9,smart&width=1200&height=675&upscale=true" alt="" />
                                                    </div>
                                                    <div className="details">
                                                        <h2>Someone Famous <br /> <span>Website Designer</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div >

                        </SwiperSlide>
                    </Grid>


                </Swiper >
            </Grid>
        </Box >

    );
};

export default Testimonials;