"use client";
import { useState } from "react";
import { items } from "../../Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slide = () => {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="main-carousel-slider">
        <Carousel.Item interval={4000}>
        <video className="w-100 video" autoPlay loop muted style={{ height: '546px' }}>
            <source
                src="https://psnschiscmsstg.blob.core.windows.net/schiscms/assets/home_loop_1min_fa6c74c3bb.webm"
                type="video/mp4"
                allowFullScreen
            />
        </video>
        <Carousel.Caption>
          <h3>Your Swiss Crypto <br></br>Investment Partner</h3>
          <p>Founded in 2013, Bitcoin Suisse is the Swiss crypto-native pioneer <br></br>and trusted gateway to crypto asset investing, offering institutional-grade <br></br>crypto services at the forefront of technical innovation.</p>
        </Carousel.Caption>
        <span className="scroll-btn">
          <a href="#">
            <span className="mouse">
              <span>
              </span>
            </span>
          </a>
        </span>
        </Carousel.Item>
        

    </Carousel>
    
  )
}

export default Slide;