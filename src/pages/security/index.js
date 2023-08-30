import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes, faPlus, faUser, faArrowRightArrowLeft, faCoins, faRightToBracket, faReceipt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BorderBottom } from 'react-bootstrap-icons';

export default function Security() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big careers-w' style={{ marginTop: '70px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Security at Legendplex | Legendplex</h1>
              <p className='card-text'>At Bitcoin Suisse, your assets are safe – always. Here’s why</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', objectFit: 'unset' }}/>
      </div>
    </main>
    
    <main className='main security-w'>
            <div className='container'>
                <div className="row mix">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                            <h4 className='mt-3' style={{ color: '#505050' }}>Minimal Counterparty Risk</h4>
                            <h6 className='mt-5 mb-3' style={{ fontWeight: '500', color: '#505050' }}>The Counterparty Bitcoin Suisse</h6>
                            <p className="card-text" style={{ color: '#505050' }}>Founded in 2013, Bitcoin Suisse is the Swiss crypto-finance and technology pioneer and market leader. Bitcoin Suisse has helped to shape the crypto and blockchain ecosystem in Switzerland and has been a driving force in the development of the ‘Crypto Valley’ and ‘Crypto Nation Switzerland’.</p>
                            <p className="card-text" style={{ color: '#505050' }}>Bitcoin Suisse is a Swiss crypto financial services provider and, as a member of the self-regulatory organization (SRO) “Verein zur Qualitätssicherung von Finanzdienstleistungen” (VQF), has been subject to Swiss AML regulations combating money laundering and terrorist financing since 2014.</p>
                            <p className='card-text' style={{ color: '#505050' }}>Bitcoin Suisse has a longstanding, largely self-funded and successful financial track record. After its successful Series A ending in July 2020, Bitcoin Suisse is most likely the strongest capitalized crypto financial service company in Europe with equity capital of over CHF 100m and no outstanding debt.</p>
                            <p className='card-text' style={{ color: '#505050' }}>Grant Thornton has been serving as the financial auditor of Bitcoin Suisse AG since 2017.</p>
                            <h6 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Trading on Bitcoin Suisse Online</h6>
                            <p className='card-text' style={{ color: '#505050' }}>As a broker, Bitcoin Suisse trades over the largest exchanges globally to find the most advantageous order execution for our clients.</p>
                            <p className='card-text' style={{ color: '#505050' }}>Compared to trading on a single exchange, we provide “Best Execution” for your trades across the most reputable exchanges globally. This means, that we will select one or more exchanges that provide you with a combination of the best possible market price, liquidity and speed of execution – guaranteed by us.</p>
                            <p className='card-text' style={{ color: '#505050' }}>We take over the risk of dealing with exchanges for you, so you can trade worry-free.</p>
                            <h6 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Custody on Bitcoin Suisse Trading and Brokerage accounts</h6>
                            <p className='card-text' style={{ color: '#505050' }}>Bitcoin Suisse holds the vast majority of client assets in segregated accounts such that they would not be affected in the event of a potential default of Bitcoin Suisse. Furthermore, all fiat and crypto assets that would be considered public deposits under Swiss banking laws are protected by a bank guarantee from a Swiss bank as per art. 5 para. 3 let. f Banking Ordinance.</p>
                            <h6 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Custody in the Bitcoin Suisse Vault</h6>
                            <p className='card-text' style={{ color: '#505050' }}>Bitcoin Suisse provides institutional-grade, ISAE 3402 audited custody for crypto assets in the time- and penetration-tested Bitcoin Suisse Vault. Together with Swiss Crypto Vault AG, Bitcoin Suisse has developed a proprietary secure cold storage concept applying the highest standards of cryptographic, IT and physical security as well as multi-party-signing processes. It leverages Bitcoin Suisse’s longstanding track record of crypto asset experience and the expertise of its technology division comprising software, infrastructure and security specialists focusing on blockchain technology.</p>
                            <p className='card-text' style={{ color: '#505050' }}>We are working with Swiss public notaries to enable succession and inheritance planning in an individually controlled set-up. This prevents that crypto assets are lost in case the original owner deceases.</p>
                            <p className='card-text' style={{ color: '#505050' }}>Assets that are stored in the Bitcoin Suisse Vault are held in cold storage on separated blockchain addresses and controlled directly by the owner. Transaction authorizations enforce custom multi-person approval workflows and time delays based on the owner’s unique requirements.</p>
                            <p className='card-text' style={{ color: '#505050', paddingBottom: '10px', marginBottom: '30px', borderBottom: '1px solid #000' }}>Read more about Bitcoin Suisse Vault here.</p>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img src='/images/demo-banner-27.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
    </main>
    <main className='main security-w' style={{ backgroundColor: '#ffffff'}}>
            <div className='container'>
                <div className="row mix">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                            <h5 className='mt-5 mb-3' style={{ fontWeight: '500' }}>User Account Protection</h5>
                            <p className="card-text" style={{ color: '#505050' }}>Bitcoin Suisse applies the required physical, technical and procedural standards for safekeeping and trading crypto assets. It follows industry best practices, such as:</p>
                            <h5 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Two-Factor Authentication (2FA) for Account Login</h5>
                            <p className='card-text' style={{ color: '#505050' }}>To guarantee safety of your account, we enforce time-based 2-factor authentication using mobile applications such as Authy. This means that in addition to your username and password, you will enter a code from your authenticator app on your mobile phone, adding an extra layer of security for your account.</p>
                            <h5 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Additional Two-Factor Authentication (2FA) for Account Withdrawals</h5>
                            <p className='card-text' style={{ color: '#505050', paddingBottom: '10px', marginBottom: '50px', borderBottom: '1px solid #000' }}>All account withdrawals have to be confirmed by entering two-factor authentication and e-mail.</p>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img src='/images/demo-banner-28.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
    </main>
    <main className='main security-w'>
            <div className='container'>
                <div className="row mix">
                    <div className="col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                            <h5 className='mt-5 mb-3' style={{ fontWeight: '500' }}>Data Security & Privacy</h5>
                            <p className="card-text" style={{ color: '#505050' }}>Bitcoin Suisse adheres to industry best practices. We take all reasonable technical and organizational security measures to protect your stored data against manipulation, loss, or unauthorized third-party access. We also take internal data privacy very seriously. Our employees and service providers are required to maintain secrecy and to comply with the applicable data protection legislation.</p>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img src='/images/demo-banner-29.svg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                </div>
            </div>
    </main>
    <main className='main' style={{ backgroundColor: '#ffffff'}}>
      <div className='container answer-question-wrapper'>
        <div className="row">
            <div className='col-md-12'>
                <h4>Need help?</h4>
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
    <BreadCrumb />
    <Footer />
    </>
  )
}