import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function FeaturedSection() {
  const categoryList = [
    "Best Picture",
    "Best Director",
    "Best Actor",
    "Best Actress",
    "Best Supporting Actor",
    "Best Cinematography",
    "Best Original Score",
    "Best Visual Effects",
  ];

  return (
    <section className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Cinematic lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-2xl bg-primary/10 mb-6"
          >
            <Award className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Browse by <span className="gold-gradient-text">Category</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Dive deep into specific honors and discover the winners that shaped each craft.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categoryList.map((cat) => (
            <motion.div key={cat} variants={item}>
              <Link
                to={`/browse?category=${encodeURIComponent(cat)}`}
                className="group block relative p-6 rounded-2xl bg-card border border-white/5 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <span className="relative z-10 text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors tracking-wide uppercase">
                  {cat}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
