import { useState, useEffect } from 'react';
import { ChevronUp, PhoneCall } from 'lucide-react';
import whatsappIcon from '@/assets/logos/whatsup.png';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
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
          href="tel:+919876543210"
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
          <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
        </a>
      </div>
    </>
  );
}