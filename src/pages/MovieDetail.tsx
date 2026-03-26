import { useParams, Link } from "react-router-dom";
import { Trophy, Star, Clock, Globe, Film, ArrowLeft, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { oscarMovies } from "@/data/oscar-data";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = oscarMovies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Movie Not Found</h1>
          <Link to="/browse" className="text-primary hover:underline">Back to Browse</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-40 relative z-10">
          <Link to="/browse" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Browse
          </Link>

          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Poster */}
            <div className="hidden md:block">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full rounded-xl shadow-2xl border border-border"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 animate-fade-in-up">
                {movie.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary fill-primary" /> {movie.rating}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {movie.runtime}</span>
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {movie.country}</span>
                <span>{movie.year}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genre.map((g) => (
                  <span key={g} className="px-3 py-1 rounded-full bg-secondary border border-border text-xs text-secondary-foreground">
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
                {movie.synopsis}
              </p>

              {/* Director */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Film className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium uppercase tracking-widest">Director</span>
                </div>
                <p className="text-foreground font-medium">{movie.director}</p>
              </div>

              {/* Cast */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium uppercase tracking-widest">Cast</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.map((actor) => (
                    <span key={actor} className="px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium uppercase tracking-widest">
                    Academy Awards ({movie.totalOscars} wins / {movie.nominations} nominations)
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {movie.awards.map((award, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border gold-border-glow"
                    >
                      <Trophy className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{award.category}</p>
                        <p className="text-xs text-muted-foreground">{award.winner}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
