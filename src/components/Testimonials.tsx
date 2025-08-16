import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Carlos Silva",
    company: "",
    role: "Diretor de Operações",
    content: "A Steel Works entregou nosso galpão industrial 20% mais rápido que o prazo. Excelente qualidade e custo-benefício excepcional.",
    rating: 5,
    project: "Galpão Industrial 2.500m²"
  }, {
    name: "Marina Costa",
    company: "",
    role: "Engenheira Civil",
    content: "Projeto estrutural impecável. Aprovação na prefeitura sem nenhuma pendência. Equipe técnica muito competente.",
    rating: 5,
    project: "Edifício Comercial 15 andares"
  }, {
    name: "Roberto Fernandes",
    company: "",
    role: "Proprietário",
    content: "A Steel Works entregou um resultado excepcional no projeto de substituição das telhas do nosso galpão por telhas sanduíche. O projeto é de alta qualidade, melhorou e facilitou a montagem e instalação do material.",
    rating: 5,
    project: "Cobertura Industrial 1.800m²"
  }];
  const certifications = [{
    name: "CREA Ativo",
    description: "Registro profissional válido"
  }, {
    name: "ISO 9001",
    description: "Gestão de qualidade certificada"
  }, {
    name: "ABNT NBR",
    description: "Normas técnicas rigorosas"
  }, {
    name: "50+ projetos",
    description: "Experiência comprovada"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes falam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Mais de 50 projetos entregues com 100% de aprovação e satisfação total dos clientes</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card shadow-lg hover:shadow-primary transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                  <p className="text-xs text-accent mt-1">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-primary text-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Certificações e Garantias</h3>
            <p className="opacity-90">Qualidade e segurança garantidas por órgãos competentes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">{cert.name.charAt(0)}</span>
                </div>
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <p className="text-sm opacity-80">{cert.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;