'use client'

import NavigationNavbar from "@/components/Navbar/NavigationNavbar";
import { ConfigProvider, Flex } from "antd";
import localFont from 'next/font/local';
import SectionCarousel from "@/sections/SectionCarousel";
import SectionList from "@/sections/SectionList";
import SectionThree from "@/sections/SectionThree";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import ArrowRight from "./assets/svgs/arrow_right.svg";
import { TypeAnimation } from "react-type-animation";


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
        <div className="container">
          <NavigationNavbar />
        </div>
        <div className="hero">
            <div className="main-content">
              <div className="container">
                <h1 className={`${helvetic700.className} hero_title`}>Al Andalus</h1>
                {/* <TypeAnimation
                  sequence={[
                    'Al Andalus'
                  ]}
                  wrapper="h1"
                  speed={50}
                  repeat={1}
                  className={`${helvetic700.className} hero_title`}
                  cursor={false}
                /> */}
                <p className={`hero_text ${helvetic700.className}`}>Innovate, optimize processes, enhance customer engagement.</p>
              </div>
              <Image src={require("./assets/section.png")} alt="" className="hero_image" />
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
          </div>
        <div className="container">
          <SectionCarousel />
          <SectionList />
          <SectionThree />
          <Footer />
        </div>
      </ConfigProvider>
    </main>
  );
}