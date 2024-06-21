"use client"
import React, { useEffect, useState } from 'react'
import { ClientTemplate } from './ClientTemplate'
import { Skelton } from './Skelton';

interface LogoItem {
    image: string;
    link: string;
}

interface ClientProps {
    title: string;
    logo: LogoItem[];
}

export const Client: React.FC<ClientProps> = ({ title, logo }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (title && logo.length > 0) {
        setLoading(false);
      }
    }, [title, logo]);
  
    if (loading) {
      return <Skelton />;
    }
  

  return (
   <>
   <ClientTemplate title={title} logo={logo}/>
   </>
  )
}
