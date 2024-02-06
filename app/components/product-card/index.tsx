'use client';

import { Card, Text, Badge, Image, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import AddToCartButton from '../add-to-cart-button';

export default function ProductCard({ product }: { product: Product }) {
  const { title, price, images } = product;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder onClick={handleClick}>
      <Card.Section>
        <Image src={images[0]} height={160} alt="Norway" />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={50}>{title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        ${price}
      </Text>
      <AddToCartButton product={product} />
    </Card>
  );
}
