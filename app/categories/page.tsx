// import { Input } from '@mantine/core';
import CategoryList from '@/app/components/category-list';
import ProductList from '@/app/components/product-list';
import styles from './page.module.scss';
import SearchBar from '@/app/components/search-bar';

export async function generateStaticParams() {
  const productResponse = await fetch('https://api.escuelajs.co/api/v1/products/');
  const posts = await productResponse.json();
  return posts.map((post: any) => ({
    id: String(post.id),
  }));
}

const fetchProducts = async (
  id: string | string[] | undefined,
  title: string | string[] | undefined
) => {
  let queryUrl = `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`;
  if (title) {
    queryUrl += `&title=${title}`;
  }
  return fetch(queryUrl, { cache: 'no-store' }).then((res) => res.json());
};

const fetchCategories = async () =>
  fetch('https://api.escuelajs.co/api/v1/categories', {
    cache: 'no-store',
  }).then((res) => res.json());

const CategoryPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { title, categoryId } = searchParams;
  const products = (await fetchProducts(categoryId, title)) || [];
  const categories = await fetchCategories();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CategoryList categoryId={categoryId} categories={categories} />
      </div>
      <div className={styles.main_content}>
        <div>
          <SearchBar search={searchParams} />
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
