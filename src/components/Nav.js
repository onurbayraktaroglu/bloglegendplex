"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DesktopMenu from "./menu/DesktopMenu";
import MobileMenu from "./menu/MobileMenu";

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavBg = () => {
      setIsNavOpen(!isNavOpen);
    };
    
    const handleNavToggle = () => {
      setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
      if(!isNavOpen) {
        document.body.classList.remove('highlight');
      } else {
        document.body.classList.add('highlight');
      }
    }, [isNavOpen]);

  return (
    <>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/"><Image src="/images/legendplex-logo.png" width={200} height={60} alt="LegendPlex"/></Navbar.Brand>
          <div className="dropdown bane" >
              <span className="multilang-button" style={{ marginTop: '0px!important' }}>DE</span>
          </div>
          <Navbar.Toggle onClick={handleNavToggle} id="basic-navbar-clk" >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <DesktopMenu />
            <MobileMenu />
          </Navbar.Collapse>
          <Navbar.Toggle onClick={handleNavToggle} className="basic-navbar-nav-bg" id="basic-navbar-bg" >
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;