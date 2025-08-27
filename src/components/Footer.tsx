import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Mohsin Foods</h3>
            <p className="text-white/80 leading-relaxed">
              Premium manufacturer of dehydrated onion and garlic products, 
              serving global markets with quality and excellence for over 25 years.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">ISO 22000:2018 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#products" className="text-white/80 hover:text-accent transition-colors">Our Products</a></li>
              <li><a href="#quality" className="text-white/80 hover:text-accent transition-colors">Quality Assurance</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Certifications</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Export Guidelines</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Products</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Dehydrated Onion Flakes</span></li>
              <li><span className="text-white/80">Dehydrated Onion Granules</span></li>
              <li><span className="text-white/80">Dehydrated Onion Powder</span></li>
              <li><span className="text-white/80">Dehydrated Garlic Granules</span></li>
              <li><span className="text-white/80">Dehydrated Garlic Flakes</span></li>
              <li><span className="text-white/80">Dehydrated Garlic Powder</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>123 Industrial Avenue</div>
                  <div>Food Processing Zone</div>
                  <div>Mumbai, Maharashtra 400001</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>+91 22 1234 5678</div>
                  <div>+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <div>info@mohsinfoods.com</div>
                  <div>sales@mohsinfoods.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Mohsin Foods. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">Export Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;