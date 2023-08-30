import React, { useState, useEffect } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderData from '../../public/data/sliderData';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PrevArroww = ({ onClick, text }) => (
  <button className="btn btn-light border rounded-pill btn btn-primary slide-prev-button disabled" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <span>{`${text}`}</span>  
  </button>
);

const NextArroww = ({ onClick, text }) => (
  <button className="btn btn-light border rounded-pill btn btn-primary slide-next-button" onClick={onClick}>
    <span>{`${text}`}</span>  
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);
const Slide = ({ title, url, description, image }) => (

<Card className="blog-slider-item">
  <div className="blog-slider-item-img">
  <Link href={url}>
    <Card.Img
        variant="top"
        src={`images/${image}`}
    />
  </Link>
  </div>

<Card.Body>
    <Card.Title className="mt-2" style={{ lineHeight: '32px' }}>{title}</Card.Title>
    <div className="blog-slider-item-desc mt-3" dangerouslySetInnerHTML={{ __html: description }} />
    
</Card.Body>
</Card>
);
const BlogContentSlider = ({ Research }) => {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(SliderData.List);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    afterChange: (e) => { 
      const sliderDatalength = SliderData.List.length -1
      const sliderDataW = document.querySelectorAll(".blog-content-slider-container .slick-slide.slick-active");
      const slidePrev = document.querySelector(".blog-content-slider-container .slide-prev-button");
      const slideNext = document.querySelector(".blog-content-slider-container .slide-next-button");
      for(var i = 0; i < sliderDataW.length; i++)
      {
        if(sliderDataW[i].getAttribute('data-index') == 0) {
          slideNext.classList.remove("disabled");
          slidePrev.classList.add("disabled");
          return
        } else if(sliderDatalength == sliderDataW[i].getAttribute('data-index')) {
          slideNext.classList.add("disabled");
          slidePrev.classList.remove("disabled");
          return
        }
         else {
          slideNext.classList.remove("disabled");
          slidePrev.classList.remove("disabled");
        }
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <PrevArroww className="slick-prev" text="Previous" />
    ),
    nextArrow: (
      <NextArroww className="slick-next" text="Next" />
    ),
  };

  return (
    <><main className="main" style={{ paddingBottom: '0px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
      <div className="card mb-3" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body" style={{ marginRight: '20px', paddingLeft: '0px' }}>
                <span>EXPERT INSIGHTS</span>
                <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Our Research</h3>
                <p className="card-text mt-3">In-depth research on topics and trends from all around the crypto world</p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Button className="btn btn-light btn-light-new border rounded-pill mt-2" style={{ fontWeight: '500' }} variant="primary" >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="blog-content-slider-container" style={{ marginBottom: '20px' }}>
      <div className="slider-box-wrapper" style={{ margin: '0', paddingBottom: '70px', minWidth: '2000px', position: 'relative' }}>

          <Slider {...settings} style={{ padding: '0px' }}>
            {list.map(slide => (
              <Slide
                key={slide.id}
                title={slide.title}
                description={slide.description}
                url={slide.url}
                image={slide.image} />
            ))}
          </Slider>

        </div>
        </Container>
    </main>
        

      
      </>
  );
};

export default BlogContentSlider;


export const getStaticProps = async () => {
  return { props: { Research } }
}
