import { Button } from "@/components/ui/button";
import { Play, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mulher com sobrancelhas perfeitas"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold/30 rounded-full animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold font-medium text-sm tracking-wide">CURSO</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Sobrancelhas</span>
                <br />
                <span className="bg-luxury-gradient bg-clip-text text-transparent animate-shimmer">
                  Perfeitas
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-luxury-gradient rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl font-semibold text-gold leading-relaxed max-w-lg">
              MÉTODO ÚNICO E SIMPLES QUE EU USO PRA FAZER SOBRANCELHAS IMPECÁVEIS E 
              COM ISSO TER A <span className="text-gold-light">AGENDA LOTADA</span>
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Você irá aprender as técnicas mais Inovadoras e Eficazes para o Design de 
              Sobrancelhas, descobrir como aplicá-las de maneira Simples e Prática em 
              seu trabalho. Meu método exclusivo foi desenvolvido com anos de experiência.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">78.423</div>
                <div className="text-sm text-muted-foreground">Alunas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold flex items-center gap-1">
                  4.9 <Star className="w-5 h-5 fill-gold text-gold" />
                </div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="lg" className="text-lg px-8 py-6">
                QUERO APRENDER AGORA
              </Button>
              
              <Button variant="outline" size="lg" className="group border-gold/30 text-gold hover:bg-gold/10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Apresentação
              </Button>
            </div>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <div className="relative aspect-video bg-card rounded-2xl overflow-hidden shadow-elegant border border-gold/10">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent">
                <img
                  src={heroImage}
                  alt="Preview do curso"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-luxury hover:scale-110 transition-transform duration-300 animate-glow">
                  <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
                  <p className="text-sm font-medium text-foreground">
                    "Hoje atendo no Melhor prédio comercial da minha cidade"
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};