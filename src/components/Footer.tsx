import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = ["Estruturas Comerciais", "Galpões Industriais", "Armazéns e Depósitos", "Estruturas Residenciais", "Cálculos Estruturais", "Projetos Executivos"];
  const quickLinks = [{
    name: "Início",
    href: "#home"
  }, {
    name: "Serviços",
    href: "#services"
  }, {
    name: "Projetos",
    href: "#projects"
  }, {
    name: "Sobre",
    href: "#about"
  }, {
    name: "Contato",
    href: "#contact"
  }];
  return <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Steel Works</div>
            <p className="text-white/80 text-sm">Especialistas em projetos de engenharia para estruturas metálicas. Mais de 5 anos transformando ideias em realidade com segurança e qualidade.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => <li key={index}>
                  <a href="#services" className="text-white/80 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>)}
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/80">
                  <div>Aldeota</div>
                  <div>Fortaleza, Ce</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div className="text-sm text-white/80">(85) 98185-1924</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-sm text-white/80">steelworksadm@gmail.com</div>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-sm text-white/60">
                <div className="font-medium">Horário de Atendimento:</div>
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © {currentYear} MetalStruct Engenharia. Todos os direitos reservados.
            </div>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;