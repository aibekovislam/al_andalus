import React from 'react'
import styles from './footer.module.css';
import localFont from 'next/font/local';
import logo from '../../app/assets/svgs/logo.svg';
import LogoMain from '../../app/assets/svgs/logo_main.svg';

const helvetic700 = localFont({
    src: '../../app/assets/font/HelveticaNeueBold.otf'
});  


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_items}>
            <div className={styles.footer_item}>
                <ul className={styles.footer_navigation}>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Instagram</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Behance</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Dribbble</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Vimeo</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Youtube</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>LinkedIn</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Savee.it</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Telegram</li>
                    <li className={`${styles.footer_navigation_item} ${helvetic700.className}`}>Whatsapp</li>
                </ul>
                <hr />
            </div>
            <div className={styles.footer_item_small}>
                <div className={styles.footer_small_texts}>
                    <div className={styles.footer_small_text}>
                        <div className={styles.footer_small_text_item}>Small is beautiful.</div>
                    </div>
                    <div className={styles.footer_small_text_df}>
                        <div className={styles.footer_small_text_item}>Index</div>
                        <div className={styles.footer_small_text_item}>Impressum</div>
                        <div className={styles.footer_small_text_item}>Privacy Policy</div>
                        <div className={styles.footer_small_text_item}>© Al Andalus—All rights reserved.</div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.footer_item_title}>
                <div className={`${styles.footer_title} ${helvetic700.className}`}>
                    Al Andalus
                    <div className={styles.logo_block}><img src={logo.src} alt='logo' /></div>
                </div>
            </div> */}
            <img src={LogoMain.src} alt='logo' className={styles.footer_title} />
            <div className={styles.footer_small_text_df_mobile}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                    <div className={styles.footer_small_text_item}>Index</div>
                    <div className={styles.footer_small_text_item}>Impressum</div>
                    <div className={styles.footer_small_text_item}>Privacy Policy</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <div className={styles.footer_small_text_item}>© Al Andalus—All rights reserved.</div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer