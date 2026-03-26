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
      className="card-cinematic group block"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Oscar count badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
          <Trophy className="w-3 h-3" />
          {movie.totalOscars}
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 text-xs text-primary mb-1">
            <Star className="w-3 h-3 fill-primary" />
            <span>{movie.rating}</span>
            <span className="text-muted-foreground">• {movie.runtime}</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {movie.synopsis}
          </p>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-muted-foreground">{movie.year}</span>
          <span className="text-xs text-muted-foreground">{movie.director}</span>
        </div>
      </div>
    </Link>
  );
}
