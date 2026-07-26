'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const slides = [
  {
    img: '/img/carousel-1.jpg',
    title: 'The Best Kindergarten School For Your Child',
    desc: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
  },
  {
    img: '/img/carousel-2.jpg',
    title: 'Make A Brighter Future For Your Child',
    desc: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
  },
];

export default function HeaderCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="container-fluid p-0 mb-5">
      <div className="header-carousel position-relative">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1500}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src={slide.img} alt={slide.title} />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: 'rgba(0, 0, 0, .2)' }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-10 col-lg-8">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                          {slide.title}
                        </h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">{slide.desc}</p>
                        <a
                          href="#"
                          className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                        >
                          Learn More
                        </a>
                        <a
                          href="/classes"
                          className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                        >
                          Our Classes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="owl-nav">
          <div
            className="owl-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            role="button"
            aria-label="Previous slide"
          >
            <i className="bi bi-chevron-left"></i>
          </div>
          <div
            className="owl-next"
            onClick={() => swiperRef.current?.slideNext()}
            role="button"
            aria-label="Next slide"
          >
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
