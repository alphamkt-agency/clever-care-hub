import { ShoppingCart, Calendar, Megaphone, HeadphonesIcon, Gift } from "lucide-react";

const modules = [
  {
    icon: ShoppingCart,
    title: "Vendas",
    description: "Automatize processos de vendas e aumente suas conversões com atendimento personalizado.",
    color: "from-connexia-magenta to-connexia-pink",
  },
  {
    icon: Calendar,
    title: "Agendamentos",
    description: "Gerencie reservas e agendamentos de forma automática e eficiente.",
    color: "from-connexia-cyan to-connexia-blue",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Engaje clientes com campanhas personalizadas e mensagens automatizadas.",
    color: "from-connexia-pink to-connexia-magenta",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte",
    description: "Resolva dúvidas e problemas 24/7 com respostas inteligentes e precisas.",
    color: "from-connexia-blue to-connexia-cyan",
  },
  {
    icon: Gift,
    title: "Pós-venda",
    description: "Fidelize clientes com acompanhamento proativo e suporte contínuo.",
    color: "from-connexia-magenta to-connexia-cyan",
  },
];

const Modules = () => {
  return (
    <section id="modulos" className="py-24 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-connexia-magenta/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-connexia-cyan/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-connexia-magenta uppercase tracking-wider">
            Módulos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-6">
            Módulos de{" "}
            <span className="gradient-text">atendimento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Automatize as tarefas de atendimento nas mais variadas frentes dentro do seu negócio!
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-connexia-magenta/50 transition-all duration-500 hover:scale-[1.03] card-shadow overflow-hidden ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Diamond Shape Icon Container */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rotate-45 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:rotate-[55deg] transition-transform duration-500`}>
                  <module.icon className="w-7 h-7 text-primary-foreground -rotate-45 group-hover:-rotate-[55deg] transition-transform duration-500" />
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3 relative">
                {module.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
