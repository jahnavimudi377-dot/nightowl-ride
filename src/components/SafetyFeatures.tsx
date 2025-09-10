import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, MapPin, Phone, Camera, Clock, Bell } from 'lucide-react';
import safetyImage from '@/assets/safety-features.jpg';

const SafetyFeatures = () => {
  const safetyFeatures = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Live GPS Tracking",
      description: "Real-time location sharing with family and friends. Track your ride from pickup to drop-off.",
      color: "bg-gradient-trust"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Drivers",
      description: "All drivers are background-checked, campus-trained, and rated by students for your safety.",
      color: "bg-primary"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Emergency SOS",
      description: "One-tap emergency button connects you to campus security and local authorities instantly.",
      color: "bg-gradient-energy"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Trip Recording",
      description: "Automatic photo verification at pickup and drop-off points for complete journey documentation.",
      color: "bg-secondary"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Night Mode Safety",
      description: "Enhanced safety protocols for late-night rides with mandatory check-ins and route monitoring.",
      color: "bg-gradient-trust"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Alerts",
      description: "Automatic notifications to emergency contacts if ride deviates from planned route.",
      color: "bg-gradient-energy"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Safety First
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-trust bg-clip-text text-transparent">Safety</span> You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety is our top priority. Advanced technology and verified drivers ensure 
            every journey is secure, especially during night hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Safety Features Grid */}
          <div className="grid gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 shadow-card border-0 hover:shadow-glow transition-smooth">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className={`p-3 ${feature.color} rounded-xl text-white`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Illustration */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={safetyImage} 
                alt="Safety features including GPS tracking and emergency systems"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating Safety Indicators */}
            <Card className="absolute top-8 -left-4 p-4 shadow-glow border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-0">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold">Driver: Verified</p>
                  <p className="text-xs text-muted-foreground">Rating: 4.9★</p>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute bottom-8 -right-4 p-4 shadow-glow border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="flex items-center gap-3 p-0">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold">Live Tracking</p>
                  <p className="text-xs text-muted-foreground">Family Notified</p>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-glow border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-2 p-0">
                <Shield className="h-8 w-8 text-primary" />
                <p className="text-sm font-bold text-center">100% Safe</p>
                <p className="text-xs text-muted-foreground text-center">Zero Incidents</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <Card className="p-6 text-center shadow-card border-0">
            <CardContent className="p-0">
              <p className="text-3xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Verified Drivers</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center shadow-card border-0">
            <CardContent className="p-0">
              <p className="text-3xl font-bold text-secondary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Safety Monitoring</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center shadow-card border-0">
            <CardContent className="p-0">
              <p className="text-3xl font-bold text-accent mb-2">&lt;2 Min</p>
              <p className="text-sm text-muted-foreground">Emergency Response</p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center shadow-card border-0">
            <CardContent className="p-0">
              <p className="text-3xl font-bold text-primary mb-2">0</p>
              <p className="text-sm text-muted-foreground">Safety Incidents</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;