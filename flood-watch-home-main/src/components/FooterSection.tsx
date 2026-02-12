import { Droplets } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Droplets className="w-6 h-6 text-primary" />
          <span className="font-display font-bold text-lg">FloodSmart</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 Smart Flood Prediction & Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
