import React, { useEffect } from 'react'
import { useState } from 'react'
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'
import './Slidercss1.css'
import './sliderauto.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Slider1() {

    return (
        <>
            <div className='sliderMainDiv mt-[97px]  md:mt-[110px]'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={40}
                    totalSlides={3}
                    interval={3000}
                    isPlaying={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <Image src={slider1} />
                        </Slide>
                        <Slide index={1}>
                            <Image src={slider2} />
                        </Slide>
                        <Slide index={2}>
                            <Image src={slider3} />
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </>
    )
}

export default Slider1