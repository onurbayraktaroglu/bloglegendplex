import React, { useState, useReducer } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResearchList from '../../../public/data/researchData';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Image from 'next/image';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import BreadCrumb from "@/components/BreadCrumb";

export default function ResearchListEl({ ResearchList }) {
  const [list, setList] = useState(ResearchList.List);
  
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', height: '310px' }}>
        <div className="row">
          <div className="col-md-6" style={{ padding: '10px 0px' }}>
            <div className="card-body">
              <h1 className="card-title">Research</h1>
              <p className="card-text mt-3" >Bitcoin Suisse provides its clients and interested readers with insights on trends and developments in the crypto space. We provide an in-depth look at selected topics ranging from around the crypto world.</p>
                </div>
          </div>
          
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    <main className='main' style={{ backgroundColor: '#f9f9f9' }}>
    <div className='card mb-3'>
        <div className="container">
            <div className="row">
                <div className="card-body">
                    <span>BITCOIN SUISSE RESEARCH</span>
                    <h3 className="card-title pt-2" style={{ fontWeight: '600' }}>Bitcoin Suisse Research Publications</h3>
                </div>
                <div className="card mb-3" style={{ width: '100%' }}>
                <div className='container research-content-right'>
                    <div className="row">
                        <div className="col-md-3">
                            <Link href="/research/decrypt" className="row research-row">
                                <div className="card-body col-6 col-md-6" style={{ height:  '90px'}}>
                                    <h6 className="card-title" style={{ fontWeight: '600', fontSize: '20px' }}>Decrypt</h6>
                                </div>
                                <div className="col-6 col-md-6">
                                    <img src="/images/static-banner-01.png" style={{ width: '100%' }}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link href="/research/outlook" className="row research-row">
                                <div className="card-body pt-2 col-6 col-md-6" style={{ height:  '90px'}}>
                                    <h6 className="card-title" style={{ fontWeight: '600', fontSize: '20px' }}>Outlook</h6>
                                </div>
                                <div className="col-6 col-md-6">
                                    <img src="/images/static-banner-02.png" style={{ width: '100%' }}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link href="/research/themes" className="row research-row">
                                <div className="card-body pt-2 col-6 col-md-6" style={{ height:  '90px'}}>
                                    <h6 className="card-title" style={{ fontWeight: '600', fontSize: '20px' }}>Themes</h6>
                                </div>
                                <div className="col-6 col-md-6">
                                    <img src="/images/static-banner-03.png" style={{ width: '100%' }}/>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link href="/research/crypto-macro" className="row research-row">
                                <div className="card-body pt-2 col-6 col-md-6" style={{ height:  '90px'}}>
                                    <h6 className="card-title" style={{ fontWeight: '600', fontSize: '20px' }}>Crypto & Macro</h6>
                                </div>
                                <div className="col-6 col-md-6">
                                    <img src="/images/static-banner-04.png" style={{ width: '100%' }}/>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="card-body" style={{ marginTop: '50px' }}>
                <span>BITCOIN SUISSE RESEARCH</span>
                <h3 className="card-title pt-2" style={{ fontWeight: '500' }}>Decrypt</h3>
            </div>  
            <div className="d-flex justify-content-center list-page-container">
                <div className="list-item-box-wrapper">
                    {list.map((item) => {
                    return (
                        <Card key={item.id} className="col-12 col-md-4 col-lg-4 ">
                            <div className="list-item-box-cont">
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:3000/images/${item.image}`}
                                />
                                <Card.Body>
                                    <Link href={`research/${item.url}`}><Card.Title>{item.title}</Card.Title></Link>
                                    <p style={{ maxWidth: '100%' }}>A run-down of crucial crypto events in 2022 and an interview in the Bitcoin Suisse Crypto Outlook 2023 with Niklas Nygaard one of our senior traders on investing in crypto markets during uncertain times.</p>
                                </Card.Body>
                            </div>
                        </Card>
                            
                    );
                    })}
                </div>

            </div>
        </div>
        </div>
        </div>
    </main>
    <BreadCrumb />
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
    return { props: { ResearchList } }
}
  