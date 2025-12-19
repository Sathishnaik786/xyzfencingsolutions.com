import { AnimatedSection } from '@/components/AnimatedSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { Link2, Shield, Zap, Tractor, Factory, Home } from 'lucide-react';

const services = [
  { title: 'Chain Link Fencing', description: 'Chain link fencing is a strong and economical solution widely used for residential plots, industrial premises, schools, and open lands. We use high-quality GI coated wires with proper tensioning and concrete pole support to ensure durability and security.', icon: Link2, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format', link: '/contact' },
  { title: 'Barbed Wire Fencing', description: 'Barbed wire fencing is ideal for agricultural lands, farms, and large boundary areas. It provides effective protection at a lower cost and is installed with reinforced poles to withstand Indian weather conditions.', icon: Shield, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format', link: '/contact' },
  { title: 'Solar Fencing', description: 'Solar fencing offers an advanced security solution for farms, warehouses, and restricted areas. Our solar fencing systems are designed with safety controls and reliable power units suitable for rural and semi-urban locations.', icon: Zap, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format', link: '/contact' },
  { title: 'Farm & Agricultural Fencing', description: 'We provide customized fencing solutions for agricultural lands to protect crops from animals and unauthorized access. Our designs focus on cost efficiency, strength and easy maintenance.', icon: Tractor, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format', link: '/contact' },
  { title: 'Industrial Boundary Fencing', description: 'Industrial fencing requires high strength and compliance with safety standards. We execute fencing projects for factories, warehouses, and commercial sites using heavy-duty materials and professional installation methods.', icon: Factory, image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format', link: '/contact' },
  { title: 'Compound Wall Fencing', description: 'Compound wall fencing combines masonry work with fencing systems to deliver both security and appearance. Suitable for residential layouts, commercial plots, and institutions.', icon: Home, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format', link: '/contact' }
];

export default function Services() {
  return (
    <>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop"
            alt="Our fencing services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        </div>
        <div className="luxury-container text-center relative z-10">
          <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">Our Services</span><h1 className="mt-4 text-primary-foreground">Premium Fencing Solutions</h1></AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, i) => <ServiceCard key={service.title} {...service} index={i} />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
