import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import heroImage from '@/assets/hero-transport.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Campus
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Transport</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Pre-book rides, enjoy fair pricing, and travel safely between MBU and all destinations. 
                No more surge pricing during festivals or waiting at night.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 shadow-card border-0">
                <CardContent className="flex items-center gap-3 p-0">
                  <div className="p-2 bg-gradient-trust rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Pre-Booking</p>
                    <p className="text-xs text-muted-foreground">Plan ahead</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-card border-0">
                <CardContent className="flex items-center gap-3 p-0">
                  <div className="p-2 bg-gradient-energy rounded-lg">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fair Pricing</p>
                    <p className="text-xs text-muted-foreground">Always transparent</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-card border-0">
                <CardContent className="flex items-center gap-3 p-0">
                  <div className="p-2 bg-primary rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Safety First</p>
                    <p className="text-xs text-muted-foreground">24/7 tracking</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-card border-0">
                <CardContent className="flex items-center gap-3 p-0">
                  <div className="p-2 bg-secondary rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Campus Routes</p>
                    <p className="text-xs text-muted-foreground">MBU focused</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Book Your Ride Now
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
                Join as Driver
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Students Trust Us</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Transparent</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={heroImage} 
                alt="Smart campus transport with safe auto-rickshaw and students"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -left-8 top-16 p-4 shadow-glow border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0 flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">Live Tracking</p>
              </CardContent>
            </Card>

            <Card className="absolute -right-8 bottom-16 p-4 shadow-glow border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0 flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">Fair Price: ₹45</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;