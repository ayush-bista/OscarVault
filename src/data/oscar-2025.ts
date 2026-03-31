import { posterUrls } from "./posters";

export interface OscarWinner {
  category: string;
  winner: string;
  film: string;
  posterUrl: string;
  note?: string;
}

export const oscarRecentWinners: OscarWinner[] = [
  {
    category: "Best Picture",
    winner: "Adam Somner, Sara Murphy & Paul Thomas Anderson (Producers)",
    film: "One Battle After Another",
    posterUrl: posterUrls["one-battle-after-another"],
  },
  {
    category: "Best Director",
    winner: "Paul Thomas Anderson",
    film: "One Battle After Another",
    posterUrl: posterUrls["one-battle-after-another"],
  },
  {
    category: "Best Actor",
    winner: "Michael B. Jordan",
    film: "Sinners",
    posterUrl: posterUrls["sinners"],
  },
  {
    category: "Best Actress",
    winner: "Jessie Buckley",
    film: "Hamnet",
    posterUrl: posterUrls["hamnet"],
  },
  {
    category: "Best Supporting Actor",
    winner: "Sean Penn",
    film: "One Battle After Another",
    posterUrl: posterUrls["one-battle-after-another"],
  },
  {
    category: "Best Supporting Actress",
    winner: "Amy Madigan",
    film: "Weapons",
    posterUrl: posterUrls["weapons"],
  },
  {
    category: "Best Original Screenplay",
    winner: "Ryan Coogler",
    film: "Sinners",
    posterUrl: posterUrls["sinners"],
  },
  {
    category: "Best Adapted Screenplay",
    winner: "Chloe Zhao",
    film: "Hamnet",
    posterUrl: posterUrls["hamnet"],
  },
  {
    category: "Best Animated Feature",
    winner: "KPop Demon Hunters",
    film: "KPop Demon Hunters",
    posterUrl: posterUrls["kpop-demon-hunters"],
  },
  {
    category: "Best International Feature",
    winner: "Sentimental Value",
    film: "Sentimental Value",
    posterUrl: posterUrls["sentimental-value"],
  },
  {
    category: "Best Cinematography",
    winner: "Autumn Durald Arkapaw",
    film: "Sinners",
    posterUrl: "https://myhotposters.com/cdn/shop/files/mL7713_1024x1024.jpg?v=1748530730",
  },
  {
    category: "Best Film Editing",
    winner: "Andy Jurgensen",
    film: "One Battle After Another",
    posterUrl: "https://i.redd.it/4jcc7counn9f1.jpeg",
  },
  {
    category: "Best Original Score",
    winner: "Ludwig Göransson",
    film: "Sinners",
    posterUrl: "https://pixieposters.co.uk/cdn/shop/files/sinners-movie-poster_8308ea3f-1682-4c29-a81f-119289f6cd06.webp?v=1748446165",
  },
  {
    category: "Best Original Song",
    winner: "\"Golden\" — EJAE, Mark Sonnenblick & others",
    film: "KPop Demon Hunters",
    posterUrl: "https://m.media-amazon.com/images/I/81Mtr7elTnL._AC_UF894,1000_QL80_.jpg",
  },
  {
    category: "Best Sound",
    winner: "Gareth John, Al Nelson, Gwendolyn Yates Whittle, Gary A. Rizzo & Juan Peralta",
    film: "F1",
    posterUrl: "https://preview.redd.it/new-poster-for-the-f1-movie-starring-brad-pitt-v0-obucnfgt4ioe1.png?width=640&crop=smart&auto=webp&s=7ac7ea43e635177644ab152d8abc27483dd6a686",
  },
  {
    category: "Best Visual Effects",
    winner: "Joe Letteri, Richard Baneham, Eric Saindon & Daniel Barrett",
    film: "Avatar: Fire and Ash",
    posterUrl: "https://lh4.googleusercontent.com/proxy/uQCQCAnHpH2jf8Bwv-uzhxgpr9oqhTDsmrQXZBjvJoQDifDpdMePN62dkic7HqctoiT3-ORIv-0L3XhQgP3zjV7k6DC21v2HKQ94ZclGfoyphItQLA",
  },
  {
    category: "Best Production Design",
    winner: "Tamara Deverell & Shane Vieau",
    film: "Frankenstein",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg",
  },
  {
    category: "Best Costume Design",
    winner: "Kate Hawley",
    film: "Frankenstein",
    posterUrl: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/216/2025/10/03102227/2ixPMFWyKtQ9C4ROo9xA12ci2yU.jpg",
  },
  {
    category: "Best Makeup and Hairstyling",
    winner: "Mike Hill, Jordan Samuel & Cliona Furey",
    film: "Frankenstein",
    posterUrl: "https://lh3.googleusercontent.com/proxy/Nx1OHnTozuyliwHkf7EnmHeOr50494u7-Yo-Jhymg-pXZUZMHk3WB_sma7oGRE_ECwiyKU5Y4gQzAlqNyA7RgKZMHcO56WkvvIbx06NA-Q",
  },
  {
    category: "Best Documentary Feature",
    winner: "Mr. Nobody Against Putin",
    film: "Mr. Nobody Against Putin",
    posterUrl: posterUrls["mr-nobody-against-putin"],
  },
  {
    category: "Best Casting",
    winner: "Cassandra Kulukundis",
    film: "One Battle After Another",
    posterUrl: "https://i.redd.it/4jcc7counn9f1.jpeg",
    note: "Inaugural category",
  },
];
