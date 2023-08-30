import React, { useState, useReducer } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from '../../../public/data/blogData';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BlogListEl({ BlogList }) {
  const [list, setList] = useState(BlogList.List);
  
  
  return (
    <>
    <Navigation />
    <main className="main" style={{ display: 'none' }}></main>
    <main className="main newsletter-box-top">
        <div className="container" style={{ zIndex: '9' }}>
            <div className="row">
                <h1>Crypto Outlook Blog 2023</h1>
                <p>We provide an in-depth look at selected topics ranging from cryptocurrency fundamentals to market analyses. Subscribe below to receive the latest issue directly to your inbox.</p>
                <form className='newsletter-form-container'>
                  <div className='form-row form-input-resp'>
                    <div className="form-group col-md-6 form-email-input">
                        <div className="newsletter-left-input">
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                          <FontAwesomeIcon icon={faEnvelope} className='newsletter-form-icons' />
                        </div>
                          <button type="button" className="col-12 btn btn-danger subs-submit" style={{ borderRadius: '20px', padding: '12px 0px', maxWidth: '125px'}}>Subscribe</button>
                    </div>
                  </div>
                  
                </form>
            </div>
        </div>
        <div className='bg-themes'>
            <Image src='/images/big-banner-01.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" width={500} height={500} style={{ width: '100%', height: 'auto' }}/>
        </div>
    </main>
    <main className='main'>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center list-page-container">
                <div className="list-item-box-wrapper">
                    {list.map((item) => {
                    return (
                            <Card  key={item.id} className="col-12 col-md-4 col-lg-4 ">
                                <div className="list-item-box-cont">
                                    <Card.Img
                                        variant="top"
                                        src={`http://localhost:3000/images/${item.image}`}
                                    />
                                    <Card.Body>
                                        <Link href={`research/${item.url}`}><Card.Title>{item.title}</Card.Title></Link>
                                        <p>A run-down of crucial crypto events in 2022 and an interview in the Bitcoin Suisse Crypto Outlook 2023 with Niklas Nygaard one of our senior traders on investing in crypto markets during uncertain times.</p>
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
    
    <Footer />
    </>
  )
}

export const getStaticProps = async () => {
    return { props: { BlogList } }
}
  