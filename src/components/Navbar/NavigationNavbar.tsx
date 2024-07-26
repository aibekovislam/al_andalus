'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import localFont from 'next/font/local';

const helvetic700 = localFont({
  src: '../../app/assets/font/HelveticaNeueBold.otf'
});

const NavigationNavbar = () => {
  const [activeNavbar, setActiveItem] = useState('Main');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (navRef.current) {
      const element = navRef.current as HTMLDivElement;
      if (isMenuOpen) {
        element.style.maxHeight = `1000px`;
      } else {
        element.style.maxHeight = '0px';
      }
    }
  }, [isMenuOpen]);
  

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.logo} ${helvetic700.className}`}>Al Andalus</div>
        <ul className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
          <li className={`${styles.nav_item} ${helvetic700.className} ${activeNavbar === 'Main' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Main')}>Main</li>
          <li className={`${styles.nav_item} ${helvetic700.className} ${activeNavbar === 'Portfolio' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Portfolio')}>Portfolio</li>
          <li className={`${styles.nav_item} ${helvetic700.className} ${activeNavbar === 'About' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('About')}>About</li>
          <li className={`${styles.nav_item} ${helvetic700.className} ${activeNavbar === 'Labs' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Labs')}>Labs</li>
          <li className={`${styles.nav_item} ${helvetic700.className} ${activeNavbar === 'Contacts' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Contacts')}>Contacts</li>
        </ul>
        <div className={`${styles.burger_menu} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.burger_icon}></div>
          <div className={styles.burger_icon}></div>
          <div className={styles.burger_icon}></div>
        </div>
        <div ref={navRef} className={`${styles.burger_menu_navigation} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.burger_menu_nav_items}>
            <li className={`${styles.nav_items} ${helvetic700.className} ${activeNavbar === 'Main' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Main')}>Main</li>
            <li className={`${styles.nav_items} ${helvetic700.className} ${activeNavbar === 'Portfolio' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Portfolio')}>Portfolio</li>
            <li className={`${styles.nav_items} ${helvetic700.className} ${activeNavbar === 'About' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('About')}>About</li>
            <li className={`${styles.nav_items} ${helvetic700.className} ${activeNavbar === 'Labs' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Labs')}>Labs</li>
            <li className={`${styles.nav_items} ${helvetic700.className} ${activeNavbar === 'Contacts' ? styles.active_navbar : ''}`} onClick={() => handleItemClick('Contacts')}>Contacts</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavigationNavbar;