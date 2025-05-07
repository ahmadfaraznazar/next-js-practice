import Link from 'next/link';

export default function Page() {
  return (
    <div>
      F1{' '}
      <Link href="/f1/f2">
        <h2>F2 Link</h2>
      </Link>
    </div>
  );
}
