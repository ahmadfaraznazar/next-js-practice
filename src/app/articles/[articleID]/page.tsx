'use client'; // Add if client-side interactivity is needed

import Link from 'next/link';

export default function Page({ params, searchParams }) {
  // Extract specific values from params and searchParams with fallbacks
  const slug = params?.id || 'en'; // Assuming the dynamic route is [slug]
  const language = searchParams?.lang || 'en'; // Default to 'en' if lang is not provided

  return (
    <>
      <h1>News: {slug}</h1>
      <div>Reading News in {language}</div>
      <Link href="/articles/breaking-news?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news?lang=fr">Read in French</Link>
    </>
  );
}
