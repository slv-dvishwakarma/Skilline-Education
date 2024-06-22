import Link from 'next/link';
import React from 'react'
import { SVGIcon } from '../Icons';

interface SocialItem {
  name: string;
  url: string;
}

interface BreadCrumbItem {
  pagetitle: string;
  Pageurl: string;
}

interface BannerItem {
  title: string;
  label: string;
  breadrumb: BreadCrumbItem;
  social: SocialItem[];
}

interface BannerProps {
  banner: BannerItem;
}

export const PageBannerTemplate: React.FC<BannerProps> = ({ banner }) => {
  return (
    <div className='banner pt-[150px] pb-[100px] px-3 xl:max-w-[50%] lg:max-w-[70%] md:max-w-[80%] w-full mx-auto'>
      <h1 className="mb-6 text-[35px] capitalize sm:text-[50px] xl:text-[65px] text-center text-tertiary font-medium" >{banner.title}</h1>
      <ul className="breadcrumb flex items-center gap-[20px] justify-center divide-x-2 text-xl pb-6">
        <li className="breadcrumb-list-item text-tertiary hover:text-secondary">
          <Link className="flex items-center gap-2.5" href="/"><SVGIcon name="home" /> Home</Link>
        </li>
        <li className="breadcrumb-list-item pl-4 ">
          <a className="text-tertiary hover:text-secondary"  href={banner.breadrumb.Pageurl} target="_blank">{banner.breadrumb.pagetitle}</a>
        </li>
      </ul>
      <hr className="border-secondary mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-opacity-50 bg-transparent"></hr>
      <div className='label text-center text-tertiary'>
        <p className='text-balance'>{banner.label}</p>
      </div>
      <div className='social pt-10'>
        <ul className='flex w-[30%] justify-between m-auto'>
          {banner.social.map((item, index) => (
            <li key={index}><Link href={item.url}><SVGIcon className="text-xl w-[35px] h-[35px] flex justify-center items-center border bg-tertiary rounded-[50%] border-solid border-tertiary hover:bg-secondary" name={item.name} /></Link></li>
          ))}
        </ul>
      </div>
    </div> 
  )
}
