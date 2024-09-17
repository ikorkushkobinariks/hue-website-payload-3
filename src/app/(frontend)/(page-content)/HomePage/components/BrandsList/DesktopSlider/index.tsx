'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './DesktopSlider.css';

export default function DesktopSlider() {
  const brandsList = [
    {
      src: '/static/images/homepage/brands/tatcha.svg',
      alt: 'tatcha',
    },
    {
      src: '/static/images/homepage/brands/laura_mercier.png',
      alt: 'laura_mervier',
    },
    {
      src: '/static/images/homepage/brands/crown_affair.png',
      alt: 'crown_affair',
    },
    {
      src: '/static/images/homepage/brands/111_skin.png',
      alt: '111_skin',
    },
    {
      src: '/static/images/homepage/brands/ceremonia.png',
      alt: 'ceremonia',
    },
    {
      src: '/static/images/homepage/brands/tinted.png',
      alt: 'tinted',
    },
    {
      src: '/static/images/homepage/brands/bare_minerals.png',
      alt: 'bare_minerals',
    },
    {
      src: '/static/images/homepage/brands/ami_cole.png',
      alt: 'ami_cole',
    },
    {
      src: '/static/images/homepage/brands/credo.png',
      alt: 'credo',
    },
    {
      src: '/static/images/homepage/brands/kate_somerville.png',
      alt: 'kate_somerville',
    },
    {
      src: '/static/images/homepage/brands/patchology.png',
      alt: 'patchology',
    },
    {
      src: '/static/images/homepage/brands/blume.png',
      alt: 'blume',
    },
  ];

  const settings = {
    dots: false,
    rows: 1,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    variableWidth: true,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {brandsList.map((image, index) => (
            <div key={index}>
              <div className="flex w-full items-center justify-center p-40 h-[100px]">
                <Image
                  className="min-w-[80px]"
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
