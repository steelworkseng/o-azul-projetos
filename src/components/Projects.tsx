import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Square } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";
const Projects = () => {
  const projects = [{
    title: "Galpão Industrial ABC Metalúrgica",
    location: "São Bernardo do Campo - SP",
    area: "2.500 m²",
    year: "2024",
    type: "Industrial",
    description: "Projeto completo de galpão industrial com pórticos metálicos, telhas termoacústicas e sistema de ponte rolante.",
    tags: ["Galpão", "Ponte Rolante", "Steel Deck"]
  }, {
    title: "Centro de Distribuição LogiTech",
    location: "Guarulhos - SP",
    area: "4.200 m²",
    year: "2023",
    type: "Logístico",
    description: "Estrutura para centro de distribuição com mezaninos metálicos e sistemas automatizados de armazenagem.",
    tags: ["Mezanino", "Automação", "Logística"]
  }, {
    title: "Edifício Comercial TechHub",
    location: "São Paulo - SP",
    area: "1.800 m²",
    year: "2023",
    type: "Comercial",
    description: "Edifício de 8 andares com estrutura mista (concreto e aço) e fachada metálica moderna.",
    tags: ["Estrutura Mista", "Fachada", "Multi-andares"]
  }, {
    title: "Residencial Steel Homes",
    location: "Alphaville - SP",
    area: "850 m²",
    year: "2024",
    type: "Residencial",
    description: "Conjunto residencial com 12 casas em steel frame, sustentável e de rápida construção.",
    tags: ["Steel Frame", "Sustentável", "Residencial"]
  }, {
    title: "Depósito Frigorífico ColdChain",
    location: "Osasco - SP",
    area: "3.100 m²",
    year: "2023",
    type: "Industrial",
    description: "Estrutura especializada para armazenamento refrigerado com isolamento térmico avançado.",
    tags: ["Frigorífico", "Isolamento", "Especializado"]
  }, {
    title: "Shopping Center MetroPlaza",
    location: "Santo André - SP",
    area: "5.600 m²",
    year: "2022",
    type: "Comercial",
    description: "Estrutura complexa para shopping center com vãos livres de até 30 metros e cobertura metálica.",
    tags: ["Shopping", "Vãos Livres", "Cobertura"]
  }];
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
  return <section id="projects" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={projectsBg} alt="Projetos Background" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Projects;