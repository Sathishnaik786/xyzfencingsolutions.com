import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  index?: number;
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  image,
  index = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] relative"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
          <Quote className="w-5 h-5 text-accent-foreground" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-accent fill-accent' : 'text-muted'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role}, {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
