"use client";

import { NextSeo } from 'next-seo';
import { resumeData } from '../data/resumeData';

export default function SEO({ title, description }) {
  const defaultTitle = `${resumeData.personalInfo.name} - Full Stack Web Developer`;
  const defaultDescription = resumeData.summary;
  
  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  
  return (
    <NextSeo
      title={seoTitle}
      description={seoDescription}
      canonical="https://yourwebsite.com/"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://yourwebsite.com/',
        siteName: defaultTitle,
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: 'https://yourwebsite.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: resumeData.personalInfo.name,
          },
        ],
      }}
      twitter={{
        handle: '@yourhandle',
        site: '@yoursite',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: 'web developer, full stack developer, php developer, laravel, react, javascript, bangladesh',
        },
      ]}
    />
  );
}