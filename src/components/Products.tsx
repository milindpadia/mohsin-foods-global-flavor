import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dehydratedOnions from "@/assets/dehydrated-onions.jpg";
import dehydratedGarlic from "@/assets/dehydrated-garlic.jpg";

const products = [
  {
    id: 1,
    name: "Dehydrated Onion Flakes",
    image: dehydratedOnions,
    description: "Premium quality dehydrated onion flakes with excellent flavor retention and extended shelf life.",
    variants: ["Flakes", "Granules", "Powder", "Minced"],
    applications: ["Food Processing", "Ready Meals", "Seasonings", "Snack Foods"]
  },
  {
    id: 2,
    name: "Dehydrated Garlic Products",
    image: dehydratedGarlic,
    description: "High-quality dehydrated garlic products maintaining natural aroma and taste for various culinary applications.",
    variants: ["Granules", "Flakes", "Powder", "Slices"],
    applications: ["Food Industry", "Restaurants", "Spice Blends", "Export"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality dehydrated onion and garlic products, 
            perfect for food processing and culinary applications worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Available Variants:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <Badge key={variant} variant="secondary" className="bg-gradient-primary text-white">
                        {variant}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application) => (
                      <Badge key={application} variant="outline" className="border-primary text-primary">
                        {application}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary shadow-elegant">
                  Request Sample & Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;