import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from "react-bootstrap";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from "@/components/BreadCrumb";

export default function Media() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Media Relations</h1>
              <p className='card-text'>Bitcoin Suisse Media Relations coordinates contact between media representatives and people within Bitcoin Suisse who can provide the appropriate information.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main pod'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container'>
        <div className="row">
            <div className='download-media-c'>
                <h2 style={{ fontWeight: '700' }}>Download Media Assets</h2>
                <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button" style={{ fontWeight: '500', height: '40px' }}>Download</Link>
            </div>
        </div>
      </div>
      
    </div>
    </main>
    
    <main className='main bythenumbers-wrapper'>
    <div className="card mb-3">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <div className="card-body" style={{ marginRight: '20px' }}>
                <span>&nbsp;</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Key Numbers</h3>
              <p className="card-text mt-3">*as of May 2022</p>
            </div>
          </div>
          <div className='col-md-12'>
              <div className='container mt-5'>
                  <div className='row'>
                      <div className='col-md-3 bythenumbers-box'>
                      <div className='number-box'>
                          <div className='number-box-border'></div>
                          <h5 className='card-title'>CHF 3+ billion*</h5>
                      </div>
                          <p className="card-text">Assets under Custody</p>
                      </div>
                      <div className='col-md-3 bythenumbers-box'>
                      <div className='number-box'>
                          <div className='number-box-border'></div>
                          <h5 className='card-title'>CHF 100+ Million</h5>
                      </div>
                          <p className="card-text">Bitcoin Suisse equity capital</p>
                      </div>
                      <div className='col-md-3 bythenumbers-box'>
                      <div className='number-box'>
                          <div className='number-box-border'></div>
                          <h5 className='card-title'>200+ Employees</h5>
                      </div>
                          <p className="card-text">in Switzerland, Liechtenstein and Denmark</p>
                      </div>
                      <div className='col-md-3 bythenumbers-box'>
                          <div className='number-box'>
                              <div className='number-box-border'></div>
                              <h5 className='card-title'>2013</h5>
                          </div>
                          <p className="card-text">Founding of Bitcoin Suisse AG</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className='numbers-bg-left'>
        <img src='images/svgviewer-png-output.png' />
    </div>
    <div className='numbers-bg-right'>
        <img src='images/svgviewer-png-output.png' />
    </div>
    </main>
    <main className='main security-w nick'>
    <div className="card mb-3" >
      <div className='container service-overview-wrapper'>
        <div className="row mix">
          
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title mt-5" style={{ fontWeight: '600' }}>Media Contact</h3>
              <h5 style={{ fontWeight: '500' }} >Verena Schwarz</h5>
              <p style={{ maxWidth: 'unset' }}>Head Communication & Media Relations</p>
              <p style={{ maxWidth: 'unset' }}>Direct: E-Mail</p>
              <p style={{ maxWidth: 'unset' }}>Reception (CH): 0800 800 008</p>
              <p style={{ maxWidth: 'unset' }}>Reception (international): +41 41 660 00 00</p>
              <p style={{ maxWidth: 'unset' }}>Grafenauweg 12, 6300 Zug, Switzerland</p>
            </div>
          </div>
          <div className='col-md-6'>
            <Image src='/images/demo-banner-34.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
          </div>
          
        </div>
    </div>
    </div>
    </main>
    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-12">
            <div className="card-body">
              <span>USEFUL LINKS</span>
              <h3 className="card-title mt-2" style={{ fontWeight: '600' }}>Learn more about Bitcoin Suisse</h3>
              <div className='useful-links'>
                <div className='col-md-3'>
                    <Link className="mt-4" href="/news" role="button" style={{ fontWeight: '500' }}>News</Link>
                </div>
                <div className='col-md-3'>
                    <Link className="mt-4" href="/team" role="button" style={{ fontWeight: '500' }}>Team</Link>
                </div>
                <div className='col-md-3'>
                    <Link className="mt-4" href="/contact" role="button" style={{ fontWeight: '500' }}>General inquiries</Link>
                </div>
              </div>
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