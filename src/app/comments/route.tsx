import { NextURL } from 'next/dist/server/web/next-url';
import { comments } from './data';

export async function GET(request) {
  const { searchParams } = await request.nextUrl;
  const query = searchParams.get('query');
  const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
  return Response.json(filteredComments);
}

export async function POST(request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
