import { Trophy, TrendingUp, ArrowLeft, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { getMostAwardedMovies } from "@/data/oscar-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const rankBadgeColors = [
  "from-yellow-400 to-amber-500",   // #1 gold
  "from-gray-300 to-gray-400",      // #2 silver
  "from-amber-600 to-orange-500",   // #3 bronze
];

export default function MostAwarded() {
  const topMovies = getMostAwardedMovies().filter((m) => m.totalOscars > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Browse
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-[0.2em]">
              Hall of Fame
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Most Awarded{" "}
            <span className="gold-gradient-text">Films</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            The most celebrated films in Academy Award history, ranked by total
            Oscar wins across all categories.
          </p>
        </motion.div>

        {/* Top 3 Spotlight */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {topMovies.slice(0, 3).map((movie, i) => (
            <motion.div key={movie.id} variants={item}>
              <Link
                to={`/movie/${movie.id}`}
                className="relative group block rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsla(43,72%,53%,0.25)]"
              >
                <div className="aspect-[2/3] relative">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                  {/* Rank badge */}
                  <div
                    className={`absolute top-4 left-4 w-14 h-14 rounded-full bg-gradient-to-br ${rankBadgeColors[i]} flex items-center justify-center shadow-lg`}
                  >
                    <span className="font-display text-xl font-black text-white drop-shadow">
                      #{i + 1}
                    </span>
                  </div>

                  {/* Oscar count floating badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-primary/20">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-bold gold-gradient-text">
                      {movie.totalOscars}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {movie.totalOscars} Academy Awards
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {movie.year} · {movie.director}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-xs text-primary font-medium">
                        {movie.rating}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        · {movie.nominations} nominations
                      </span>
                    </div>
                    {/* Category pills */}
                    <div className="flex flex-wrap gap-1 mt-3 max-h-[3rem] overflow-hidden">
                      {movie.awards.slice(0, 3).map((a, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium"
                        >
                          {a.category}
                        </span>
                      ))}
                      {movie.awards.length > 3 && (
                        <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                          +{movie.awards.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-16 p-6 rounded-2xl bg-card border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: "Films in Rankings", value: topMovies.length },
            {
              label: "Total Oscars Won",
              value: topMovies.reduce((a, m) => a + m.totalOscars, 0),
            },
            {
              label: "Highest Single Film",
              value: `${topMovies[0]?.totalOscars || 0} wins`,
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gold-gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Complete Rankings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-[0.2em]">
              Complete Rankings
            </span>
          </div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {topMovies.slice(3).map((movie, i) => (
              <motion.div key={movie.id} variants={item}>
                <MovieCard movie={movie} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
