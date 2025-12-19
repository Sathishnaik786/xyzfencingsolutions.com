import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  sector?: string;
  location: string;
  image: string;
  index?: number;
  onClick?: () => void;
}

export function ProjectCard({ title, category, sector, location, image, index = 0, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer elegant-card"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
            {title}
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            {sector && (
              <div className="text-primary-foreground/70 text-xs">
                Sector: {sector}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
      </div>
    </motion.div>
  );
}
