import { MessageCircle, Bot, UserCheck, Repeat, Route, Keyboard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Cliente Inicia Conversa",
    description: "O cliente entra em contato pelo WhatsApp e é atendido instantaneamente via QR Code.",
  },
  {
    number: "02",
    icon: Route,
    title: "Supervisor Analisa e Roteia",
    description: "A IA Supervisora identifica a intenção e encaminha para o agente especializado correto.",
  },
  {
    number: "03",
    icon: Bot,
    title: "Agente Responde com Humanização",
    description: "Respostas são 'quebradas' em balões menores com simulação de digitação natural.",
  },
  {
    number: "04",
    icon: UserCheck,
    title: "Intervenção Humana (se necessário)",
    description: "Colaboradores são notificados quando precisam intervir no atendimento.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-cyan uppercase tracking-wider">
            Como Funciona
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Simples e{" "}
            <span className="gradient-text">eficiente</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Em poucos passos, seu atendimento será transformado pela inteligência artificial.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex gap-6 p-6 rounded-2xl glass-effect group hover:bg-muted/20 transition-all duration-300"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="font-display font-black text-5xl gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
