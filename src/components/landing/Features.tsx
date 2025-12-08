import { MessageSquare, Clock, Users, Zap, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversação Ultra-Realista",
    description: "Linguagem e fluxo de conversação próprios de um colaborador humano. 100% humanizado.",
  },
  {
    icon: Clock,
    title: "Mecanismo TimeTravel",
    description: "Sistema reorganiza o contexto automaticamente, mantendo uma experiência contínua e fluida.",
  },
  {
    icon: Users,
    title: "Notificações Inteligentes",
    description: "Colaboradores humanos podem intervir no atendimento quando necessário via WhatsApp.",
  },
  {
    icon: Zap,
    title: "Monitoramento em Tempo Real",
    description: "Processamento de respostas ocorre após o término da digitação do usuário.",
  },
  {
    icon: Brain,
    title: "IA Adaptativa",
    description: "Aprende com cada interação para oferecer respostas cada vez mais precisas e relevantes.",
  },
  {
    icon: Shield,
    title: "Escalabilidade Segura",
    description: "Infraestrutura robusta que cresce com seu negócio mantendo a segurança dos dados.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-cyan uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Um novo jeito de{" "}
            <span className="gradient-text">trabalhar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma plataforma pensada para conectar o seu negócio ao futuro. 
            Tecnologia de ponta para um atendimento excepcional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl gradient-card border border-border/50 hover:border-connexia-magenta/30 transition-all duration-300 hover:scale-[1.02] card-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
