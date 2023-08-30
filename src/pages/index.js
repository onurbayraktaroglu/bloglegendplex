import React from 'react';
import Image from 'next/image';
import Navigation from '../components/Nav';
import Slide from '../components/Slide.js';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import BlogContent from '@/components/BlogContent';
import CardsMedium from '@/components/CardsMedium';
import CardsVideo from '@/components/CardsVideo';
import ByTheNumbers from '@/components/ByTheNumbers';
import BlogContentSlider from '@/components/BlogContentSlider';
import NewsletterForm from '@/components/NewsletterForm';
import CardsLarge from '@/components/CardsLarge';
import ProductAndCards from '@/components/productAndCards';
import CompanyContentSlider from '@/components/CompanyContentSlider';
import AnswerQuestion from '@/components/AnswerQuestion';
import BreadCrumb from '@/components/BreadCrumb';
import MemberContentSlider from '@/components/MemberContentSlider';
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function Home() {

  return (
    <>
    <div className={inter.className}><Navigation />
    <div className='main-slider'>
      <Slide />
    </div>
    
    <BlogContent />
    <CardsMedium />
    <CardsVideo />
    <ByTheNumbers />
    <BlogContentSlider />
    <NewsletterForm />
    <MemberContentSlider />
    <ProductAndCards />
    <CardsLarge />
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
      <div className="card mb-3" >
        <div className='container'>
          <div className="row">
            <div className='middle-content-card'>
              <div className='middle-content-card-top'>
              <div className="col-12 col-md-6">
                      <div className="card-body pt-2">
                          <span>B2B SERVICES FOR FINANCIAL INSTITUTIONS</span>
                          <h3 className="card-title pt-2">The Swiss Technology Partner For Crypto Market Access</h3>
                          <p className="card-text pt-2">Bitcoin Suisse serves as a technology partner for financial institutions offering trusted access to crypto asset investing to their clients. API connections and customized setup are available for banks, family offices and external asset managers (EAMs).</p>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 pt-2">
                      <div className="card-body">
                          <Image src='/images/demo-banner-12.png' width={500} height={500} alt="..." style={{ width: '100%' }} />
                      </div>
                  </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </main>
    <CompanyContentSlider />
    <main className='main history-of-innovation' style={{ backgroundColor: '#ffffff' }}>
      <div className="card mb-3" >
        <div className='container'>
          <div className="row">
            <div className='middle-content-card'>
              <div className='middle-content-card-top'>
              <div className="col-12 col-md-6">
                      <div className="card-body pt-2">
                          <span>A HISTORY OF INNOVATION</span>
                          <h3 className="card-title pt-2">Pioneering Crypto-Financial Services Since 2013</h3>
                          <p className="card-text pt-2">With a long history of pioneering services in the crypto asset industry, Bitcoin Suisse provides clients with unique access to the latest innovations, combined with stable infrastructure supported by a strong team of crypto experts.</p>
                      </div>
                  </div>
                  <div className="col-12 col-md-6 pt-2">
                      <div className="card-body">
                          <Image src='/images/demo-banner-13.jpeg' width={500} height={500} alt="..." style={{ width: '100%' }} />
                      </div>
                  </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </main>
    <AnswerQuestion />
    <BreadCrumb />
    <Footer />
    </div>
    </>
  )
}
