import React, { useState } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faQrcode, faChartLine, faMicrochip, faTicket, faMoneyBillTransfer, faShield, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft, faPlus  } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function PrivateStaking() {
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
    <main className='main bg-themes-main-wrapper-big-x-right payment-c' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card-body">
              <h1 className="card-title">Stake Your Crypto Assets and Receive Rewards</h1>
              <p className='card-text'>Bitcoin Suisse will cover the staking of all major proof-of-stake crypto assets and offers the possibility to bake Tezos coins (XTZ).</p>
              <div className='container pt-4'>
                  <div className='row'>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '15px' }}/>All-in-One Service</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '15px' }}/>Premium Support</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '15px' }}/>No Technical Requirements</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '15px' }}/>Swiss Made</div>
                      
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big-x'>
      <img src='/images/demo-banner-20.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
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
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '600' }}>Staking Liquid Staked ETH (LsETH)</h3>
              <p className="card-text mt-4">As a protocol integrator, Bitcoin Suisse offers the option to participate in Liquid Staking through the Liquid Collective protocol. Clients of Bitcoin Suisse receive a receipt token representing the underlying staked funds in the protocol, which enables tradability and DeFi compatibility for staked assets.</p>
            </div>
            <div className='col-md-3'>
            <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
            </div>
          </div>
          <div className='col-md-6'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/sDjyMQRouJE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
    </main>
    
    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container'>
        <div className="row">
        <div className="col-md-6">
            <div className="card-body pt-2">
                <h3 className="card-title pt-2" style={{ fontWeight: '600' }}>Frequently Asked Questions</h3>
            </div>
        </div>
        <div className="col-md-6 pt-2">
            <div className="card-body">
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(0)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>What are the benefits of XCHF?</h5></div>
                    {activeIndex === 0 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>XCHF brings fiat CHF to the Ethereum blockchain.</div>}
                </div>
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(1)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>Where can I buy & sell XCHF?</h5></div>
                    {activeIndex === 1 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>For buying and selling CryptoFranc, refer to the exchanges listed here.</div>}
                </div>
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(2)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>Who is using XCHF?</h5></div>
                    {activeIndex === 2 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>See the selected implementations of XCHF just above.</div>}
                </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Our Offerings</h3>
          </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Ethereum</h5>
                    <p className="card-text pt-2">Join the validator network on Ethereum.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Polkadot</h5>
                    <p className="card-text pt-2">Stake DOT and receive rewards directly in your Bitcoin Suisse Online account.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Cardano</h5>
                    <p className="card-text pt-2">Easily participate in the Cardano network and receive staking rewards.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Tezos</h5>
                    <p className="card-text pt-2">Staking on Tezos is called Baking - and you can do this with us to receive tezzies (XTZ).</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Dash</h5>
                    <p className="card-text pt-2">Participate in pooled Dash masternodes with less than 1000 DASH.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Moonbeam</h5>
                    <p className="card-text pt-2">Optimal delegation with more than 15M of GLMR in Custody.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">NEAR Protocol</h5>
                    <p className="card-text pt-2">Easily stake NEAR on NEAR Protocol, a decentralized development platform.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Kusama</h5>
                    <p className="card-text pt-2">Stake KSM on Kusama, the experimental network for Polkadot.</p>
                </div>
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