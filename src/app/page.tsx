'use client'

import { useEffect, useState } from 'react';
import NavigationNavbar from "@/components/Navbar/NavigationNavbar";
import { ConfigProvider, Flex } from "antd";
import localFont from 'next/font/local';
import SectionCarousel from "@/sections/SectionCarousel";
import SectionList from "@/sections/SectionList";
import SectionThree from "@/sections/SectionThree";
import Footer from "@/components/Footer/Footer";
import ArrowRight from "./assets/svgs/arrow_right.svg";
import { TypeAnimation } from "react-type-animation";
import DynamicImageBlur from "@/components/CustomImage/DynamicImageBlur";
import { ParallaxProvider } from 'react-scroll-parallax';


const helvetic700 = localFont({
  src: './assets/font/HelveticaNeueBold.otf'
});

const handleSmooth = (item = 'portfolio') => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

export default function Home() {
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
    <main>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FBB90F",
            fontFamily: "Helvetica",
          }
        }}
      >
        { initialBase64 ? (
          <ParallaxProvider>
          <div className="container">
            <NavigationNavbar />
          </div>
          <div className="hero">
              <div className="main-content">
                <div className="container">
                  <h1 className={`${helvetic700.className} hero_title`}>Al Andalus</h1>
                  <p className={`hero_text ${helvetic700.className}`}>Innovate, optimize processes, enhance customer engagement.</p>
                </div>
                {initialBase64 && (
                  <div className='hero_image_block'>
                    <DynamicImageBlur src={"/images/section_main.png"} key={0} base64={initialBase64} alt="section two image" className="hero_image" pri={true} />
                  </div>
                )}
                {/* { !initialBase64 ? (
                  <div className={`section_main_block ${initialBase64 ? 'section_animate' : ''}`}></div>
                ) : (null) } */}
                <div className="content">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and enhancing customer engagement.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and boosting client interactions.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and improving customer connections.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and elevating user experiences.',
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className={`content_text ${helvetic700.className}`}
                  />
                  <div className="flex_btn">
                    <button className={`btn_hero ${helvetic700.className}`}><span className={helvetic700.className}>Let’s Talk</span></button>
                    <div onClick={() => handleSmooth()} className={`${helvetic700.className} btn_two`} >
                    See works
                      <div onClick={() => handleSmooth()} className="arrow_btn">
                        <img src={ArrowRight.src} alt="arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-content_mobile">
                <div className="container">
                  <TypeAnimation wrapper='p' cursor={false} preRenderFirstString={false} speed={70} sequence={['Innovate, optimize processes, enhance customer engagement.']} className={`hero_text_mobile ${helvetic700.className}`}></TypeAnimation>
                  <h1 className={`${helvetic700.className} hero_title_mobile`}>Al Andalus</h1>
                </div>
                {initialBase64 && (
                  <div className='hero_image_block_mobile'>
                    <DynamicImageBlur src={"/images/section_main.png"} key={0} base64={initialBase64} alt="section two image" className="hero_image_mobile" pri={true} />
                  </div>
                )}
                <div className="content_mobile">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and enhancing customer engagement.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and boosting client interactions.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and improving customer connections.',
                      1000,
                      'At AL Andalus, we deliver innovative IT solutions tailored to your business. Located in Dubai, we specialize in comprehensive digital transformation, optimizing processes, and elevating user experiences.',
                    ]}
                    wrapper="p"
                    speed={50}
                    repeat={Infinity}
                    className={`content_text_mobile ${helvetic700.className}`}
                  />
                  <div className="flex_btn_mobile">
                    <button className={`btn_hero ${helvetic700.className}`}><span className={helvetic700.className}>Let’s Talk</span></button>
                    <div onClick={() => handleSmooth()} className={`${helvetic700.className} btn_two`} >
                    See works
                      <div onClick={() => handleSmooth()} className="arrow_btn">
                        <img src={ArrowRight.src} alt="arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="container">
            <SectionList />
          </div>
          <SectionCarousel />
          <div className='container'>
            <Footer />
          </div>
        </ParallaxProvider>
        ) : (
          <div className={`loading ${helvetic700.className}`}>Loading...</div>
        ) }
      </ConfigProvider>
    </main>
  );
}