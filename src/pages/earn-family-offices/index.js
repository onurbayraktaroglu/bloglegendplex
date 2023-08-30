import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faHandHoldingDollar, faArrowsSplitUpAndLeft, faClipboard, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function EarnFamilyOffices() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper' style={{ marginTop: '72px' }}>
      <div className='container'>
        <div className="row">
          <div className="col-md-12" style={{ zIndex: '9' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="card-title mt-5" style={{ paddingTop: '0px' }}>Digital Asset Services for EAMs and Family Offices</h1>
              <p className='card-text mt-5'>Partner with Bitcoin Suisse and use our prime brokerage, institutional-grade custody, staking and cryptocurrency payment services for your company. All together.</p>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <Image src='/images/big-banner-02.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    
    <main className='main'>
        <div className='card mb-3'>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row sss">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>STEP 1</span>
                            <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Kickstart Your Crypto Capabilities</h3>
                            <p className="card-text">Enable a selected group of clients to compliant deposit, trade, store and withdrawal crypto assets with your bank. You manage all your interactions with a user interface. We handle the crypto relevant compliance, trading, risk management and so on. We extend credit lines to your bank to have a reduced counterparty risk.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container pt-4'>
                            <div className='row'>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '5px' }}/>Deposits</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '5px' }}/>Withdrawals</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '5px' }}/>Trading</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '5px' }}/>Custody</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '5px' }}/>Lines of credit</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faRightLeft} style={{ marginRight: '5px' }}/>User Interface</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main'>
        <div className='card mb-3'>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row sss">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>STEP 2</span>
                            <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Expand Your Offering</h3>
                            <p className="card-text">Extend offering with supplementary services like Staking, Loans and further products Bitcoin Suisse is building.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container pt-4'>
                            <div className='row'>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faHandHoldingDollar} style={{ marginRight: '5px' }}/>Staking as a Service</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faArrowsSplitUpAndLeft} style={{ marginRight: '5px' }}/>Loans as a Service</div>
                                <div className='col-md-6 pt-2' style={{ padding: '20px' }}><FontAwesomeIcon icon={faClipboard} style={{ marginRight: '5px' }}/>+ Additional Services</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main'>
        <div className='card mb-3' style={{ width: '100%' }}>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row abc">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>STEP 3</span>
                            <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Stay On Top Of the Latest Crypto Tech Changes</h3>
                            <p className="card-text mt-3">Profit from a fully interlocked service offering with market leading technology.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Image src='/images/demo-banner-12.png' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main'>
        <div className='card mb-3'>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <span>INTEGRATED ACCESS TO GLOBAL CRYPTO MARKETS</span>
                        <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Prime Brokerage</h3>
                        <p className="card-text mt-3">Take advantage of our smart order routing technology that executes large cryptocurrency orders for over 6000 currency pairs across the most popular cryptocurrency exchanges worldwide at the best available market prices and liquidity with minimal counterparty risk.</p>
                        <div className='row'>
                                <div className='col-md-4'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card-body">
                            <span>INSTITUTIONAL-GRADE COLD STORAGE SERVICE</span>
                            <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Crypto Custody</h3>
                            <p className="card-text mt-3">Store client crypto assets in the ISAE 3402-audited Bitcoin Suisse Vault and enjoy peace-of-mind and flexible control with a customizable multi-signature governance process to fit your internal needs.</p>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main className='main'>
        <div className='card mb-3' style={{ width: '100%' }}>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body">
                        <span>ALL-IN-ONE</span>
                        <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Integrated Staking Service</h3>
                        <p className="card-text mt-3">Allow your clients to earn rewards on their crypto assets with our all-in-one staking service for major proof-of-stake coins.</p>
                        <div className='row'>
                                <div className='col-md-4'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}></div>
            </div>
        </div>
        </div>
    </main>
    
    <main className='main'>
    <div className='card mb-3'>
            <div className='container kickstart-crypto-wrapper'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body">
                            <span>Contact</span>
                            <h3 className="card-title" style={{ fontWeight: '600', paddingTop: '10px' }}>Solutions Partner</h3>
                            <p className="card-text mt-3">Leverage our wide range of in-house experience to deliver customized offerings for your EAM or family office clients. Bitcoin Suisse is your partner for product and service solutions.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="card-body">
                                <h4 className="card-title" style={{ fontWeight: '400' }}>Have questions? We have answers.</h4>
                                <p className="card-text" style={{marginTop: '30px'}}>Calls within Switzerland (toll-free): 0800 800 008 <br></br>Calls from abroad: +41 41 660 00 00</p>
                                <p className="card-text">Email: info@bitcoinsuisse.com</p>
                                <p className="card-text" style={{ marginTop: '20px' }}>Monday – Saturday: 8AM – 11PM <br></br>Sunday: 10AM – 4PM</p>

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