import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
const About = () => {
  const stats = [{
    icon: Clock,
    number: "15+",
    label: "Anos de Experiência",
    description: "Desde 2009 desenvolvendo projetos de excelência"
  }, {
    icon: Award,
    number: "200+",
    label: "Projetos Executados",
    description: "Estruturas entregues com qualidade garantida"
  }, {
    icon: Users,
    number: "50+",
    label: "Clientes Satisfeitos",
    description: "Empresas que confiam em nosso trabalho"
  }, {
    icon: Target,
    number: "100%",
    label: "Aprovação CREA",
    description: "Todos os projetos seguem normas técnicas"
  }];
  const values = ["Segurança em primeiro lugar", "Qualidade técnica comprovada", "Prazos rigorosamente cumpridos", "Atendimento personalizado", "Tecnologia de ponta", "Sustentabilidade ambiental"];
  return <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre a Steel Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em projetos de engenharia para estruturas metálicas, 
            combinando experiência, tecnologia e inovação para entregar soluções excepcionais.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image */}
          <div className="relative">
            <img src={aboutImage} alt="Equipe MetalStruct" className="rounded-lg shadow-lg w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Excelência em Engenharia Estrutural
            </h3>
            
            <p className="text-muted-foreground">Fundada em 2009, a Steel Works nasceu com o objetivo de revolucionar o mercado de estruturas metálicas no Brasil. Nossa equipe é formada por engenheiros altamente qualificados e especializados em projetos complexos.</p>

            <p className="text-muted-foreground">
              Utilizamos as mais modernas tecnologias de modelagem 3D e análise estrutural, 
              garantindo precisão absoluta em cada cálculo. Nosso compromisso é entregar 
              projetos que superem as expectativas em segurança, economia e prazo.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{value}</span>
                </div>)}
            </div>

            <Button variant="hero" size="lg" className="mt-6">
              Conheça Nossa Equipe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>)}
        </div>

        {/* Mission */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Desenvolver projetos de engenharia estrutural que combinem segurança, 
              eficiência e inovação, contribuindo para a construção de um futuro mais 
              sustentável e tecnológico no setor da construção civil.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;