import React, { useState, useEffect, useRef } from 'react';
import styles from './sectionCarousel.module.css';
import localFont from 'next/font/local';
import DynamicImageBlur from '@/components/CustomImage/DynamicImageBlur';

const helvetic700 = localFont({
  src: '../app/assets/font/HelveticaNeueBold.otf'
});

const services = [
  { name: 'Frontend /', img: "/images/image23.webp" },
  { name: 'Mobile development /', img: "/images/image24.webp" },
  { name: 'UX.UI design /', img: "/images/image25.webp" },
  { name: 'Backend /', img: "/images/image29.webp" },
  { name: 'AI development /', img: "/images/image27.webp" },
  { name: 'Product development /', img: "/images/image28.webp" },
  { name: 'Web design /', img: "/images/image35.webp" },
  { name: 'Web Site /', img: "/images/image30.webp" },
  { name: 'Graphic design /', img: "/images/Scene11.webp" },
  { name: '3D design /', img: "/images/Scene12.webp" },
];

const defaultImage = "/images/image23.webp";

const SectionList = ({ initialImage, initialBase64 }: any) => {
  const [currentImage, setCurrentImage] = useState(initialImage ? initialImage : defaultImage);
  const [imageKey, setImageKey] = useState(0);
  const [base64, setBase64] = useState(initialBase64);
  const [activeItem, setActiveItem] = useState(initialImage);

  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBase64 = async (img: string) => {
      const res = await fetch(`/api/image-placeholder?src=${img}`);
      const data = await res.json();
      setBase64(data.base64);
    };

    if (currentImage !== initialImage) {
      fetchBase64(currentImage);
    }
  }, [currentImage, initialImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const imageRect = imageRef.current.getBoundingClientRect();

      if (sectionRect.top <= 0 && sectionRect.bottom >= imageRect.height) {
        imageRef.current.style.position = 'fixed';
        imageRef.current.style.top = '20px';
      } else if (sectionRect.top > 0) {
        imageRef.current.style.position = 'absolute';
        imageRef.current.style.top = '0';
      } else if (sectionRect.bottom < imageRect.height) {
        imageRef.current.style.position = 'absolute';
        imageRef.current.style.bottom = '0';
        imageRef.current.style.top = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (img: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(img);
    setActiveItem(img);
  }

  const handleClick = (img: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(img);
    setActiveItem(img);
  }

  return (
    <section className={styles.section_two} ref={sectionRef}>
      <div className={styles.section_two_df}>
        <div className={styles.section_two_title} ref={imageRef}>
          <h3>Services</h3>
          <DynamicImageBlur src={currentImage} key={imageKey} base64={base64} alt="section two image" />
        </div>
        <div className={styles.list}>
          {services.map(service => (
            <span
              key={service.name}
              className={`${styles.list_item} ${activeItem === service.img ? styles.active_item : ""} ${helvetic700.className}`}
              onMouseEnter={() => handleMouseEnter(service.img)}
              onClick={() => handleClick(service.img)}
            >
              {service.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.section_two_df_mobile}>
        <div className={styles.section_two_title}>
          <h3 className={helvetic700.className}>Services</h3>
        </div>
        <div className={styles.list}>
          {services.map(service => (
            <span
              key={service.name}
              className={`${styles.list_item_mobile} ${helvetic700.className}`}
              onClick={() => handleClick(service.img)}
            >
              {service.name}
            </span>
          ))}
        </div>
        <DynamicImageBlur src={currentImage} key={imageKey} base64={base64} alt="section two image" />
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const initialImage = '/images/image23.webp';
  const res = await fetch(`http://localhost:3000/api/image-placeholder?src=${initialImage}`);
  const { base64 } = await res.json();

  return {
    props: {
      initialImage,
      initialBase64: base64,
    },
  };
}

export default SectionList;