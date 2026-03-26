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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Award className="w-5 h-5 text-primary" />
          <span className="text-sm text-primary font-medium uppercase tracking-[0.2em]">
            Browse by Category
          </span>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categoryList.map((cat) => (
            <motion.div key={cat} variants={item}>
              <Link
                to={`/browse?category=${encodeURIComponent(cat)}`}
                className="block px-4 py-4 rounded-xl bg-card border border-border text-sm font-medium text-secondary-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 text-center"
              >
                {cat}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
