'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './index.module.scss';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  images: Array<String>;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options, images } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <img className={styles.embla__slide__img} src={images[index]} alt="Your alt text" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
