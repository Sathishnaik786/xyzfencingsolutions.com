import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const services = [
  { name: 'Chain Link Fencing', path: '/services#chain-link' },
  { name: 'Barbed Wire Fencing', path: '/services#barbed-wire' },
  { name: 'Solar Fencing', path: '/services#solar' },
  { name: 'Farm Fencing', path: '/services#farm' },
  { name: 'Industrial Fencing', path: '/services#industrial' },
  { name: 'Compound Wall', path: '/services#compound-wall' },
];

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Get Quote', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="luxury-container section-padding pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-serif text-2xl font-bold">xyzfencingsolutions</h3>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional Fencing & Boundary Construction Services
                          Serving Residential, Agricultural & Industrial Projects in India
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-accent" />
                <span className="text-primary-foreground/80">
                  1st Floor - North Part, Annapoorna Building<br />
                   4th Block, Jayanagar, Bengaluru, Karnataka 560011
                </span>
              </li>
              <li>
                <a href="tel:918367447870" className="flex gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5 shrink-0 text-accent" />
                  +918367447870
                </a>
              </li>
              <li>
                <a href="mailto:xyzfencingsolutions@gmail.com" className="flex gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5 shrink-0 text-accent" />
                  xyzfencingsolutions@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="luxury-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
