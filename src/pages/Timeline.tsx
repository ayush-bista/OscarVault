import { useState } from "react";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { oscarMovies, allYears } from "@/data/oscar-data";

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(allYears[0]);
  const movies = oscarMovies.filter((m) => m.year === selectedYear);
  const currentIndex = allYears.indexOf(selectedYear);

  const goNext = () => {
    if (currentIndex > 0) setSelectedYear(allYears[currentIndex - 1]);
  };
  const goPrev = () => {
    if (currentIndex < allYears.length - 1) setSelectedYear(allYears[currentIndex + 1]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium uppercase tracking-widest">
              Timeline Explorer
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Oscar Winners Through the Years
          </h1>
        </div>

        {/* Year Navigator */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button onClick={goPrev} disabled={currentIndex === 0} className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="font-display text-6xl md:text-8xl font-bold gold-gradient-text animate-scale-in" key={selectedYear}>
            {selectedYear}
          </div>
          <button onClick={goNext} disabled={currentIndex === allYears.length - 1} className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Year pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                year === selectedYear
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-primary hover:border-primary/30 border border-border"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Movies for selected year */}
        {movies.length > 0 ? (
          <div className="space-y-6">
            {movies.map((movie) => (
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_4px_30px_-8px_hsla(43,72%,53%,0.15)] group"
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  loading="lazy"
                  className="w-full md:w-32 h-48 md:h-48 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{movie.synopsis}</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.awards.map((a, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                        <Trophy className="w-3 h-3" />
                        {a.category}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold gold-gradient-text">{movie.totalOscars}</div>
                    <div className="text-xs text-muted-foreground">Oscars</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No Oscar data available for {selectedYear} in our collection yet.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
