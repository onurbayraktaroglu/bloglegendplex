import React, { useState } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMoneyBillTransfer, faPlus, faShield, faMoneyBillTrendUp, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import LearnList from '../../../public/data/learnData';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function Learn({ LearnList }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [list, setList] = useState(LearnList.List);
    const [allItemsLength, setAllItemsLength] = useState(LearnList.List.length);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(1);
    const [filteredItems, setFilteredItems] = useState(LearnList.List);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleSearchInputChange = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
  
      const filteredData = list.filter(item =>
        (item.title.toLowerCase().includes(query.toLowerCase())) &&
        (activeCategory === 1 || item.catId === activeCategory)
      );
  
      setFilteredItems(filteredData);
    };

    if (typeof document !== 'undefined') {
      let search = document.querySelector(".search");
    let searchIcon = document.querySelector(".search__icon");
    let searchInput = document.querySelector(".search__input");
    let searchClose = document.querySelector(".search__close");
  
    searchIcon?.addEventListener("click", () => {
      search.classList.add("search-open");
      searchInput.focus();
    });
  
    searchClose?.addEventListener("click", () => {
      search.classList.remove("search-open");
      //clear search field on close
      searchInput.value = "";
      setFilteredItems(list);
    });
  
     
    }

  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big cryptofranc' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
            <h1 className="card-title">Learn About Crypto</h1>
              <p className="card-text">Explore the fundamentals of crypto and blockchain with easily digestable content for all knowledge levels.</p>
              <div className='container pt-4'>
                  <div className='row'>
                    <form className='newsletter-form-container'>
                        
                        <div className="form-row form-input-resp aa">
                            <div className="form-group col-md-8 col-lg-9 form-email-input" style={{ marginRight: '10px', padding: '0px' }}>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required style={{ padding: '13px 10px 13px 40px' }}/>
                                <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                            </div>
                            <div className="form-group col-md-4 col-lg-3 form-lastname-input">
                                <button type="button" className="btn btn-danger rounded-pill login-button" style={{ width: '100%', borderRadius: '20px', padding: '12px 0px', width: '130px'}}>Subscribe</button>
                            </div>
                        </div>
                        
                    </form>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big cryptofranc-img'>
      <img src='/images/demo-banner-21.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', right: '-150px', objectFit: 'contain' }}/>
      </div>
    </main>
    
    <main className='main'>
        <div className="container">
            <div className="row">
            <div className="col-md-12 search-box-wrap" style={{ minHeight: '46px' }}>
              <div className="search-box-article">
                <span>Articles({allItemsLength})</span>
              </div>
              <div className='search-box-blog'>
                  <div className='container'>
                    <div className='row'>
                      <div className="search">
                        <svg className="search__icon" viewBox="0 0 512 512" width="95" title="search">
                          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                        </svg>
                        <input type="text" className="search__input" autoFocus placeholder=" " onInput={handleSearchInputChange} />
                        <svg className="search__close" viewBox="0 0 352 512" width="100" title="times" >
                          <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
                <div className="d-flex justify-content-center list-page-container">
                <div className="list-item-box-wrapper">
                    {filteredItems.map((item) => {
                    return (
                            <Card  key={item.id} className="col-12 col-md-4 col-lg-4 ">
                                <div className="list-item-box-cont">
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:3000/images/${item.image}`}
                                    />
                                    <Card.Body>
                                        <Link href={`learn/${item.url}`}><Card.Title>{item.title}</Card.Title></Link>
                                        <p style={{ maxWidth: '100%' }}>A run-down of crucial crypto events in 2022 and an interview in the Bitcoin Suisse Crypto Outlook 2023 with Niklas Nygaard one of our senior traders on investing in crypto markets during uncertain times.</p>
                                    </Card.Body>
                                </div>
                            </Card>
                            
                    );
                    })}
                    </div>

                </div>
            </div>
        </div>

    </main>
    <BreadCrumb />
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
    return { props: { LearnList } }
}
  