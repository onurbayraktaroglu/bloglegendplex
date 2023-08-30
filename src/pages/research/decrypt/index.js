import React, { useState, useReducer } from "react";
import Navigation from '../../../components/Nav';
import Footer from '../../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResearchList from '../../../../public/data/researchData';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BreadCrumb from "@/components/BreadCrumb";

export default function ResearchDecrypt({ ResearchList }) {
  const [list, setList] = useState(ResearchList.List);
  
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big-x cryptofranc' style={{ marginTop: '72px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
            <h1 className="card-title">Bitcoin Suisse Decrypt</h1>
              <p className="card-text">We provide an in-depth look at selected topics ranging from cryptocurrency fundamentals to market analyses.</p>
              <div className='container pt-4'>
                  <div className='row'>
                    <form className='newsletter-form-container'>
                        
                        <div className="form-row form-input-resp">
                            <div className="form-group col-md-8 col-lg-9 form-email-input" style={{ marginRight: '10px', padding: '0px' }}>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required style={{ padding: '13px 10px 13px 40px' }}/>
                                <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                            </div>
                            <div className="form-group col-md-4 col-lg-3 form-lastname-input">
                                <button type="button" className="btn btn-danger rounded-pill login-button" style={{ width: '100%', borderRadius: '20px', padding: '12px 0px', width: '130px'}}>Subscribe</button>
                            </div>
                        </div>
                        
                    </form>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </main>
    <main className='main'>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center list-page-container">
                <div className="col-md-12 research-breadcrumb">
                  <Link className="frst" href="/research">Research /</Link>
                  <Link className="scnd" href="/research/decrypt"> Legendplex Decrypt</Link>
                </div>
                <div className="col-md-12 research-breadcrumb-h3">
                  <h3>Collections</h3>
                </div>
                
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
                                        <Link href={`${item.url}`}><Card.Title>{item.title}</Card.Title></Link>
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

    </main>
    <BreadCrumb />
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
    return { props: { ResearchList } }
}
  