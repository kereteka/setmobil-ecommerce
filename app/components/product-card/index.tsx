'use client';

import { Card, Text, Badge, Image, Button, Group } from '@mantine/core';
import { Product } from '@/types';

export default function ProductCard({ product }: { product: Product }) {
  const { title, price, images } = product;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
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
      <Button color="blue" fullWidth mt="md" radius="md">
        Add to Basket
      </Button>
    </Card>
  );
}
