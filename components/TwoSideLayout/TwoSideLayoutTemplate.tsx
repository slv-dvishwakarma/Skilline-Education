"use client";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface TopBarItem {
    title: string;
    description: string;
}

interface MemberItem {
    name: string;
    post: string;
    image: string;
    quote: string;
}

interface TwoSideLayoutTemplateProps {
    topbar: TopBarItem;
    member: MemberItem[];
}

export const TwoSideLayoutTemplate: React.FC<TwoSideLayoutTemplateProps> = ({ topbar, member }) => {

    const settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        dots: true,
    };

    return (
            <div className="px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">{topbar.title}</h2>
                    <p className="mt-1 text-neutral-400">{topbar.description}</p>
                </div>
                <Slider className="testimonial-slick-slider mt-4 focus:outline-none" {...settings}>
                    {member.map((item, index) => (
                        <div key={index} className='slider-setting'>
                            <div className='xl:w-6/12 lg:w-6/12 md:w-6/12 w-full'>
                                <blockquote>
                                    <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">{item.quote}</p>
                                    <footer className="mt-6">
                                        <div className="flex items-center">
                                            <div className="xl:hidden lg:hidden md:hidden block flex-shrink-0">
                                                <Image className="size-12 rounded-full" src={item.image} alt={item.name} width={400} height={400} />
                                            </div>
                                            <div className="ms-4 md:ms-0">
                                                <div className="text-base font-semibold text-white">{item.name}</div>
                                                <div className="text-xs text-neutral-400">{item.post}</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="xl:block lg:block md:block hidden mb-24 md:mb-0 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
                                <Image className='float-right' src={item.image} alt={item.name} width={400} height={400} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
    )
}
