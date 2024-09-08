import Navbar from '../components/Navbar'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import HomeSection from './HomeSection'
import ProjectsSection from './ProjectsSection'


function LandingPage() {
  return (
    <>
    <div className="font-sans">
      <Navbar />
      <section id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <HomeSection />
      </section>
      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
        <AboutSection />
      </section>
      <section id="projects" className="min-h-screen bg-gray-200 flex items-center justify-center">
        <ProjectsSection />
      </section>
      <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
        <ContactSection />
      </section>
    </div>    
    </>
  )
}

export default LandingPage
