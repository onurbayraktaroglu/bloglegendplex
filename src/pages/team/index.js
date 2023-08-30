import React, { useState } from 'react';
import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Team() {
  const [updated, setUpdated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleKeyDown = (event) => {
    if(event.target.value.length > 2) {
      if (event.key === 'Enter') {
        event.target.value = "";
        const misso = document.getElementById("misso");
        const dd = document.querySelectorAll(".member-box-w.act");
        const ff = document.querySelectorAll(".member-box-w");
        const misow = document.getElementById("misso-w");
        const memberBoard = document.querySelectorAll(".members-board");

        if(dd) {
          memberBoard.forEach((item, index) => {
            item.classList.remove("active");
            if(index < 3) {
              return
            }
            
          });

          dd.forEach((item) => {
            setUpdated(true);
            const clonedItem = item.cloneNode(true);
            while (misso.firstChild) {
              misso.removeChild(misso.firstChild);
            }
            misso?.appendChild(clonedItem);
            misow.style.display = 'block';
          });
          setUpdated(true);
          
        }
        
      }
    }
    
  }
  const closeSearch = (e) => {
    const memberBoard = document.querySelectorAll(".members-board");
    const misow = document.getElementById("misso-w");
    misow.style.display = 'none';
    memberBoard.forEach((item, index) => {
      if(index < 3) {
        item.classList.add("active");
        return
      }
    });
    if(misso) {
      //misso?.removeChild(misso.firstChild);
    }
    
  }
  const handleKeySearch = (e) => {
          const aa = document.querySelectorAll(".member-box-w");
          let input, filter, i, txtValue;
          input = document.getElementById("myInput");
          filter = e.target.value.toLowerCase();
          
          for (i = 0; i < aa.length; i++) {
            let a = aa[i].querySelector("h5")
            let txtValue = a.innerText
              if (txtValue.toLowerCase().indexOf(filter) > -1) {
                  setUpdated(true);
                  aa[i].classList.add("act")
              } else {
                  aa[i].classList.remove("act");
              }
          }
      
      
      
  }
  
  if (typeof document !== 'undefined') {
    let search = document.querySelector(".search");
  let searchIcon = document.querySelector(".search__icon");
  let searchInput = document.querySelector(".search__input");
  let searchClose = document.querySelector(".search__close");

  searchIcon?.addEventListener("click", () => {
    search.classList.add("search-open");
    searchInput.focus();
  });

  searchClose?.addEventListener("click", () => {
    search.classList.remove("search-open");
    //clear search field on close
    searchInput.value = "";
  });

    const aa = document.querySelectorAll(".member-box-w")
      aa.forEach((e) => {
        const niko = e.querySelectorAll(".card-body-bot h5");
        const asi = niko[0].innerText
        e.setAttribute("data-name",asi)
      });
  }
  const pdfAccordionSize = (index) => {
    const pdfacc = document.querySelectorAll(".members-board");
    const  ff = document.querySelectorAll(".pdf-accordion-numb button");
    ff.forEach((e) => {
      e.classList.remove("active");
    });
    
    document.getElementById(`act-${index}`).classList.add("active");
    pdfacc.forEach((item) => {
      const bb = item.getAttribute('data-attr')
      const cc = Number(bb);
      if(cc === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
      //item.classList.add('active');
    });
    
  };
  return (
    <>
    <Navigation />
    <main className='main' style={{ marginTop: '72px', backgroundColor: '#ffffff' }}>
      <div className='container'>
        <div className='row'>
        <div className="col-md-8" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="card-body">
            <h1 className="card-title" style={{ fontWeight: '700' }}>Our Team | Legendplex</h1>
            <p className="card-text mt-3" style={{ fontSize: '20px' }}>Bitcoin Suisse currently employs a team of 200+ people highly diverse in knowledge but united by the belief in the positive impact of crypto-assets on human development.</p>
          </div>
        </div>
        </div>
      </div>
    </main>
    <main className='main team-members' style={{ position: 'relative' }}>
    <div className='main team-members-menu'>
        <div className="pdf-accordion-numb col-md-12">
          <button id="act-1" className="btn btn-light btn-light-new border rounded-pill active" onClick={(e) => pdfAccordionSize(1)}>Board of Directors</button>
          <button id="act-2" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(2)}>Management Committee</button>
          <button id="act-3" className="btn btn-light btn-light-new border rounded-pill" onClick={(e) => pdfAccordionSize(3)}>Founders</button>
        </div>
    </div>
    <div className={`search-box ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='container'>
          <div className='row'>
            <div className="search" >
              <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
              
              <input type="text" className="search__input" autoFocus placeholder=" " onInput={handleKeySearch} onKeyDown={handleKeyDown}/>
              <svg className="search__close" viewBox="0 0 352 512" width="100" title="times" onClick={(e) => closeSearch()}>
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </div>
          </div>
        </div>
    </div>

    {updated && 
      <div id='misso-w' className='members-board www active'>

        <div className='container abc'>
            <div className='card mb-3' style={{ width: '100%'}}>
              <div className='container blog-content-right'>
                <div id='misso' className='row'>
                </div>
              </div>
            </div>
        </div>
        

      </div>
    }
    

    <div className='members-board www active' data-attr="1">
      <div className='container abc'>
          <h2 style={{ fontSize: '26px', color: '#262626', fontWeight: '600' }}>Chairman of the Board</h2>
          <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container blog-content-right'>
              <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-06.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Luzius Meisser</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chairman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 card-hidden" style={{ visibility: 'hidden' }}>
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/tabletPortrait_quadrat_ANDREJ_MAJCEN_DSC_5992_d920a6fa91.jpeg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Niklas Nikolajsen von Karlshof</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Founder & Former Chairman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 card-hidden" style={{ visibility: 'hidden' }}>
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/tabletPortrait_quadrat_FABIAN_HEDIGER_DSC_9780_scaled_9179b403c8.jpeg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Niklas Nikolajsen von Karlshof</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Founder & Former Chairman</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <div className='members-board www active' data-attr="1">
      <div className='container abc'>
          <h2 style={{ fontSize: '26px', color: '#262626', fontWeight: '600' }}>Board of Directors</h2>
          
          <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container blog-content-right'>
              <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-01.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Urs Bigger</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Vice-Chairman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-02.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Gabriela Hauser-Spühler</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Member of the Board</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-03.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Giles Keating</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Member of the Board</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-04.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Philipp Rösler</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Member of the Board</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-05.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Marco Menotti</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Member of the Board</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <div className='members-board www' data-attr="2">
      <div className='container abc'>
          <h2 style={{ fontSize: '26px', color: '#262626', fontWeight: '600' }}>Chief Executive Officer</h2>

          <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container blog-content-right'>
              <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-07.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Dr. Dirk Klee</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Executive Officer</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 card-hidden" style={{ visibility: 'hidden' }}>
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-07.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Dr. Dirk Klee</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Executive Officer</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 card-hidden" style={{ visibility: 'hidden' }}>
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-07.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Dr. Dirk Klee</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Executive Officer</span>
                          </div>
                      </div>
                  </div>
                  
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <div className='members-board www' data-attr="2">
      <div className='container abc'>
          <h2 style={{ fontSize: '26px', color: '#262626', fontWeight: '600' }}>Management Committee</h2>

          <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container blog-content-right'>
              <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-08.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Peter Camenzind</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Clients Officer</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w" >
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-09.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Lothar Cerjak</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Clients Officer</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/demo-user-11.jpg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Barbara Hofkamp</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Chief Corporate Services Officer</span>
                          </div>
                      </div>
                  </div>
                  
              </div>
            </div>
            
          </div>
      </div>
    </div>
    <div className='members-board www' data-attr="3">
      <div className='container abc'>
          <h2 style={{ fontSize: '26px', color: '#262626', fontWeight: '600' }}>Founders</h2>

          <div className="card mb-3" style={{ width: '100%' }}>
            <div className='container blog-content-right'>
              <div className="row">
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/tabletPortrait_Niklas_Nikolajsen_005_3ce0e4039d.jpeg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Niklas Nikolajsen von Karlshof</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Founder & Former Chairman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/tabletPortrait_quadrat_ANDREJ_MAJCEN_DSC_5992_d920a6fa91.jpeg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Andrej Majcen</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Founder & Former Chairman</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3 member-box-w">
                      <div className="pt-2" style={{ marginBottom: '20px' }}>
                          <img src='/images/tabletPortrait_quadrat_FABIAN_HEDIGER_DSC_9780_scaled_9179b403c8.jpeg' style={{ width: '100%' }} alt='...'/>
                          <div className='card-body-bot'>
                              <h5>Fabian Hediger</h5>
                              <span style={{ color: '#aaaaaa', fontSize: '12px', fontWeight: '500' }}>Founder & Former Chairman</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
    </main>
    
    <Footer />
    </>
  )
}