import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Calendar, 
  Star, 
  Clock,
  MapPin,
  Smartphone,
  DollarSign,
  Shield
} from 'lucide-react';

const UniqueFeatures = () => {
  const uniqueFeatures = [
    {
      title: "Smart Demand Prediction",
      description: "AI predicts festival rush and adjusts availability 2 weeks ahead",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-gradient-hero",
      benefits: ["No surge pricing surprises", "Guaranteed availability", "Smart driver allocation"]
    },
    {
      title: "Campus Group Rides",
      description: "Share rides with classmates going to same destination",
      icon: <Users className="h-6 w-6" />,
      color: "bg-gradient-trust",
      benefits: ["Split costs fairly", "Make new friends", "Eco-friendly travel"]
    },
    {
      title: "Idle Driver Network",
      description: "Connect with available drivers during low-demand periods",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-gradient-energy",
      benefits: ["Instant availability", "Better driver earnings", "Lower off-peak prices"]
    },
    {
      title: "Festival Calendar Integration",
      description: "Pre-plan rides for all campus events and holidays",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-primary",
      benefits: ["Early bird discounts", "Priority booking", "Stress-free festivals"]
    }
  ];

  const comparisonFeatures = [
    {
      feature: "Campus-Specific Routes",
      us: "Pre-defined MBU routes",
      others: "Generic city routes",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      feature: "Student-Focused Pricing",
      us: "Transparent, student-friendly",
      others: "Dynamic surge pricing",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      feature: "Pre-Booking System",
      us: "Book weeks in advance",
      others: "Immediate booking only",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      feature: "Night Safety Features",
      us: "Enhanced night protocols",
      others: "Standard safety measures",
      icon: <Shield className="h-5 w-5" />
    },
    {
      feature: "Group Booking",
      us: "Smart friend matching",
      others: "Individual rides only",
      icon: <Users className="h-5 w-5" />
    },
    {
      feature: "Demand Balancing",
      us: "AI-powered predictions",
      others: "Reactive to demand",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            Why We're Different
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Beyond <span className="bg-gradient-energy bg-clip-text text-transparent">Regular</span> Ride Apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for MBU students with features that address real campus transport challenges.
          </p>
        </div>

        {/* Unique Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {uniqueFeatures.map((feature, index) => (
            <Card key={index} className="p-8 shadow-card border-0 hover:shadow-glow transition-smooth">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${feature.color} rounded-xl text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              How We Compare to <span className="text-muted-foreground line-through">Other Apps</span>
            </h3>
            <p className="text-muted-foreground">
              See why students choose us over generic ride-sharing apps
            </p>
          </div>

          <Card className="overflow-hidden shadow-card border-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Header */}
              <div className="p-6 bg-gradient-subtle border-b border-r border-border">
                <h4 className="font-bold text-center">Features</h4>
              </div>
              <div className="p-6 bg-gradient-hero text-white border-b border-r border-white/20">
                <h4 className="font-bold text-center">Campus Connect</h4>
              </div>
              <div className="p-6 bg-gradient-subtle border-b border-r border-border">
                <h4 className="font-bold text-center">Rapido</h4>
              </div>
              <div className="p-6 bg-gradient-subtle border-b border-border">
                <h4 className="font-bold text-center">Others</h4>
              </div>

              {/* Comparison Rows */}
              {comparisonFeatures.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="p-4 border-b border-r border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-medium text-sm">{item.feature}</span>
                    </div>
                  </div>
                  <div className="p-4 border-b border-r border-primary/20 bg-primary/5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-primary">{item.us}</span>
                    </div>
                  </div>
                  <div className="p-4 border-b border-r border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item.others}</span>
                    </div>
                  </div>
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-muted-foreground rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item.others}</span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-subtle border-0 max-w-2xl mx-auto shadow-card">
            <CardContent className="p-0 space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-hero rounded-2xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Experience the Difference?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of MBU students who've made the smart switch to campus-focused transport.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="px-8">
                  Download Campus Connect
                </Button>
                <Button variant="outline-hero" size="lg" className="px-8">
                  Join as Driver
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;