import { Instagram, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-gold/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              <span className="text-foreground">Sobrancelhas</span>
              <br />
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Perfeitas
              </span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Transformando vidas através da beleza
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-gold" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <Youtube className="w-5 h-5 text-gold" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-gold" />
            </a>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; 2024 Sobrancelhas Perfeitas</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};