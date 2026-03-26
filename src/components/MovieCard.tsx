import { Link } from "react-router-dom";
import { Trophy, Star } from "lucide-react";
import type { OscarMovie } from "@/data/oscar-data";

interface MovieCardProps {
  movie: OscarMovie;
  index?: number;
}

export default function MovieCard({ movie, index = 0 }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block relative rounded-2xl overflow-hidden bg-secondary/20 border border-white/5 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Oscar count badge */}
        <div className="absolute top-2.5 right-2.5 z-20">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black shadow-lg">
            <Trophy className="w-3 h-3 text-primary" />
            <span>{movie.totalOscars}</span>
          </div>
        </div>

        {/* Hover overlay - Simplified */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-primary/20 border border-primary/30 text-primary text-[9px] font-black">
              <Star className="w-2.5 h-2.5 fill-current" />
              {movie.rating}
            </div>
            <span className="text-[9px] text-white/60 font-bold uppercase tracking-widest">{movie.year}</span>
          </div>
          <p className="text-[9px] text-white/80 leading-snug line-clamp-2 font-bold italic">
            "{movie.synopsis}"
          </p>
        </div>
      </div>

      <div className="p-3.5">
        <h3 className="font-display text-sm font-bold text-foreground line-clamp-1 group-hover:gold-gradient-text transition-all duration-300">
          {movie.title}
        </h3>
        <p className="text-[9px] text-muted-foreground mt-1 font-black uppercase tracking-[0.15em] group-hover:text-primary/70 transition-colors">
          {movie.director}
        </p>
      </div>
    </Link>
  );
}
