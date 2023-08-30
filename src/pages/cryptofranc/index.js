import React, { useState, useEffect } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft, faMoneyBillTransfer, faPlus, faShield, faMoneyBillTrendUp, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function Cryptofranc() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);   
    };
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big-x cryptofranc' style={{ marginTop: '72px', backgroundColor: '#ffffff' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card-body">
              <h1 className="card-title">CryptoFranc (XCHF) - the<br></br> Swiss Franc Stablecoin</h1>
              <p className='card-text'>The CryptoFranc (XCHF) is a stablecoin bound to the Swiss Franc and classifies as a payment token in accordance with the FINMA ICO guidelines.</p>
              <div className='container pt-4'>
                  <div className='row'>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '5px' }}/>Value: 1 XCHF = 1 CHF</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '5px' }}/>Payment Token</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '5px' }}/>2.800.000 XCHF in Circulation</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '5px' }}/>Fully backed token</div>
                      <div className='col-md-3 mt-3'>
                        <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button">Where to buy</Link>
                      </div>
                      <div className='col-md-3 mt-3'>
                        <Link className="btn btn-light rounded-pill" style={{ fontWeight: '500' }} href="our-outlook-2023" role="button">Token Terms</Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big-x cryptofranc-img'>
      <img src='/images/demo-banner-15.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    
    <main className='main'>
    <div className='card mb-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8' style={{ padding: '50px 0px' }}>
                        <p className="card-text mt-3" style={{ fontWeight: '600', fontSize: '16px' }}>Important note about the upcoming Merge in Ethereum - published on 18 August 2022</p>
                        <p className="card-text mt-3" style={{ lineHeight: '32px', fontSize: '16px' }}>The smart contracts of the stablecoin XCHF will remain operational on the Ethereum blockchain after the Merge to the Proof-of-Stake consensus protocol. <strong>Users should be aware that Bitcoin Suisse Ltd, as the issuer of XCHF, will only consider the Proof-of-Stake forked version of the Ethereum blockchain to be legally binding under the Token Terms as published on its website.</strong> XCHF smart contracts may be paused on other chains, including Proof-of-Work forked chains, in which case no transactions could be made any more on those chains. <strong>Users are advised to temporarily abstain from using the XCHF smart contracts during the period around the Merge to avoid increased risk associated with the transition to the Proof-of-Stake consensus protocol.</strong> No action is required to upgrade on the part of users. Users should be on high alert for scams trying to take advantage of them during the transition. Furthermore, Bitcoin Suisse Ltd will not technically support the XCHF smart contracts on chains other than the Proof-of-Stake forked version of the Ethereum blockchain.</p>
                    </div>
                </div>
            </div>
            </div>
    </main>
    <main className='main'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='card'>
                            <div className="card-body">
                                <span>ETHEREUM TECHNOLOGY</span>
                                <h3 className="card-title mt-3">How it works</h3>
                                <p className="card-text mt-3" style={{ fontSize: '16px' }}>The XCHF token is issued on the Ethereum blockchain and adheres to the ERC-20 standard. The smart contract is linked here. Further details can be inspected on Etherscan. For legal details, please refer to the token terms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className='card'>
                            <div className="card-body">
                                <span>AUDITED AND SECURE</span>
                                <h3 className="card-title mt-3">Code Audit</h3>
                                <p className="card-text mt-3" style={{ fontSize: '16px' }}>The smart contract of the XCHF token has been audited and analyzed with a variety of tools for automated security analysis of Ethereum smart contracts by Chain Security AG. The auditor found no critical issues and their recommendations have been successfully mitigated before deployment of the smart contract.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row">
          <div className='middle-content-card'>
            <div className='middle-content-card-top'>
            <div className="col-md-6">
                    <div className="card-body pt-2">
                        <span>ETHEREUM TECHNOLOGY</span>
                        <h3 className="card-title pt-2">Three layers</h3>
                        <p className="card-text pt-2">1. XCHF is a payment token, issued and transferable on the Ethereum Blockchain, based on the ERC-20 standard and pegged to the Swiss Franc in a 1:1 ratio.</p>
                        <p className="card-text pt-2">2. The XCHF token is issued by Bitcoin Suisse AG.</p>
                        <p className="card-text pt-2">3. Each XCHF token represents a claim of one Swiss Franc against the Issuer and is backed by a bank guarantee.</p>
                    </div>
                </div>
                <div className="col-md-6 pt-2">
                    <div className="card-body">
                        <img src='/images/demo-ban-01.PNG' alt="..." style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            </div>
            <div className='middle-content-card-bottom'>
                <div className="col-md-6 pt-2">
                    <div className="card-body">
                        <img src='/images/demo-ban-02.PNG' alt="..." style={{ width: '100%' }}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card-body pt-2">
                        <h3 className="card-title pt-2">Purpose</h3>
                        <p className="card-text pt-2">The main purpose of the CryptoFranc is to serve as a means of payment for the Swiss blockchain ecosystem as a transactional currency.</p>
                    </div>
                </div>
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
              <h3 className="card-title">Selected Implementations of XCHF</h3>
            </div>
          </div>
          <div className='col-md-8 blog-content-right'>
              <div className='row'>
                  <div className="col-md-6">
                      <div className="card-body pt-4" style={{ height: '200px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-2">Blockimmo</h5>
                          <p className="card-text pt-2">Blockimmo tokenizing real estate</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card-body pt-4" style={{ height: '200px' }}>
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-2">Aktionariat</h5>
                          <p className="card-text pt-2">Aktionariat enables private companies to independently create, buy and sell company shares on their own websites</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card-body pt-4" style={{ height: '200px' }}>
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-2">Quitt</h5>
                          <p className="card-text pt-2">quitt. as a lead customer of Aktionariat using XCHF to buy and sell tokenized shares</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="card-body pt-4" style={{ height: '200px' }}>
                      <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                          <h5 className="card-title pt-2">I.AM​</h5>
                          <p className="card-text pt-2">i.AM Innovation Lab to tokenize shares on the public Ethereum blockchain using XCHF</p>
                      </div>
                  </div>
              </div>
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
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper-new www'>
              <div className='row'>
                <div className='col-md-6' style={{ padding: '12px 20px'}}>
                  <h2 style={{ fontWeight: '700' }}>Get your XCHF today!</h2>
                  <p>&nbsp;</p>
                </div>
                <div className="col-md-12">
                <div className="col-md-4">
                <Link href="#" className='btn btn-danger rounded-pill mt-2 login-button' style={{ backgroundColor: '#CF0A2C' }}>Where to buy</Link>
                </div>
                </div>
                
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg-new.png" style={{ maxWidth: '425px', right: '0', position: 'absolute' }}/></div>
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