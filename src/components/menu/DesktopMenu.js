"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faChartLine, faCirclePlus, faRankingStar, faQrcode, faShapes, faMoneyBill, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { usePathname} from 'next/navigation';

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <>
    <Nav className="me-auto navbar-nav-wrap">
          <div className="navbar-nav-cont">
            <div className="navbar-nav-left">
            <div className={`dropdown ${pathname ==  "/buy-sell-cryptocurrencies" ? "active": "" 
              || pathname ==  "/private-client-collateralized-loans" ? "active": ""
              || pathname ==  "/trading" ? "active": ""
              || pathname ==  "/private-clients-staking" ? "active": ""
              || pathname ==  "/" ? "active": ""}`}>
                <button className="dropdown-toggle nav-link">Individuals</button>
                <div className="dropdown-content">
                  <span>SERVICES</span>
                  <Link href="/buy-sell-cryptocurrencies" className={`dropdown-item menu-item-01`}>
                    <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                    <div className="dropdown-list-menu-item">
                      <p>Buy & Sell Cryptocurrencies</p>
                      <span>Manage your crypto-portfolio online</span>
                    </div>
                  </Link>
                  <Link href="/private-clients-staking" className="dropdown-item menu-item-01">
                    <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                    <div className="dropdown-list-menu-item">
                      <p>Staking</p>
                      <span>Receive rewards on your stored cryptocurrency</span>
                    </div>
                  </Link>
                  <Link href="/trading" className={`dropdown-item menu-item-01`}>
                    <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} /> 
                    <div className="dropdown-list-menu-item">
                      <p>Large Crypto Trades</p>
                      <span>Advanced trade execution</span>
                    </div>
                  </Link>
                  <Link href="/private-client-collateralized-loans" className="dropdown-item menu-item-01">
                    <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                    <div className="dropdown-list-menu-item">
                      <p>Collateralized Loans </p>
                      <span>Leverage crypto asset holdings for increased<br></br> liquidity with collateralised loans</span>
                    </div>
                  </Link>
                </div>
              </div> 
              
              <div className={`dropdown ${pathname == "/corporate-clients" ? "active" : "" 
              || pathname ==  "/earn-family-offices" ? "active": "" 
              || pathname ==  "/trading-business" ? "active": "" 
              || pathname ==  "/vault" ? "active": "" 
              || pathname ==  "/collateralized-loans" ? "active": ""
              || pathname ==  "/tokenization" ? "active": ""
              || pathname ==  "/cryptofranc" ? "active": ""
              || pathname ==  "/payment" ? "active": ""
              || pathname ==  "/staking" ? "active": ""}`}>
                <button className="dropdown-toggle nav-link">Business</button>
                <div className="dropdown-content-multiple">
                  <div className="dropdown-content-new">
                    <span>AUDIENCE</span>
                    <Link href="/corporate-clients" className={`dropdown-item menu-item-02 ${pathname == "/corporate-clients" ? "active" : ""}`}>
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Corporates & Institutions</p>
                        <span>Integrated crypto-financial services for banks, <br></br> crypto exchanges, foundations, merchants and <br></br>other corporate clients</span>
                      </div>
                    </Link>
                    <Link href="/earn-family-offices" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>EAMs & Family Offices</p>
                        <span>Enhance returns for your HNWI clients <br></br>with a diversified portfolio including<br></br> cryptocurrencies</span>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-content-new" style={{ marginLeft: '20px' }}>
                    <span>SERVICES</span>
                    <Link href="/trading-business" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Trading</p>
                        <span>Trade Execution</span>
                      </div>
                    </Link>
                    <Link href="/vault" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Custody</p>
                        <span>Audited cold storage service for cryptocurrencies <br></br>and digital assets</span>
                      </div>
                    </Link>
                    <Link href="/staking" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Staking</p>
                        <span>Receive rewards on your stored cryptocurrency</span>
                      </div>
                    </Link>
                    <Link href="/collateralized-loans" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Collateralized Loans </p>
                        <span>Leverage crypto asset holdings for increased <br></br>liquidity with collateralised loans</span>
                      </div>
                    </Link>
                    <Link href="/tokenization" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faQrcode} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Tokenization  </p>
                        <span>Tokenization Launch, tokenize & invest<br></br> within the ecosystem</span>
                      </div>
                    </Link>
                    <Link href="/cryptofranc" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>CryptoFranc</p>
                        <span>The Swiss Franc Stablecoin</span>
                      </div>
                    </Link>
                    <Link href="/payment" className="dropdown-item menu-item-02">
                      <FontAwesomeIcon icon={faMoneyBill} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Payments</p>
                        <span>Accept cryptocurrencies for your <br></br>business - easy and safe</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div> 
            </div>
            <div className="navbar-nav-right">
            <div className={`dropdown ${pathname ==  "/learn" ? "active": "" 
              || pathname ==  "/research" ? "active": ""
              || pathname ==  "/industry-blog" ? "active": ""
              || pathname ==  "/crypto-taxonomy" ? "active": ""}`}>
                <button className="dropdown-toggle nav-link">Insights</button>
                <div className="dropdown-content-multiple">
                  <div className="dropdown-content-new">
                    <span>INSIGHTS</span>
                    <Link href="/learn" className="dropdown-item menu-item-03">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Learn</p>
                        <span>Learn the fundamentals of blockchain and <br></br>cryptocurrencies</span>
                      </div>
                    </Link>
                    <Link href="/research" className="dropdown-item menu-item-03">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Research</p>
                        <span>Understand trends and technologies <br></br>with our in depth research</span>
                      </div>
                    </Link>
                    <Link href="/industry-blog" className="dropdown-item menu-item-03">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Industry Blog</p>
                        <span>Stay updated on all the latest news, <br></br>insights and trends</span>
                      </div>
                    </Link>
                    <Link href="/crypto-taxonomy" className="dropdown-item menu-item-03">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Global Crypto Taxonomy</p>
                        <span>Navigate the world of cryptocurrencies</span>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-content-new" style={{ width: '400px', padding: '20px', backgroundColor: '#f9f9f9', marginLeft: '30px', position: 'relative', display: 'flex', alignItems: 'baseline', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span style={{ color: '#aaaaaa', fontWeight: '600'  }}>LATES PUBLICATION</span>
                    <Image src="/images/demo-banner-03.png" alt="..." width={100} height={100} style={{ width: '100%', maxWidth: '192px', margin: 'auto'  }} />
                    <Link href="#" style={{ color: '#262626', fontSize: '14px', textDecoration: 'none', fontWeight: '500', width: '100%', display: 'flex' }}>Learn More <FontAwesomeIcon icon={faArrowRight} style={{ color: '#CF0A2C', fontWeight: '600', maxWidth: '25px', paddingLeft: '10px' }}/></Link>
                  </div>
                </div>
              </div>  

              <div className={`dropdown ${pathname ==  "/team" ? "active": "" 
              || pathname ==  "/careers" ? "active": ""
              || pathname ==  "/security" ? "active": ""
              || pathname ==  "/crypto-for-good" ? "active": ""
              || pathname ==  "/news" ? "active": ""
              || pathname ==  "/partnerships" ? "active": ""
              || pathname ==  "/investor-relations" ? "active": ""
              || pathname ==  "/media-relations" ? "active": ""}`}>
                <button className="dropdown-toggle nav-link">Company</button>
                <div className="dropdown-content-multiple">
                  <div className="dropdown-content-new">
                    <span>COMPANY</span>
                    <Link href="/team" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Team</p>
                        <span>Bitcoin Suisse&apos;s board members <br></br>and employees</span>
                      </div>
                    </Link>
                    <Link href="/careers" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Careers</p>
                        <span>Advance the crypto revolution <br></br>with us!</span>
                      </div>
                    </Link>
                    <Link href="/security" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Security</p>
                        <span>At Bitcoin Suisse, your assets are <br></br>safe – always. Here’s why.</span>
                      </div>
                    </Link>
                    <Link href="/crypto-for-good" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Crypto for Good</p>
                        <span>Supporting builders and innovators <br></br>who use crypto to make the world <br></br>a better place</span>
                      </div>
                    </Link>
                  </div>
                  <div className="dropdown-content-new" style={{ marginLeft: '20px' }}>
                    <span>KNOWLEDGE</span>
                    <Link href="/news" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Company news</p>
                        <span>Stay updated on all the latest news, <br></br>insights and trends</span>
                      </div>
                    </Link>
                    <Link href="/partnerships" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Partnerships</p>
                        <span>Our global network of business <br></br>and industry partners</span>
                      </div>
                    </Link>
                    <Link href="/investor-relations" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} /> 
                      <div className="dropdown-list-menu-item">
                        <p>Investor Relations</p>
                        <span>Information for existing shareholders <br></br>and potential investors</span>
                      </div>
                    </Link>
                    <Link href="/media-relations" className="dropdown-item menu-item-04">
                      <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                      <div className="dropdown-list-menu-item">
                        <p>Media Relations</p>
                        <span>Media contact and company facts</span>
                      </div>
                    </Link>
                    
                  </div>
                </div>
              </div> 
              <div className={`dropdown ${pathname ==  "/Contact" ? "active": ""}`}>
                <Link href="/Contact" style={{ padding: '24px 0px', color: '#aaaaaa', display: 'flex', textDecoration: 'none' }}>Contact</Link>
              </div>
              <div className="dropdown top-menu-right">
                <form className="d-flex" style={{ marginTop: '15px' }}>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button className="btn btn-light border rounded-pill me-md-2" style={{ paddingBottom: '4px' }} type="button">Get Started</button>
                      <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C' }} type="button">Login</button>
                  </div>
                </form>
              </div>
              <div className="dropdown" style={{ marginTop: '15px' }}>
                <span className="multilang-button">DE</span>
              </div>
            </div>
          </div>
            
          </Nav>
    </>
  )
}

export default DesktopMenu;