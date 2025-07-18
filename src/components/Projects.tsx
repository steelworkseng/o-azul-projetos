import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Square } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Galpão Industrial ABC Metalúrgica",
      location: "São Bernardo do Campo - SP",
      area: "2.500 m²",
      year: "2024",
      type: "Industrial",
      description: "Projeto completo de galpão industrial com pórticos metálicos, telhas termoacústicas e sistema de ponte rolante.",
      tags: ["Galpão", "Ponte Rolante", "Steel Deck"]
    },
    {
      title: "Centro de Distribuição LogiTech",
      location: "Guarulhos - SP",
      area: "4.200 m²",
      year: "2023",
      type: "Logístico",
      description: "Estrutura para centro de distribuição com mezaninos metálicos e sistemas automatizados de armazenagem.",
      tags: ["Mezanino", "Automação", "Logística"]
    },
    {
      title: "Edifício Comercial TechHub",
      location: "São Paulo - SP",
      area: "1.800 m²",
      year: "2023",
      type: "Comercial",
      description: "Edifício de 8 andares com estrutura mista (concreto e aço) e fachada metálica moderna.",
      tags: ["Estrutura Mista", "Fachada", "Multi-andares"]
    },
    {
      title: "Residencial Steel Homes",
      location: "Alphaville - SP",
      area: "850 m²",
      year: "2024",
      type: "Residencial",
      description: "Conjunto residencial com 12 casas em steel frame, sustentável e de rápida construção.",
      tags: ["Steel Frame", "Sustentável", "Residencial"]
    },
    {
      title: "Depósito Frigorífico ColdChain",
      location: "Osasco - SP",
      area: "3.100 m²",
      year: "2023",
      type: "Industrial",
      description: "Estrutura especializada para armazenamento refrigerado com isolamento térmico avançado.",
      tags: ["Frigorífico", "Isolamento", "Especializado"]
    },
    {
      title: "Shopping Center MetroPlaza",
      location: "Santo André - SP",
      area: "5.600 m²",
      year: "2022",
      type: "Comercial",
      description: "Estrutura complexa para shopping center com vãos livres de até 30 metros e cobertura metálica.",
      tags: ["Shopping", "Vãos Livres", "Cobertura"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Industrial":
        return "bg-primary/10 text-primary";
      case "Comercial":
        return "bg-accent/10 text-accent";
      case "Logístico":
        return "bg-engineering-light-blue/10 text-engineering-light-blue";
      case "Residencial":
        return "bg-orange-500/10 text-orange-600";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={projectsBg}
          alt="Projetos Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos principais projetos em estruturas metálicas. 
            Cada obra reflete nosso compromisso com qualidade, inovação e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-primary h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-engineering-light-blue/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">{project.area}</div>
                    <div className="text-sm opacity-90">Área Construída</div>
                  </div>
                </div>
                <Badge className={`absolute top-4 left-4 ${getTypeColor(project.type)}`}>
                  {project.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full group">
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Ver Todos os Projetos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;