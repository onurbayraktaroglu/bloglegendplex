import React from 'react';
import { Inter } from 'next/font/google';
import { faShapes, faPlus, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function AnswerQuestion() {

  return (
    <>
    <main className='main' style={{ backgroundColor: '#ffffff'}}>
      <div className='container answer-question-wrapper'>
        <div className="row">
            <div className='col-md-12'>
                <h4>Answers to your questions about Bitcoin Suisse services</h4>
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faShapes} className="fa-sm"/> OverView</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faPlus} /> Account Opening</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faUser} /> Login</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faArrowRightArrowLeft} /> Trading</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faCoins} /> Staking</Link>
                
            </div>
            <div className='col-md-12'>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faRightToBracket} /> Deposit and Withdrawal</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faReceipt} /> Reports</Link>
                <Link href="#" className='btn btn-light rounded-pill mt-2 btn btn-primary'><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
            </div>
        </div>
      </div>
      
    </main>
    </>
  )
}
