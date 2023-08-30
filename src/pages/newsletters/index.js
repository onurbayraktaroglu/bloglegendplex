import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPlus, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BorderBottom } from 'react-bootstrap-icons';

export default function Newsletters() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big careers-w' style={{ marginTop: '70px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Newsletters</h1>
              <p className='card-text'>Subscribe to receive our Bitcoin Suisse publications in newsletter format — the best way to stay informed about how bitcoin, cryptocurrencies and digital assets are transforming the global financial system.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', objectFit: 'unset' }}/>
      </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Daily Market Update</h4>
                  <p>Subscribe to our Daily Market Update to receive news and updates from our Trading Desk straight to your inbox.</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className="form-row form-input-resp">
                          <div className="form-group col-12 col-md-6 col-lg-6 form-name-input">
                              <input type="text" className="form-control" id="inputPassword4" placeholder="First Name (optional)" required/>
                              <FontAwesomeIcon icon={faUser} className='newsletter-form-icons'/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-6 form-lastname-input">
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name (optional)" style={{ maxWidth: '400px' }} required/>
                          </div>
                      </div>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="text" className="form-control" id="com" placeholder="Company" required/>
                              <FontAwesomeIcon icon={faBuilding} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className='form-row mt-3'>
                        <button type="button" className="col-12 btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C'}}>Subscribe</button>
                      </div>
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </main>
    
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Crypto & Macro Report</h4>
                  <p>In this monthly report series, we establish a profound evaluation of the current situation, basing our view on fundamentals and quantitative analysis. We take a deep dive into the data of Bitcoin and the crypto market via long-term logarithmic regressions. Subscribe now!</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className="form-row form-input-resp">
                          <div className="form-group col-12 col-md-6 col-lg-6 form-name-input">
                              <input type="text" className="form-control" id="inputPassword4" placeholder="First Name (optional)" required/>
                              <FontAwesomeIcon icon={faUser} className='newsletter-form-icons'/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-6 form-lastname-input">
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name (optional)" style={{ maxWidth: '400px' }} required/>
                          </div>
                      </div>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="text" className="form-control" id="com" placeholder="Company" required/>
                              <FontAwesomeIcon icon={faBuilding} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className='form-row mt-3'>
                        <button type="button" className="col-12 btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C'}}>Subscribe</button>
                      </div>
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Investment Navigator</h4>
                  <p>The Investment Navigator aims to unpack the crypto ecosystem on a quarterly basis utilizing the Bitcoin Suisse Global Crypto Taxonomy as structural framework. Aside from a sector analysis, the first edition of the Investment Navigator contains a dedicated sector deep dive analyzing the 12 most relevant general purpose smart contract platforms based on 46 different key metrics across economics, adoption and network.</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className="form-row form-input-resp">
                          <div className="form-group col-12 col-md-6 col-lg-6 form-name-input">
                              <input type="text" className="form-control" id="inputPassword4" placeholder="First Name (optional)" required/>
                              <FontAwesomeIcon icon={faUser} className='newsletter-form-icons'/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-6 form-lastname-input">
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name (optional)" style={{ maxWidth: '400px' }} required/>
                          </div>
                      </div>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="text" className="form-control" id="com" placeholder="Company" required/>
                              <FontAwesomeIcon icon={faBuilding} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className='form-row mt-3'>
                        <button type="button" className="col-12 btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C'}}>Subscribe</button>
                      </div>
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Decrypt</h4>
                  <p>Our periodical research publication covering all the most important topics from around the crypto world.</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className="form-row form-input-resp">
                          <div className="form-group col-12 col-md-6 col-lg-6 form-name-input">
                              <input type="text" className="form-control" id="inputPassword4" placeholder="First Name (optional)" required/>
                              <FontAwesomeIcon icon={faUser} className='newsletter-form-icons'/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-6 form-lastname-input">
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name (optional)" style={{ maxWidth: '400px' }} required/>
                          </div>
                      </div>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="text" className="form-control" id="com" placeholder="Company" required/>
                              <FontAwesomeIcon icon={faBuilding} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className='form-row mt-3'>
                        <button type="button" className="col-12 btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C'}}>Subscribe</button>
                      </div>
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
      
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Fundamentals</h4>
                  <p>Learn the basics of crypto and blockchain with our explainer articles.</p>
                  <form className='newsletter-form-container'>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                              <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className="form-row form-input-resp">
                          <div className="form-group col-12 col-md-6 col-lg-6 form-name-input">
                              <input type="text" className="form-control" id="inputPassword4" placeholder="First Name (optional)" required/>
                              <FontAwesomeIcon icon={faUser} className='newsletter-form-icons'/>
                          </div>
                          <div className="form-group col-12 col-md-6 col-lg-6 form-lastname-input">
                              <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name (optional)" style={{ maxWidth: '400px' }} required/>
                          </div>
                      </div>
                      <div className='form-row form-input-resp'>
                        <div className="form-group col-md-12 form-email-input">
                              <input type="text" className="form-control" id="com" placeholder="Company" required/>
                              <FontAwesomeIcon icon={faBuilding} className='newsletter-form-icons' />
                        </div>
                      </div>
                      <div className='form-row mt-3'>
                        <button type="button" className="col-12 btn btn-danger" style={{ width: '100%', borderRadius: '25px', padding: '12px 0px', backgroundColor: '#CF0A2C'}}>Subscribe</button>
                      </div>
                  </form>
                </div>
                <div className="numbers-bg-right"><img src="images/newsletter-pattern-bg.svg" /></div>
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