import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message Sent!', description: 'We will get back to you within 24 hours.' });
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop"
            alt="Contact us for fencing services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        </div>
        <div className="luxury-container text-center relative z-10">
          <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">Contact Us</span><h1 className="mt-4 text-primary-foreground">Request a Free Site Visit & Quotation</h1></AnimatedSection>
        </div>
      </section>
      <section className="section-padding">
        <div className="luxury-container">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <AnimatedSection direction="left">
              <h2 className="mb-6">Request a Free Site Visit & Quotation</h2>
              <p className="text-muted-foreground mb-8">Contact us to discuss your fencing requirements. Our team will visit the site, understand your needs, and provide a clear and competitive quotation.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Call Us</div><a href="tel:918367447870" className="text-muted-foreground hover:text-primary">+918367447870</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Email</div><a href="mailto:xyzfencingsolutions@gmail.com" className="text-muted-foreground hover:text-primary">xyzfencingsolutions@gmail.com</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Address</div><span className="text-muted-foreground break-words">7th Floor, Dallas Centre Rd, opp. t hub, Silpa Gram Craft Village, Gachibowli, Hyderabad, Telangana 500081, Sector 5, Gurugram 122001</span></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Working Hours</div><span className="text-muted-foreground break-words">Monday – Saturday | 9:00 AM – 7:00 PM</span></div></div>
                                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Service Areas</div><span className="text-muted-foreground break-words">As per project location</span></div></div>
              </div>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium mb-2">Full Name</label><Input placeholder="Enter Your Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                  <div><label className="block text-sm font-medium mb-2">Phone Number</label><Input placeholder="+91 98XXXXXX10" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required /></div>
                </div>
                <div><label className="block text-sm font-medium mb-2">Email Address</label><Input type="email" placeholder="Enter your email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
                <div><label className="block text-sm font-medium mb-2">Type of Fencing</label><select className="w-full border border-input rounded-lg px-4 py-2 bg-background min-w-0" value={form.service} onChange={e => setForm({...form, service: e.target.value})}><option value="">Select a service</option><option>Chain Link Fencing</option><option>Barbed Wire Fencing</option><option>Solar Fencing</option><option>Farm & Agricultural Fencing</option><option>Industrial Boundary Fencing</option><option>Compound Wall Fencing</option></select></div>
                <div><label className="block text-sm font-medium mb-2">Message</label><Textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      {/* Main content */}
      <main>
        <section className="relative pt-32 pb-16 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop"
              alt="Contact us for fencing services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
          </div>
          <div className="luxury-container text-center relative z-10">
            <AnimatedSection><span className="text-accent font-medium tracking-wider uppercase text-sm">Contact Us</span><h1 className="mt-4 text-primary-foreground">Request a Free Site Visit & Quotation</h1></AnimatedSection>
          </div>
        </section>
        <section className="section-padding">
          <div className="luxury-container">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <AnimatedSection direction="left">
                <h2 className="mb-6">Request a Free Site Visit & Quotation</h2>
                <p className="text-muted-foreground mb-8">Contact us to discuss your fencing requirements. Our team will visit the site, understand your needs, and provide a clear and competitive quotation.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Call Us</div><a href="tel:918367447870" className="text-muted-foreground hover:text-primary">+918367447870</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Email</div><a href="mailto:xyzfencingsolutions@gmail.com" className="text-muted-foreground hover:text-primary">xyzfencingsolutions@gmail.com</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Address</div><span className="text-muted-foreground break-words">7th Floor, Dallas Centre Rd, opp. t hub, Silpa Gram Craft Village, Gachibowli, Hyderabad, Telangana 500081, Sector 5, Gurugram 122001</span></div></div>
                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Working Hours</div><span className="text-muted-foreground break-words">Monday – Saturday | 9:00 AM – 7:00 PM</span></div></div>
                                  <div className="flex items-start gap-4"><div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-foreground" /></div><div><div className="font-semibold">Service Areas</div><span className="text-muted-foreground break-words">As per project location</span></div></div>
                </div>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"><MessageCircle className="w-5 h-5" /> Chat on WhatsApp</a>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2}>
                <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium mb-2">Full Name</label><Input placeholder="Enter Your Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                    <div><label className="block text-sm font-medium mb-2">Phone Number</label><Input placeholder="+91 98XXXXXX10" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required /></div>
                  </div>
                  <div><label className="block text-sm font-medium mb-2">Email Address</label><Input type="email" placeholder="Enter your email address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
                  <div><label className="block text-sm font-medium mb-2">Type of Fencing</label><select className="w-full border border-input rounded-lg px-4 py-2 bg-background min-w-0" value={form.service} onChange={e => setForm({...form, service: e.target.value})}><option value="">Select a service</option><option>Chain Link Fencing</option><option>Barbed Wire Fencing</option><option>Solar Fencing</option><option>Farm & Agricultural Fencing</option><option>Industrial Boundary Fencing</option><option>Compound Wall Fencing</option></select></div>
                  <div><label className="block text-sm font-medium mb-2">Message</label><Textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></div>
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Buttons */}
      {/* Left Side - Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-6 bottom-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Right Side - WhatsApp and Call */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        {/* Call Button */}
        <a
          href="tel:918367447870"
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
          aria-label="Call us"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
