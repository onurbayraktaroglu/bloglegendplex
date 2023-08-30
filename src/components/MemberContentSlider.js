import React, { useState, useEffect } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderData from '../../public/data/sliderMember';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PrevArrow = ({ onClick, text }) => (
  <button className="btn btn-light border rounded-pill btn btn-primary slide-prev-button mb-2 disabled" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <span>{`${text}`}</span>  
  </button>
);

const NextArrow = ({ onClick, text }) => (
  <button className="btn btn-light border rounded-pill btn btn-primary slide-next-button mb-2" onClick={onClick}>
    <span>{`${text}`}</span>  
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);
const Slide = ({ title, url, name, image, degree }) => (

<Card className="blog-slider-item ss" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
  <div className="blog-slider-item-img col-md-3">
    <Link href={url}>
      <Card.Img
          variant="top"
          style={{ borderRadius: '0px' }}
          src={`images/${image}`}
      />
    </Link>
  </div>

  <Card.Body className="col-md-9">
      <Card.Title className="mt-2 blog-slider-item-desc" style={{ lineHeight: '32px', fontWeight: '500', color: '#262626', fontSize: '20px' }}>{title}</Card.Title>
      <div className="blog-slider-item-desc mt-2" style={{ fontWeight: '400', color: '#505050', fontSize: '14px', }} dangerouslySetInnerHTML={{ __html: name }} />
      <div className="blog-slider-item-desc mt-2" style={{ fontWeight: '400', color: '#505050', fontSize: '14px', }} dangerouslySetInnerHTML={{ __html: degree }} />
  </Card.Body>
</Card>
);
const MemberContentSlider = ({ Research }) => {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(SliderData.List);
  const [sliderLenght, setSliderLenght] = useState();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    afterChange: (e) => { 
      const sliderDatalength = SliderData.List.length -1
      const sliderDataW = document.querySelectorAll(".member-content-slider-container .slick-slide.slick-active");
      const slidePrev = document.querySelector(".member-content-slider-container .slide-prev-button");
      const slideNext = document.querySelector(".member-content-slider-container .slide-next-button");
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
          slidesToShow: 1,
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
  const onClick = () => {
    setSliderLenght(1)
  }
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  useEffect(() => {
    onClick();
  }, [sliderLenght, sliderLenght, setSliderLenght]);

  return (
    <><main className="main member-slide-x" style={{ paddingBottom: '30px', backgroundColor: '#f9f9f9', position: 'relative', overflow: 'hidden'}}>
      <Container className="member-content-slider-container ss" style={{ marginBottom: '20px' }}>
      <div className="slider-box-wrapper" style={{ margin: '0', paddingBottom: '70px', position: 'relative' }}>

          <Slider {...settings} style={{ padding: '0px' }}>
            {list.map(slide => (
              <Slide
                key={slide.id}
                title={slide.title}
                name={slide.name}
                url={slide.url}
                degree= {slide.degree}
                image={slide.image} />
            ))}
          </Slider>

        </div>
        </Container>
    </main>
        

      
      </>
  );
};

export default MemberContentSlider;


export const getStaticProps = async () => {
  return { props: { Research } }
}
