import { Link } from "react-router-dom";
import { Trophy, Play, Crown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-end pb-24 overflow-hidden">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroBg}
          alt="Oscar ceremony"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div style={{ opacity }}>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-8 shadow-gold"
            >
              <Trophy className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Celebrating Cinema Excellence</span>
            </motion.div>

            <motion.h1
              className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <span className="text-foreground/90">The Ultimate</span>
              <br />
              <span className="gold-gradient-text drop-shadow-2xl">Oscar Vault</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Immerse yourself in the definitive archive of Academy Award winners. From the golden-age classics of yesteryear to the groundbreaking masterpieces of today.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/browse"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(253,185,49,0.4)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play className="w-5 h-5 fill-current" />
                Explore the Archive
              </Link>
              <Link
                to="/most-awarded"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-primary/30 bg-secondary/30 backdrop-blur-xl text-primary font-bold text-sm transition-all duration-500 hover:scale-105 hover:bg-primary/10 hover:border-primary/50"
              >
                <Crown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Hall of Fame
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-12 mt-20 border-t border-white/5 pt-10 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { label: "Years of History", value: "96" },
              { label: "Award Categories", value: "23" },
              { label: "Masterpieces", value: "3,000+" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="font-display text-3xl md:text-4xl font-bold gold-gradient-text transition-transform group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-2 opacity-60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
