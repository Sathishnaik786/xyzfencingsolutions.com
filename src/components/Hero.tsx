import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2532&auto=format&fit=crop"
          alt="Premium fencing installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 luxury-container text-center md:text-left pt-8 md:pt-0">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-4 md:mb-8"
          >
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">India's Most Trusted Fencing Company</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground mb-4 md:mb-6"
          >
            Reliable Fencing Solutions
            <span className="block text-accent">for Homes, Farms & Industries</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl"
          >
            We design and install durable fencing systems using quality materials, skilled workmanship, and years of on-ground experience across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                Get a Free Site Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-primary"
              >
                View Our Projects
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-10 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-primary-foreground/20"
          >
            <div className="flex items-center gap-3 min-w-[140px]">
              <div className="flex items-center justify-center bg-accent/20 p-2 rounded-full">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">500+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 whitespace-nowrap">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-[140px]">
              <div className="flex items-center justify-center bg-accent/20 p-2 rounded-full">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">18+</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 whitespace-nowrap">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3 min-w-[140px]">
              <div className="flex items-center justify-center bg-accent/20 p-2 rounded-full">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">100%</div>
                <div className="text-xs md:text-sm text-primary-foreground/70 whitespace-nowrap">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
