import TickerBanner from '@/components/TickerBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DiagonalRibbons from '@/components/DiagonalRibbons';
import Services from '@/components/Services';
import Processus from '@/components/Processus';
import Promo from '@/components/Promo';
import About from '@/components/About';
import Footer from '@/components/Footer';
// WhatsAppButton removed as requested
import SplashWrapper from '@/components/SplashWrapper';

export default function Home() {
  return (
    <SplashWrapper>
      <TickerBanner />
      <Header />
      <main>
        <Hero />
        <DiagonalRibbons />
        <Services />
        <Processus />
        <Promo />
        <About />
      </main>
      <Footer />
    </SplashWrapper>
  );
}
