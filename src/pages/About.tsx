import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop"
            alt="About our fencing company"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        </div>
        <div className="luxury-container text-center relative z-10">
          <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">About Us</span><h1 className="mt-4 text-primary-foreground">Building Strong Boundaries with Honest Work</h1></AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="luxury-container max-w-4xl">
          <AnimatedSection><p className="text-lg text-muted-foreground mb-8">With years of hands-on experience in fencing and boundary construction, we provide practical and cost-effective solutions tailored for Indian residential plots, farmlands, and industrial properties.</p><p className="text-lg text-muted-foreground">Our team understands local soil conditions, climate challenges, and safety requirements, ensuring every fencing project delivers long-term value and protection.</p></AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
}
