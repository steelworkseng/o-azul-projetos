import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";
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
            Reduza <span className="text-accent">30% dos custos</span> com
            <span className="block"> Estruturas Metálicas </span>
            Certificadas
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">Projetos aprovados pelo CREA. Mais de 5 anos de experiência, mais de 50 projetos entregues com garantia total de qualidade.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 shadow-accent" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5585981851924&text=Ol%C3%A1%2C+tenho+interesse+em+fazer+um+or%C3%A7amento%EF%BF%BD&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Orçamento GRATUITO em 48h
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary hover-scale">
              Ver Cases de Sucesso
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">100% Seguro</div>
                <div className="text-sm text-white/70">Normas ABNT</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Certificado</div>
                <div className="text-sm text-white/70">CREA Ativo</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-accent/20 p-3 rounded-full">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">5+ Anos</div>
                <div className="text-sm text-white/70">Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;