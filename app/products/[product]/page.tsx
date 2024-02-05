import ProductDetailsCard from '@/app/components/product-details';

const fetchProduct = async (id: string | undefined) =>
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: 'no-store',
  }).then((res) => res.json());

const Product = async ({ params }: { params?: { product: string } }) => {
  const id = params?.product;
  const product = (await fetchProduct(id)) || [];
  return <ProductDetailsCard product={product} />;
};

export default Product;
