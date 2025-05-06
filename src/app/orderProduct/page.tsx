'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  function handleClick() {
    console.log(`Order Placed`);
    router.push('/');
  }

  return <button onClick={handleClick}>Place Order</button>;
}
