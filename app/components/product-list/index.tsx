'use client';

import { Grid } from '@mantine/core';
import ProductCard from '../product-card';
import { Product } from '@/types';

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <Grid>
      {products.map((product: Product) => (
        <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={product.id}>
          <ProductCard product={product} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
