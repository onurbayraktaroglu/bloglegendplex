import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function PaymentMenu() {
  return (
    <>
    <main className='main payment-menu-wrapper'>
    <div className="card mb-3" style={{ paddingBottom: '0px' }}>
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
            <div className='payment-menu-container'>
                <div className='payment-menu-left'>
                <span style={{ color: '#262626', fontSize: '20px', fontWeight: '500' }}>LegendPlex Pay</span>
            </div>
            <div className='payment-menu-right'>
                    <Link href="/payment" className='active'>OverView</Link>
                    <Link href="/payment/product">Product</Link>
                    <Link href="/payment/merchants">Merchants</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    
    </>
  )
}
