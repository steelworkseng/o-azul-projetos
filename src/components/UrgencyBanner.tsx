import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Zap } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <section className="bg-gradient-accent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Urgency Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-white/20 p-2 rounded-full animate-pulse">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold">⏰ OFERTA LIMITADA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="block">Últimas 5 vagas para</span>
            <span className="text-accent-foreground">Janeiro 2025</span>
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Garanta seu projeto com <strong>15% de desconto</strong> + consultoria técnica gratuita. 
            Orçamento aprovado em até 48 horas ou não cobramos nada!
          </p>

          {/* Benefits Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">Aprovação em 48h</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">15% de desconto</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-accent-foreground" />
              <span className="font-semibold">Garantia total</span>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-xl animate-pulse hover-scale"
            asChild
          >
            <a href="https://api.whatsapp.com/send/?phone=5585981851924&text=Ol%C3%A1%2C+quero+garantir+minha+vaga+com+15%25+de+desconto%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              🔥 GARANTIR MINHA VAGA AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <p className="text-sm mt-4 opacity-80">
            ⚡ Resposta imediata no WhatsApp • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;