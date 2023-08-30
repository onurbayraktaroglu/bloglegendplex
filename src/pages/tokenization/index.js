import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from "react-bootstrap";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from "@/components/BreadCrumb";

export default function Tokenization() {
  return (
    <>
    <Navigation />
    <main className='main' style={{ display: 'none' }}></main>
    <main className='main bg-themes-main-wrapper-big mis' style={{ marginTop: '72px', backgroundColor: '#F9F9F9' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Tokenization</h1>
              <p className='card-text'>Tailor-made tokenization consulting and facilitation of token sales.</p>
              
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
            <div className="col-md-3 pt-2 tokenization-r">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Consulting</h5>
                    <p className="card-text pt-2">Expert advice for tokenization projects including concept development, token economics, execution of token sales, and more</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 tokenization-r">
                <div className="card-body pt-4 " style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Facilitation of Token Offering</h5>
                    <p className="card-text pt-2">From collection of funds, contributor management and sale facilitation services to institutional grade custody and brokerage of tokens</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 tokenization-r">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                    <h5 className="card-title pt-2">AML Compliant Investor Onboarding</h5>
                    <p className="card-text pt-2">Investor onboarding and documentation in compliance with Swiss AML laws in regard to KYC and AML</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 tokenization-r">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                    <h5 className="card-title pt-2">Broad Investor Base​</h5>
                    <p className="card-text pt-2">Access a highly capitalized investor base, which has invested more than USD 1bn in token sales facilitated by Bitcoin Suisse</p>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    </main>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container service-overview-wrapper'>
        <div className="row">
        <div className='col-md-6'>
            <Image src='/images/demo-banner-09.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <span>PROVEN EXPERTISE</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Service Overview</h3>
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
    
    <main className='main'>
            <div className='container' style={{ paddingTop: '30px', paddingBottom: '50px' }}>
                <div className="row">
                    <div className="col-md-6 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontWeight: '700' }}>Applications</h3>
                            <p className="card-text mt-3">In case you are interested in having Bitcoin Suisse assist you with your Token/Coin Offering, please complete the questionnaire and send it to tokenization@bitcoinsuisse.com. We will get back to you as soon as possible.</p>
                            <Button className="btn btn-light border" variant="primary" style={{ borderRadius: '20px', backgroundColor: '#ffffff', fontWeight: '500' }}>
                                Apply for Token Offering
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <h3 className="card-title" style={{ fontWeight: '700' }}>Questions</h3>
                            <p className="card-text mt-3">If you have any questions regarding our Tokenization Services, you are welcome to send us an email.</p>
                            <Button className="btn btn-light border" variant="primary" style={{ borderRadius: '20px', backgroundColor: '#ffffff', fontWeight: '500' }}>
                                Email us
                            </Button>
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