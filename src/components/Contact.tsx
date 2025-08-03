import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviar dados para o webhook
      await fetch("https://eoqifbmolyjka5u.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          telefone: formData.phone,
          empresa: formData.company || 'Não informado',
          tipoDeProjeto: formData.projectType || 'Não informado',
          mensagem: formData.message,
          timestamp: new Date().toISOString(),
          origem: "Steel Works Website"
        })
      });
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua solicitação. Entraremos em contato em até 24 horas."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: ""
      });
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Phone,
    title: "Telefone",
    content: "(11) 9999-9999",
    subtitle: "WhatsApp disponível"
  }, {
    icon: Mail,
    title: "E-mail",
    content: "contato@metalstruct.com.br",
    subtitle: "Resposta em até 24h"
  }, {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Paulista, 1000 - São Paulo/SP",
    subtitle: "CEP: 01310-100"
  }, {
    icon: Clock,
    title: "Horário",
    content: "Segunda a Sexta: 8h às 18h",
    subtitle: "Sábado: 8h às 12h"
  }];
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <span>Solicite um Orçamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(11) 99999-9999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Tipo de Projeto</Label>
                    <Input id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} placeholder="Ex: Galpão industrial, Edifício comercial, Residencial..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Descreva seu projeto, área aproximada, localização e outras informações relevantes..." />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            
            {/* Contact Cards */}
            

            {/* Quick Actions */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Orçamento Rápido</h3>
                <p className="text-sm mb-4 opacity-90">
                  Precisa de um orçamento urgente? Entre em contato via WhatsApp!
                </p>
                <Button variant="accent" size="sm" className="w-full" asChild>
                  <a href="https://api.whatsapp.com/send/?phone=5585981851924&text=Ol%C3%A1%2C+tenho+interesse+em+fazer+um+or%C3%A7amento%EF%BF%BD&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>;
};
export default Contact;