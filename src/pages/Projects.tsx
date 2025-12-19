import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/ProjectCard';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Industrial', 'Residential', 'Agricultural', 'Commercial'];

const projects = [
  { title: 'Maruti Suzuki Factory', category: 'Industrial', sector: 'Industrial', location: 'Gurugram, Haryana', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format' },
  { title: 'Luxury Villa Estate', category: 'Residential', sector: 'Residential', location: 'Delhi NCR', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format' },
  { title: 'Organic Farm', category: 'Agricultural', sector: 'Agricultural', location: 'Punjab', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format' },
  { title: 'Tech Park Campus', category: 'Commercial', sector: 'Industrial', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format' },
  { title: 'Steel Plant Perimeter', category: 'Industrial', sector: 'Industrial', location: 'Jamshedpur', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format' },
  { title: 'Gated Community', category: 'Residential', sector: 'Residential', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format' }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&auto=format&fit=crop"
            alt="Our completed fencing projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        </div>
        <div className="luxury-container text-center relative z-10">
          <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">Our Work</span><h1 className="mt-4 text-primary-foreground">Completed Fencing Projects Across Different Sectors</h1></AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="luxury-container">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">{categories.map(cat => <Button key={cat} className="text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2" variant={filter === cat ? 'default' : 'outline'} onClick={() => setFilter(cat)}>{cat}</Button>)}</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{filtered.map((project, i) => <ProjectCard key={project.title} {...project} index={i} />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
