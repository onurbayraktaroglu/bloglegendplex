import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    
  return (
    <><div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="footer-brand col-lg-6">
                <div className="row">
                <div className="col-12 col-md-6">
                    <Image src="/images/legendplex-logo.png" width={200} height={60} alt='LegendPlex'/>
                    <p style={{ lineHeight: '30px' }}>Bitcoin Suisse AG <br></br>Grafenauweg 12<br></br>6300 Zug<br></br>Switzerland</p>
                </div>
                <div className="col-12 col-md-6">
                    <span className="footer-menu-title">OFFERINGS</span>
                    <ul>
                        <li><Link href="/buy-sell-cryptocurrencies">Bitcoin Suisse Online</Link></li>
                        <li><Link href="/">Bitcoin Suisse App</Link></li>
                        <li><Link href="/staking">Staking</Link></li>
                        <li><Link href="/vault">Custody</Link></li>
                        <li><Link href="/trading">Trading</Link></li>
                        <li><Link href="/payment">Bitcoin Suisse Pay</Link></li>
                        <li><Link href="/tokenization">Tokenization</Link></li>
                        <li><Link href="/cryptofranc">CryptoFranc</Link></li>
                    </ul>
                </div>
                </div>
                
            </div>
            
          <div className="col-lg-6">
            <div className="row">
                <div className="col-6">
                  <div className='row'>
                    <div className='col-12'>
                    <span className="footer-menu-title">EXISTING CLIENT</span>
                    <ul>
                        <li><Link href="#">Login</Link></li>
                    </ul>
                    </div>
                    <div className='col-12'>
                    <span className="footer-menu-title">SOCIAL MEDIA</span>
                    <ul>
                        <li><Link href="#">Twitter</Link></li>
                        <li><Link href="#">LinkedIn</Link></li>
                        <li><Link href="#">Facebook</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                        <li><Link href="#">Telegram</Link></li>
                    </ul>
                    </div>
                  </div>
                    
                    
                </div>
                <div className="col-6">
                    <div className='row'>
                      <div className='col-12'>
                      <span>ABOUT US</span>
                      <ul>
                          <li><Link href="/news">News & Blog</Link></li>
                          <li><Link href="/newsletters">Newsletters</Link></li>
                          <li><Link href="#">Support</Link></li>
                          <li><Link href="/contact">Contact</Link></li>
                          <li><Link href="/research">Research</Link></li>
                          <li><Link href="/team">Team</Link></li>
                          <li><Link href="/careers">Careers</Link></li>
                          <li><Link href="/partnerships">Partnership Page</Link></li>
                      </ul>
                      </div>
                      <div className='col-12'>
                      <span>INFO</span>
                      <ul>
                          <li><Link href="/impressum">Impressum</Link></li>
                          <li><Link href="/legal">Legal</Link></li>
                          <li><Link href="/security">Security</Link></li>
                      </ul>
                      </div>
                    </div>
                    
                </div>
            </div>
          </div>
          
          </div>
        </div>
      </div><div className="footer-copyright">
              <span>Copyright ©  LegendPlex – 2023</span>
          </div></>
  )
}

export default Footer;