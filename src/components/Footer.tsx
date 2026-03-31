import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold gold-gradient-text">OscarVault</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 OscarVault. All data for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
