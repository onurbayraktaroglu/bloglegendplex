import React, { useState } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft, faPlus  } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function TradingBusiness() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <>
    <Navigation />
    <main className='main' style={{ display: 'none' }}></main>
    <main className='main bg-themes-main-wrapper' style={{ marginTop: '72px' }}>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title" style={{ fontWeight: '600' }}>Trading</h1>
              <p className='card-text'>We take over the risk of trading with the execution venues for our clients, so you can trade with minimal counterparty risk at the best achievable price and with the best execution speed.</p>
              <div className='col-md-3'>
                <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button" style={{ marginBottom: '50px' }}>Factsheet</Link>
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
              <span>SMART ORDER ROUTING</span>
              <h3 className="card-title" style={{ fontWeight: '600', marginTop: '0px!important' }}>Best Execution Through Smart Order Routing</h3>
              <p className="card-text mt-4">Our clients receive the best possible execution for their trades across the most popular and reliable crypto exchanges worldwide.</p>
              <div className='container pt-4 trading-box-wrap'>
                  <div className='row'>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHandHoldingDollar} /> Best obtainable price</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faArrowsSplitUpAndLeft} /> Pre-funded trading</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faClipboard} /> Detailed trade report</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faRightLeft} /> Deep liquidity</div>
                  </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/sDjyMQRouJE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main white-cont'>
        <div className="card mb-3" >
        <div className='container'>
            <div className="row">
            <div className="col-md-4">
                <div className="card-body" style={{ marginRight: '0px', paddingRight: '0px' }}>
                <span>TRADING</span>
                <h3 className="card-title">What does Best Execution mean?</h3>
                <p className="card-text">Bitcoin Suisse executes orders in a way that is most advantageous for our clients. Our guiding principles are captured in our Best Execution Policy.</p>
                <Link href="#" className="btn btn-light btn-light-new border rounded-pill mt-4" style={{ fontWeight: '600', marginBottom: '30px' }}>Best Execution Policy</Link>
                </div>
            </div>
            <div className='col-md-8 blog-content-right'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className="card-body pt-2">
                        <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                            <h5 className="card-title pt-2">Deep Liquidity for Large Trades</h5>
                            <p className="card-text pt-2">We trade for you through the most liquid exchanges worldwide. We take over the risk of dealing with exchanges for you, so you can trade worry-free.</p>
                        </div>
                    </div>
                    <div className="col-md-6 pt-2">
                        <div className="card-body">
                        <FontAwesomeIcon icon={faShield} className='pt-2' />
                            <h5 className="card-title pt-2">Secure Cold-Storage of Assets</h5>
                            <p className="card-text pt-2">BBitcoin Suisse provides institutional-grade, ISAE 3402 audited custody for crypto assets in the time- and penetration-tested Bitcoin Suisse Vault.</p>
                        </div>
                    </div>
                    <div className="col-md-6 pt-2">
                        <div className="card-body">
                        <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                            <h5 className="card-title pt-2">Swiss Bank Guarantee</h5>
                            <p className="card-text pt-2">Bitcoin Suisse holds the vast majority of client assets in segregated accounts such that they would not be affected in the event of a potential default of Bitcoin Suisse. All fiat and crypto assets that would be considered public deposits under Swiss banking laws are protected by a bank guarantee from an AA-rated Swiss bank as per art. 5 para. 3 let. f Banking Ordinance.</p>
                        </div>
                    </div>
                    <div className="col-md-6 pt-2">
                        <div className="card-body">
                        <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                            <h5 className="card-title pt-2">Trusted and Secure – Made in Switzerland​</h5>
                            <p className="card-text pt-2">As a member of the self-regulatory organization Financial Services Standards Association (VQF), Bitcoin Suisse is a financial intermediary and subject to Swiss AML/CFT regulations. Assets that are stored in the Bitcoin Suisse Vault are held in cold storage on separated blockchain addresses and controlled directly by the owner.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </main>
    <main className='main white-cont'>
        <div className='card mb-3'>
            <div className='container'>
                <div className="row abc">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <span>BEST EXECUTION</span>
                        <h3 className="card-title" style={{ fontWeight: '700' }}>Multi-Exchange-Trading Advantage</h3>
                        <p className="card-text" style={{ fontSize: '16px' }}>Compared to single-market-execution, multi-exchange-trading is especially advantageous for larger trades with lower time constraint. For such order sizes, agency orders are usually the preferred choice. Under our agency model, we protect our clients against counterparty risks and are able to execute the order in a way that minimizes market impact, hence achieving a better price on the order at the expense of longer execution time. Upon completion of the desired order amount, our clients receive the actual traded price – which is most often more favorable than a direct market order.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <Image src='images/demo-banner-04.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 order-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
            <div className="card-body" style={{ height: 'unset!important', paddingLeft: '0px' }}>
              <span>INVESTING IN CRYPTO</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Order Types Overview</h3>
              <p className="card-text pt-3">At Bitcoin Suisse our clients are offered various types of order executions to choose from.</p>
              <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Order Types Overview</Link>
            </div>
          </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Instant Execution</h5>
                    <p className="card-text pt-2">Immediate trade execution sourcing the best obtainable market price at this point in time (market order).</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Smart Execution</h5>
                    <p className="card-text pt-2">Continuous posting of order slices to order books of trading venues through algorithmic smart order routing.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Hard Limit Order</h5>
                    <p className="card-text pt-2">Limit order directly placed at trading venue(s) with a specific limit price. The order is being executed at a limit price if the market price on the trading venue(s) reaches the limit price.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Soft Limit Order</h5>
                    <p className="card-text pt-2">Smart Execution order with a limit price (cap/floor). The order is being executed as long as the market price is above (sell order) or below (buy order) the limit price.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">TWAP (Time Weighted Average Price)</h5>
                    <p className="card-text pt-2">Smart Execution order with a fixed execution deadline, split into smaller slices per fixed time interval (can be defined by the client). If the interval ends without the slice being fully executed, a market order is executed for the remainder of the order.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Scheduled Post</h5>
                    <p className="card-text pt-2">Smart Execution order with a fixed execution deadline without a fixed time interval. The completion of the order can occur before the end of the execution deadline.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">Stop-Loss Order</h5>
                    <p className="card-text pt-2">Stop-loss order directly placed at trading venue(s) with a specific trigger limit price. The order is being executed on the trading venue(s) as a market order if trigger limit price is reached.</p>
                </div>
            </div>
            <div className="col-md-3 mt-4">
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Stop-Limit-Order</h5>
                    <p className="card-text pt-2">Stop-loss order directly placed at trading venue(s) with a specific trigger limit price. Order gets executed on the trading venue(s) as a limit order if the trigger limit price is reached.</p>
                </div>
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
              <span>MAKE IT COUNT</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Trading in numbers</h3>
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
                          <p className="card-text">Bitcoin Suisse equity capital

</p>
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