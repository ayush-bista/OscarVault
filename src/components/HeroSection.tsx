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
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroBg}
          alt="Oscar ceremony"
          className="w-full h-full object-cover scale-105 opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 md:px-12">
        <motion.div style={{ opacity }} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-10"
          >
            <Trophy className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Nearly a Century of Excellence</span>
          </motion.div>

          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-[100px] font-bold leading-[0.9] mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="text-white/95">Where Cinema's</span>
            <br />
            <span className="gold-gradient-text filter drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">Legacies Live</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Journey through the definitive archive of Academy Award winners. From the silent era's pioneers to today's visionaries—every statuette tells a story of monumental achievement.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/browse"
              className="group relative inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.4)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Play className="w-4 h-4 fill-current" />
              Explore Archive
            </Link>
            <Link
              to="/most-awarded"
              className="group inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-black text-xs uppercase tracking-widest transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            >
              <Crown className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Hall of Fame
            </Link>
          </motion.div>

          {/* Enhanced Stats Dashboard */}
          <motion.div
            className="flex flex-wrap items-center gap-x-16 gap-y-8 mt-20 border-t border-white/5 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { label: "Oscar Editions", value: "98" },
              { label: "Golden Statuettes", value: "3,500+" },
              { label: "Honored Crafts", value: "24" },
            ].map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="font-display text-3xl md:text-4xl font-bold gold-gradient-text transition-all duration-500 group-hover:scale-110 group-hover:tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.3em] mt-3">{stat.label}</div>
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
