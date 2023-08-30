import React from 'react';
import { Inter } from 'next/font/google';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function ProductAndCards() {

  return (
    <>
    <main className='main our-service-off'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <div className="card-body" style={{ marginRight: '20px' }}>
              <span>OUR SERVICE OFFERING</span>
              <h3 className="card-title" style={{ fontWeight: '600' }}>Products And Services</h3>
              <p className="card-text" style={{ marginBottom: '20px' }}>Bitcoin Suisse offers a range of crypto-financial services for investors. We maintain the highest quality, stability and security with best-in-class digital services for a premium client experience.</p>
            </div>
          </div>
          <div className='col-md-8 blog-content-right'>
              <div className='row'>
                  <div className="col-md-6 pt-2 bottom-box-cont">
                      <div className="card-body pt-2">
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-2">Best Execution Trading</h5>
                          <p className="card-text pt-2">Our 24/7 online trading platform provides easy and direct access to a wide range of crypto asset trading pairs and our best execution service helps ensure that clients get the best combination of price, liquidity and execution for trades. </p>
                          <Link href="/buy-sell-cryptocurrencies" className='mt-4'>Discover Trading <FontAwesomeIcon icon={faArrowRight} /></Link>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont">
                      <div className="card-body">
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-2">Audited Cold-Storage Custody</h5>
                          <p className="card-text pt-2">Our secure, institutional-grade custody in the Bitcoin Suisse Vault offers clients a customizable solution for custody and control of crypto asset holdings with the possibility for staking. Developed in 2018, the Vault has been audited by Zühlke Engineering </p>
                          <Link href="/vault" className='mt-4'>Discover the Vault <FontAwesomeIcon icon={faArrowRight} /></Link>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont">
                      <div className="card-body">
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-2">All-In-One Staking</h5>
                          <p className="card-text pt-2">Bitcoin Suisse offers an all-in-one service for staking of all major proof-of-stake crypto assets with premium support, attractive reward rates and no technical setup needed.</p>
                          <Link href="/private-client-collateralized-loans" className='mt-4'>Discover Staking <FontAwesomeIcon icon={faArrowRight} /></Link>
                      </div>
                  </div>
                  <div className="col-md-6 pt-2 bottom-box-cont">
                      <div className="card-body">
                      <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                          <h5 className="card-title pt-2">In-House Expertise</h5>
                          <p className="card-text pt-2">Our Research Department and experienced crypto professionals help support clients when entering the world of crypto asset investments.</p>
                          <Link href="/research" className='mt-4'>Discover our Expertise <FontAwesomeIcon icon={faArrowRight} /></Link>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
    </main>
    
    </>
  )
}
