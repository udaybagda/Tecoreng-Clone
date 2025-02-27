import './App.css';

import NavBar from './components/Navbar';
import LandingComponent from './components/LandingPage';
import VideoSection from './components/VideoSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeatureSection from './components/FeatureSection';
import SpecializationSection from './components/SpecializationSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import IndustriesSection from './components/IndustriesSection';
import AppreciationSection from './components/AppreciationSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <NavBar />
    <LandingComponent />
    <VideoSection />
    <HeroSection />
    <ServicesSection />
    <FeatureSection />
    <SpecializationSection />
    <SuccessStoriesSection />
    <IndustriesSection />
    <AppreciationSection />
    <Footer />
    </>
  )
}

export default App