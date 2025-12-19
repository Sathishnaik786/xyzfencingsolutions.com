import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';

const images = [
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format',
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format',
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format'
];

export default function Gallery() {
  return (
    <>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop"
            alt="Gallery of our fencing work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        </div>
        <div className="luxury-container text-center relative z-10">
          <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">Gallery</span><h1 className="mt-4 text-primary-foreground">Our Work on Site</h1></AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="luxury-container">
          <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">A glimpse of our completed and ongoing fencing works, showcasing real installations, materials used, and on-site execution quality.</p>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">{images.map((img, i) => <AnimatedSection key={i} delay={i * 0.1}><div className="image-hover rounded-lg overflow-hidden aspect-square"><img src={img} alt={`Gallery ${i+1}`} className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-300" loading="lazy" /></div></AnimatedSection>)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
