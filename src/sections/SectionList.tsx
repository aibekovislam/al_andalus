import React, { useState, useEffect } from 'react';
import styles from './sectionCarousel.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';

const helvetic700 = localFont({
  src: '../app/assets/font/HelveticaNeueBold.otf'
});

const services = [
  { name: 'Frontend', img: require("../app/assets/cat.jpeg") },
  { name: 'Mobile development', img: require("../app/assets/cat2.jpg") },
  { name: 'UX.UI design', img: require("../app/assets/cat3.jpg") },
  { name: 'Backend', img: require("../app/assets/cat4.webp") },
  { name: 'AI development', img: require("../app/assets/cat5.webp") },
  { name: 'Product development', img: require("../app/assets/cat6.jpg") },
  { name: 'Web design', img: require("../app/assets/cat7.webp") },
  { name: 'Web Site', img: require("../app/assets/cat8.jpg") },
  { name: 'Graphic design', img: require("../app/assets/cat9.jpg") },
  { name: '3D design', img: require("../app/assets/cat10.jpg") },
  { name: 'Branding', img: require("../app/assets/cat11.jpg") }
];

const SectionList = () => {
  const [currentImage, setCurrentImage] = useState(require("../app/assets/cat.jpeg"));
  const [imageKey, setImageKey] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false); // сброс состояния загрузки при изменении изображения
  }, [currentImage]);

  const handleMouseEnter = (img: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(img);
  }

  const handleMouseLeave = () => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(require("../app/assets/cat.jpeg"));
  }

  const handleClick = (img: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(img);
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  return (
    <section className={styles.section_two}>
      <div className={styles.section_two_df}>
        <div className={styles.section_two_title}>
          <h3>Services</h3>
          <Image 
            key={imageKey} 
            src={currentImage} 
            className={`${styles.section_two_img} ${imageLoaded ? 'loaded' : ''}`} 
            onLoadingComplete={handleImageLoad}
            alt='section two image' 
          />
        </div>
        <div className={styles.list}>
          {services.map(service => (
            <span
              key={service.name}
              className={`${styles.list_item} ${helvetic700.className}`}
              onMouseEnter={() => handleMouseEnter(service.img)}
              onMouseLeave={handleMouseLeave}
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
              {service.name} \
            </span>
          ))}
        </div>
        <Image 
          key={imageKey} 
          src={currentImage} 
          className={`${styles.section_two_img} ${imageLoaded ? 'loaded' : ''}`} 
          onLoadingComplete={handleImageLoad}
          alt='section two image'
          placeholder='blur'
        />
      </div>
    </section>
  );
}

export default SectionList;