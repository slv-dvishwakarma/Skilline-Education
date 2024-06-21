"use client";
import React, { useEffect, useState } from 'react';
import { CardwithimageTemplate } from './CardwithimageTemplate';
import { Skelton } from './Skelton';

interface TopBarItem {
  title: string;
  description: string;
}

interface CardItem {
  heading: string;
  details: string;
}

interface StaticItem {
  stepstring: string;
  phonestring: string;
  phonenumber: string;
}

interface CardwithimageProps {
  topbar: TopBarItem;
  card: CardItem[];
  staticcontent: StaticItem;
}

export const Cardwithimage: React.FC<CardwithimageProps> = ({ topbar, card, staticcontent }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topbar && card.length > 0 && staticcontent) {
      setLoading(false);
    }
  }, [topbar, card, staticcontent]);

  if (loading) {
    return <Skelton />;
  }

  return (
    <CardwithimageTemplate topbar={topbar} card={card} staticcontent={staticcontent} />
  );
};
