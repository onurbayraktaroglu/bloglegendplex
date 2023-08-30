import React, { useState } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faQrcode, faChartLine, faMicrochip, faTicket, faPlus, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft, faMoneyBillTransfer, faShield, faMoneyBillTrendUp, faBuildingColumns, faShapes, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from "@/components/BreadCrumb";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function BuySellCrypto() {
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
    <main className='main bg-themes-main-wrapper-big-x-right' style={{ marginTop: '72px' }}>
      <div className='container detail-top-banner-bg' style={{ zIndex: '9' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">The Best Place to Start with Crypto</h1>
              <p className='card-text'>Bitcoin Suisse makes it simple and safe to buy, sell, and hold cryptocurrencies.</p>
              <div className='container pt-4'>
                  <div className='row'>
                      <div className='col-md-6 pt-4'><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '15px' }}/>Best Execution</div>
                      <div className='col-md-6 pt-4'><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '15px' }}/>Easily Trade & Store</div>
                      <div className='col-md-6 pt-4'><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '15px' }}/>Highest Quality & Security</div>
                      <div className='col-md-6 pt-4'><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '15px' }}/>Trusted & Secure – Made in Switzerland</div>
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
    
    <main className='main' >
      <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container accordion-box' >
        <div className="row">
          <div className="col-md-12 accordion-title-top">
            <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Get Started Easily</h3>
            <p className="card-text mb-3">Starting to trade with Bitcoin Suisse is easy</p>
            <div className='col-md-3 mt-5'>
                  <Link className="btn btn-light border rounded-pill" href="our-outlook-2023" role="button" style={{ fontWeight: '500', backgroundColor: '#ffffff' }}>Get Started</Link>
                </div>
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
      <div className='container'>
        <div className="row">
        <div className="col-md-6">
            <div className="card-body pt-2">
                <h3 className="card-title pt-2" style={{ fontWeight: '700' }}>Frequently Asked Questions</h3>
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
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(3)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>Who is behind XCHF?</h5></div>
                    {activeIndex === 3 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>XCHF is the first payment token issued by Bitcoin Suisse AG.</div>}
                </div>
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(4)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>How are the assets guaranteed?</h5></div>
                    {activeIndex === 4 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>The assets are backed by a bank guarantee issued by a Swiss bank.</div>}
                </div>
                <div className="accordion-menu-faq">
                    <div className="accordion-menu-faq-item" onClick={() => handleToggle(5)}>
                    <FontAwesomeIcon icon={faPlus} className='pt-2' style={{ marginRight: '10px' }}/>
                    <h5>What are the fees?</h5></div>
                    {activeIndex === 5 && <div style={{ fontWeight: '200', paddingLeft: '25px' }}>For buying and selling XCHF, trading fees as per the exchanges apply.</div>}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container crypto-box-bg'>
        <div className="row">
          <div className="col-md-4">
            <div className="card-body" style={{ marginRight: '20px' }}>
              <h3 className="card-title" style={{ fontWeight: '700' }}>Why is Bitcoin Suisse the best place to start with crypto?</h3>
              <Link href="#" className="btn btn-light border rounded-pill mt-4">Get Started</Link>
            </div>
          </div>
          <div className='col-md-8 blog-content-right'>
              <div className='row'>
                  <div className="col-md-6 pt-2 bottom-box-cont www">
                      <div className="card-body" style={{ justifyContent: 'unset!important', paddingTop: '20px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-2">Best Execution</h5>
                          <p className="card-text pt-2">Compared to trading on a single exchange, we provide the best possible execution for your trades across the most popular exchanges globally. This means that you will always get the best obtainable result for your trade, which includes the best prices, liquidity, and risk-exposure.</p>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont www">
                      <div className="card-body" style={{ justifyContent: 'unset!important', paddingTop: '20px' }}>
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-2">Easily Trade & Store​</h5>
                          <p className="card-text pt-2">Trade over 40 cryptocurrencies 24/7 ​ via Bitcoin Suisse Online in an easy and safe way with competitive fees. </p>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont www">
                      <div className="card-body" style={{ justifyContent: 'unset!important', paddingTop: '20px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-2">Highest Quality & Security</h5>
                          <p className="card-text pt-2">Bitcoin Suisse offers the time and penetration-tested Bitcoin Suisse Vault, a highly secure custody solution for crypto assets, audited and ISAE 3402 certified.</p>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont www">
                      <div className="card-body" style={{ justifyContent: 'unset!important', paddingTop: '20px' }}>
                      <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                          <h5 className="card-title pt-2">Trusted & Secure – Made in Switzerland​</h5>
                          <p className="card-text pt-2">As a member of the self-regulatory organization Financial Services Standards Association (VQF), Bitcoin Suisse is a financial intermediary and subject to Swiss AML/CFT regulations. </p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
    </main>
    <main className='main' style={{ marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper-new'>
              <div className='row'>
                <div className='col-md-6' style={{ padding: '12px 20px'}}>
                  <h2 style={{ fontWeight: '700' }}>Also available on mobile</h2>
                </div>
                <div className="col-md-12">
                <div className="col-sm-12 col-md-4">
                <Link href="#" className='btn btn-danger rounded-pill mt-2 login-button' style={{ display: 'block' }}><FontAwesomeIcon icon={faCoins} /> Explore the mobile app</Link>
                </div>
                </div>
                
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg-new.png" style={{ maxWidth: '425px', right: '0', position: 'absolute' }}/></div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <main className='main'>
      <div className='container youtube-box-bg' style={{ padding: '20px 1.5rem' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '600', marginBottom: '20px' }}>What does Best Execution mean?</h3>
              <p className='card-text' style={{ color: '#505050' }}>Bitcoin Suisse provides a unique DeFi gateway service to its clients: ETH-collateralized loans on the Liquity protocol. Clients may benefit from open-end, interest-free loans paid out in LUSD – freely convertible at Bitcoin Suisse, with customizable loan monitoring and an easy collateral redemption mechanism. For more information on how to get a Liquity loan, contact your Bitcoin Suisse Relationship Manager directly. Minimum loan amounts and terms apply.</p>
            </div>
          </div>
          <div className='col-md-6'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/sDjyMQRouJE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
    </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff'}}>
      <div className='container answer-question-wrapper'>
        <div className="row">
            <div className='col-md-12'>
                <h4>Need help?</h4>
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faShapes} className="fa-sm"/> OverView</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faPlus} /> Account Opening</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faUser} /> Login</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faArrowRightArrowLeft} /> Trading</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faCoins} /> Staking</Link>
                
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faRightToBracket} /> Deposit and Withdrawal</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faReceipt} /> Reports</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
            </div>
        </div>
      </div>
      
    </main>
    <BreadCrumb />
    <Footer />
    </>
  )
}