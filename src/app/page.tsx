'use client'

import Image from "next/image";
import NavigationNavbar from "@/components/Navbar/NavigationNavbar";
import { Button, ConfigProvider, Flex } from "antd";
import localFont from 'next/font/local';
import ArrowRight from './assets/svgs/arrow_right.svg';
import SectionCarousel from "@/sections/SectionCarousel";
import SectionList from "@/sections/SectionList";
import SectionThree from "@/sections/SectionThree";
import Footer from "@/components/Footer/Footer";
import Tilt from 'react-parallax-tilt';

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
          <div className="hero">
            <div className="wrapper">
              <div className="wrapper_left">
                <h1 className={`wrapper_title ${helvetic700.className}`}>Embrace innovation,<br /> optimize processes,<br />  and enhance customer<br /> engagement through<br /> digital transformation</h1>
                <Flex gap="small" wrap className="flex_btn">
                  <button className={`btn_hero ${helvetic700.className}`}><span className={helvetic700.className}>Let’s Talk</span></button>
                  <button onClick={() => handleSmooth()} className={`btn_hero_text ${helvetic700.className}`}><span className={helvetic700.className}>See works</span></button>
                  <div onClick={() => handleSmooth()} className="arrow_btn">
                    <img src={ArrowRight.src} alt="arrow-right" />
                  </div>
                </Flex>
              </div>
              <div className="wrapper_right">
                <Tilt>
                  <Image src={require("./assets/arrowUpImage.png")} alt="Embrace innovation, optimize processes, and enhance customer engagement through digital transformation" className={"hero_img"} />
                </Tilt>
              </div>
            </div>
          </div>
          <SectionCarousel />
          <SectionList />
          <SectionThree />
          <Footer />
        </div>
      </ConfigProvider>
    </main>
  );
}