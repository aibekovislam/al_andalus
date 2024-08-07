'use client'

import React, { useEffect, useState } from 'react';
import styles from './sectionCarousel.module.css';
import localFont from 'next/font/local';
import DynamicImageBlur from '@/components/CustomImage/DynamicImageBlur';
import ArrowRight from '../app/assets/svgs/arrow_right.svg';

const helvetic700 = localFont({
    src: '../app/assets/font/HelveticaNeueBold.otf'
});

const SectionCarousel = () => {
  const [initialBase64, setInitialBase64] = useState('');

  useEffect(() => {
    const fetchBase64 = async () => {
      const initialImage = '/images/section_main.png';
      const res = await fetch(`/api/image-placeholder?src=${initialImage}`);
      const { base64 } = await res.json();
      setInitialBase64(base64);
    };

    fetchBase64();
  }, []);

  return (
    <section className={styles.portfolio_section} id='portfolio' >
        <div className={styles.portfolio_df}>
            <h2 className={`${styles.portfolio_title} ${helvetic700.className}`}>Portfolio</h2>
            {/* <div className={styles.portfolio_df_btn}>
                <Button className={styles.btn}><span style={{ fontSize: "14px" }}>Больше</span></Button>
                <div className={styles.arrow_btn} onClick={handlePrev}>
                    <Image src={ArrowLeft} alt='arrow_left' />
                </div>
                <div className={styles.arrow_btn} onClick={handleNext}>
                    <Image src={ArrowRight} alt='arrow_right' />
                </div>
            </div> */}
        </div>
        <div className={styles.portfolio_image1}>
          {initialBase64 && (
            <DynamicImageBlur src={"/images/portfolio_image.png"} key={0} base64={initialBase64} alt="section two image" className="hero_image" />
          )}
          <div className={styles.portfolio_title_with_btn1}>
            <h3 className={helvetic700.className}>Web Site for architectural<br/> company Tash Building</h3>
            <div className={`${styles.btn_portfolio_1} ${helvetic700.className}`}>
              View Site
              <div className={styles.circle}>
                <img src={ArrowRight.src} alt='arrow right' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.portfolio_image2}>
          <div className={`${styles.portfolio_image2_title} ${helvetic700.className}`}>Mobile app for ordering football fields</div>
          {initialBase64 && (
            <DynamicImageBlur style={{marginTop: "50px"}} src={"/images/pole_portfolio.png"} key={0} base64={initialBase64} alt="section two image" className="hero_image" />
          )}
        </div>
        <div className={styles.portfolio_image1}>
          {initialBase64 && (
            <DynamicImageBlur src={"/images/portfolio_image3.png"} key={0} base64={initialBase64} alt="section two image" className="hero_image" />
          )}
          <div className={styles.portfolio_title_with_btn1}>
            <h3 className={helvetic700.className}>Online shop Turan<br/> Electronics</h3>
            <div className={`${styles.btn_portfolio_1} ${helvetic700.className}`}>
              View Site
              <div className={styles.circle}>
                <img src={ArrowRight.src} alt='arrow right' />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SectionCarousel;