import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import RecentWinners from "@/components/RecentWinners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RecentWinners />
      <FeaturedSection />
      <Footer />
    </div>
  );
}
