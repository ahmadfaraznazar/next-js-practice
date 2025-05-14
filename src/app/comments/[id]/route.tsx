import { comments } from '../data';

export async function GET(request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return new Response(JSON.stringify({ error: 'Comment not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(comment), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PATCH(request, { params }) {
  const { id } = await params; // ID RECEIVED
  const body = await request.json(); // BODY RECEIVED
  const { text } = body; // TEXT EXTRACTED FROM BODY

  const comment = comments.find((comment) => comment.id === parseInt(id));
  comment.text = text;

  return Response.json(comment);
}

export async function DELETE(request, { params }) {
  const { id } = await params; // ID RECEIVED
  const commentDeleted = comments.find((comment) => comment.id === parseInt(id));
  const index = comments.findIndex((comment) => comment.id === parseInt(id)); //Find Comment

  comments.splice(index, 1); // Removes 1 item at `index`

  return Response.json(commentDeleted);
}
