import './App.css';
import LandingComponent from './components/LandingPage';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <NavBar />
    <LandingComponent />
    <HeroSection />
    <FeatureSection />
    <Footer />
    </>
  )
}

export default App