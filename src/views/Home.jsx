import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MatchSchedule from '../components/MatchSchedule';
import MainBanner from '../components/MainBanner';
import PlayersCarousel from '../components/PlayersCarousel';
import VideoSection from '../components/VideoSection';
import MdSection from '../components/MdSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MatchSchedule />
      <MainBanner />
      <PlayersCarousel />
      <VideoSection />
      <MdSection />
      <NewsSection />
      <Footer />
    </>
  );
}
