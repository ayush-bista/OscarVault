import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, Trophy, Crown, ChevronDown, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { oscarMovies, allYears, allGenres, categories, searchMovies } from "@/data/oscar-data";

export default function Browse() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<"year" | "oscars" | "rating">("year");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeFilterCount = [selectedYear, selectedGenre, selectedCategory].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedGenre("");
    setSelectedCategory("");
    setSortBy("year");
    setQuery("");
  };

  const filteredMovies = useMemo(() => {
    let movies = query ? searchMovies(query) : [...oscarMovies];

    if (selectedYear) {
      movies = movies.filter((m) => m.year === Number(selectedYear));
    }
    if (selectedGenre) {
      movies = movies.filter((m) => m.genre.includes(selectedGenre));
    }
    if (selectedCategory) {
      movies = movies.filter((m) =>
        m.awards.some((a) => a.category === selectedCategory)
      );
    }

    movies.sort((a, b) => {
      if (sortBy === "oscars") return b.totalOscars - a.totalOscars;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.year - a.year;
    });

    return movies;
  }, [query, selectedYear, selectedGenre, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-widest">
                Discover
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Browse Oscar Winners
            </h1>
          </div>
          <Link
            to="/most-awarded"
            className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Crown className="w-4 h-4" />
            Most Awarded Films
          </Link>
        </div>

        {/* Mobile Most Awarded button */}
        <Link
          to="/most-awarded"
          className="md:hidden flex items-center justify-center gap-2 w-full mb-6 px-5 py-3 rounded-xl bg-primary/10 border border-primary/20 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Crown className="w-4 h-4" />
          Most Awarded Films
        </Link>

        {/* Search + Filter Toggle Row */}
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search movies, directors, actors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            />
          </div>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
              filtersOpen
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary border-border text-secondary-foreground hover:border-primary/50"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-primary-foreground text-primary text-xs font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${filtersOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Collapsible Filters Panel */}
        {filtersOpen && (
          <div className="p-5 mb-6 rounded-xl bg-card border border-border animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-foreground">Filter & Sort</span>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Year */}
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground focus:outline-none focus:border-primary/50 transition-all"
                >
                  <option value="">All Years</option>
                  {allYears.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Genre */}
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Genre</label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground focus:outline-none focus:border-primary/50 transition-all"
                >
                  <option value="">All Genres</option>
                  {allGenres.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground focus:outline-none focus:border-primary/50 transition-all"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Sort By</label>
                <select
                  value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "year" | "oscars" | "rating")}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm text-secondary-foreground focus:outline-none focus:border-primary/50 transition-all"
                >
                  <option value="year">Year (Newest)</option>
                  <option value="oscars">Oscars Won</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredMovies.length} film{filteredMovies.length !== 1 ? "s" : ""} found
          {selectedCategory && <span className="text-primary"> in {selectedCategory}</span>}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredMovies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No films match your criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
