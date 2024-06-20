"use client";
import React, { useEffect, useState } from 'react';
import { HeaderTemplate } from './HeaderTemplate';
import headerData from "./headerData.json";
import { Skelton } from './Skelton';

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

const fetchData = (): Promise<HeaderProps> => {
  return new Promise((resolve) => {
      resolve(headerData);
  });
};

export const Header: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<HeaderProps | null>(null);

  useEffect(() => {
    const loadHeaderData = async () => {
      const data = await fetchData();
      setData(data);
      setLoading(false);
    };

    loadHeaderData();
  }, []);

  if (loading || !data) {
    return <Skelton />;
  }

  return (
    <HeaderTemplate logo={data.logo} navigation={data.navigation} />
  );
};
