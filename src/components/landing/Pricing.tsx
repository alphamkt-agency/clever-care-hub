import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const planFeatures = [
  "1.000 atendimentos mensais em média",
  "1 Assistente de IA personalizado",
  "5 usuários disponíveis",
  "1 Número de WhatsApp",
  "Mapeamento do fluxo de atendimento",
  "Base de dados personalizada",
  "Suporte completo por 12 meses",
  "Integração com sistemas externos",
];

const Pricing = () => {
  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-connexia-magenta/5 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-magenta uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Plano{" "}
            <span className="gradient-text">completo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para revolucionar o atendimento do seu negócio.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl gradient-card border border-connexia-magenta/30 card-shadow animate-pulse-glow">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full gradient-primary">
                <Star className="w-4 h-4 text-primary-foreground fill-current" />
                <span className="text-sm font-semibold text-primary-foreground">
                  Mais Popular
                </span>
              </div>
            </div>

            {/* Plan Name */}
            <div className="text-center mb-8 pt-4">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Plano Contratado
              </h3>
              <p className="text-muted-foreground">Duração de 12 meses</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-lg">R$</span>
                <span className="font-display font-black text-6xl gradient-text">149</span>
                <span className="text-muted-foreground text-lg">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                ou R$3.000 à vista (economia de R$788)
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full">
              Contratar Agora
            </Button>

            {/* Payment Info */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              Pagamento via PIX, TED ou em até 12x no cartão
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Usuário extra por apenas{" "}
            <span className="text-connexia-cyan font-semibold">R$11,97/mês</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
