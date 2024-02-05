import React from 'react';
import { Button } from '@mantine/core';
import { Product } from '@/types';

const AddToCartButton = ({ product }: { product: Product }) => {
  const onAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      const productToAdd = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      };
      cart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <Button color="blue" fullWidth mt="md" radius="md" onClick={() => onAddToCart(product)}>
      Sepete Ekle
    </Button>
  );
};

export default AddToCartButton;
