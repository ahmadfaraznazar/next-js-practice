export default async function Page({ params }) {
  const productID = params.productID;
  return <div>Specific {productID}</div>;
}
