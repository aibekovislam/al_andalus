import React, { useEffect, useState, useRef } from 'react';
import styles from './sectionCarousel.module.css';
import localFont from 'next/font/local';
import DynamicImageBlur from '@/components/CustomImage/DynamicImageBlur';
import ArrowRight from '../app/assets/svgs/arrow_right.svg';
import useIntersectionObserver from '@/app/hooks/useObserverHook';
import { Parallax } from 'react-scroll-parallax';

const helvetic700 = localFont({
    src: '../app/assets/font/HelveticaNeueBold.otf'
});

const SectionCarousel = ({ initialBase64_2, initialBase64_3, initialBase64_4 }: any) => {
  const [initialBase64, setInitialBase64] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchBase64 = async () => {
      const initialImage = '/images/section_main.png';
      const res = await fetch(`/api/image-placeholder?src=${initialImage}`);
      const { base64 } = await res.json();
      setInitialBase64(base64);
    };

    fetchBase64();
  }, []);

  const handleIntersection = (element: any) => {
    if (image1Ref.current) {
      image1Ref.current.classList.add('slide-up');
    }
    if (titleRef.current) {
      titleRef.current.classList.add('focus-in-expand');
    }
  };

  const handlePortfolioImage3Intersection = (element: any) => {
    if (portfolioImage3Ref.current === element) {
      console.log(element)
      // element.classList.add('fade-in-up');
    }
  };

  const titleRef: any = useIntersectionObserver(handleIntersection, { threshold: 0.5 });
  const image1Ref: any = useIntersectionObserver(handleIntersection, { threshold: 0.5 });
  const sectionRef: any = useIntersectionObserver(handleIntersection, { threshold: 0.5 });
  const portfolioImage3Ref: any = useIntersectionObserver(handlePortfolioImage3Intersection, { threshold: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className={styles.portfolio_section} id='portfolio'>
        <div className={styles.portfolio_df}>
            <h2 ref={titleRef} className={`${helvetic700.className}`}>Portfolio</h2>
        </div>
        <div ref={image1Ref} className={styles.portfolio_image1}>
          {initialBase64_2 && (
            <DynamicImageBlur src={"/images/portfolio_image.webp"} key={0} base64={initialBase64_2} alt="section two image" className={styles.hero_image} />
          )}
          <div className={styles.portfolio_title_with_btn1}>
            <h3 className={helvetic700.className}>Web Site for architectural<br/> company Tash Building</h3>
            <a href='#' className={`${styles.btn_portfolio_1} ${helvetic700.className}`}>
              View Site
              <div className={styles.circle}>
                <img src={ArrowRight.src} alt='arrow right' />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.portfolio_image2}>
          <div className={`${styles.portfolio_image2_title} ${helvetic700.className}`}>Mobile app for ordering football fields</div>
            <Parallax translateY={[10, -40]} speed={30}>
              <DynamicImageBlur src={"/images/pole_portfolio.webp"} key={0} base64={initialBase64_3} alt="section two image" className={styles.hero_image2} />
            </Parallax>
        </div>
        <div className={`${styles.portfolio_image3}`}>
          {initialBase64_4 && (
            <DynamicImageBlur src={"/images/portfolio_image3.webp"} key={0} base64={initialBase64_4} alt="section two image" className={styles.hero_image} />
          )}
          <a target='_blank' href='https://www.turanelectronics.kg/' className={styles.portfolio_title_with_btn1}>
            <h3 className={helvetic700.className}>Online shop Turan<br/> Electronics</h3>
            <div className={`${styles.btn_portfolio_1} ${helvetic700.className}`}>
              View Site
              <div className={styles.circle}>
                <img src={ArrowRight.src} alt='arrow right' />
              </div>
            </div>
          </a>
        </div>
    </section>
  );
};

export default SectionCarousel;