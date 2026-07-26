'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const testimonials = [
  {
    img: '/img/testimonial-1.jpg',
    text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    name: 'Client Name',
    profession: 'Profession',
  },
  {
    img: '/img/testimonial-2.jpg',
    text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    name: 'Client Name',
    profession: 'Profession',
  },
  {
    img: '/img/testimonial-3.jpg',
    text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    name: 'Client Name',
    profession: 'Profession',
  },
];

export default function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          992: { slidesPerView: 2 },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-item bg-light rounded p-5">
              <p className="fs-5">{item.text}</p>
              <div
                className="d-flex align-items-center bg-white me-n5"
                style={{ borderRadius: '50px 0 0 50px' }}
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={item.img}
                  alt={item.name}
                  style={{ width: '90px', height: '90px' }}
                />
                <div className="ps-3">
                  <h3 className="mb-1">{item.name}</h3>
                  <span>{item.profession}</span>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
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
          aria-label="Previous testimonial"
        >
          <i className="bi bi-arrow-left"></i>
        </div>
        <div
          className="owl-next"
          onClick={() => swiperRef.current?.slideNext()}
          role="button"
          aria-label="Next testimonial"
        >
          <i className="bi bi-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
