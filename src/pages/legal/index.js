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

export default function Legal() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big careers-w' style={{ marginTop: '70px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Legal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto', objectFit: 'unset' }}/>
      </div>
    </main>
    <main className='main primary-b'>
        <div className='container'>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>General Terms and Conditions</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Terms of Use</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Data Protection Policy</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Special Risks of Digital Assets</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Staking Terms and Conditions</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Payment Gateway Terms Version 2.1</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Payment Gateway Data Protection Policy</Link>
            <Link href="#" style={{ display: 'block', color: '#505050', fontWeight: '700', fontSize: '1.17em', paddingBottom: '15px' }}>Best Execution Policy</Link>
        </div>
    </main>
    
    <BreadCrumb />
    <Footer />
    </>
  )
}