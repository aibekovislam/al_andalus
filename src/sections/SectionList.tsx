import React from 'react';
import styles from './sectionCarousel.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';

const helvetic700 = localFont({
  src: '../app/assets/font/HelveticaNeueBold.otf'
});

const SectionList = () => {
  return (
    <section className={styles.section_two}>
        <div className={styles.section_two_df}>
            <div className={styles.section_two_title}>
                <h3>Services</h3>
                <Image src={require("../app/assets/cat.jpeg")} className={styles.section_two_img} alt='section two image' />
            </div>
            <div className={styles.list}>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Frontend</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Mobile development</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>UX.UI design</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Backend</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>AI development</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Product development</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Web design</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Web Site</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Graphic design</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>3D design</span>
                <span className={`${styles.list_item} ${helvetic700.className}`}>Branding</span>
            </div>
        </div>
        <div className={styles.section_two_df_mobile}>
            <div className={styles.section_two_title}>
                <h3 className={helvetic700.className}>Services</h3>
            </div>
            <div className={styles.list}>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Frontend \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Mobile development \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>UX.UI design \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Backend \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>AI development \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Product development \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Web design \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Web Site \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Graphic design \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>3D design \</span>
                <span className={`${styles.list_item_mobile} ${helvetic700.className}`}>Branding \</span>
            </div>
            <Image src={require("../app/assets/cat.jpeg")} className={styles.section_two_img} alt='section two image' />
        </div>
    </section>
  )
}

export default SectionList