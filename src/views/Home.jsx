import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MatchSchedule from '../components/MatchSchedule';
import PlayersCarousel from '../components/PlayersCarousel';
import VideoSection from '../components/VideoSection';
import MdSection from '../components/MdSection';
import NewsSection from '../components/NewsSection';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <MatchSchedule />
      <HeroSection />      
      <PlayersCarousel />
      <VideoSection />
      <MdSection />
      <NewsSection />
      <Instagram />
      <Footer />
    </>
  );
}
