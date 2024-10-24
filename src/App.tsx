import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <header className="border-b bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Link to="/">
                  <Logo />
                </Link>
                <Navigation />
              </div>
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
            </div>
          </header>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;