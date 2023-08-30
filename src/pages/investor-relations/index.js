import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from "react-bootstrap";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from "@/components/BreadCrumb";

export default function Investor() {
  return (
    <>
    <Navigation />
    <main className='main' style={{ display: 'none' }}></main>
    <main className='main bg-themes-main-wrapper-big' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Investor Relations</h1>
              <p className='card-text'>Information for shareholders of Bitcoin Suisse, the Swiss crypto-financial services market leader and technology pioneer.</p>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    
    <main className='main'>
    <div className="card mb-3" >
      <div className='container blog-content-right'>
        <div className="row">
            <div className="col-md-4 pt-2">
                <div className="card-body pt-4" style={{ height:  '200px'}}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Reliable</h5>
                    <p className="card-text pt-2">Proven company, team and business model - with a long-standing track record.</p>
                </div>
            </div>
            <div className="col-md-4 pt-2">
                <div className="card-body pt-4 " style={{ height:  '200px'}}>
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Resilient</h5>
                    <p className="card-text pt-2">Strong capital base, solid revenues and excellent position in the market.</p>
                </div>
            </div>
            <div className="col-md-4 pt-2">
                <div className="card-body pt-4" style={{ height:  '200px'}}>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                    <h5 className="card-title pt-2">Innovative</h5>
                    <p className="card-text pt-2">A history of innovation and the ability to adapt in a changing market landscape.</p>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    </main>
    <main className='main' style={{ backgroundColor: '#f9f9f9' }}>
    <div className="card mb-3" >
      <div className='container service-overview-wrapper'>
        <div className="row">
        <div className='col-md-6'>
            <Image src='/images/demo-banner-33.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '700' }}>Investor Information</h3>
              <p className='card-text' style={{ fontSize: '16px',marginBottom: '20px' }}>Bitcoin Suisse benefits from a strong and stable shareholder base with a long-term view to business. Close involvement and alignment of shareholders, Board of Directors, Management Committee and the entire team enables investments in new services and products ahead of their release, ensuring that we can create value for clients, shareholders and grow sustainably.</p>
              <p className='card-text' style={{ fontSize: '16px',marginBottom: '20px' }}>Our aim is to continue being a leading key player in the crypto-financial marketplace, to continue providing excellent services and products in this field and to bridge the world of traditional finance with that of crypto finance.</p>
              <span style={{ color: '#505050', fontSize: '16px', fontWeight: '600', textTransform: 'unset' }}>Company News</span>
              <ul>
                <li><p className="card-text mt-3">Comprehensive <strong>consulting for ICOs and STOs</strong>, from concept development to the technical token specifications</p></li>
                <li><p className='card-text'>Facilitation of token sales / fundraisings with fiat or crypto as possible means of contribution and provision of token mechanics, such as token creation and distribution</p></li>
                <li><p className="card-text">Unparalleled experience with <strong>more than 20 successfully facilitated ICO projects</strong> and <strong>over USD 1bn raised</strong>, including: Tezos, OmiseGo, Zilliqa, Decentraland, Melonport</p></li>
                <li><p className="card-text">Access to an <strong>extensive investor network</strong> of HNWI and institutional clients and introduction to a targeted client base</p></li>
                <li><p className="card-text"><strong>Investor onboarding and documentation</strong> in compliance with Swiss AML Laws in regard to KYC and AML</p></li>
                <li><p className="card-text"><strong>Bitcoin Suisse Online:</strong> Administrative handling and trading of issued tokens</p></li>
                <li><p className="card-text">Additional services related to tokenization, such as institutional grade custody solutions, brokerage, audit services or creation of tax-relevant documentation & reports</p></li>
                <li><p className="card-text">High initial market exposure through our investor network and publications on our website or social media</p></li>
              </ul>
              
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