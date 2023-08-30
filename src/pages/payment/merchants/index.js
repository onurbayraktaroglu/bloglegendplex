import React, { useState, useEffect } from "react";
import Navigation from '../../../components/Nav';
import Footer from '../../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faQrcode, faChartLine, faMicrochip, faTicket, faMoneyBillTransfer, faShield, faMoneyBillTrendUp, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BlogContentSlider from "@/components/BlogContentSlider";
import BreadCrumb from "@/components/BreadCrumb";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Merchant() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [active, setActive] = useState(false);

    const handleMouseOver = (e) => {
      setActive(true);
      const customData = e.currentTarget.getAttribute('data-attr');
      const images = document.querySelectorAll('.accordion-box-right img');
      const misoMax = document.querySelectorAll(".accordion-box ul li");
      misoMax.forEach(i => {
        i.classList.remove('active');
      });
      e.target.classList.add("active")
      images.forEach(image => {
        image.classList.remove('active');
      });
      let indexAccordion = document.getElementById(customData)
      indexAccordion?.classList.add("active");
    };
    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
    <Navigation />
    <main className="main" style={{ display: 'none' }}></main>
    <main className='main bg-themes-main-wrapper-big-x payment-c' style={{ marginTop: '72px' }}>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
            <h1 className="card-title" style={{ paddingTop: '0px' }}>Reach More Clients with a Diversified Payment Offering</h1>
              <p className='card-text'>Accept cryptocurrencies as a new, innovative payment method just like traditional payments – in your store, webshop or via invoice.</p>
              <div className="row">
                <div className='col-md-5'>
                    <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button">Open a Merchant Account</Link>
                </div>
                <div className='col-md-3'>
                    <Link className="btn btn-light rounded-pill" style={{ fontWeight: '500' }} href="our-outlook-2023" role="button">Contact</Link>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big-x'>
      <Image src='/images/big-banner-02.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container blog-content-right'>
        <div className="row">
            <div className="col-md-3">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">ISAE 3402 Audited and Pen-tested</h5>
                    <p className="card-text pt-2">Audited by PricewaterhouseCoopers, Grant Thornton and Zühlke and penetration tested by Compass Security.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Institutional-grade</h5>
                    <p className="card-text pt-2">Proven multi-signing process for optimal governance of assets.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                    <h5 className="card-title pt-2">Multiple Assets</h5>
                    <p className="card-text pt-2">Support for BTC, ETH, DOT, ATOM, ADA, XTZ, BCH, KSM, BSV, XRP, all Ethereum ERC-20 and Tezos FA1.2/2 tokens and many more.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                    <h5 className="card-title pt-2">Tailor-made​</h5>
                    <p className="card-text pt-2">Set-up and account configurations customizable to client needs.</p>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    </main>
    
    <main className='main'>
        <div className='card mb-3'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                    <span>BITCOIN SUISSE PAY</span>
                    <h3 className="card-title pt-2" style={{ fontWeight: '500' }}>Accept the Most Popular Cryptocurrencies with One Application Only</h3>
                    <p className="card-text pt-2">With Bitcoin Suisse Pay you are able to offer an additional contactless payment method to a ever-growing, high-spending customer base. With our easy-to-integrate solution, you will tap into next-gen customer groups on various sales channels in the twinkling of an eye.</p>
                    <div className="row" style={{ marginTop: '25px' }}>
                        <div className='col-md-6'>
                            <Link className="btn btn-light border rounded-pill" style={{ fontWeight: '500', backgroundColor: '#ffffff' }} href="our-outlook-2023" role="button">More about Bitcoin Suisse Pay</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
                <div className='col-md-6' style={{ border: '8px solid #eeeeee', borderRadius: '24px' }}>
                    <Image src='/images/demo-banner-10.png' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                </div>
                </div>
            </div>
        </div>
    </main>
    <main className="main" style={{ display: 'none' }}></main>
    <main className='main' >
      <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container accordion-box' >
        <div className="row">
          <div className="col-md-12 accordion-title-top">
            <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Get Started Easily</h3>
            <p className="card-text mb-3">Bitcoin Suisse makes it easy to earn rewards with staking.</p>
          </div>
          <div className="col-md-6">
            <ul>
              <li data-attr="accordion-menu-1" className="active" onMouseEnter={handleMouseOver} onTouchStart={handleMouseOver}>
              <FontAwesomeIcon icon={faTicket} />
                <div>
                    <span>Step 1</span>
                    <p>Enter the price</p>
                </div>
              </li>
              <li data-attr="accordion-menu-2" onMouseEnter={handleMouseOver} onTouchStart={handleMouseOver}>
              <FontAwesomeIcon icon={faMicrochip} />
                <div>
                    <span>Step 2</span>
                    <p>Select the desired cryptocurrency</p>
                </div>
              </li>
              <li data-attr="accordion-menu-3" onMouseEnter={handleMouseOver} onTouchStart={handleMouseOver}>
              <FontAwesomeIcon icon={faChartLine} />
                <div>
                    <span>Step 3</span>
                    <p>The exchange rate is fixed automatically </p>
                </div>
              </li>
              <li data-attr="accordion-menu-4" onMouseEnter={handleMouseOver} onTouchStart={handleMouseOver}>
              <FontAwesomeIcon icon={faQrcode} />
                <div>
                    <span>Step 4</span>
                    <p>Customer scans the QR code</p>
                </div>
              </li>
              <li data-attr="accordion-menu-5" onMouseEnter={handleMouseOver} onTouchStart={handleMouseOver}>
              <FontAwesomeIcon icon={faDownload} />
                <div>
                    <span>Step 5</span>
                    <p>Receive payout in desired fiat currency </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6 accordion-box-right">
            <img id="accordion-menu-1" className="active" src="/images/accordion-banner-01.jpeg" style={{ width: '100%' }}/>
            <img id="accordion-menu-2" src="/images/accordion-banner-02.png" style={{ width: '100%' }}/>
            <img id="accordion-menu-3" src="/images/accordion-banner-03.png" style={{ width: '100%' }}/>
            <img id="accordion-menu-4" src="/images/accordion-banner-04.png" style={{ width: '100%' }}/>
            <img id="accordion-menu-5" src="/images/accordion-banner-05.png" style={{ width: '100%' }}/>
          </div>
        </div>
      </div>
      </div>
      
    </main>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <div className="card-body" style={{ marginRight: '20px' }}>
              <span>BITCOIN SUISSE PAY</span>
              <h3 className="card-title" style={{ fontWeight: '500' }}>Offerings</h3>
            </div>
          </div>
          <div className='col-md-8 blog-content-right'>
              <div className='row'>
                  <div className="col-md-4">
                      <div className="card-body pt-4" style={{ height: '250px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-2">Point of Sale</h5>
                          <p className="card-text pt-2">Your customers want the choice and a personalized shopping experience. Let them pay with cryptocurrencies in your store.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-body pt-4" style={{ height: '250px' }}>
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-2">eCommerce</h5>
                          <p className="card-text pt-2">Bitcoin Suisse Pay integrates effortlessly into your Webshop. Take your business to a new level and accept cryptocurrencies 24/7.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-body pt-4" style={{ height: '250px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-2">Invoice</h5>
                          <p className="card-text pt-2">Easily issue invoices in cryptocurrencies to your customers.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main'>
        <div className='card mb-3'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                    <span>MERCHANT HUB</span>
                    <h3 className="card-title pt-2" style={{ fontWeight: '500' }}>Overview at a Glance</h3>
                    <p className="card-text pt-2">As a merchant you will get access to our merchant platform “Merchant Hub” which offers you an optimal overview on all your crypto transactions.</p>
                    
                    </div>
                    
                </div>
                
                <div className='col-md-6' style={{ border: '8px solid #eeeeee', borderRadius: '24px' }}>
                    <Image src='/images/demo-banner-10.png' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                </div>
                </div>
            </div>
        </div>
    </main>
    <BlogContentSlider/>
    <BreadCrumb />
    <Footer />
    </>
  )
}