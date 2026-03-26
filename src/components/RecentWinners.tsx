import { Link } from "react-router-dom";
import { Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { oscarRecentWinners } from "@/data/oscar-2025";

const categoryIcons: Record<string, string> = {
  "Best Picture": "🏆",
  "Best Director": "🎬",
  "Best Actor": "🎭",
  "Best Actress": "👑",
  "Best Supporting Actor": "🌟",
  "Best Supporting Actress": "💫",
  "Best Original Screenplay": "✍️",
  "Best Adapted Screenplay": "📝",
  "Best Animated Feature": "🎨",
  "Best International Feature": "🌍",
  "Best Cinematography": "📷",
  "Best Film Editing": "✂️",
  "Best Original Score": "🎵",
  "Best Original Song": "🎤",
  "Best Sound": "🔊",
  "Best Visual Effects": "✨",
  "Best Production Design": "🏛️",
  "Best Costume Design": "👗",
  "Best Makeup and Hairstyling": "💄",
  "Best Documentary Feature": "📹",
  "Best Casting": "🎯",
};

const filmIdMap: Record<string, string> = {
  "One Battle After Another": "one-battle-after-another",
  "Sinners": "sinners",
  "Hamnet": "hamnet",
  "Weapons": "weapons",
  "KPop Demon Hunters": "kpop-demon-hunters",
  "Sentimental Value": "sentimental-value",
  "F1": "f1-movie",
  "Avatar: Fire and Ash": "avatar-fire-and-ash",
  "Frankenstein": "frankenstein-2026",
  "Mr. Nobody Against Putin": "mr-nobody-against-putin",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const WinnerCardContent = ({ item }: { item: typeof oscarRecentWinners[0] }) => (
  <>
    <div className="relative aspect-[2/3] overflow-hidden">
      <img
        src={item.posterUrl}
        alt={item.film}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category badge */}
      <div className="absolute top-3 right-3 z-20">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black shadow-lg">
          <span className="text-primary">{categoryIcons[item.category as keyof typeof categoryIcons] || "🏆"}</span>
          <span className="hidden sm:inline uppercase tracking-[0.1em]">{item.category}</span>
        </div>
      </div>

      {item.note && (
        <div className="absolute top-3 left-3 z-20">
          <div className="px-2.5 py-1 rounded-xl bg-primary text-primary-foreground text-[8px] font-black uppercase tracking-[0.15em] shadow-lg">
            {item.note}
          </div>
        </div>
      )}

      {/* Hover overlay details - Simplified */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em] mb-1.5">Honored For</p>
        <p className="text-xs text-white font-bold leading-tight italic">
          "{item.winner}"
        </p>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-display text-sm font-bold text-foreground line-clamp-1 group-hover:gold-gradient-text transition-all duration-300">
        {item.film}
      </h3>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors">{item.category}</span>
      </div>
    </div>
  </>
);

export default function RecentWinners() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[100px] rounded-full -z-10 -translate-x-1/2" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">
                  The 98th Academy Awards
                </span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Latest <span className="gold-gradient-text">Winners</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg text-lg leading-relaxed">
              Relive the magic of the 2026 Oscars. Explore the masterpieces that captured the world's imagination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              to="/browse?year=2026"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary/50 border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">View All 2026 Winners</span>
              <Trophy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        </div>

        {/* Movie Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {oscarRecentWinners.map((item, i) => {
            const movieId = filmIdMap[item.film];
            const cardClass = "card-cinematic group block relative rounded-2xl overflow-hidden bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]";

            return (
              <motion.div key={`${item.category}-${i}`} variants={cardVariant}>
                {movieId ? (
                  <Link to={`/movie/${movieId}`} className={cardClass}>
                    <WinnerCardContent item={item} />
                  </Link>
                ) : (
                  <div className={cardClass}>
                    <WinnerCardContent item={item} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
