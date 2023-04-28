import React, { useEffect, useState } from 'react';
import Logo from 'src/assets/images/longLogo.svg';
import Button from '../button/Button';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <nav className={isScrolled ? 'navbar navbar--scrolled' : 'navbar'}>
            <a href="/">
                <Logo />
            </a>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#section1" className="navbar__link">
                        I AM A COACH
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#section2" className="navbar__link">
                        I AM AN ATHLETE OR PARENT
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#section3" className="navbar__link">
                        SCHEDULE DEMO
                    </a>
                </li>
                <li>
                    <Button text="GET THE APP" />
                </li>
            </ul>
            <button className="navbar__toggle">
                <span className="navbar__toggle-icon"></span>
            </button>
        </nav>
    );
};

export default NavBar;
