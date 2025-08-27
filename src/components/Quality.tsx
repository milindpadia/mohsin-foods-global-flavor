import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Microscope, Truck, Leaf, Globe } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 22000:2018",
    description: "Food Safety Management System certified ensuring highest quality standards"
  },
  {
    icon: CheckCircle,
    title: "HACCP Certified",
    description: "Hazard Analysis Critical Control Points system implemented throughout production"
  },
  {
    icon: Microscope,
    title: "Laboratory Tested",
    description: "Every batch undergoes rigorous quality testing for purity and safety"
  },
  {
    icon: Truck,
    title: "Export Quality",
    description: "Products meet international export standards and regulations"
  },
  {
    icon: Leaf,
    title: "Natural Processing",
    description: "No artificial preservatives or chemicals used in our dehydration process"
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Compliance with FDA, EU, and other international food safety regulations"
  }
];

const Quality = () => {
  return (
    <section id="quality" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Quality Assurance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence ensures every product meets the highest international 
            standards. Quality is not just our promise—it's our guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-primary rounded-full">
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-secondary p-8 rounded-lg shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h3 className="text-2xl font-bold">Quality Control Process</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Raw material inspection and selection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Controlled dehydration process monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Batch-wise quality testing and documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Final product verification before packaging</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-white">Quality Assurance Rate</div>
                <div className="text-sm text-white/80 mt-2">Based on customer satisfaction surveys</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;