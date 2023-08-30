import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faPlus, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import "@fortawesome/fontawesome-svg-core/styles.css";
import MemberContentSlider from "@/components/MemberContentSlider";

export default function CryptoForGod() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big' style={{ marginTop: '70px', backgroundColor: '#ffffff' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-12">
            <div className="card-body" style={{ textAlign: 'center', paddingTop: '70px' }}>
              <h1 className="card-title">Crypto for Good - Legendplex</h1>
              <p className='card-text'>Bitcoin Suisse proudly supports builders and innovators who use crypto to make the world a better place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', objectFit: 'unset' }}/>
      </div>
    </main>
    
    <main className='main security-w apa' style={{ backgroundColor: '#ffffff', padding: '4rem 6rem' }}>
        <div className='container'>
            <div className="row mix">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                        <h3 className='mt-3' style={{ fontWeight: '700' }}>Making the World Better with Crypto</h3>
                        <p className="card-text pt-2" style={{ color: '#505050' }}>At Bitcoin Suisse we believe that decentralized finance and crypto have the potential to change the world for the better. As an early pioneer in the crypto-financial industry, we have learned to value the power and importance of the community, researchers, and builders. We recognize that as the leading and most trusted Swiss crypto investment partner, our success ultimately stands on the shoulders of these pioneers – the many people who build, develop and push the technology forward, day by day.</p>
                    </div>
                </div>
                <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src='/images/demo-banner-31.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                </div>
            </div>
        </div>
    </main>
    <main className='main apa' style={{ backgroundColor: '#ffffff' }}>
        <div className='container'>
            <div className="row">
                <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '25px', backgroundColor: '#f9f9f9' }}>
                  <img src='/images/demo-banner-32.jpeg' alt="..." resizeMode="contain" className="img-fluid" style={{ width: '100%', height: 'auto' }}/>
                </div>
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                        <h3 className='mt-3' style={{ fontWeight: '700' }}>Use Your Crypto for Good with Christoffel-Blindenmission</h3>
                        <p className="card-text pt-2" style={{ color: '#505050' }}>Bitcoin Suisse and its clients are proud to support the work of the Christoffel-Blindenmission in Kenya with cryptocurrency donations, helping bring relief to disadvantaged persons with sight impairments in Kenya. Donations will be matched with an equivalent amount by the Bitcoin Suisse client network up to USD 1 million in total.</p>
                        <div className='container' style={{ paddingLeft: '0px' }}>
                              <div className='row'>
                                    <div className='col-md-3'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="our-outlook-2023" role="button" style={{ fontWeight: '500', backgroundColor: '#ffffff' }}>Read More</Link>
                                  </div>
                              </div>
                          </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
    <main className='main' style={{ backgroundColor: '#f9f9f9' , padding: '4rem 6rem' }}>
        <div className='container'>
            <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                        <h3 className='mt-3' style={{ fontWeight: '700' }}>Building For Bitcoin With Open-Source Developers</h3>
                        <p className="card-text pt-2" style={{ color: '#505050', marginTop: '20px' }}>In April 2022, we launched the Bitcoin Suisse Research Grant Fellowship program to support the continued growth and expansion of the technical crypto community. In the first year of the Fellowship, beginning 1 April 2022, Bitcoin Suisse will focus on two areas which are closely identified with its history and which are crucial to the future success of Bitcoin and the crypto-financial ecosystem: Bitcoin core development and the Lightning Network.</p>
                        <p className='card-text pt-2' style={{ color: '#505050' }}>Each Fellow of the Bitcoin Suisse Research Grant program will receive a total funding of CHF 10’000 paid out in BTC in quarterly installments of CHF 2’500. Their work will be featured in Bitcoin Suisse publications in collaboration with the Bitcoin Suisse Research Department.</p>
                    </div>
                </div>
                <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src='/images/demo-banner-33.png' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                </div>
            </div>
        </div>
    </main>
    <MemberContentSlider />
    <main className='main' style={{ backgroundColor: '#ffffff' }}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                            <h3 className='mt-5 mb-3' style={{ fontWeight: '700' }}>Building For A Greener Future With SolarStratos</h3>
                            <p className="card-text pt-2" style={{ color: '#505050' }}>In October 2021, Bitcoin Suisse announced a partnership with SolarStratos, a unique aviation-technology venture on a manned mission to be the first to reach the stratosphere in a vehicle powered solely by solar energy from 2023. By pushing the boundaries of what is possible in the world of technology and space exploration, SolarStratos is a true pioneer and “thinks beyond”. Bitcoin Suisse supports SolarStratos in its mission of proving what is possible with solar energy and contributes towards a clean energy future that will benefit all mankind.</p>
                            <div className='container' style={{ paddingLeft: '0px' }}>
                              <div className='row'>
                                    <div className='col-md-3'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="our-outlook-2023" role="button" style={{ fontWeight: '500', backgroundColor: '#ffffff' }}>Read More</Link>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img src='/images/demo-banner-34.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
    </main>
    <main className='main apa' style={{ backgroundColor: '#ffffff', padding: '4rem 6rem' }}>
            <div className='container'>
                <div className="row">
                    <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <img src='/images/demo-banner-35.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                            <h3 className='mt-5 mb-3' style={{ fontWeight: '700' }}>Making the World Better with Crypto and SOS Childrens Village Liechtenstein</h3>
                            <p className="card-text pt-2" style={{ color: '#505050' }}>As of now, donations can be made to SOS-Childrens Village Liechtenstein using Bitcoin, Bitcoin Lightning or Ethereum. With this, the innovative non-profit organization meets an ever-increasing donor need and further increases the transparency of donation flows. As a professional implementation partner, SOS Childrens Villages Liechtenstein has Bitcoin Suisse at its side. SOS Childrens Villages Liechtenstein was also supported by the Financial Innovation and Digitalization Unit of the Liechtenstein government.</p>
                            <div className='container' style={{ paddingLeft: '0px' }}>
                              <div className='row'>
                                    <div className='col-md-3'>
                                    <Link className="btn btn-light btn-light-new border rounded-pill mt-4" href="our-outlook-2023" role="button" style={{ fontWeight: '500', backgroundColor: '#ffffff' }}>Read More</Link>
                                  </div>
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