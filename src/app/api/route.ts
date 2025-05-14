import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = await headers();
  console.log(headersList.get('Authorization'));
  return new Response('API');
}
