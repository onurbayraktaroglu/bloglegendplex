import React, { useState, useEffect } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import "@fortawesome/fontawesome-svg-core/styles.css";
import MemberContentSlider from "@/components/MemberContentSlider";

export default function Careers() {
  const [activeIndex, setActiveIndex] = useState(null);
    const [active, setActive] = useState(false);
    const [allActive, setAllActive] = useState();

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
    const pdfAccordionSize = (index) => {
      const pdfacc = document.querySelectorAll(".accordion-menu-faq");
      const  ff = document.querySelectorAll(".pdf-accordion-numb button");
      const mobileAccordionSelect = document.querySelectorAll(".pdf-accordion-mobile select option")
      ff.forEach((e) => {
        e.classList.remove("active");
      });
      
      document.getElementById(`act-${index}`).classList.add("active");

      if(mobileAccordionSelect) {
        mobileAccordionSelect.forEach((item) => {
          const bb = item.getAttribute('data-attr')
          const cc = Number(bb);
          if(cc === index) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
          //item.classList.add('active');
        });
      }

      pdfacc.forEach((item) => {
        const bb = item.getAttribute('data-attr')
        const cc = Number(bb);
        if(cc === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
        //item.classList.add('active');
      });

      const options = document.querySelectorAll('.pdf-accordion-mobile select option');
      
      if (options.length > 0) {
        const firstOption = options[0];
        firstOption.selected = true;
        setActiveIndex(666)
      }
      if(index === 1) {
        mobileAccordionSelect.forEach((element) => {
          element.classList.add('active');
          return
        });
        pdfacc.forEach((element) => {
          element.classList.add('active');
          return
        });
      }
    };
    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const handleChange = (index) => {
      let abc = parseInt(index.target.value)
      setActiveIndex(abc === activeIndex ? null : abc);
  };
  
    useEffect(() => {
    }, [activeIndex]);
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big careers-w' style={{ marginTop: '70px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card-body">
              <h1 className="card-title">Careers & Jobs in Crypto | Legendplex</h1>
            </div>
            <div className='container'>
                  <div className='row'>
                        <div className='col-md-5' style={{ paddingLeft: '0px' }}>
                        <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button" style={{ fontWeight: '500', color: '#FFF4F6',backgroundColor: '#CF0A2C' }}>Explore all open positions</Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    

    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body" style={{ paddingLeft: '0px' }}>
            <h3 className="card-title mt-3" style={{ marginBottom: '20px' }}>Who are we?</h3>
              <p className='card-text' style={{ fontSize: '16px' }}>We are learners and doers that don’t shy away from complexity. We make things happen with teams that trust, respect and count on each other. We are passionate about the different aspects of cryptocurrencies as we are about our clients. We are highly diverse in our backgrounds and knowledge but united by the belief in the positive impact of cryptocurrencies will ultimately change the world for the better.</p>
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
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body">
                <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>What do we do?</h3>
                <p className="card-text mt-3" style={{ fontSize: '16px', color: '#505050' }}>We equip our clients with the high-quality tools to safely, easily and reliably invest and use cryptocurrencies. For our clients, we provide integrated access to decentralized assets and new developments in the crypto space.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="card-body">
                <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>What do we believe?</h3>
                <p className="card-text mt-3" style={{ fontSize: '16px', color: '#505050' }}>Bitcoin Suisse ultimate goal is to accelerate the adoption of cryptocurrencies. We strongly believe that an economy based on cryptocurrencies, distributed trust and decentralized financial ecosystems creates a fairer and more efficient world.</p>
            </div>
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
              <span>CODE OF CONDUCT</span>
              <h3 className="card-title mt-3" style={{ marginBottom: '20px' }}>We are Bitcoin Suisse</h3>
              <p className='card-text ' style={{ fontSize: '16px', color: '#505050' }}>We want to be the most trusted Swiss crypto investment partner and gateway to crypto solutions and are focused on a highly qualitative and secure offering. We do not only contribute to innovative blockchain solutions but also to the long-term establishment of the global crypto market.</p>
              <div className='col-md-4 mt-5'>
                  <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="our-outlook-2023" role="button" style={{ fontWeight: '500'}}>Code of Conduct</Link>
                </div>
            </div>
          </div>
          <div className='col-md-6'>
          <img src='/images/demo-banner-39.jpg' style={{ width: '100%', borderRadius: 'unset!important' }} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </div>
    </main>

    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container blog-content-right'>
        <div className="row">
          <div className="col-md-12">
                <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Benefits</h3>
                <p className="card-text mt-3 mb-4" style={{ fontSize: '16px', color: '#505050' }}>Discover what our employees love about Bitcoin Suisse besides our culture.</p>
                <div className="row">
                  <div className="col-md-3">
                      <div className="card-body misomax" style={{ height:  '240px', paddingTop: '20px'}}>
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-3 pb-2">Crypto Salary</h5>
                          <p className="card-text pt-2">If you want, you can receive part of your salary in Bitcoin or Ethereum directly into your Bitcoin Suisse online account.</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card-body misomax " style={{ height:  '240px', paddingTop: '20px'}}>
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-3 pb-2">Career Development</h5>
                          <p className="card-text pt-2">At Bitcoin Suisse you will be able to develop your career across different departments</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card-body misomax" style={{ height:  '240px', paddingTop: '20px'}}>
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-3 pb-2">Health</h5>
                          <p className="card-text pt-2">Enjoy our sport over lunch offers and recharge your batteries during 5 weeks of paid holidays</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="card-body misomax" style={{ height:  '240px', paddingTop: '20px'}}>
                      <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                          <h5 className="card-title pt-3 pb-2">Other benefits​</h5>
                          <p className="card-text pt-2">Our offices in Zug are located in the center of the crypto valley right next to the train station</p>
                      </div>
                  </div>
              </div>
          </div>
          
        </div>
      </div>
    </div>
    </main>

    
    <MemberContentSlider />
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
    <div className="card mb-3 order-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
              <h3 className="card-title mt-3" style={{ fontWeight: '600', marginBottom: '30px' }}>What does the application process look like?</h3>
          </div>
            <div className="col-md-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2" style={{ fontSize: '16px', color: '#262626' }}>1. Personal Interview</h5>
                    <p className="card-text pt-2">This call is about getting to know each other. We want to know more about your background, motivations and expectations and at the same time you can ask us your questions.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2" style={{ fontSize: '16px', color: '#262626' }}>2. Technical Interview</h5>
                    <p className="card-text pt-2">In the technical interview, we have a few tasks for you to learn more about your skills. You will also have the opportunity to get to know the team and the workplace.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2" style={{ fontSize: '16px', color: '#262626' }}>3. Management Interview</h5>
                    <p className="card-text pt-2">The management interview is again about both parties having all the necessary information and discussing final questions.</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
    </main>
    <main className='main pdf-accordion-desktop' style={{ backgroundColor: '#ffffff' }}>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className={`contanier ${activeIndex ? 'pdf-accordion' : ''}`}>
        <div className="row">
          <div className="col-md-12 onx">
          <div className="card-body" style={{ paddingLeft: '0px' }}>
            <span>BECOME OUR COLLEAGUE</span>
            <h3 className="card-title mt-3" style={{ marginBottom: '30px' }}>Open Positions</h3>
          </div>
            <div className="pdf-accordion-numb">
                <button id="act-1" className="btn btn-light btn-light-new border rounded-pill active" onClick={(e) => pdfAccordionSize(1)}>All</button>
                <button id="act-2" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(2)}>Switzerland</button>
                <button id="act-3" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(3)}>Denmark</button>
                <button id="act-4" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(4)}>Liechtenstein</button>
                <button id="act-5" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(5)}>Bratislava</button>
            </div>
          </div>
        
            
          <div className="col-md-6 pt-2 pdf-accordion-left">
              <div className="">
                  
                  <div className="accordion-menu-faq www active"  data-attr="2">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(1)}>
                      
                      <h5>Business Operations</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  
                  <div className="accordion-menu-faq www active"  data-attr="2">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(2)}>
                      
                      <h5>Client Management</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="2">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(2)}>
                      
                      <h5>Compliance</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="2">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(2)}>
                      
                      <h5>Finance?</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="3">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(3)}>
                      
                      <h5>IT Development</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="4">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(4)}>
                      
                      <h5>IT Digital Consumer Experience</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="4">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(4)}>
                      
                      <h5>IT Infrastructure</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="5">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(5)}>
                      
                      <h5>Marketing & Communication</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
                  <div className="accordion-menu-faq www active"  data-attr="5">
                      <div className="accordion-menu-faq-item" onClick={() => handleToggle(5)}>
                      
                      <h5>Trading</h5></div>
                      <FontAwesomeIcon icon={faChevronRight} className='pt-2' style={{ marginRight: '10px' }}/>
                  </div>
              </div>
          </div>
          <div className="col-md-6 pdf-accordion-right">
              <div className="card-body">
                  <div className="abc">
                  {activeIndex === 1 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain1.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 2 && <div style={{ fontWeight: '200' }}>
                    <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link><br></br>
                    <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link><br></br>
                    <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link><br></br>
                  </div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 3 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain3.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 4 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain4.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 5 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain5.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 6 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain6.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 7 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain7.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 8 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain8.</Link></div>}
                  </div>
                  <div className="abc">
                  {activeIndex === 9 && <div style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain9.</Link></div>}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <main className="main pdf-accordion-mobile">
      <select onChange={handleChange}>
      <option value="" disabled selected> - </option>
      <option className="active" value="1" data-attr="2">Business Operations</option>
      <option className="active" value="2" data-attr="2">Client Management</option>
      <option className="active" value="3" data-attr="2">Compliance</option>
      <option className="active" value="4" data-attr="2">Finance?</option>
      <option className="active" value="5" data-attr="3">IT Development</option>
      <option className="active" value="6" data-attr="4">IT Digital Consumer Experience</option>
      <option className="active" value="7" data-attr="4">IT Infrastructure</option>
      <option className="active" value="8" data-attr="5">Marketing & Communication</option>
      <option className="active" value="9" data-attr="5">Trading</option>
    </select>
      <div className="col-md-6">
          <div className="card-body pt-2">
              <div className="abc">
              {activeIndex === 1 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain1.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 2 && 
                <div className="this-pdf" style={{ fontWeight: '200' }}>
                  <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link>
                  <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link>
                  <Link href="#">XCHF brings fiat CHF to the Ethereum blockchain2.</Link>
                </div>}
              </div>
              <div className="abc">
              {activeIndex === 3 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain3.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 4 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain4.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 5 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain5.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 6 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain6.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 7 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain7.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 8 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain8.</Link></div>}
              </div>
              <div className="abc">
              {activeIndex === 9 && <div className="this-pdf" style={{ fontWeight: '200' }}><Link href="#">XCHF brings fiat CHF to the Ethereum blockchain9.</Link></div>}
              </div>
          </div>
      </div>
    </main>
    <BreadCrumb />
    <Footer />
    </>
  )
}