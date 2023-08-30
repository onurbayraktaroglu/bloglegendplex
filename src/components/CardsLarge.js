import React from 'react';
import { Inter } from 'next/font/google';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function CardsMedium() {

  return (
    <>
    <main className='main'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row cards-large-cont">
          <div className='middle-content-card'>
            <div className='middle-content-card-top'>
            <div className="col-md-6">
                    <div className="card-body pt-2">
                        <span>HIGH-TECH</span>
                        <h3 className="card-title pt-2">Innovating since 2013</h3>
                        <p className="card-text pt-2">With deep roots in the crypto ecosystem dating back to 2013 and before, Bitcoin Suisse is a leader in innovation for crypto-financial services. Our clients benefit from cutting-edge new products and services built to take advantage of the latest trends - built on the rock-solid experience of 250+ employees and technical experts at Bitcoin Suisse.</p>
                    </div>
                </div>
                <div className="col-md-6 pt-2">
                    <div className="card-body">
                        <Image src='/images/demo-banner-01.jpeg' width={500} height={500} alt="..." style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            </div>
            <div className='middle-content-card-bottom'>
                <div className="col-12 col-md-6 pt-2">
                    <div className="card-body">
                        <Image src='/images/demo-banner-02.jpeg' width={500} height={500} alt="..." style={{ width: '100%' }}/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card-body pt-2">
                        <span>HIGH-TOUCH</span>
                        <h3 className="card-title pt-2">Premium Client Service</h3>
                        <p className="card-text pt-2">As the trusted, Swiss gateway into crypto asset investment, Bitcoin Suisse provides full-service support. Our team of experienced relationship managers are available for clients 7 days a week to assist with all client needs for trading, custody, lending, staking and more.</p>
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
