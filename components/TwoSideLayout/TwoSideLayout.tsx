"use client"
import React, { useEffect, useState } from 'react'
import { TwoSideLayoutTemplate } from './TwoSideLayoutTemplate'
import { Skelton } from './Skelton';

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

interface TwoSideLayoutProps {
    topbar: TopBarItem;
    member: MemberItem[];
}

export const TwoSideLayout: React.FC<TwoSideLayoutProps> = ({ topbar, member }) => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topbar && member.length > 0 ) {
      setLoading(false);
    }
  }, [topbar, member]);

  if (loading) {
    return <Skelton />;
  }
  return (
    <TwoSideLayoutTemplate topbar={topbar} member={member}/>
  )
}
