import React from 'react';
import styles from './sectionCarousel.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';
import ArrowRight from '../app/assets/svgs/arrow_right.svg';

const helvetic700 = localFont({
    src: '../app/assets/font/HelveticaNeueBold.otf'
});  

const SectionThree = () => {
  return (
    <div className={styles.section_three}>
        <div className={styles.section_three_items}>
            <div className={styles.section_three_item}>
                <Image className={styles.section_three_image1} src={require("../app/assets/section_three_image1.png")} alt='project images' />
            </div>
            <div className={styles.section_three_item}>
                <Image className={styles.section_three_image2} src={require("../app/assets/section_three_image2.png")} alt='project images' />
                <p className={`${styles.section_three_text} ${helvetic700.className}`}>Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects and</p>
                <div className={styles.section_three_btn}>
                    Contact Us
                    <div className={styles.arrow_block}>
                        <img src={ArrowRight.src} alt='arrow right svg' />
                    </div>
                </div>
            </div>
            <div className={styles.section_three_item}>
                <Image className={styles.section_three_image3} src={require("../app/assets/section_three_image3.png")} alt='project images' />
                <p className={`${styles.section_three_text} ${helvetic700.className}`}>Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects and</p>
            </div>
        </div>
    </div>
  )
}

export default SectionThree