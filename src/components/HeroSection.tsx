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
    <section ref={containerRef} className="relative min-h-screen flex items-end pb-12 overflow-hidden">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroBg}
          alt="Oscar ceremony"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-[15%] left-[5%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div style={{ opacity }}>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-6 shadow-gold"
            >
              <Trophy className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em]">Cinema Excellence</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <span className="text-foreground/90">The Ultimate</span>
              <br />
              <span className="gold-gradient-text drop-shadow-xl">Oscar Vault</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground/70 max-w-xl mb-10 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the definitive archive of Academy Award winners. From timeless classics to groundbreaking modern masterpieces.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/browse"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(253,185,49,0.3)]"
              >
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play className="w-4 h-4 fill-current" />
                Explore Archive
              </Link>
              <Link
                to="/most-awarded"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl border border-primary/30 bg-secondary/30 backdrop-blur-xl text-primary font-bold text-xs transition-all duration-500 hover:bg-primary/10 hover:border-primary/50"
              >
                <Crown className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Hall of Fame
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="flex items-center gap-12 mt-16 border-t border-white/5 pt-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { label: "History", value: "98" },
              { label: "Awards", value: "24" },
              { label: "Films", value: "3,500+" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="font-display text-2xl md:text-3xl font-bold gold-gradient-text transition-transform group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1.5 opacity-50">{stat.label}</div>
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
