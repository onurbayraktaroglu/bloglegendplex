import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';

export default function Corporate() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper' style={{ marginTop: '72px' }}>
      <div className='container'>
        <div className="row">
          <div className="col-md-12" style={{ zIndex: '9' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1 className="card-title">Cryptocurrency Services for Corporate Clients</h1>
              <p className='card-text'>Partner with Bitcoin Suisse and use our prime brokerage, institutional-grade custody, staking and cryptocurrency payment services for your company. All together.</p>
              <div className='col-md-3 mt-3'>
                <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button">Get in Touch</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <Image src='/images/big-banner-02.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '600' }}>Prime Brokerage</h3>
              <p className="card-text mt-4">Use our prime brokerage service and profit from smart order routing technology that sources the best available market prices and speed of execution from across the most popular cryptocurrency exchanges worldwide with minimal counterparty risk when you buy or sell large amounts of cryptocurrency.</p>
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
        <div className='container crypto-custody-wrapper'>
            <div className='row'>
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>AUDITED COLD STORAGE SERVICE</span>
                            <h3 className="card-title" style={{ fontWeight: '600' }}>Crypto Custody</h3>
                            <p className="card-text">Store your crypto assets in the ISAE 3402-audited Bitcoin Suisse Vault and enjoy peace-of-mind and complete control over a crypto custody solution with a customizable multi-signature governance process.</p>
                            <div className='col-md-3'>
                                <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        <Image src='images/demo-banner-06.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                    </div>
            </div>
        </div>
        </div>
    </main>
    <main className='main' style={{ display: 'none' }}></main>
    <main className='main'>
    <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container crypto-payment-wrapper'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>BITCOIN SUISSE PAY</span>
                            <h3 className="card-title" style={{ fontWeight: '600' }}>Cryptocurrency Payments</h3>
                            <p className="card-text">Integrated point-of-sale, ecommerce and invoice service for cryptocurrency payment acceptance</p>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Image src='images/big-banner-04.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main'>
        <div className='card mb-3'>
            <div className='container tokenization-service-wrapper'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>TAILOR-MADE</span>
                            <h3 className="card-title" style={{ fontWeight: '600' }}>Tokenization Services</h3>
                            <p className="card-text">Let us use our extensive experience in token sales and token-based fundraising, including over 20 successful ICO projects, to support your project.</p>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6' >
                        <Image src='images/demo-banner-08.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <main className='main' style={{ padding: '60px 0px' }}>
            <div className='container contact-service-wrapper'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <h3 className="card-title mt-3">Contact</h3>
                            <p className="card-text mt-3">Premium support from our team of dedicated experts</p>
                            <div className='row'>
                            <div className='col-md-4'>
                                <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>View our FAQ</Link>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        <div className="card-body">
                                <h4 className="card-title" style={{ fontWeight: '400', color: '#262626' }}>Have questions? We have answers.</h4>
                                <p style={{ fontWeight: '500', padding: '20px 0px', color: '#505050' }} className='mt-3'>Opening Hours</p>
                                <p className="card-text" style={{ color: '#505050', fontSize: '14px' }}>Monday – Saturday: 8AM – 11PM <br></br>Sunday: 10AM – 4PM</p>
                                <p className="card-text" style={{ color: '#505050', fontSize: '14px' }}>Calls within Switzerland (toll-free): 0800 800 008 <br></br>Calls from abroad: +41 41 660 00 00</p>
                                <p className="card-text" style={{ color: '#505050', fontSize: '14px', textDecoration: 'underline' }}>Email: info@bitcoinsuisse.com</p>
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