import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import RecentWinners from "@/components/RecentWinners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] left-[-10%] w-[30%] h-[50%] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <main>
        <HeroSection />
        <div className="relative mt-[-10vh]">
          {/* Section Divider with Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />
          <RecentWinners />
        </div>
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
}
