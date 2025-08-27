import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Award, Globe } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing-facility.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Premium Dehydrated
              <br />
              <span className="text-accent">Onions & Garlic</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Leading manufacturer of high-quality dehydrated onions and garlic products, 
              serving domestic and international markets with excellence since inception.
            </p>
            
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-accent" />
                <span className="text-white/90">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-white/90">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-white/90">Global Export</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-elegant">
                View Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={manufacturingImage} 
                alt="Modern food manufacturing facility" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-card">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;