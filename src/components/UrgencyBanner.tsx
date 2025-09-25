import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Zap } from "lucide-react";
const UrgencyBanner = () => {
  return <section className="bg-gradient-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Professional Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-white/20 p-2 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold"> CONSULTORIA ESPECIALIZADA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="block">Projetos de Engenharia</span>
            <span className="text-accent-foreground">com Garantia Total</span>
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Projetos estruturais aprovados pelo CREA com <strong>garantia de qualidade</strong> + consultoria técnica gratuita. 
            Orçamento detalhado com total transparência!
          </p>

          {/* Benefits Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">Aprovação rápida</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">Preço competitivo</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">Garantia total</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-xl hover-scale" asChild>
            <a href="https://wa.me/5585981851924?text=Olá,+tenho+interesse+em+solicitar+um+orçamento" target="_blank" rel="noopener noreferrer">
              SOLICITAR ORÇAMENTO AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <p className="text-sm mt-4 opacity-80"> Resposta imediata no WhatsApp • Sem compromisso</p>
        </div>
      </div>
    </section>;
};
export default UrgencyBanner;