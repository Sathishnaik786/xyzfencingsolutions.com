import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  showPhone?: boolean;
}

export function CTASection({
  title = "Ready to Secure Your Property?",
  subtitle = "Get a free consultation and quote from our expert team. We're here to help you choose the perfect fencing solution.",
  primaryCta = "Get Free Quote",
  secondaryCta = "Call Us Now",
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2340&auto=format&fit=crop"
          alt="Fencing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 luxury-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-primary-foreground mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                {primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            {showPhone && (
              <a href="tel:+9390007645">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {secondaryCta}
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
