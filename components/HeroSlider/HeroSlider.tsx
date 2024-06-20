"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';
import Image from 'next/image';
import { Skelton } from './Skelton';

interface SliderProps {
  images: string[];
}

export const HeroSlider: React.FC<SliderProps> = ({ images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      setLoading(false);
    }
  }, [images]);

  if (loading) {
    return <Skelton />;
  }

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    dots: true,
  };

  return (
    <Slider className="custom-slick-slider mt-4 rounded-[30px]" {...settings}>
      {images.map((item, index) => (
        <div key={index} className='hero-slider'>
          <Image className='rounded-[30px] w-full h-[540px] object-cover' src={item} alt={`Slide ${index + 1}`} width={1916} height={690} />
        </div>
      ))}
    </Slider>
  );
};
