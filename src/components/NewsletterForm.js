import React from 'react';
import { Inter } from 'next/font/google';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function CardsMedium() {
  return (
    <>
    <main className='main' style={{ backgroundColor: '#ffffff', marginTop: '100px' }}>
      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='newsletter-form-wrapper'>
              <div className='row'>
                <div className='col-md-6' style={{ zIndex: '9' }}>
                  <h4>Get Crypto Industry Insights</h4>
                  <p>Bitcoin Suisse provides in-depth insights on trends and developments in the crypto industry directly to your inbox.</p>
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
    </>
  )
}
