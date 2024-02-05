import React from 'react';
import { Card, Image, Text, Group, Box } from '@mantine/core';

// Ürün tipini tanımlayalım
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string; // İlk resmin URL'si
}

const CartItem = ({ item }: { item: CartItem }) => {
  const totalPrice = item.price * item.quantity;

  return (
    <Card withBorder radius="md" p="md" mb="md">
      <Group>
        <Image src={item.image} alt={item.title} width={100} height={100} fit="cover" radius="md" />
        <Box sx={{ flex: 1 }}>
          <Text size="md" weight={500}>
            {item.title}
          </Text>
          <Text color="dimmed">Fiyat: ${item.price.toFixed(2)}</Text>
          <Text color="dimmed">Adet: {item.quantity}</Text>
          <Text size="md" weight={700}>
            Toplam: ${totalPrice.toFixed(2)}
          </Text>
        </Box>
      </Group>
    </Card>
  );
};

export default CartItem;
