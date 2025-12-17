import { MessageSquare, Clock, Users, Zap, Brain, Shield, Keyboard, FileText, Workflow, Send, Image, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Avançada GPT-4.1",
    description: "Respostas contextuais geradas por modelos de última geração, com compreensão profunda das conversas.",
  },
  {
    icon: MessageSquare,
    title: "Humanização de Mensagens",
    description: "A IA 'quebra' respostas em 3-4 balões menores, evitando textões e simulando comportamento humano natural.",
  },
  {
    icon: Keyboard,
    title: "Simulação de Digitação",
    description: "Velocidade média de 5 caracteres/segundo antes de enviar, criando uma experiência autêntica e não robótica.",
  },
  {
    icon: FileText,
    title: "Base de Conhecimento",
    description: "Suba arquivos e dados para moldar o comportamento da IA com contexto semântico sobre sua empresa.",
  },
  {
    icon: Users,
    title: "Supervisor de IA",
    description: "Uma IA 'Supervisora' analisa a conversa e encaminha automaticamente para o agente especializado correto.",
  },
  {
    icon: Target,
    title: "Prompting Personalizável",
    description: "Configure instruções precisas para definir exatamente como cada assistente deve agir e responder.",
  },
  {
    icon: Send,
    title: "Disparos em Massa",
    description: "Envie mensagens para listas de contatos importadas via CSV/TXT para prospecção e campanhas.",
  },
  {
    icon: Workflow,
    title: "Funis e Gatilhos",
    description: "Crie sequências lógicas de atendimento com ações programadas baseadas em eventos específicos.",
  },
  {
    icon: Image,
    title: "Multimídia Completo",
    description: "Suporte para envio de áudios, imagens, documentos e textos em todas as interações.",
  },
  {
    icon: Zap,
    title: "API WhatsApp Web",
    description: "Conexão simples via QR Code, mais acessível e fácil de configurar para seu negócio.",
  },
  {
    icon: Shield,
    title: "Infraestrutura Segura",
    description: "VPS dedicada com proxies residenciais estáticos (IP único por cliente) evitando bloqueios.",
  },
  {
    icon: Clock,
    title: "CRM Integrado",
    description: "Gestão completa de contatos, status e histórico de conversas em uma única plataforma.",
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
            Tecnologia de ponta para{" "}
            <span className="gradient-text">atendimento excepcional</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            IA humanizada, automação inteligente e ferramentas completas de marketing e CRM em uma única plataforma.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl gradient-card border border-border/50 hover:border-connexia-magenta/30 transition-all duration-300 hover:scale-[1.02] card-shadow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
