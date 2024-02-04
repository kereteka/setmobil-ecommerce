'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// import { useNavigation } from 'next/navigation';
import styles from './index.module.scss';
import { Category, Product } from '@/types';

type PropType = {
  options?: EmblaOptionsType;
  items: Product[] | Category[] | undefined;
  type: string;
};

const Slider: React.FC<PropType> = ({ options, items, type }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  const handleImageClick = (item: string, itemId: number) => {
    window.location.href = `/${item}/${itemId}`;
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items?.map((item, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <div className={styles.embla}>
                <img
                  key={item.id}
                  className={styles.embla__slide__img}
                  src={item.image || item?.images[0]}
                  alt={item?.title}
                  onClick={() => handleImageClick(type, item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
