import React from 'react'
import { TwoSideLayoutTemplate } from './TwoSideLayoutTemplate'

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
  return (
    <TwoSideLayoutTemplate topbar={topbar} member={member}/>
  )
}
