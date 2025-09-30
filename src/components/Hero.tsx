import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-steel-construction.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Projetos de Engenharia Metálica" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-accent">Projetos de Estruturas Metálicas</span>
            <span className="block">Certificados e Sob Medida</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Reduza até 30% nos custos da sua obra com projetos inteligentes, aprovados pelo CREA e desenvolvidos para máxima eficiência.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 shadow-accent" asChild>
              <a href="https://wa.me/5585981851924?text=Olá,+tenho+interesse+em+solicitar+um+orçamento" target="_blank" rel="noopener noreferrer">
                Solicite seu PROJETO agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Mais de 5 anos</div>
                <div className="text-sm text-white/70">de experiência em projetos</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">+50 projetos</div>
                <div className="text-sm text-white/70">entregues com excelência</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Garantia total</div>
                <div className="text-sm text-white/70">de qualidade e conformidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        
      </div>
    </section>;
};
export default Hero;