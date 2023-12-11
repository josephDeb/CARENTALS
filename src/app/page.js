import Header from './components/Header';
import Hero from './components/Hero';
import Cars from './components/Cars';
import About from './components/About'; 
import Why from './components/Why';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn';
import JosephdatDev from './components/JosephdatDev';



export default function Home() {
  return (
   <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden scroll-smooth'>
   
    
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Cta />
      <Footer />
      <JosephdatDev />
      <BackToTopBtn />
     
      
      
   </main>  
  )
}
