import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para iniciar seu projeto? Nossa equipe está preparada para 
            desenvolver a solução ideal em estruturas metálicas para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Quick Actions */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Orçamento Rápido</h3>
                <p className="text-sm mb-4 opacity-90">
                  Precisa de um orçamento urgente? Entre em contato via WhatsApp!
                </p>
                <Button variant="accent" size="sm" className="w-full" asChild>
                  <a href="https://wa.me/5585981851924?text=Olá,+tenho+interesse+em+solicitar+um+orçamento" target="_blank" rel="noopener noreferrer">
                    WhatsApp: (85) 98185-1924
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta:</span>
                    <span className="font-medium">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-medium">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>;
};
export default Contact;