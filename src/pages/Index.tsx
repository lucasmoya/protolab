import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import ServicesSection from '@/components/ServicesSection';
import MarqueeSection from '@/components/MarqueeSection';
import ArticlesSection from '@/components/ArticlesSection';
// import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <MarqueeSection />
      <ServicesSection />
      <ArticlesSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
