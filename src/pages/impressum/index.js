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

export default function Impressum() {
  return (
    <>
    <Navigation />
    <main className='main primary-b' style={{ marginTop: '70px' }}>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontWeight: '700' }}>Impressum</h1>
                        <p style={{ marginTop: '20px', marginBottom: '5px', fontSize: '#262626', fontSize: '20px' }}>Pioneering the crypto asset industry since 2013, Bitcoin Suisse provides clients with unique access to the latest innovations, combined with stable infrastructure and a large team of expert support. As one of the oldest and most trusted crypto companies in the world, we’ve been building throughout the many market cycles over the past decade. What guides us are not the short-term opportunities, but our desire to create a world where decentralized finance has a net positive impact on consumers, economy, and society.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <main className='main primary-c'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                    <div className='row' style={{ width: '100%' }}>
                        <div className='col-md-6'>
                            &nbsp;
                        </div>
                        <div className='col-md-6'>
                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>Office</p>
                            <span>Bitcoin Suisse AG</span>
                            <span>6300 Zug</span>
                            <span>Switzerland</span>

                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>Calls from within Switzerland (toll-free):</p>
                            <Link href="#" style={{ color: '#505050', fontSize: '16px' }}>0800 800 008</Link>
                            
                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>Calls from abroad:</p>
                            <Link href="#" style={{ color: '#505050', fontSize: '16px' }}>+41 41 660 00 00</Link>

                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>Email</p>
                            <Link href="mailto:support@bitcoinsuisse.com" style={{ color: '#505050', fontSize: '16px' }}>support@bitcoinsuisse.com</Link>

                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>Company identification number (UID)</p>
                            <Link href="#" style={{ color: '#505050', fontSize: '16px' }}>CHE-472.481.853</Link>

                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>HR-Number</p>
                            <Link href="#" style={{ color: '#505050', fontSize: '16px' }}>CH-170.3.038.103-0</Link>

                            <p style={{ fontWeight: '700', color: '#505050', fontSize: '16px', marginTop: '20px', marginBottom: '5px' }}>VAT- Number</p>
                            <Link href="#" style={{ color: '#505050', fontSize: '16px' }}>CHE-472.481.853 MWST</Link>
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