import { Link } from "react-router-dom";
import { Trophy, Play, Crown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden">
      {/* Background with Cinematic Treatment */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <img
            src={heroBg}
            alt="Oscar ceremony"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
      </div>

      {/* Ambient Floating Glows */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">98 Years of Cinema Excellence</span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-foreground">The Ultimate</span>
            <br />
            <span className="gold-gradient-text">Oscar Archive</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover every Academy Award winner. From golden-age classics to modern masterpieces — explore, compare, and relive cinema history.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link
              to="/browse"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_4px_30px_-8px_hsla(43,72%,53%,0.4)] hover:scale-[1.02]"
            >
              <Play className="w-4 h-4" />
              Explore Winners
            </Link>
            <Link
              to="/most-awarded"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/20 bg-primary/10 text-primary font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Crown className="w-4 h-4" />
              Most Awarded Films
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="flex gap-10 mt-14 border-t border-border/50 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: "Years of Awards", value: "98" },
            { label: "Categories", value: "21+" },
            { label: "Films Honored", value: "3,500+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold gold-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
