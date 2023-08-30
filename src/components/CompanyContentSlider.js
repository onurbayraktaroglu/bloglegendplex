import React, { useState } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderData from '../../public/data/sliderData';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PrevArrow = ({ className, onClick, text }) => (
<button className="btn btn-light border rounded-pill btn btn-primary slide-prev-button disabled" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
    <span>{`${text}`}</span>  
</button>
);

const NextArrow = ({ className, onClick, text }) => (
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
    <Card.Title>{title}</Card.Title>
    <div className="blog-slider-item-desc" dangerouslySetInnerHTML={{ __html: description }} />
    
</Card.Body>
</Card>
);
const CompanyContentSlider = ({ Research }) => {
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
      const sliderDataW = document.querySelectorAll(".company-content-slider-container .slick-slide.slick-active");
      const slidePrev = document.querySelector(".company-content-slider-container .slide-prev-button");
      const slideNext = document.querySelector(".company-content-slider-container .slide-next-button");
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
      <PrevArrow className="slick-prev" text="Previous" />
    ),
    nextArrow: (
      <NextArrow className="slick-next" text="Next" />
    ),
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  return (
    <><main className="main" style={{ paddingBottom: '0px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
      <div className="card mb-3" style={{ width: '100%' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body" style={{ marginRight: '20px', paddingLeft: '0px' }}>
                <span>LATEST UPDATES</span>
                <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Company News</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container className="company-content-slider-container">
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

export default CompanyContentSlider;


export const getStaticProps = async () => {
  return { props: { Research } }
}
