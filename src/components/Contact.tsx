import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Industrial Avenue", "Food Processing Zone", "Mumbai, Maharashtra 400001", "India"]
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 22 1234 5678", "+91 98765 43210", "Toll Free: 1800 123 4567"]
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@mohsinfoods.com", "sales@mohsinfoods.com", "export@mohsinfoods.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to partner with us? Contact our team for quotes, samples, or any inquiries 
            about our dehydrated onion and garlic products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground">{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company Name</label>
                    <Input placeholder="Enter company name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Product Interest</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                    <option value="">Select product category</option>
                    <option value="onion-flakes">Dehydrated Onion Flakes</option>
                    <option value="onion-granules">Dehydrated Onion Granules</option>
                    <option value="onion-powder">Dehydrated Onion Powder</option>
                    <option value="garlic-granules">Dehydrated Garlic Granules</option>
                    <option value="garlic-flakes">Dehydrated Garlic Flakes</option>
                    <option value="garlic-powder">Dehydrated Garlic Powder</option>
                    <option value="custom">Custom Requirements</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, quantity needed, target price, or any other details..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-gradient-primary shadow-elegant text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;