"use client"
import React, { useEffect, useState } from 'react'
import { CaseStoriesTemplate } from './CaseStoriesTemplate'
import { Skelton } from './Skelton';

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

interface CaseStoriesProps {
    successtitle:  SuccessItem;
    stories: StoriesItem[];
}

export const CaseStories: React.FC<CaseStoriesProps> = ({ successtitle, stories }) => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (successtitle && stories.length > 0 ) {
      setLoading(false);
    }
  }, [stories, successtitle]);

  if (loading) {
    return <Skelton />;
  }

  return (
    <CaseStoriesTemplate successtitle={successtitle} stories={stories}/>
  )
}
