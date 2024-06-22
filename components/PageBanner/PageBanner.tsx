"use client"
import React, { useEffect, useState } from 'react'
import { PageBannerTemplate } from './PageBannerTemplate'
import { Skelton } from './Skelton';

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

interface PageBannerProps {
    banner: BannerItem;
}

export const PageBanner: React.FC<PageBannerProps> = ({ banner}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (banner) {
      setLoading(false);
    }
  }, [banner]);

  if (loading) {
    return <Skelton />;
  }

  return (
    <PageBannerTemplate banner={banner} />
  )
}
