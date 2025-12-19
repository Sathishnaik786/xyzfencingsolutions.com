import { Hero } from '@/components/Hero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Award, Clock, Link2, Zap, Factory, Tractor, Building2, Home as HomeIcon } from 'lucide-react';

const services = [
  { title: 'Chain Link Fencing', description: 'Durable and cost-effective security fencing for all property types.', icon: Link2, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format', link: '/services#chain-link' },
  { title: 'Barbed Wire Fencing', description: 'High-security perimeter protection for industrial and agricultural use.', icon: Shield, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format', link: '/services#barbed-wire' },
  { title: 'Solar Fencing', description: 'Advanced security solution with solar-powered electric fencing.', icon: Zap, image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format', link: '/services#solar' },
  { title: 'Farm & Agricultural Fencing', description: 'Specialized agricultural fencing to protect crops and livestock.', icon: Tractor, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format', link: '/services#farm' },
  { title: 'Industrial Boundary Fencing', description: 'Heavy-duty boundary solutions for factories and warehouses.', icon: Factory, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format', link: '/services#industrial' },
  { title: 'Compound Wall Fencing', description: 'Elegant and secure compound walls for residential properties.', icon: HomeIcon, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format', link: '/services#compound-wall' },
];

const projects = [
  { title: 'Maruti Suzuki Factory Perimeter', category: 'Industrial', location: 'Gurugram, Haryana', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format' },
  { title: 'Amity University Campus', category: 'Institutional', location: 'Noida, UP', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format' },
  { title: 'Organic Farm Estate', category: 'Agricultural', location: 'Punjab', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format' },
  { title: 'DLF Cyber City', category: 'Commercial', location: 'Gurugram, Haryana', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Factory Owner', company: 'Kumar Industries', content: 'XYZ Fencing transformed our industrial security. Their chain link installation was completed ahead of schedule with exceptional quality.', rating: 5 },
  { name: 'Priya Sharma', role: 'Property Developer', company: 'Sharma Builders', content: 'We have worked with XYZ Fencing on multiple residential projects. Their compound walls are elegant and built to last.', rating: 5 },
  { name: 'Vikram Singh', role: 'Farm Owner', company: 'Singh Agro Farms', content: 'The solar fencing solution perfectly protects our 50-acre farm. Highly recommend their agricultural fencing services.', rating: 5 },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format" alt="Our craftsmanship" className="rounded-lg shadow-xl" />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="text-3xl sm:text-4xl font-serif font-bold">18+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <span className="text-accent font-medium tracking-wider uppercase text-sm">About XYZ Fencing</span>
              <h2 className="mt-4 mb-6">Trusted Fencing Contractors with Proven Experience</h2>
              <p className="text-muted-foreground mb-6">We are a professional fencing construction company delivering reliable boundary solutions for residential plots, agricultural lands, factories, and commercial properties. Our focus is on strength, safety, and long-term performance using materials suited for Indian conditions.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div className="text-sm text-muted-foreground">Experienced on-site installation team</div></div>
                <div className="flex items-start gap-3"><Users className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div className="text-sm text-muted-foreground">Quality GI wire & concrete pole materials</div></div>
                <div className="flex items-start gap-3"><Award className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div className="text-sm text-muted-foreground">Transparent pricing & timelines</div></div>
                <div className="flex items-start gap-3"><Tractor className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div className="text-sm text-muted-foreground">Suitable solutions for Indian terrain</div></div>
                <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div className="text-sm text-muted-foreground">Reliable after-installation support</div></div>
              </div>
              <Link to="/about"><Button variant="outline">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="luxury-container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="mt-4 mb-6">Comprehensive Fencing Solutions</h2>
            <p className="text-muted-foreground">From residential boundaries to industrial perimeters, we offer a complete range of fencing services tailored to your specific needs.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => <ServiceCard key={service.title} {...service} index={i} />)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div><span className="text-accent font-medium tracking-wider uppercase text-sm">Featured Projects</span><h2 className="mt-4">Our Recent Work</h2></div>
            <Link to="/projects"><Button variant="outline">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">{projects.map((project, i) => <ProjectCard key={project.title} {...project} index={i} />)}</div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="luxury-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ value: '500+', label: 'Projects Completed', icon: Building2 }, { value: '18+', label: 'Years Experience', icon: Clock }, { value: '50+', label: 'Expert Workers', icon: Users }, { value: '100%', label: 'Client Satisfaction', icon: Award }].map((stat) => (
              <AnimatedSection key={stat.label}><stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" /><div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2">{stat.value}</div><div className="text-primary-foreground/70">{stat.label}</div></AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="luxury-container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="mt-4 mb-6">What Our Clients Say</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">{testimonials.map((t, i) => <TestimonialCard key={t.name} {...t} index={i} />)}</div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
