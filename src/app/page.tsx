import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div>Reading News Article</div>
      <Link href="/articles/breaking-news?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news?lang=fr">Read in French</Link>
    </>
  );
}
