// // pages/products/[id].tsx

// import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: {
//     id: number;
//     name: string;
//     image: string;
//   };
//   images: string[];
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('https://api.escuelajs.co/api/v1/products');
//   const products = await res.json();
//   const paths = products.map((product: Product) => ({
//     params: { id: product.id.toString() },
//   }));

//   return { paths, fallback: 'blocking' };
// };

// export const getStaticProps: GetStaticProps<{ product: Product }> = async (context) => {
//   const { id } = context.params!;
//   const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//   const product: Product = await res.json();
//   return { props: { product } };
// };

// const ProductPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ product }) => (
//   <div>
//     <h1>{product.title}</h1>
//     {/* Diğer ürün detayları */}
//   </div>
// );

// export default ProductPage;
