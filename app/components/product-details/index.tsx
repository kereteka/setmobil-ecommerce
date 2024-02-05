'use client';

import { Card, Text, Button, Rating } from '@mantine/core';
import { EmblaOptionsType } from 'embla-carousel';
import styles from './index.module.scss'; // SCSS modülü
import Carousel from '../carousel';
import { Product } from '@/types';

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps',
};

const ProductDetailsCard = ({ product }: { product: Product }) => {
  const SLIDE_COUNT = product.images.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Carousel slides={SLIDES} options={OPTIONS} images={product.images} />
        </div>
        <div className={styles.details}>
          <div className={styles.centered_content}>
            <Text weight={500} size="lg">
              {product.title}
            </Text>
            <Rating value={Math.floor(Math.random() * 5) + 1} readOnly />
            <Text weight={500} size="md">{`$${product.price}`}</Text>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className={styles.description}>{product.description}</div>
    </Card>
  );
};

export default ProductDetailsCard;
