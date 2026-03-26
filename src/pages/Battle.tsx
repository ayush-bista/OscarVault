import { useState } from "react";
import { Trophy, Swords } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { oscarMovies } from "@/data/oscar-data";

export default function Battle() {
  const [movieA, setMovieA] = useState(oscarMovies[0]);
  const [movieB, setMovieB] = useState(oscarMovies[4]);

  const stats = [
    { label: "Total Oscars", a: movieA.totalOscars, b: movieB.totalOscars },
    { label: "Nominations", a: movieA.nominations, b: movieB.nominations },
    { label: "Rating", a: movieA.rating, b: movieB.rating },
    { label: "Award Categories", a: movieA.awards.length, b: movieB.awards.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <Swords className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Oscar Battle Mode</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Head-to-Head Comparison
          </h1>
          <p className="text-muted-foreground mt-3">Compare two Oscar-winning films side by side</p>
        </div>

        {/* Selectors */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-12">
          {/* Movie A */}
          <div className="text-center">
            <select
              value={movieA.id}
              onChange={(e) => setMovieA(oscarMovies.find((m) => m.id === e.target.value)!)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:border-primary/50 mb-4 font-medium"
            >
              {oscarMovies.map((m) => (
                <option key={m.id} value={m.id}>{m.title} ({m.year})</option>
              ))}
            </select>
            <img src={movieA.posterUrl} alt={movieA.title} className="w-48 h-72 object-cover rounded-xl mx-auto border border-border shadow-xl" />
            <h3 className="font-display text-xl font-bold text-foreground mt-4">{movieA.title}</h3>
            <p className="text-sm text-muted-foreground">{movieA.year} • {movieA.director}</p>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-glow-pulse">
              <span className="font-display text-xl font-bold text-primary">VS</span>
            </div>
          </div>

          {/* Movie B */}
          <div className="text-center">
            <select
              value={movieB.id}
              onChange={(e) => setMovieB(oscarMovies.find((m) => m.id === e.target.value)!)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:border-primary/50 mb-4 font-medium"
            >
              {oscarMovies.map((m) => (
                <option key={m.id} value={m.id}>{m.title} ({m.year})</option>
              ))}
            </select>
            <img src={movieB.posterUrl} alt={movieB.title} className="w-48 h-72 object-cover rounded-xl mx-auto border border-border shadow-xl" />
            <h3 className="font-display text-xl font-bold text-foreground mt-4">{movieB.title}</h3>
            <p className="text-sm text-muted-foreground">{movieB.year} • {movieB.director}</p>
          </div>
        </div>

        {/* Stats Comparison */}
        <div className="max-w-2xl mx-auto space-y-4">
          {stats.map((stat) => {
            const max = Math.max(stat.a, stat.b);
            const pctA = max > 0 ? (stat.a / max) * 100 : 0;
            const pctB = max > 0 ? (stat.b / max) * 100 : 0;
            const winner = stat.a > stat.b ? "a" : stat.b > stat.a ? "b" : "tie";

            return (
              <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                <p className="text-xs text-muted-foreground text-center mb-3 uppercase tracking-widest">{stat.label}</p>
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-bold min-w-[2rem] text-right ${winner === "a" ? "text-primary" : "text-foreground"}`}>
                    {stat.a}
                  </span>
                  <div className="flex-1 flex gap-1 h-3">
                    <div className="flex-1 flex justify-end">
                      <div
                        className={`h-full rounded-l-full transition-all duration-700 ${winner === "a" ? "bg-primary" : "bg-muted-foreground/30"}`}
                        style={{ width: `${pctA}%` }}
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`h-full rounded-r-full transition-all duration-700 ${winner === "b" ? "bg-primary" : "bg-muted-foreground/30"}`}
                        style={{ width: `${pctB}%` }}
                      />
                    </div>
                  </div>
                  <span className={`text-lg font-bold min-w-[2rem] ${winner === "b" ? "text-primary" : "text-foreground"}`}>
                    {stat.b}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {[movieA, movieB].map((movie) => (
            <div key={movie.id} className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">{movie.title} Awards</h4>
              <div className="space-y-2">
                {movie.awards.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Trophy className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{a.category}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
