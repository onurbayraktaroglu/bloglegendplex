import Navigation from '../../components/Nav';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMoneyBillTrendUp, faMoneyBillTransfer, faShield } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import BreadCrumb from '@/components/BreadCrumb';
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Partnerships() {
  return (
    <>
    <Navigation />
    <main className='main bg-themes-main-wrapper-big careers-w' style={{ marginTop: '70px' }}>
      <div className='container' style={{ zIndex: '9', }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Supporting the Global Ecosystem</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-themes-big'>
      <img src='/images/demo-banner-26.jpeg' alt="..." resizeMode="contain" className="img-fluid rounded-start" style={{ width: '100%', height: 'auto' }}/>
      </div>
    </main>
    
    <main className='main'>
            <div className='container'>
                <div className="row">
                <div className="col-md-6" style={{ display: 'flex', alignItems: 'center', padding: '30px 20px' }}>
                    <div className="card-body pt-2" style={{ paddingTop: '20px' }}>
                      <p className='card-text' style={{ fontSize: '16px' }}>As a market leader in crypto-financial services, Bitcoin Suisse maintains strong relationships with the crypto and blockchain community in Switzerland and around the world. By supporting the global crypto ecosystem, we help drive innovation and offer our experience and support for crypto companies, foundations and tech teams as they build the future of finance.</p>
                      <p className='card-text' style={{ fontSize: '16px' }}>Bitcoin Suisse is also proud to actively support inter-governmental bodies, industry groups and other organizations in their efforts to develop crypto-financial technology.</p>
                    </div>
                </div>
                
                </div>
            </div>
    </main>
    <main className='main blog-content-w asa'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Brand Partnerships</h3>
          </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                    <img src='/images/demo-partner-01.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">SolarStratos</h5>
                    <p className="card-text pt-2">SolarStratos, based in Payerne, Switzerland, is a one-of-a-kind, groundbreaking technology and eco-venture that aims to accomplish a historic first in aviation history: To reach the stratosphere with a two-seated, exclusively solar powered aircraft. The Swiss non-profit is led by Raphaël Domjan, Swiss explorer and pioneer in solar mobility, and a team of pilots, engineers, and scientists. In pursuing its mission, SolarStratos paves the way for a clean energy future and demonstrates the huge, untapped potential of the sun as a source of energy.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-02.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Racing Unleashed</h5>
                    <p className="card-text pt-2">Racing Unleashed is an internationally active family company that is fully committed to the world of e-sports, combining state of the art simulators with professional simulation software and thus bring the real cockpit into the virtual world of motorsport.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-03.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">EVZ</h5>
                    <p className="card-text pt-2">Eissportverein Zug is a Swiss ice hockey club from Zug, which plays in the National League. In the 2021/22 season, EVZ celebrated its third title in the clubs history. The club plays its home games in the Bossard Arena. n the 2020/21 season, the club achieved the desired success: in the qualification, Zug was first in the table and determined the action in the league.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Business Partnerships</h3>
          </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                    <img src='/images/demo-partner-04.svg' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px', paddingBottom: '35px' }}/>
                    <h5 className="card-title pt-2">SolarStratos</h5>
                    <p className="card-text pt-2">SolarStratos, based in Payerne, Switzerland, is a one-of-a-kind, groundbreaking technology and eco-venture that aims to accomplish a historic first in aviation history: To reach the stratosphere with a two-seated, exclusively solar powered aircraft. The Swiss non-profit is led by Raphaël Domjan, Swiss explorer and pioneer in solar mobility, and a team of pilots, engineers, and scientists. In pursuing its mission, SolarStratos paves the way for a clean energy future and demonstrates the huge, untapped potential of the sun as a source of energy.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-05.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '100%', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Racing Unleashed</h5>
                    <p className="card-text pt-2">Racing Unleashed is an internationally active family company that is fully committed to the world of e-sports, combining state of the art simulators with professional simulation software and thus bring the real cockpit into the virtual world of motorsport.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Industry & Governmental Organizations</h3>
          </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                    <img src='/images/demo-partner-06.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Crypto Valley Association</h5>
                    <p className="card-text pt-2">The CVA is an independent, government-supported organization located in the Swiss canton of Zug. Its mission is to build the world’s leading ecosystem for blockchain and crypto-graphic technologies in Switzerland.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-07.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Swiss Blockchain Federation</h5>
                    <p className="card-text pt-2">The Swiss Blockchain Federation is a public–private partnership. Its objective is to promote the attractiveness of Switzerland as a location for blockchain-based activities and encourage the development of a secure and competitive legal framework.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-08.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Capital Markets & Technology Association</h5>
                    <p className="card-text pt-2">An independent association formed by leading actors from Switzerlands financial, technological and legal sectors to create common standards around issuing, distributing and trading securities in the form of tokens.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-09.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '100%', maxHeight: '80px', paddingBottom: '35px' }}/>
                    <h5 className="card-title pt-2">Open VASP Association</h5>
                    <p className="card-text pt-2">The OpenVASP Association has the objective to establish and maintain an open protocol for the transmission of transaction information between Virtual Asset Service Providers (VASPs) and other parties. Bitcoin Suisse is a founding member of the OpenVASP Association.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-10.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Multichain Asset Managers Association</h5>
                    <p className="card-text pt-2">MAMA is a global community of organisations working to transform asset management through blockchain technology. The organization aims to bring about an appropriate regulatory and supervisory regime for on-chain asset management.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-11.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '100%', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Zuger Wirtschaftskammer</h5>
                    <p className="card-text pt-2">As an independent, active association representing the local economy in the canton of Zug, the Zug Chamber of Commerce represents its members’ economic and political interests towards public authorities, local political parties and society by lobbying for beneficial economic conditions for promoting Zug as an attractive business location.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-12.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '100%', maxHeight: '80px'}}/>
                    <h5 className="card-title pt-2">Blockchain Nation Switzerland</h5>
                    <p className="card-text pt-2">Blockchain Nation Switzerland, powered by Innosuisse, is the federal innovation agency’s promotion program in the domain of blockchain technology. The goal is to generate ideas and drive them forward, so that they turn into actual projects or startups.</p>
                </div>
            </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                <img src='/images/demo-partner-13.png' style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Bitcoin Association Switzerland</h5>
                    <p className="card-text pt-2">Founded in late 2013 the Bitcoin Association Switzerland is the oldest Fintech association in Switzerland and one of the oldest still active Bitcoin Associations in the world.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </main>
    <main className='main blog-content-w'>
    <div className="card mb-3 our-types-overview">
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
          <h3 className="card-title mt-3" style={{ fontWeight: '600' }}>Crypto Ecosystem Support</h3>
          </div>
            <div className="col-md-3 pt-2 mt-2">
                <div className="card-body pt-2">
                    <img src="/images/demo-partner-15.png" style={{ padding: '6px', borderRadius: '20px' ,maxWidth: '80px', maxHeight: '80px' }}/>
                    <h5 className="card-title pt-2">Ubinetic</h5>
                    <p className="card-text pt-2">Built with Tezos smart contracts, ubinetic makes it possible to issue synthetic assets on the blockchain. As a data transmitter, Bitcoin Suisse helps provide data that is independtly verified to the ubinetic oracle service for decentralized applications.</p>
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