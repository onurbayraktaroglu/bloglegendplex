import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function BlogContent() {
  return (
    <>
    <main className='main blog-content-w'>
    <div className="card mb-3" >
      <div className='container'>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col-md-6">
            <img src='/images/demo1.png' style={{ width: '100%', borderRadius: 'unset!important' }} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <span>INVESTING IN CRYPTO</span>
              <h3 className="card-title mt-3" style={{ fontWeight: '700' }}>Why Invest In Crypto Assets?</h3>
              <p className="card-text pt-3">Bitcoin, Ethereum and other crypto assets are part of a new, decentralized financial world, built to bring hope and opportunities to people everywhere. Investing in crypto assets means believing in the power of technology to improve the world – as it transitions to a more efficient and equitable future.</p>
              <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="research/" role="button" style={{ fontWeight: '600', padding: '6px 20px' }}>Our Outlook 2023</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    
    </>
  )
}
