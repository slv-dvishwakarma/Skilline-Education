import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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

export const BlogTemplate: React.FC<BlogTemplateProps> = ({ articles }) => {
  return (
    <div className='blog'>
      <h2 className='mb-6 md:text-[40px] text-[30px] capitalize lg:text-[46px] xl:text-[46px] text-center text-tertiary font-medium'>{articles.title}</h2>
      <hr className="border-secondary mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-opacity-50 bg-transparent" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.article.map((blog, index) => (
          <Link key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
            <div className="aspect-w-16 aspect-h-11">
              <Image className="w-full object-cover rounded-xl" src={blog.image} alt={blog.blog_title} width={400} height={400} />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-secondary">
                {blog.blog_title}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400 line-clamp-3">
                {blog.short_des}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* 
      <div className="mt-12 text-center">
        <a className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-blue-500 dark:hover:bg-neutral-800" href="#">
          Read more
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </a>
      </div> */}
    </div>
  )
}
