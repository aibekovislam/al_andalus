'use client'

import React, { useRef } from 'react';
import styles from './sectionCarousel.module.css';
import { Button } from 'antd';
import Image from "next/image";
import ArrowLeft from '../app/assets/svgs/arrow_left.svg';
import ArrowRight from '../app/assets/svgs/arrow_right.svg';
import localFont from 'next/font/local';
import CustomCarousel from '@/components/Carousel/CustomCarousel';

const helvetic700 = localFont({
    src: '../app/assets/font/HelveticaNeueBold.otf'
});

const SectionCarousel = () => {
  const carouselRef: any = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <section className={styles.portfolio_section}>
        <div className={styles.portfolio_df}>
            <h2 className={`${styles.portfolio_title} ${helvetic700.className}`}>Portfolio</h2>
            <div className={styles.portfolio_df_btn}>
                <Button className={styles.btn}><span style={{ fontSize: "14px" }}>Больше</span></Button>
                <div className={styles.arrow_btn} onClick={handlePrev}>
                    <Image src={ArrowLeft} alt='arrow_left' />
                </div>
                <div className={styles.arrow_btn} onClick={handleNext}>
                    <Image src={ArrowRight} alt='arrow_right' />
                </div>
            </div>
        </div>
        <div className={styles.carousel_block}>
            <CustomCarousel ref={carouselRef} />
        </div>
    </section>
  )
}

export default SectionCarousel;