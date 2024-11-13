import Experience from './Components/Experience';
import Header from './Components/Header'
import Hero from './Components/Hero';
import Projects from './Components/projects';
import ScrollToTop from './Components/scrollToTop';

export default function Home() {
  return (
    <div className='px-40'>
    <section id="header">
     <Header/> 
    </section>
    
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
        <Hero />
      </section>
    <section id="experience" className="min-h-screen flex items-center justify-center bg-background">
       <Experience/>
     </section>
      <section id="projects" className="min-h-screen flex items-center justify-center bg-background">
        <Projects/>
      </section>

      
      <ScrollToTop />
    </div>
  );
}
