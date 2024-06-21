"use client";
import { SVGIcon } from '@/components/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';

interface NavigationItem {
  label: string;
  href: string;
  button?: boolean;
}

interface LogoItem {
  title: string;
  logoLink: string;
}

interface HeaderProps {
  logo: LogoItem;
  navigation: NavigationItem[];
}

export const HeaderTemplate: React.FC<HeaderProps> = ({ logo, navigation }) => {
  const pathName = usePathname();
  const [navigations, setNavigations] = useState(false);

  const handleMenu = useCallback(() => {
    setNavigations(true);
  }, []);

  const handleClose = useCallback(() => {
    setNavigations(false);
  }, []);

  useEffect(() => {
    if (navigations) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navigations]);

  const linkClasses = (menu: NavigationItem) =>
    `text-sm md:py-4 ${!menu.button && pathName === menu.href ? "text-secondary" : "text-tertiary"} 
    ${menu.button ? 'text-issue px-3 flex justify-center items-center bg-secondary font-medium text-sm rounded-full focus:outline-none h-[38px]' : ''}`;

  const mobileLinkClasses = (menu: NavigationItem) =>
    `text-sm md:py-4 flex items-center justify-between
    ${!menu.button && pathName === menu.href ? "text-secondary" : "text-tertiary"} 
    ${menu.button ? 'text-issue px-3 flex justify-center items-center bg-secondary font-medium text-sm rounded-full focus:outline-none h-[38px]' : ''}`;

  return (
    <>
      <header className="sticky mt-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[70rem] w-full bg-primary rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
          <div className="flex items-center justify-between">
            <Link href={logo.logoLink} className="text-tertiary flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
              <h1 className='text-[25px] font-extrabold'>{logo.title}</h1>
            </Link>
            <div className="md:hidden">
              <button type="button" onClick={handleMenu} className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-tertiary disabled:opacity-50 disabled:pointer-events-none">
                <SVGIcon className="text-[20px]" name="HamburgerMenu" />
              </button>
            </div>
          </div>
          <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              {navigation.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  className={linkClasses(menu)}
                >
                  {menu.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <div className={`bg-primary z-[9999] flex flex-col gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7 ${navigations ? 'animate-[slideIn_0.5s_forwards] fixed w-full h-full transition-[left] duration-[0.3s] ease-[ease] z-[1] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[unset] xl:inset-x-[unset] lg:bg-transparent lg:relative lg:animate-[unset] lg:inset-x-[unset]' : 'animate-[slideOut_0.5s_forwards] fixed w-full h-full transition-[left] duration-[0.3s] ease-[ease] left-0 top-0 xl:bg-transparent xl:relative xl:animate-[unset] xl:inset-x-[unset] lg:bg-transparent lg:relative lg:animate-[unset] lg:inset-x-[unset]'}`}>
        {navigations && (
          <div className="flex flex-col gap-y-6 gap-x-0 p-4 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <div className='flex justify-between items-center py-5 border-b-tertiary border-b border-solid'>
              <Link href={logo.logoLink} className="text-tertiary flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
                <h1 className='text-[25px] font-extrabold'>{logo.title}</h1>
              </Link>
              <button onClick={handleClose}><SVGIcon className="text-[20px] bg-tertiary w-[30px] h-[30px] flex items-center justify-center rounded-[50%]" name="RxCross2" /></button>
            </div>
            {navigation.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className={mobileLinkClasses(menu)}
              >
                {menu.label}  {!menu.button ? (<SVGIcon className="text-[20px]" name="arrowright" />) : (null)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
