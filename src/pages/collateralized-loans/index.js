import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function Collateralized() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big-x' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card-body">
              <h1 className="card-title">Collateralized Loans</h1>
              <p className='card-text'>Bitcoin Suisse offers collateralized loans to either increase cash flow and provide fiat liquidity against a pledge of crypto assets, or to borrow crypto assets against fiat and/or crypto security.</p>
              <div className='container pt-4'>
                  <div className='row'>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '15px' }}/>Fast Application Process</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '15px' }}/>Multiple Currencies</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '15px' }}/>Staking-Backed Loans</div>
                      <div className='col-md-6 pt-2'><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '15px' }}/>Secure Storage</div>
                      <div className='col-md-3 mt-3'>
                        <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button" style={{ backgroundColor: '#CF0A2C', marginBottom: '30px' }}>Factsheet</Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big-x'>
      <img src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main'>
        <div className='card mb-3'>
            <div className='container our-offering' style={{ paddingTop: '30px' }}>
                <div className="row">
                <div className='col-md-6' style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src='/images/big-banner-03.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <h3 className="card-title pt-3" style={{ fontWeight: '700' }}>Our Offering</h3>
                        <p className="card-text">Collateralized loans enable clients to remain invested in crypto assets while still having fiat liquidity at their disposal. Bitcoin Suisse offers crypto asset collateralized loans in USD, EUR, GBP and CHF to increase capital efficiency or leverage your positions against a pledge of crypto assets. The crypto assets pledged as collateral are stored in the hyper-secure Bitcoin Suisse Vault. Conversely, Bitcoin Suisse offers loans in BTC, ETH and DOT against a pledge of fiat assets. These loans can be used for interacting in the crypto sphere or to speculate on falling markets.</p>
                        <ul style={{ marginTop: '20px' }}>
                            <li>Multi-asset collateral portofolio</li>
                            <li>Offering of 23+ collateral currencies</li>
                            <li>Exchange of collateral currencies during loan duration</li>
                            <li>Competitive rates</li>
                            <li>Easy deposits and withdrawals of pledged assets</li>
                            <li>Individual assessment of your portfolios lending value</li>
                            <li>24/7 collateral value monitoring</li>
                            <li>Possibility of collateral staking (XTZ, DASH, ADA and DOT)</li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    </main>
    <main className='main gfh'>
        <div className='card mb-3'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontWeight: '700' }}>Product Details</h3>
                        <p className="card-text" style={{ fontSize: '16px' }}>All market monitoring, trading and management is performed inhouse by Bitcoin Suisse and clients have a designated Relationship Manager at their disposal to answer any questions. Furthermore, the collateral value is monitored 24 hours, 7 days a week. The client’s crypto collateral is linked to a segregated account in the name of the client and remains locked until the loan matures. Excess collateral can be withdrawn, and additional collateral can be added 7 days a week during business hours.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main gfh'>
        <div className='card mb-3'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontWeight: '700' }}>Interest Rates and Terms</h3>
                        <p className="card-text" style={{ fontSize: '16px' }}>All market monitoring, trading and management is performed inhouse by Bitcoin Suisse and clients have a designated Relationship Manager at their disposal to answer any questions. Furthermore, the collateral value is monitored 24 hours, 7 days a week. The client’s crypto collateral is linked to a segregated account in the name of the client and remains locked until the loan matures. Excess collateral can be withdrawn, and additional collateral can be added 7 days a week during business hours.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card-body">
                            <h3 className="card-title" style={{ fontWeight: '700' }}>Potential Risks</h3>
                            <p className="card-text" style={{ fontSize: '16px' }}>A collateralized loan is a way of leveraging your portfolio. We encourage responsible financial behaviour and kindly highlight that this product comes with risks, including but not limited to market volatility  and currency risk. This could require either the client to deposit further collateral, or Bitcoin Suisse to liquidate the existing collateral or parts thereof.</p>
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
              <h3 className="card-title" style={{ fontWeight: '700' }}>Interest-free Loans on Liquity</h3>
              <p className="card-text mt-4" style={{ fontSize: '16px' }}>Bitcoin Suisse provides a unique DeFi gateway service to its clients: ETH-collateralized loans on the Liquity protocol. Clients may benefit from open-end, interest-free loans paid out in LUSD – freely convertible at Bitcoin Suisse, with customizable loan monitoring and an easy collateral redemption mechanism. For more information on how to get a Liquity loan, contact your Bitcoin Suisse Relationship Manager directly. Minimum loan amounts and terms apply.</p>
            </div>
          </div>
          <div className='col-md-6'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/sDjyMQRouJE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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