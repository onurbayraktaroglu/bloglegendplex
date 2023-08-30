import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DetailPage() {
  return (
    <>
    <Navigation />
    <main className='main' style={{ marginTop: '72px' }}>
    <div>Hello Detaill Page</div>
    </main>
    
    <Footer />
    </>
  )
}