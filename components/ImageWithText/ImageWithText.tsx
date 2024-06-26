"use client"
import React, { useEffect, useState } from 'react'
import { ImageWithTextTemplate } from './ImageWithTextTemplate'
import { Skelton } from './Skelton';

interface LableItem {
  heading?: string;
  label: string[];
}

interface ImageWithTextItem {
  image: string;
  title: string;
  text: LableItem;
}

interface ImageWithTextProps {
  imagetext: ImageWithTextItem;
  order: number
}


export const ImageWithText: React.FC<ImageWithTextProps> = ({ imagetext, order}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imagetext) {
      setLoading(false);
    }
  }, [imagetext]);

  if (loading) {
    return <Skelton />;
  }

  return (
    <ImageWithTextTemplate imagetext={imagetext} order={order}/>
  )
}
