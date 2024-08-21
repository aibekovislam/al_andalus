import React, { useState, useEffect, useRef } from 'react';
import styles from './sectionCarousel.module.css';
import localFont from 'next/font/local';
import DynamicImageBlur from '@/components/CustomImage/DynamicImageBlur';

const helvetic700 = localFont({
  src: '../app/assets/font/HelveticaNeueBold.otf'
});

const services = [
  { name: 'Frontend /', img: "/images/image27.webp", text: 'Frontend is the user interface of a website or app, built with HTML, CSS, and JavaScript.' },
  { name: 'Mobile development /', img: "/images/02-Random.jpg (1).webp", text: 'Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects' },
  { name: 'UX.UI design /', img: "/images/image24.webp", text: 'UX/UI is the design of a products functionality (UX) and appearance (UI) to create a smooth, user-friendly experience.' },
  { name: 'Backend /', img: "/images/image29.webp", text: 'Backend manages the server, database, and logic behind a website or app.' },
  { name: 'AI development /', img: "/images/02-Random.jpg (2).webp", text: 'AI development is creating intelligent systems that learn and make decisions.' },
  { name: 'Product development /', img: "/images/image28.webp", text: 'Product development is creating and refining a product from concept to market.' },
  { name: 'Web design /', img: "/images/image30.webp", text: 'Web design is the process of creating and arranging the visual elements of a website.' },
  { name: 'Web Site /', img: "/images/image26.webp", text: 'A website is a collection of interconnected web pages accessible via the internet.' },
  { name: 'Graphic design /', img: "/images/nout.webp", text: 'Graphic design is the creation of visual content to communicate messages and ideas.' },
  { name: '3D design /', img: "/images/image23.webp", text: '3D design is creating three-dimensional models and visuals for various applications.' },
  { name: 'Brand design /', img: "/images/image35.webp", text: 'Brand design is the creation of visual elements that represent and distinguish a brand.' },
];

const defaultImage = "/images/image23.webp";

const SectionList = ({ initialImage, initialBase64 }: any) => {
  const [currentImage, setCurrentImage] = useState(initialImage ? initialImage : defaultImage);
  const [currentText, setCurrentText] = useState(services[0].text);
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

  const handleMouseEnter = (img: string, text: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentImage(img);
    setActiveItem(img);
    setCurrentText(text)
  }

  const handleClick = (img: string, text: string) => {
    setImageKey(prevKey => prevKey + 1);
    setCurrentText(text)
    setCurrentImage(img);
    setActiveItem(img);
  }

  return (
    <section className={styles.section_two} ref={sectionRef}>
      <div className={styles.section_two_df}>
        <div className={styles.section_two_title} ref={imageRef}>
          <h3>Services</h3>
          <DynamicImageBlur src={currentImage} key={imageKey} base64={base64} alt="section two image" />
          <div className='text_image_under'>{ currentText }</div>
        </div>
        <div className={styles.list}>
          {services.map(service => (
            <span
              key={service.name}
              className={`${styles.list_item} ${activeItem === service.img ? styles.active_item : ""} ${helvetic700.className}`}
              onMouseEnter={() => handleMouseEnter(service.img, service.text)}
              onClick={() => handleClick(service.img, service.text)}
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
              onClick={() => handleClick(service.img, service.text)}
            >
              {service.name}
            </span>
          ))}
        </div>
        <DynamicImageBlur src={currentImage} key={imageKey} base64={base64} alt="section two image" />
        <div className='text_image_under'>{ currentText }</div>
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