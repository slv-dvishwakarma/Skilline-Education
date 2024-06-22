import React from 'react'
import { BlogTemplate } from './BlogTemplate'

interface BlogItem {
  image: string;
  blog_title: string;
  short_des: string;
}

interface BlogTemplateItem {
  title: string;
  article: BlogItem[];
}

interface BlogTemplateProps {
  articles: BlogTemplateItem;
}

export const Blog: React.FC<BlogTemplateProps> = ({ articles}) => {
  return (
    <BlogTemplate articles={articles}/>
  )
}
