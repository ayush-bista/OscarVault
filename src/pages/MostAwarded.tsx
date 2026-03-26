import { Trophy, TrendingUp, ArrowLeft, Award, Star, Sparkles, Crown, Medal, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { getMostAwardedMovies } from "@/data/oscar-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const rankBadgeColors = [
  "from-[#FFD700] via-[#FDB931] to-[#D4AF37]", // 1st: Gold
  "from-[#E5E7EB] via-[#D1D5DB] to-[#9CA3AF]", // 2nd: Silver
  "from-[#CD7F32] via-[#A0522D] to-[#8B4513]", // 3rd: Bronze
];

const rankGlowColors = [
  "shadow-[0_0_30px_-5px_rgba(253,185,49,0.4)]",
  "shadow-[0_0_30px_-5px_rgba(209,213,219,0.3)]",
  "shadow-[0_0_30px_-5px_rgba(160,82,45,0.3)]",
];

const rankLabels = ["1st", "2nd", "3rd"];

export default function MostAwarded() {
  const topMovies = getMostAwardedMovies().filter((m) => m.totalOscars > 0);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Navigation Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/browse"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back to Cinema Library</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          className="mb-20 text-center md:text-left relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">
                  The Academy Hall of Fame
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Most Celebrated <br />
                <span className="gold-gradient-text">Masterpieces</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A definitive ranking of the most honored films in cinematic history, 
                celebrating the monumental achievements that have defined the Oscars since 1929.
              </p>
            </div>

            {/* Quick Stats Dashboard */}
            <motion.div 
              className="flex items-center gap-4 p-1 rounded-2xl bg-secondary/30 backdrop-blur-xl border border-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "Ranked Films", value: topMovies.length, icon: Medal },
                { label: "Total Wins", value: topMovies.reduce((a, m) => a + m.totalOscars, 0), icon: Trophy },
              ].map((stat, idx) => (
                <div key={stat.label} className={`flex items-center gap-4 px-6 py-4 ${idx === 0 ? 'border-r border-white/5' : ''}`}>
                  <div className="p-3 rounded-xl bg-primary/10">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gold-gradient-text leading-none">{stat.value}</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Top 3 Spotlight - The Podium */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <Crown className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-display font-bold text-foreground tracking-tight">The Podium</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {topMovies.slice(0, 3).map((movie, i) => (
              <motion.div key={movie.id} variants={item} className="relative">
                <Link
                  to={`/movie/${movie.id}`}
                  className="group block relative rounded-[2rem] overflow-hidden border border-white/10 bg-secondary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                    
                    {/* Floating Rank Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${rankBadgeColors[i]} ${rankGlowColors[i]} rotate-[-8deg] group-hover:rotate-0 transition-transform duration-500`}>
                        <div className="absolute inset-[2px] rounded-[14px] bg-black/10 backdrop-blur-sm" />
                        <span className="relative z-10 font-display text-2xl font-black text-white italic tracking-tighter">
                          {rankLabels[i]}
                        </span>
                      </div>
                    </div>

                    {/* Win Count Circle */}
                    <div className="absolute top-6 right-6 z-20">
                      <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                        <span className="text-xl font-black gold-gradient-text leading-none">{movie.totalOscars}</span>
                        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-tighter mt-1">Wins</span>
                      </div>
                    </div>

                    {/* Movie Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex -space-x-1">
                          {[...Array(3)].map((_, idx) => (
                            <Star key={idx} className="w-3 h-3 text-primary fill-primary" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                          {movie.year} Legend
                        </span>
                      </div>
                      
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 group-hover:gold-gradient-text transition-all duration-500 leading-tight">
                        {movie.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-primary" />
                          {movie.totalOscars} Oscars
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span>{movie.director}</span>
                      </div>

                      {/* Animated categories on hover */}
                      <div className="mt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                        {movie.awards.slice(0, 3).map((a, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-semibold backdrop-blur-md"
                          >
                            {a.category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Visual rank indicator behind card */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 -z-10 opacity-10">
                  <span className="font-display text-[12rem] font-black italic text-primary leading-none">
                    {i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Complete Rankings List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">Complete Rankings</h2>
              <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase font-bold">From #4 to #{topMovies.length}</p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {topMovies.slice(3).map((movie, i) => (
              <motion.div key={movie.id} variants={item} className="relative group">
                {/* Small Rank Label */}
                <div className="absolute -top-3 -left-3 z-30 w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shadow-xl group-hover:border-primary/50 transition-colors">
                  <span className="text-[10px] font-black text-muted-foreground group-hover:text-primary">#{i + 4}</span>
                </div>
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Call to Action */}
        <motion.div 
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent border border-primary/20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Want to see more history?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Explore our comprehensive timeline of Academy Awards to discover how cinema has evolved decade by decade.
          </p>
          <Link
            to="/timeline"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(253,185,49,0.3)] active:scale-95"
          >
            Explore Timeline <Clock className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
