import { Button } from "@/components/ui/button";
import { Crown, Gift, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45,100%,70%,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45,100%,70%,0.05),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <Crown className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold tracking-wide">OFERTA ESPECIAL</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Transforme sua </span>
              <span className="bg-luxury-gradient bg-clip-text text-transparent">
                Carreira
              </span>
              <br />
              <span className="text-foreground">Hoje Mesmo!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Não perca esta oportunidade única de aprender o método que já transformou 
              a vida de mais de 78 mil mulheres em todo o Brasil.
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Bonus 1 */}
            <div className="bg-card border border-gold/20 rounded-2xl p-6 hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                BÔNUS EXCLUSIVO
              </h3>
              <p className="text-muted-foreground mb-4">
                Kit completo de ferramentas profissionais
              </p>
              <div className="text-2xl font-bold text-gold">
                R$ 497
              </div>
              <div className="text-sm text-muted-foreground line-through">
                R$ 997
              </div>
            </div>

            {/* Main Offer */}
            <div className="bg-gradient-to-b from-gold/10 to-gold/5 border-2 border-gold/30 rounded-2xl p-8 relative transform scale-105 shadow-luxury">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gold text-background px-4 py-2 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              </div>
              
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-gold" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                CURSO COMPLETO
              </h3>
              <p className="text-muted-foreground mb-6">
                Acesso vitalício + Certificado + Suporte
              </p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-gold mb-2">
                  12x R$ 97
                </div>
                <div className="text-lg text-muted-foreground line-through">
                  R$ 2.997
                </div>
                <div className="text-gold font-semibold">
                  ou R$ 997 à vista
                </div>
              </div>

              <Button variant="luxury" size="lg" className="w-full text-lg py-6">
                GARANTIR MINHA VAGA
              </Button>
            </div>

            {/* Guarantee */}
            <div className="bg-card border border-gold/20 rounded-2xl p-6 hover:shadow-luxury transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                GARANTIA
              </h3>
              <p className="text-muted-foreground mb-4">
                30 dias para testar. Não gostou? Devolvemos seu dinheiro
              </p>
              <div className="text-2xl font-bold text-gold">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Satisfação garantida
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-destructive animate-pulse" />
              <span className="text-destructive font-bold text-lg">
                OFERTA POR TEMPO LIMITADO
              </span>
            </div>
            <p className="text-muted-foreground">
              Restam apenas <span className="text-destructive font-bold">48 horas</span> para 
              garantir este preço especial. Após esse período, o valor volta ao normal.
            </p>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <Button variant="premium" size="lg" className="text-xl px-12 py-8 animate-glow">
              SIM, QUERO TRANSFORMAR MINHA VIDA
            </Button>
            
            <p className="text-sm text-muted-foreground">
              🔒 Compra 100% segura e protegida
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};