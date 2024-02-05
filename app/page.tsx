// pages/index.tsx
import type { NextPage } from 'next';
import { EmblaOptionsType } from 'embla-carousel';
import dynamic from 'next/dynamic';
import { Category, Product } from '@/types';
// import Slider from './components/slider';

const SliderWithNoSSR = dynamic(() => import('./components/slider'), {
  ssr: false,
});

const fetchProducts = () =>
  fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=0', {
    cache: 'force-cache',
  }).then((res) => res.json());

const fetchCategories = () =>
  fetch('https://api.escuelajs.co/api/v1/categories', { cache: 'force-cache' }).then((res) =>
    res.json()
  );
const getData = async () => {
  const [productsResult, categoriesResult] = await Promise.allSettled([
    fetchProducts(),
    fetchCategories(),
  ]);

  const products = productsResult.status === 'fulfilled' ? productsResult.value : [];
  const categories = categoriesResult.status === 'fulfilled' ? categoriesResult.value : [];

  return { products, categories };
};
const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps',
};

const HomePage: NextPage<{ products: Product[]; categories: Category[] }> = async () => {
  // const products = await getProducts();
  // const categories = await getCategories();
  const { products, categories } = await getData();
  return (
    <div>
      <h1>Popüler Ürünler</h1>
      <div>
        <section className="sandbox__carousel">
          <SliderWithNoSSR options={OPTIONS} items={products} type="products" />
        </section>
      </div>
      <div>
        <h1>Kategoriler</h1>
        <section className="sandbox__carousel">
          <SliderWithNoSSR options={OPTIONS} items={categories} type="categories" />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
