import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <Copyright className="h-4 w-4" />
        <a 
          href="https://lyvena.xyz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Lyvena.
        </a>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;