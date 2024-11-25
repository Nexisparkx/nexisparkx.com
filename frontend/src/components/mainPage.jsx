import Navbar from './Navbar'
import Footer from './Footer';
import LandingPage from './companyThought';
import HeroSection from './HeroSection';
import Projects from './Projects/Projects';
import CompanyVision from './CompanyVision';
import CompanyStats from './CompanyStats';
import InspirationalQuote from './InspirationalQuote';
import Services from './Services/Services';

function MainPage(){
    return (
        <div> 
        <HeroSection />
        <InspirationalQuote />
        <CompanyVision />
        <Services />
        <LandingPage />
        <CompanyStats />
        <Projects />
      
        </div>
    )
}

export default MainPage;