import React from 'react';
import { Inter } from 'next/font/google';
import { faHandHoldingDollar, faArrowsSplitUpAndLeft, faRightLeft, faClipboard} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function CardsVideo() {

  return (
    <>
    <main className='main minimal-counterparty-risk'>
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className='container youtube-box-bg'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '700' }}>Trading at LegendPlex</h3>
              <p className="card-text mt-4" style={{ fontSize: '16px' }}>Our clients receive the best possible execution for their trades across the most popular and reliable crypto exchanges worldwide.</p>
              <div className='container pt-2 trading-box-wrap'>
                  <div className='row'>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHandHoldingDollar} /> Best obtainable price</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faArrowsSplitUpAndLeft} /> Pre-funded trading</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faClipboard} /> Detailed trade report</div>
                      <div className='col-md-6 mt-2' style={{ padding: '15px 20px 15px 0px' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faRightLeft} /> Deep liquidity</div>
                  </div>
              </div>
              <Link className="btn btn-light btn-light-new border rounded-pill mt-5" href="/trading" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Discover Trading</Link>
            </div>
          </div>
          <div className='col-md-6'>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/sDjyMQRouJE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 mt-5" >
      <div className='container'>
        <div className="row main-video-box-wrap">
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: '600' }}>Custody at LegendPlex</h3>
              <p className="card-text pt-3" style={{ fontSize: '16px' }}>Client assets are generally stored on separated addresses in cold storage. Separated Custody provides the best safety for our clients in case of bankruptcy of Bitcoin Suisse, as the assets are already separated and will not form part of the bankruptcy estate.</p>
              <p className='card-text pt-3' style={{ fontSize: '16px' }}>Clients with a Bitcoin Suisse Vault Account have permanently assigned blockchain addresses and are in control of moving their assets to secure cold storage in their Vault account or back to the Crypto Account for trading.</p>
              <Link className="btn btn-light btn-light-new border rounded-pill mt-5" href="/blog/custody-bitcoin-suisse" role="button" style={{ fontWeight: '500', padding: '6px 20px' }}>Read More</Link>
            </div>
          </div>
          <div className='col-md-6' style={{ border: '8px solid #eeeeee', borderRadius: '24px' }}>
              <img src='/images/social-media-banner-legendplex.jpeg' alt="..." className="img-fluid rounded-start" />
          </div>
        </div>
      </div>
    </div>
    </main>
    
    </>
  )
}
