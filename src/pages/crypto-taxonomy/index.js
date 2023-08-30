import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMoneyBillTransfer, faShield,  } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from '@/components/BreadCrumb';

export default function Taxonomy() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big-x payment-c' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card-body">
            <h1 className="card-title">Bitcoin Suisse Global Crypto Taxonomy (only available in English)</h1>
              <p className='card-text'>Crypto assets show much more inherent variance in design and hence “financial functionality” than traditional assets like stocks or bonds. Thus, for professional asset and portfolio management it is crucial to understand the (dis)similarity between crypto assets. We are convinced investors will value a systematic structuring of crypto assets to better compare risk-reward profiles.</p>
              <div className='container'>
                  <div className='row'>
                        <div className='col-sm-12 col-md-4' style={{ marginBottom: '15px' }}>
                        <Link className="btn btn-light border rounded-pill" href="our-outlook-2023" role="button" style={{ fontWeight: '500', backgroundColor: '#f3f3f3', width: '100%' }}>Where to buy</Link>
                      </div>
                      <div className='col-sm-12 col-md-3 tokentermss' style={{ marginBottom: '15px' }}>
                        <Link className="btn btn-light border rounded-pill" style={{ fontWeight: '500',backgroundColor: '#f3f3f3', width: '100%' }} href="our-outlook-2023" role="button">Token Terms</Link>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big-x'>
      <img src='/images/demo-banner-24.png' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', objectFit: 'contain' }}/>
      </div>
    </main>
    
    
    <main className='main primary-b'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                        <p className="card-text">The primary objective of the Bitcoin Suisse Global Crypto Taxonomy (GCT) is to make the young and very dynamic “crypto space” more accessible for our clients and a larger audience of professionals from traditional finance by offering a systematic structuring of the space into sectors and sub sectors.</p>
                        <p className="card-text">We are following a community approach. Therefore, we are offering the Bitcoin Suisse Global Crypto Taxonomy as well as the Classification List under a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. Commercial licensing is available, e.g., to build products and services that make use of the Bitcoin Suisse Global Crypto Taxonomy including the Classification List. We are happy to hear from you, please contact the GCT Board at cryptotaxonomy-board@bitcoinsuisse.com.</p>
                    </div>
                </div>
                
                </div>
            </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper-new'>
              <div className='row'>
                <div className='col-md-6' style={{ padding: '12px 20px'}}>
                  <h4 style={{ fontWeight: '600' }}>Subscribe for updates</h4>
                  <p className='pt-3'>If you are interested in joining the community of professionals who want to make use of the GCT and stay on top of updates and related discussion and to receive feedback from you, we are offering a free subscription to our dedicated mailing list.</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-9 form-email-input" style={{ marginRight: '15px' }}>
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                        <div className='form-group col-sm-12 col-md-3 nikos'>
                            <button type="button" className="btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C', width: '130px'}}>Submit</button>
                        </div>
                      </div>
                      
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
              </div>
                
            </div>
          </div>
          <div className='col-12 wrap-image'>
            <img src="/images/demo-banner-25.svg" style={{ marginTop: '50px' }}/>
          </div>
          <div className='col-12 wrap-image-mobile'>
            <img src="/images/demo-banner-255.svg" style={{ marginTop: '50px', width: '100%' }}/>
          </div>
        </div>
      </div>
      
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>0100 - Cryptocurrency</h3>
          <p class="card-text mb-3">The “Cryptocurrency” sector contains blockchains with the primary purpose of being a form of cryptographically secured digital money. They may differ in monetary policies, level of privacy, relation to fiat currencies, etc. As markets evolve, some may offer additional functionality beyond money, which will require a reassessment of their classification.</p>
          </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Ethereum</h5>
                    <p className="card-text pt-2">Join the validator network on Ethereum.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Polkadot</h5>
                    <p className="card-text pt-2">Stake DOT and receive rewards directly in your Bitcoin Suisse Online account.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Cardano</h5>
                    <p className="card-text pt-2">Easily participate in the Cardano network and receive staking rewards.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Tezos</h5>
                    <p className="card-text pt-2">Staking on Tezos is called Baking - and you can do this with us to receive tezzies (XTZ).</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Dash</h5>
                    <p className="card-text pt-2">Participate in pooled Dash masternodes with less than 1000 DASH.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Moonbeam</h5>
                    <p className="card-text pt-2">Optimal delegation with more than 15M of GLMR in Custody.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">NEAR Protocol</h5>
                    <p className="card-text pt-2">Easily stake NEAR on NEAR Protocol, a decentralized development platform.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Kusama</h5>
                    <p className="card-text pt-2">Stake KSM on Kusama, the experimental network for Polkadot.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w' style={{ backgroundColor: '#ffffff' }}>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>0200 - General Purpose Smart Contract Platform</h3>
          <p class="card-text mb-3">The “general purpose smart-contract platform” sector contains blockchains that offer functionality, usually in the form of decentralized applications consisting of smart contracts that utilize the native coin of the blockchain and oracles as external data sources.</p>
          </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Ethereum</h5>
                    <p className="card-text pt-2">Join the validator network on Ethereum.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Polkadot</h5>
                    <p className="card-text pt-2">Stake DOT and receive rewards directly in your Bitcoin Suisse Online account.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>0100 - Cryptocurrency</h3>
          <p class="card-text mb-3">The “Cryptocurrency” sector contains blockchains with the primary purpose of being a form of cryptographically secured digital money. They may differ in monetary policies, level of privacy, relation to fiat currencies, etc. As markets evolve, some may offer additional functionality, which will require a reassessment of their classification.</p>
          </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Ethereum</h5>
                    <p className="card-text pt-2">Join the validator network on Ethereum.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Polkadot</h5>
                    <p className="card-text pt-2">Stake DOT and receive rewards directly in your Bitcoin Suisse Online account.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Cardano</h5>
                    <p className="card-text pt-2">Easily participate in the Cardano network and receive staking rewards.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Tezos</h5>
                    <p className="card-text pt-2">Staking on Tezos is called Baking - and you can do this with us to receive tezzies (XTZ).</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Dash</h5>
                    <p className="card-text pt-2">Participate in pooled Dash masternodes with less than 1000 DASH.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Moonbeam</h5>
                    <p className="card-text pt-2">Optimal delegation with more than 15M of GLMR in Custody.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">NEAR Protocol</h5>
                    <p className="card-text pt-2">Easily stake NEAR on NEAR Protocol, a decentralized development platform.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2" style={{ height: '200px' }}>
                <div className="card-body pt-2">
                <FontAwesomeIcon icon={faShield} className='pt-2' style={{ padding: '6px', backgroundColor: '#ffffff', borderRadius: '20px' }}/>
                    <h5 className="card-title pt-2">Kusama</h5>
                    <p className="card-text pt-2">Stake KSM on Kusama, the experimental network for Polkadot.</p>
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