'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CartItem from '../components/cart-item';
import PayoutCard from '../components/payout-card';
import styles from './page.module.scss';

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);

    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, []);

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_items}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.payout_card}>
        <PayoutCard totalAmount={totalAmount} />
      </div>
    </div>
  );
}
