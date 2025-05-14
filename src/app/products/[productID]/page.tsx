export default async function Page({ params }) {
  const parameter = await params;
  const productID = parameter.productID;
  return <div>Specific {productID}</div>;
}
