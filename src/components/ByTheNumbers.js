import React from 'react';
import { Inter } from 'next/font/google';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function ByTheNumbers() {

  return (
    <>
    
    <main className='main bythenumbers-wrapper'>
    <div className="card mb-3">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <div className="card-body" style={{ marginRight: '20px' }}>
              <span>BY THE NUMBERS</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Key Figures from LegendPlex</h3>
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
    </>
  )
}
