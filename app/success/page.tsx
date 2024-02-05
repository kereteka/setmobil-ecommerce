'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';
import { Button } from '@mantine/core';
import styles from './page.module.scss';
import animationData from '@/public/success.json';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className={styles.successContainer}>
      <div className={styles.successMessage}>Siparişiniz alınmıştır, teşekkür ederiz!</div>
      <div className={styles.animationContainer}>
        <Lottie
          animationData={animationData}
          height={150}
          width={150}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
      <Button onClick={() => router.push('/')}>Anasayfaya Dön</Button>
    </div>
  );
};

export default SuccessPage;
