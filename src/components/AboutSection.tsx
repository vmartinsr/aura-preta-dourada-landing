import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <span className="text-gold font-medium text-sm tracking-wide">SOBRE O CURSO</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">O CURSO </span>
            <span className="bg-luxury-gradient bg-clip-text text-transparent">
              SOBRANCELHAS PERFEITAS
            </span>
            <br />
            <span className="text-foreground">NÃO É SIMPLESMENTE UM CURSO QUALQUER!</span>
          </h2>
          
          <div className="w-24 h-1 bg-luxury-gradient mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Você quer mudar de vida e se tornar uma especialista em design de sobrancelhas?
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Todo o Método foi criado pensando em você, que deseja aprender TUDO o que 
                precisa para se tornar uma verdadeira profissional no Design de Sobrancelhas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eu, pessoalmente, vou estar ao seu lado em todas as etapas, guiando 
                você para que se torne uma especialista. Não importa o nível de experiência 
                que você tenha, se irá começar hoje ou já atua na área, ou você pegar em 
                suas mãos e caminhar junto com você nessa jornada.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Método exclusivo desenvolvido com anos de experiência",
                "Técnicas mais inovadoras e eficazes do mercado", 
                "Acompanhamento personalizado durante todo o curso",
                "Aplicação simples e prática no seu trabalho",
                "Garantia de resultados comprovados"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-6 rounded-xl border border-gold/10 text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gold">78.423</div>
                <div className="text-sm text-muted-foreground">Alunas Formadas</div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-gold/10 text-center">
                <TrendingUp className="w-8 h-8 text-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gold">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>

            <Button variant="premium" size="lg" className="w-full sm:w-auto">
              QUERO FAZER PARTE
            </Button>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Eye Close-up Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gold/20 to-transparent rounded-2xl overflow-hidden border border-gold/10">
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <span className="text-gold font-medium">Antes</span>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl overflow-hidden border border-gold/20">
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <span className="text-gold font-medium">Depois</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-gradient-to-br from-gold/10 to-transparent rounded-2xl overflow-hidden border border-gold/10">
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-gold" />
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-gold/25 to-gold/5 rounded-2xl overflow-hidden border border-gold/15">
                  <div className="w-full h-full bg-card flex items-center justify-center">
                    <span className="text-gold font-medium text-center">Agenda<br/>Lotada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gold/10 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};