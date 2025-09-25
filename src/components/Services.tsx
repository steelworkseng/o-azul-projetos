import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Factory, 
  Home, 
  Warehouse, 
  Calculator, 
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Estruturas Comerciais",
      description: "Projetos para edifícios comerciais, escritórios e centros empresariais com estruturas metálicas robustas.",
      features: ["Lajes steel deck", "Vigas metálicas", "Pilares em aço", "Conexões soldadas"]
    },
    {
      icon: Factory,
      title: "Galpões Industriais",
      description: "Desenvolvimento de galpões e estruturas industriais para diferentes tipos de produção.",
      features: ["Pórticos metálicos", "Telhas termoacústicas", "Sistemas de ventilação", "Pontes rolantes"]
    },
    {
      icon: Warehouse,
      title: "Armazéns e Depósitos",
      description: "Estruturas otimizadas para armazenamento com máxima eficiência de espaço.",
      features: ["Estruturas modulares", "Mezaninos metálicos", "Sistemas de prateleiras", "Docas de carga"]
    },
    {
      icon: Home,
      title: "Estruturas Residenciais",
      description: "Soluções em steel frame e estruturas metálicas para casas e condomínios.",
      features: ["Steel frame", "Lajes mistas", "Estruturas para piscinas", "Coberturas metálicas"]
    },
    {
      icon: Calculator,
      title: "Cálculos Estruturais",
      description: "Análise completa e dimensionamento de estruturas seguindo normas técnicas.",
      features: ["Software especializado", "Análise de cargas", "Verificação de estabilidade", "Memorial de cálculo"]
    },
    {
      icon: FileText,
      title: "Projetos Executivos",
      description: "Documentação técnica completa para execução e aprovação em órgãos competentes.",
      features: ["Plantas baixas", "Detalhes construtivos", "Especificações técnicas", "Lista de materiais"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em engenharia de estruturas metálicas, 
            desde o projeto até a execução, com qualidade e segurança garantidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group" asChild>
                  <a href="https://wa.me/5585981851924?text=Olá,+tenho+interesse+em+solicitar+um+orçamento" target="_blank" rel="noopener noreferrer">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <a href="https://wa.me/5585981851924?text=Olá,+tenho+interesse+em+solicitar+um+orçamento" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;