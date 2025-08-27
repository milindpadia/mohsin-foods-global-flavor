import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "50,000+",
    label: "Tons Annual Capacity",
    description: "State-of-the-art manufacturing facility"
  },
  {
    icon: Users,
    value: "200+",
    label: "Satisfied Clients",
    description: "Across domestic and international markets"
  },
  {
    icon: Award,
    value: "ISO 22000",
    label: "Certified Quality",
    description: "Food safety management systems certified"
  },
  {
    icon: TrendingUp,
    value: "25+",
    label: "Years Experience",
    description: "Established expertise in food dehydration"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Leading the Future of 
              <span className="text-primary"> Food Dehydration</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mohsin Foods has been at the forefront of dehydrated food processing for over two decades. 
              We specialize in manufacturing premium quality dehydrated onions and garlic products that 
              meet international standards and exceed customer expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted 
              partner for food processors, manufacturers, and distributors worldwide. We continuously 
              invest in modern technology and sustainable practices to ensure the highest quality products.
            </p>
            
            <div className="bg-gradient-primary p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
              <p className="text-white/90">
                To provide the highest quality dehydrated onion and garlic products while 
                maintaining sustainable practices and fostering long-term partnerships with our clients globally.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;