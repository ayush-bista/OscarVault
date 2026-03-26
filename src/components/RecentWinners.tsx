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

export default function RecentWinners() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-primary font-semibold uppercase tracking-[0.2em]">
                98th Academy Awards
              </span>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Oscar Winners{" "}
            <span className="gold-gradient-text">2026</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md">
            Held on March 16, 2026 at the Dolby® Theatre, Hollywood — Hosted by Conan O'Brien
          </p>
        </motion.div>

        {/* Movie Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {oscarRecentWinners.map((item, i) => {
            const movieId = filmIdMap[item.film];
            const cardClass = "card-cinematic group block cursor-pointer";

            return (
              <motion.div key={`${item.category}-${i}`} variants={cardVariant}>
                {movieId ? (
                  <Link to={`/movie/${movieId}`} className={cardClass}>
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={item.posterUrl}
                        alt={item.film}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                        <Trophy className="w-3 h-3" />
                        <span className="hidden sm:inline">
                          {categoryIcons[item.category] || "🏆"}
                        </span>
                      </div>

                      {item.note && (
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
                          {item.note}
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.winner}
                        </p>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {item.film}
                      </h3>
                      <p className="text-xs text-primary mt-1 font-medium line-clamp-1">
                        {item.category}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className={cardClass}>
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={item.posterUrl}
                        alt={item.film}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                        <Trophy className="w-3 h-3" />
                        <span className="hidden sm:inline">
                          {categoryIcons[item.category] || "🏆"}
                        </span>
                      </div>

                      {item.note && (
                        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
                          {item.note}
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.winner}
                        </p>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {item.film}
                      </h3>
                      <p className="text-xs text-primary mt-1 font-medium line-clamp-1">
                        {item.category}
                      </p>
                    </div>
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
