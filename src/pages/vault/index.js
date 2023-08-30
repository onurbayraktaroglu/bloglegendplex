import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faCoins } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from "@/components/BreadCrumb";

export default function Vault() {
  return (
    <>
    <Navigation />
    <main className='main' style={{ display: 'none' }}></main>
    <main className='main bg-themes-main-wrapper-big' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Custody</h1>
              <p className='card-text'>Peace-of-mind cold storage of crypto assets in the Bitcoin Suisse Vault.</p>
              <div className='col-md-3'>
                <Link className="btn btn-danger rounded-pill login-button" href="our-outlook-2023" role="button">Factsheet</Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
    <div className="card mb-3" >
      <div className='container blog-content-right www'>
        <div className="row">
            <div className="col-md-3">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                    <h5 className="card-title pt-2">ISAE 3402 Audited and Pen-tested</h5>
                    <p className="card-text pt-2">Audited by PricewaterhouseCoopers, Grant Thornton and Zühlke and penetration tested by Compass Security.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faShield} className='pt-2' />
                    <h5 className="card-title pt-2">Institutional-grade</h5>
                    <p className="card-text pt-2">Proven multi-signing process for optimal governance of assets.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                    <h5 className="card-title pt-2">Multiple Assets</h5>
                    <p className="card-text pt-2">Support for BTC, ETH, DOT, ATOM, ADA, XTZ, BCH, KSM, BSV, XRP, all Ethereum ERC-20 and Tezos FA1.2/2 tokens and many more.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2">
                <div className="card-body pt-4" style={{ height:  '280px'}}>
                <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                    <h5 className="card-title pt-2">Tailor-made​</h5>
                    <p className="card-text pt-2">Set-up and account configurations customizable to client needs.</p>
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
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Bitcoin Suisse Vault</h5>
              <p className="card-text mt-3">Bitcoin Suisse provides institutional-grade custody for crypto assets in the time- and penetration-tested Bitcoin Suisse Vault.</p>
              <p className='card-text'>Clients benefit from a customizable multi-sig signing process to serve the needs of both corporate and financial institutions as well as private investors. Assets in the fully redundant Bitcoin Suisse Vault are held in cold storage on individual blockchain addresses and are easily accessible 24/7 without hardware by client-defined individuals for trading, transfer and other purposes.</p>
              <p className="card-text">The fully audited Bitcoin Suisse Vault supports storage of ADA, ATOM, BCH, BSV, BTC, BTG, CFG, DOT, ETH, EWT, KSM, LTC, NEAR, SOL, TFUEL, THETA, TRX, VET, VTHO, XRP, XTZ as well as all Ethereum ERC-20 and Tezos FA1.2, FA2 tokens. Staking operations are supported for ADA, ATOM, DOT, KSM, NEAR, and XTZ. Additional crypto assets are being regularly added to the Bitcoin Suisse Vault.</p>
              <h5 className="card-title" style={{ paddingTop: '20px' }}>The Vault Technology Solution</h5>
              <p className="card-text mt-3">Bitcoin Suisse Vault is a proprietary hyper-secure cold storage concept applying the highest standards of cryptographic, IT and physical security as well as multi-signing processes. It leverages Bitcoin Suisse’s longstanding track record of crypto asset experience and the expertise of its technology division comprising software, infrastructure and security specialists focusing on blockchain technology.</p>
              <p className="card-text">The Vault solution including key generation ceremonies are regularly audited by independent and reputable third parties and documented in ISAE 3402 reports. The Bitcoin Suisse Vault technology can be deployed with various levels of integration for B2B customers as a white label solution.</p>
            </div>
          </div>
          <div className='col-md-4'>
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
                  <h3 style={{ fontWeight: '600' }}>If you have any questions, you are welcome to contact us.</h3>
                </div>
                <div className="col-md-12">
                <div className="col-md-4">
                <Link href="#" className='btn btn-danger rounded-pill mt-2 login-button'>Contact</Link>
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