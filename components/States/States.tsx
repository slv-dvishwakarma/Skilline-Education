"use client"
import React, { useEffect, useState } from 'react'
import { StatesTemplates } from './StatesTemplates'
import { Skelton } from './Skelton';

interface StatesItem {
  icon: string;
  rate: string;
  label: string;
}

interface StatesProps {
  states: StatesItem[];
}

export const States: React.FC<StatesProps> = ({states}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (states && states.length > 0) {
      setLoading(false);
    }
  }, [states]);

  if (loading) {
    return <Skelton />;
  }

  return (
    <StatesTemplates states={states}/>
  )
}
