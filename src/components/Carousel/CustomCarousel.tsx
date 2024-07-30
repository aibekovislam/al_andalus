import React, { forwardRef } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';
import localFont from 'next/font/local';
import { Carousel } from 'antd';

const helvetic700 = localFont({
    src: '../../app/assets/font/HelveticaNeueBold.otf'
});

const CustomCarousel = forwardRef((props, ref: any) => {
  return (
    <>
      <Carousel className={styles.carousel_pk} ref={ref} slidesToShow={3} slidesToScroll={1} dots={false} responsive={
        [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1
            }
          }
        ]
      }>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
      </Carousel>
      <div className={styles.carousel_mobile}>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
        <div>
          <Image src={require("../../../public/images/cat.jpeg")} alt='image card' className={styles.card_img} />
          <h2 className={`${styles.card_title} ${helvetic700.className}`}>Hot Type</h2>
          <p className={styles.card_text}>Red hot type animations</p>
        </div>
      </div>
    </>
  )
});

CustomCarousel.displayName = 'CustomCarousel';

export default CustomCarousel;