import React, { useState, useEffect } from "react";
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, Button, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';
import industryList from '../../../public/data/industryData';
import BreadCrumb from "@/components/BreadCrumb";

export default function IndustryBlogDetailPage({ blog }) {
    const [listDetail, setListDetail] = useState(industryList.List);
    const [newList, setNewList] = useState(blog);
    const [rightContentState, setRightContentState] = useState(false);

    const [elements, setElements] = useState([]);

    function getElementsInsideContainer(containerClass) {
        let container = document.getElementsByClassName(containerClass)[0];
        if (!container) {
        setElements([]);
        return;
        }
        let elements = Array.from(container.children);
        setElements(elements);
    }

    const onBackHistory = () => {
        history.go(-1);
    }
    
    if (typeof window !== 'undefined') {
        let rightContentFixed = document.getElementById("blogContainerRight");
        const handleScroll = () => {
                if(window.scrollY > 220) {
                    rightContentFixed?.classList.add("active");
                    setRightContentState(true);
                } else {
                    if(rightContentState){
                        rightContentFixed?.classList.remove("active");
                        setRightContentState(false);
                    }
                    
                }
        };
        window.addEventListener('scroll', handleScroll);
    }
    useEffect(() => {
        setNewList(blog);
        getElementsInsideContainer("blog-container-description");
    }, [newList, setNewList]);

    const h3Elements = elements.filter(element => element.tagName.toLowerCase() === 'h3');
  return (
    <>
    <Navigation />
    
    <main className='main' style={{ marginTop: '72px' }}>
        <div className='container'>
            <div className='row'>
            
                <Button className="btn btn-light border mt-4" variant="primary" onClick={onBackHistory} style={{ borderRadius: '20px', width: '100px',marginLeft: '10px' }}>&#60; Back</Button>
                <div className='detail-breadcrumb'>
                    <Link href="/blog">Industry Blog </Link>&nbsp;/ <span>&nbsp;{newList.url} / </span>
                </div>
                <div className='blog-container'>
                    <div className='blog-container-left'>
                        <h3>{newList.title}</h3>
                        <span className='date-time'>{newList.dateTime}</span>
                        <h6>{newList.title}</h6>
                        <Image src={`/images/${newList.image}`} alt="..." width={400} height={200}/>
                        <div className='blog-container-description' dangerouslySetInnerHTML={ {__html: newList.body.description} }></div>
                    </div>
                    <div className='blog-container-right'>
                        <div id='blogContainerRight'>
                            <span className='brand-text'>LegendPlex</span>
                            <div className='blog-social-media-box'>
                                <Link href="#"><Facebook /></Link>
                                <Link href="#"><Linkedin /></Link>
                                <Link href="#"><Twitter /></Link>
                                <Link href="#"><FontAwesomeIcon icon={faLink} style={{ width: '28px' }} /></Link>
                            </div>
                            <div className='blog-right-content'>
                                <h3>Table of Contents</h3>
                                <span>Navigate easyily through this article</span>
                                <ul>
                                    {h3Elements.map((element, index) => (
                                        <li key={index}>
                                            <Link href={`#section-${index+1}`} >{element.innerHTML}</Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
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

export const getServerSideProps = async (context) => {
    const {slug } = context.query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data/blogData.json`).then((r) => r.json());
    const dataNew = res.List;
    const props = {
        blog: null,
      };
    dataNew.forEach((doc) => {

       if (doc.url == slug) {
            props.blog = doc;
       }
        
    });
    return { props }
}