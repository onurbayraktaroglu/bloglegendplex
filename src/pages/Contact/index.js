import React, { useState, useEffect } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTriangleExclamation, faShapes, faCircleInfo, faPlus, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'react-bootstrap-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function Contact() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper contact-w' style={{ marginTop: '72px' }}>
      <div className='container detail-top-banner-bg' style={{ zIndex: '9' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Contact | Legendplex</h1>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <Image src='/images/demo-banner-37.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>

    <main className='main' style={{ backgroundColor: '#ffffff'}}>
      <div className='container answer-question-wrapper'>
        <div className="row">
            <div className='col-md-12'>
                <h4>Need Help?</h4>
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faShapes} className="fa-sm"/> OverView</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faPlus} /> Account Opening</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faUser} /> Login</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faArrowRightArrowLeft} /> Trading</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faCoins} /> Staking</Link>
                
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faRightToBracket} /> Deposit and Withdrawal</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faReceipt} /> Reports</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2'><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
            </div>
        </div>
      </div>
      
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
        <div className='card mb-3' style={{ width: '100%' }}>
            <div className='container'>
                <div className="row">
                  <h3 className="card-title pt-2" style={{ marginBottom: '20px' }}>Our Offices</h3>
                  <div className="col-md-7 mah" style={{ backgroundColor: '#f9f9f9', paddingLeft: '0px', paddingRight: '0px', marginBottom: '10px' }}>
                      <div className="contact-page-main">
                        <Image src='/images/contact-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid" width={500} height={500} style={{ width: '100%', height: 'auto', maxHeight: '300px' }}/>
                        <div className="contact-page-description-main">
                          <div className="contact-page-left-desc col-sm-12 col-md-5">
                            <h4>Office Zug</h4>
                            <p>Bitcoin Suisse AG</p>
                            <Link href="#">Grafenauweg 12</Link><br></br>
                            <Link href="#">6700 Zug</Link>
                          </div>
                          <div className="contact-page-right-desc col-sm-12 col-md-7">
                            <h6 style={{ fontWeight: '600' }}>Opening Hours</h6>
                            <p>Monday to Friday: 7am to 11pm</p>
                            <p>Saturday to Sunday: 10am to 5pm</p>
                            <p>Please schedule an appointment before visiting. For valet parking please contact us over the phone upon arrival.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='col-md-5'>
                    <div className="contact-page-right-box">
                      <h5>Office Copenhagen</h5>
                      <p>Bitcoin Suisse Denmark ApS</p>
                      <Link href="#">Højbro Plads 10, GST 101</Link><br></br>
                      <Link href="#">1200 København K., Denmark</Link>
                    </div>
                    <div className="contact-page-right-box">
                      <h5>Office Copenhagen</h5>
                      <p>Bitcoin Suisse Denmark ApS</p>
                      <Link href="#">Højbro Plads 10, GST 101</Link><br></br>
                      <Link href="#">1200 København K., Denmark</Link>
                    </div>
                    <div className="contact-page-right-box">
                      <h5>Office Copenhagen</h5>
                      <p>Bitcoin Suisse Denmark ApS</p>
                      <Link href="#">Højbro Plads 10, GST 101</Link><br></br>
                      <Link href="#">1200 København K., Denmark</Link>
                    </div>
                  </div>
                  <div className="col-md-7 mah" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <div className="bank-holidays-w">
                      <div className="row">
                        <div className="col-md-5">
                          <h4>Bank holidays</h4>
                          <p>We are not available on these mandatory national or Cantonal holidays</p>
                        </div>
                        <div className="col-md-7 bank-holiday-right-desc" style={{ borderLeft: '2px solid #f3f3f3', padding: '0px 32px', margin: '32px 0px' }}>
                          <div className="bank-holidays-table">
                            <p>01.01.</p>
                            <p>New Year</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>02.01.</p>
                            <p>Saint Berchtold</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>07.04.</p>
                            <p>Good Friday</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>10.04.</p>
                            <p>Easter Monday</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>18.05.</p>
                            <p>Ascension</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>29.05.</p>
                            <p>Whit Monday</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>08.06.</p>
                            <p>Corpus Christi</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>01.08.</p>
                            <p>National Day</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>15.08.</p>
                            <p>Assumption of Mary</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>01.11.</p>
                            <p>All Saints Day</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>08.12.</p>
                            <p>Immaculate Conception</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>25.12.</p>
                            <p>Christmas</p>
                          </div>
                          <div className="bank-holidays-table">
                            <p>26.12.</p>
                            <p>Saint Stephens Day</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="need-sup-w">
                      <h5>Need support?</h5>
                      <p style={{ maxWidth: '100%' }}>You can find answer to many questions and problems in our support center</p>
                      <button type="button" className="btn btn-danger rounded-pill login-button mt-3" style={{ width: '100%', borderRadius: '20px', padding: '12px 0px', width: '130px'}}>Support</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container research-content-right'>
        <h3 style={{ fontWeight: '700', marginBottom: '30px' }}>Social Media</h3>
        <div className="row">
            <div className="col-md-3 mb-3">
                <Link href="/research/decrypt" className="research-row social-w" style={{ backgroundColor: '#f9f9f9', color: '#505050', borderRadius: '0px;' }}>
                    <Twitter />
                    <h6 className="card-title pt-2">Twitter</h6>
                </Link>
            </div>
            <div className="col-md-3 mb-3">
                <Link href="/research/outlook" className="research-row social-w" style={{ backgroundColor: '#f9f9f9', color: '#505050', borderRadius: '0px;' }}>
                    <Facebook />
                        <h6 className="card-title pt-2">Facebook</h6>
                </Link>
            </div>
            <div className="col-md-3 mb-3">
                <Link href="/research/themes" className="research-row social-w" style={{ backgroundColor: '#f9f9f9', color: '#505050', borderRadius: '0px;' }}>
                    <Linkedin />
                        <h6 className="card-title pt-2">Linkedin</h6>
                </Link>
            </div>
            <div className="col-md-3 mb-3">
                <Link href="/research/crypto-macro" className="research-row social-w" style={{ backgroundColor: '#f9f9f9', color: '#505050', borderRadius: '0px;' }}>
                    <Instagram />
                        <h6 className="card-title pt-2">Instagram</h6>
                </Link>
            </div>
            
        </div>
      </div>
      
    </div>
    </main>
    <main className='main be-aware-w' style={{ backgroundColor: '#ffffff' }}>
      <div className='container'>
        <div className="row">
          <div className="contact-footer col-md-12" style={{ padding: '10px 0px' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#262626' }}><FontAwesomeIcon icon={faTriangleExclamation} />Be Aware</h5>
              <p className='card-text mt-3' style={{ fontWeight: '700', fontSize: '14px' }}>Neither our executives nor anyone else at Bitcoin Suisse will ever approach clients with sales over social media accounts, nor present “get rich quick” schemes or requests for money or “investment.”</p>
              <p className='card-text mt-3'>If you receive a message from a different profile claiming to be Bitcoin Suisse or some from our company, please verify that profile as one of Bitcoin Suisse or contact us immediately.</p>
              <Link href="#">Official Channels</Link>
            </div>
          </div>
          
        </div>
      </div>
      
    </main>
    <main className='main be-aware-w' style={{ backgroundColor: '#ffffff' }}>
      <div className='container'>
        <div className="row">
          <div className="contact-footer col-md-12" style={{ padding: '10px 0px' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#262626' }}><FontAwesomeIcon icon={faCircleInfo} />Online Security</h5>
              <p className='card-text mt-3' >Protect your personal information online with our comprehensive Online Security Factsheet, designed to empower users with essential tips and best practices for general online safety, social engineering and blackmailing. Stay one step ahead of cyber threats and learn how to safeguard your online presence effectively.</p>
              <Link href="#">Factsheet Online Security</Link>
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