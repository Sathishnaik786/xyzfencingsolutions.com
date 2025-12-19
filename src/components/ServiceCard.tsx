import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
  index?: number;
}

export function ServiceCard({ title, description, icon: Icon, image, link, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group elegant-card overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-medium group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
