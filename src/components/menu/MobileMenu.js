"use client";
import React, { useState,  } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft, faChartLine, faCirclePlus, faAngleLeft, faRankingStar, faUser, faQrcode, faShapes, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";

const MobileMenu = () => {
    const [companyState, setCompanyState] = useState(false);

    const CompanyOpen = (e) => {
        setCompanyState(true);
        e.preventDefault();
    }
    const CompanyClose = () => {
        setCompanyState(false);
    }

    if (typeof document !== 'undefined') {
        let menuItems = document.querySelectorAll(".navbar-nav-mobile ul li");
        for (var i = 0; i < menuItems.length; i++) {
          menuItems[i].addEventListener("click", function() {
            setCompanyState(false);
            // Tüm menü öğelerinin aktif sınıfını kaldır
            for (var j = 0; j < menuItems.length; j++) {
              menuItems[j].classList.remove("active");
            }
        
            // Tıklanan menü öğesine aktif sınıfı ekle
            this.classList.add("active");
          });
        }
    }
    
    
  return (
    <>
        <Nav className="navbar-nav-mobile">
            <ul>
              <li className="active sub-menu-item">Individuals
                {companyState && 
                <div className="sub-menu-item-wrapper">
                    <button className="btn btn-light btn-light-new rounded-pill mt-3" style={{ border: 'none', color: '#505050', }} onClick={CompanyClose}><FontAwesomeIcon icon={faAngleLeft} style={{ position: 'relative', top: '1px', marginRight: '5px' }} /> Back</button>
                    <span className="sub-menu-title">COMPANY</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/team">
                            <h4>Team</h4>
                            <span>Legendplex board members and employees</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/careers">
                            <h4>Careers</h4>
                            <span>Advance the crypto revolution with us!</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} />
                        <Link href="/security">
                            <h4>Security</h4>
                            <span>At Bitcoin Suisse, your assets are safe – always. Here’s why.</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                        <Link href="/crypto-for-good">
                            <h4>Crypto for Good</h4>
                            <span>Supporting builders and innovators who use crypto to make the world a better place</span>
                        </Link>
                    </div>
                    
                    <span className="sub-menu-title mt-5">KNOWLEDGE</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/news">
                            <h4>Company news</h4>
                            <span>Stay updated on all the latest news, insights and trends</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/partnerships">
                            <h4>Partnerships</h4>
                            <span>Our global network of business and industry partners</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/investor-relations">
                            <h4>Investor Relations</h4>
                            <span>Information for existing shareholders and potential investors</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/media-relations">
                            <h4>Media Relations</h4>
                            <span>Media contact and company facts</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                {!companyState && 
                <div className="sub-menu-item-wrapper">
                    <span className="sub-menu-title">SERVICES</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/buy-sell-cryptocurrencies">
                            <h4>Buy & Sell Cryptocurrencies</h4>
                            <span>Manage your crypto-portfolio online</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/staking">
                            <h4>Staking</h4>
                            <span>Receive rewards on your stored cryptocurrency</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} />
                        <Link href="/trading">
                            <h4>Large Crypto Trades</h4>
                            <span>Advanced trade execution</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                        <Link href="/private-client-collateralized-loans">
                            <h4>Collateralized Loans</h4>
                            <span>Leverage crypto asset holdings for increased liquidity with collateralised loans</span>
                        </Link>
                    </div>
                    <span className="sub-menu-title mt-5">ABOUT</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faUser} style={{ paddingRight: '10px' }} />
                        <div onClick={CompanyOpen}>
                            <h4>Company</h4>
                            <span>All information about us</span>
                        </div>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/Contact">
                            <h4>Contact</h4>
                            <span>We are here for you seven days a week</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                
              </li>
              <li className="sub-menu-item">Business
                {companyState && 
                <div className="sub-menu-item-wrapper">
                    <button className="btn btn-light btn-light-new rounded-pill mt-3" style={{ border: 'none', color: '#505050', }} onClick={CompanyClose}><FontAwesomeIcon icon={faAngleLeft} style={{ position: 'relative', top: '1px', marginRight: '5px' }} /> Back</button>
                    <span className="sub-menu-title">COMPANY</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/team">
                            <h4>Team</h4>
                            <span>Legendplex board members and employees</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/careers">
                            <h4>Careers</h4>
                            <span>Advance the crypto revolution with us!</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} />
                        <Link href="/security">
                            <h4>Security</h4>
                            <span>At Bitcoin Suisse, your assets are safe – always. Here’s why.</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                        <Link href="/crypto-for-good">
                            <h4>Crypto for Good</h4>
                            <span>Supporting builders and innovators who use crypto to make the world a better place</span>
                        </Link>
                    </div>
                    
                    <span className="sub-menu-title mt-5">KNOWLEDGE</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/news">
                            <h4>Company news</h4>
                            <span>Stay updated on all the latest news, insights and trends</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/partnerships">
                            <h4>Partnerships</h4>
                            <span>Our global network of business and industry partners</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/investor-relations">
                            <h4>Investor Relations</h4>
                            <span>Information for existing shareholders and potential investors</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/media-relations">
                            <h4>Media Relations</h4>
                            <span>Media contact and company facts</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                {!companyState && 
                <div className="sub-menu-item-wrapper">
                    <span className="sub-menu-title">AUDIENCE</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/corporate-clients">
                            <h4>Corporates & Institutions</h4>
                            <span>Integrated crypto-financial services for banks, crypto exchanges, foundations, merchants and other corporate clients</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/earn-family-offices">
                            <h4>EAMs & Family Offices</h4>
                            <span>Enhance returns for your HNWI clients with a diversified portfolio including cryptocurrencies</span>
                        </Link>
                    </div>
                    <span className="sub-menu-title">SERVICES</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/trading">
                            <h4>Trading Advanced</h4>
                            <span>Trade Execution</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/vault">
                            <h4>Custody</h4>
                            <span>Audited cold storage service for cryptocurrencies and digital assets</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} />
                        <Link href="/staking">
                            <h4>Staking</h4>
                            <span>Receive rewards on your stored cryptocurrency</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                        <Link href="/private-client-collateralized-loans">
                            <h4>Collateralized Loans</h4>
                            <span>Leverage crypto asset holdings for increased liquidity with collateralised loans</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faQrcode} style={{ paddingRight: '10px' }} />
                        <Link href="/tokenization">
                            <h4>Tokenization</h4>
                            <span>Tokenization Launch, tokenize & invest within the ecosystem</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/cryptofranc">
                            <h4>CryptoFranc</h4>
                            <span>The Swiss Franc Stablecoin</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faMoneyBill} style={{ paddingRight: '10px' }} />
                        <Link href="/payment">
                            <h4>Payments</h4>
                            <span>Accept cryptocurrencies for your business - easy and safe</span>
                        </Link>
                    </div>
                    <span className="sub-menu-title mt-5">ABOUT</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faUser} style={{ paddingRight: '10px' }} />
                        <div onClick={CompanyOpen}>
                            <h4>Company</h4>
                            <span>All information about us</span>
                        </div>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/Contact">
                            <h4>Contact</h4>
                            <span>We are here for you seven days a week</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                
              </li>
              <li className="sub-menu-item">Insights
                {companyState && 
                <div className="sub-menu-item-wrapper">
                    <button className="btn btn-light btn-light-new rounded-pill mt-3" style={{ border: 'none', color: '#505050', }} onClick={CompanyClose}><FontAwesomeIcon icon={faAngleLeft} style={{ position: 'relative', top: '1px', marginRight: '5px' }} /> Back</button>
                    <span className="sub-menu-title">COMPANY</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/team">
                            <h4>Team</h4>
                            <span>Legendplex board members and employees</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/careers">
                            <h4>Careers</h4>
                            <span>Advance the crypto revolution with us!</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faChartLine} style={{ paddingRight: '10px' }} />
                        <Link href="/security">
                            <h4>Security</h4>
                            <span>At Bitcoin Suisse, your assets are safe – always. Here’s why.</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRankingStar} style={{ paddingRight: '10px' }} />
                        <Link href="/crypto-for-good">
                            <h4>Crypto for Good</h4>
                            <span>Supporting builders and innovators who use crypto to make the world a better place</span>
                        </Link>
                    </div>
                    
                    <span className="sub-menu-title mt-5">KNOWLEDGE</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/news">
                            <h4>Company news</h4>
                            <span>Stay updated on all the latest news, insights and trends</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/partnerships">
                            <h4>Partnerships</h4>
                            <span>Our global network of business and industry partners</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/investor-relations">
                            <h4>Investor Relations</h4>
                            <span>Information for existing shareholders and potential investors</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/media-relations">
                            <h4>Media Relations</h4>
                            <span>Media contact and company facts</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                {!companyState && 
                <div className="sub-menu-item-wrapper">
                    <span className="sub-menu-title">INSIGHTS</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/learn">
                            <h4>Learn</h4>
                            <span>Learn the fundamentals of blockchain and <br></br>cryptocurrencies</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/research">
                            <h4>Research</h4>
                            <span>Understand trends and technologies with our in depth research</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faRightLeft} style={{ paddingRight: '10px' }} />
                        <Link href="/industry-blog">
                            <h4>Industry Blog</h4>
                            <span>Stay updated on all the latest news, insights and trends</span>
                        </Link>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingRight: '10px' }} />
                        <Link href="/crypto-taxonomy">
                            <h4>Global Crypto Taxonomy</h4>
                            <span>Navigate the world of cryptocurrencies</span>
                        </Link>
                    </div>
                    <span className="sub-menu-title mt-5">ABOUT</span>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faUser} style={{ paddingRight: '10px' }} />
                        <div onClick={CompanyOpen}>
                            <h4>Company</h4>
                            <span>All information about us</span>
                        </div>
                    </div>
                    <div className="sub-menu-item-list">
                        <FontAwesomeIcon icon={faShapes} style={{ paddingRight: '10px' }} />
                        <Link href="/Contact">
                            <h4>Contact</h4>
                            <span>We are here for you seven days a week</span>
                        </Link>
                    </div>
                    <div className="mobile-sub-menu-bottom">
                        <button className="btn btn-light rounded-pill me-md-2" style={{ paddingBottom: '4px', width: '100%', maxWidth: '170px', backgroundColor: '#F3F3F3' }} type="button">Get Started</button>
                        <button className="btn btn-danger rounded-pill login-button" style={{ paddingBottom: '8px', backgroundColor: '#CF0A2C', width: '100%', maxWidth: '170px' }} type="button">Login</button>
                    </div>
                </div>
                }
                
              </li>
              
            </ul>
        </Nav>
    </>
  )
}

export default MobileMenu;