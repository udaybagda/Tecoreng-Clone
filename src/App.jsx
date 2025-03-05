import './App.css';

import NavBar from './components/Navbar';
import LandingComponent from './components/LandingPage';
import VideoSection from './components/VideoSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeatureSection from './components/FeatureSection';
import SpecializationSection from './components/SpecializationSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import IndustriesSection from './components/IndustriesSection';
import AppreciationSection from './components/AppreciationSection';
import InsightsSection from './components/InsightsSection';
import FormSection from './components/FormSection';
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
    <DevelopmentProcessSection />
    <SuccessStoriesSection />
    <IndustriesSection />
    <AppreciationSection />
    <InsightsSection />
    <FormSection />
    <Footer />
    </>
  )
}

export default App