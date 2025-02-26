import './App.css';

import NavBar from './components/Navbar';
import LandingComponent from './components/LandingPage';
import VideoSection from './components/VideoSection';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import SpecializationSection from './components/SpecializationSection';
import IndustriesSection from './components/IndustriesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <NavBar />
    <LandingComponent />
    <VideoSection />
    <HeroSection />
    <FeatureSection />
    <SpecializationSection />
    <IndustriesSection />
    <Footer />
    </>
  )
}

export default App