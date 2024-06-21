import Image from 'next/image';
import React from 'react'
import { SVGIcon } from '../Icons';


interface SuccessItem {
    title: string;
    description: string;
}

interface StoriesItem {
    image: string;
    title: string;
    state: string;
    description: string;
}

interface CaseStoriesTemplateProps {
    successtitle: SuccessItem;
    stories: StoriesItem[];
}

export const CaseStoriesTemplate: React.FC<CaseStoriesTemplateProps> = ({ successtitle, stories }) => {
    return (
        <div className='py-[50px]'>
            <div className="mb-10 lg:mb-14">
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">{successtitle.title}</h2>
                <p className="mt-1 text-neutral-400 xl:w-[70%] lg:w-[70%] md:w-full w-full">{successtitle.description}</p>
            </div>
            <div className="grid gap-3 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 items-center ">
                {stories.map((item, index) => (
                    <div key={index} className="group border border-neutral-700 relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900  before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:-z-[1] before:opacity-0 before:hover:opacity-100">
                        <div className="mb-5">
                            <div className="mt-5 space-y-5">
                                {/* <Image src={item.image} alt={item.title} width={1244} height={1280} className='w-[50px] h-[50px] object-contain border rounded-[50%] border-solid border-neutral-700' /> */}
                                <SVGIcon className="text-secondary text-[50px] rotate-[7deg]" name="cap"/>
                                <p className="font-semibold text-3xl text-white">{item.title}</p>
                                <div className='text-secondary flex items-center space-x-2'>
                                    <SVGIcon name="Location" />
                                    <h3 className="font-medium text-lg">{item.state}</h3>
                                </div>
                                <p className="mt-1 text-neutral-400">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
