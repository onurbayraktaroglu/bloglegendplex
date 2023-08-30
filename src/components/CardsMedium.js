import React from 'react';
import { Inter } from 'next/font/google';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function CardsMedium() {

  return (
    <>
    <main className='main minimal-counterparty-risk abv'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <div className="card-body minimal-counter" style={{ marginRight: '20px' }}>
              <span>SECURITY</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Minimal Counterparty Risk</h3>
              <p className="card-text mb-3">As a member of the self-regulatory organization Financial Services Standards Association (VQF), Bitcoin Suisse is a financial intermediary and subject to Swiss AML/CFT regulations. We act as Swiss-based single gateway to the most liquid exchanges worldwide. Trade worry-free while we maintain the close relation with various exchanges and OTC desks for you.</p>
            </div>
          </div>
          <div className='col-md-8 blog-content-right'>
              <div className='row'>
                  <div className="col-sm-6 col-md-6">
                      <div className="card-body pt-4">
                      <FontAwesomeIcon icon={faMoneyBillTransfer} className='pt-2' />
                          <h5 className="card-title pt-4" style={{ fontWeight: '600' }}>Deep Liquidity for Large Trades</h5>
                          <span>Single gateway to all major crypto exchanges</span>
                          <p className="card-text pt-4">We trade for you through the most liquid exchanges worldwide. We take over the risk of dealing with exchanges for you, so you can trade worry-free.</p>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                      <div className="card-body pt-4">
                      <FontAwesomeIcon icon={faShield} className='pt-2' />
                          <h5 className="card-title pt-4" style={{ fontWeight: '600' }}>Secure Cold-Storage of Assets</h5>
                          <span>Your assets’ safety is guaranteed</span>
                          <p className="card-text pt-4">BBitcoin Suisse provides institutional-grade, ISAE 3402 audited custody for crypto assets in the time- and penetration-tested Bitcoin Suisse Vault.</p>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                      <div className="card-body pt-4">
                      <FontAwesomeIcon icon={faMoneyBillTrendUp} className='pt-2' />
                          <h5 className="card-title pt-4" style={{ fontWeight: '600' }}>Swiss Bank Guarantee</h5>
                          <span>Full bankruptcy protection</span>
                          <p className="card-text pt-4">Bitcoin Suisse holds the vast majority of client assets in segregated accounts such that they would not be affected in the event of a potential default of Bitcoin Suisse. All fiat and crypto assets that would be considered public deposits under Swiss banking laws are protected by a bank guarantee from an AA-rated Swiss bank as per art. 5 para. 3 let. f Banking Ordinance.</p>
                      </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                      <div className="card-body pt-4">
                      <FontAwesomeIcon icon={faBuildingColumns} className='pt-2' />
                          <h5 className="card-title pt-4" style={{ fontWeight: '600' }}>Trusted and Secure – Made in Switzerland​</h5>
                          <span>Adhering to highest compliance standards</span>
                          <p className="card-text pt-4">As a member of the self-regulatory organization Financial Services Standards Association (VQF), Bitcoin Suisse is a financial intermediary and subject to Swiss AML/CFT regulations. Assets that are stored in the Bitcoin Suisse Vault are held in cold storage on separated blockchain addresses and controlled directly by the owner.</p>
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
