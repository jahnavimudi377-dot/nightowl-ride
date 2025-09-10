import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, MapPin, Zap, TrendingUp } from 'lucide-react';
import prebookingImage from '@/assets/prebooking-feature.jpg';

const PreBooking = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [passengers, setPassengers] = useState('1');

  const routes = [
    { id: 'tirupati', name: 'MBU ↔ Tirupati', basePrice: 120, demand: 'high' },
    { id: 'railway', name: 'MBU ↔ Railway Station', basePrice: 80, demand: 'medium' },
    { id: 'bus-stand', name: 'MBU ↔ Bus Stand', basePrice: 60, demand: 'low' },
    { id: 'mall', name: 'MBU ↔ Shopping Mall', basePrice: 45, demand: 'medium' },
    { id: 'airport', name: 'MBU ↔ Airport', basePrice: 200, demand: 'low' },
  ];

  const timeSlots = [
    { id: 'morning', label: '6:00 AM - 10:00 AM', multiplier: 1.0 },
    { id: 'afternoon', label: '10:00 AM - 4:00 PM', multiplier: 0.9 },
    { id: 'evening', label: '4:00 PM - 8:00 PM', multiplier: 1.2 },
    { id: 'night', label: '8:00 PM - 12:00 AM', multiplier: 1.5 },
    { id: 'late-night', label: '12:00 AM - 6:00 AM', multiplier: 1.8 },
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'text-accent';
      case 'medium': return 'text-secondary';
      case 'low': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getDemandIcon = (demand: string) => {
    switch (demand) {
      case 'high': return <TrendingUp className="h-4 w-4" />;
      case 'medium': return <Zap className="h-4 w-4" />;
      case 'low': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  const selectedRouteData = routes.find(r => r.id === selectedRoute);
  const selectedTimeData = timeSlots.find(t => t.id === selectedTime);
  const estimatedPrice = selectedRouteData && selectedTimeData 
    ? Math.round(selectedRouteData.basePrice * selectedTimeData.multiplier * parseInt(passengers))
    : null;

  return (
    <section id="pre-booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Smart <span className="bg-gradient-energy bg-clip-text text-transparent">Pre-Booking</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your trips ahead during festivals, holidays, or any time. Get guaranteed rides with transparent pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Interface */}
          <Card className="p-8 shadow-card border-0">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                Book Your Ride
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 p-0">
              {/* Route Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Select Route</label>
                <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Choose your destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {routes.map(route => (
                      <SelectItem key={route.id} value={route.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{route.name}</span>
                          <div className="flex items-center gap-2 ml-4">
                            <span className={`text-xs ${getDemandColor(route.demand)}`}>
                              {route.demand} demand
                            </span>
                            {getDemandIcon(route.demand)}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Select Time Slot</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Choose your preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(slot => (
                      <SelectItem key={slot.id} value={slot.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{slot.label}</span>
                          <span className="text-xs text-muted-foreground ml-4">
                            {slot.multiplier > 1 ? `+${Math.round((slot.multiplier - 1) * 100)}%` : 
                             slot.multiplier < 1 ? `-${Math.round((1 - slot.multiplier) * 100)}%` : 'Base'}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Passengers */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Number of Passengers</label>
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4 Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Estimate */}
              {estimatedPrice && (
                <Card className="p-4 bg-gradient-subtle border border-primary/20">
                  <CardContent className="flex items-center justify-between p-0">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-energy rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Estimated Price</p>
                        <p className="text-sm text-muted-foreground">Transparent & Fair</p>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-primary">₹{estimatedPrice}</p>
                  </CardContent>
                </Card>
              )}

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6"
                disabled={!selectedRoute || !selectedTime}
              >
                Pre-Book Now
              </Button>
            </CardContent>
          </Card>

          {/* Features & Benefits */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={prebookingImage} 
                alt="Pre-booking features with calendar and smartphone"
                className="w-full h-64 object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl" />
            </div>

            <div className="grid gap-6">
              <Card className="p-6 shadow-card border-0">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="p-3 bg-gradient-trust rounded-xl">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Festival Planning</h3>
                    <p className="text-muted-foreground">
                      Book rides weeks in advance for Diwali, Holi, or semester breaks. 
                      Guaranteed availability when demand is highest.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-card border-0">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="p-3 bg-gradient-energy rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Night Safety</h3>
                    <p className="text-muted-foreground">
                      Pre-book late night returns from Tirupati or city. 
                      No more waiting alone at bus stands or railway stations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-card border-0">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="p-3 bg-primary rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Group Bookings</h3>
                    <p className="text-muted-foreground">
                      Travel with friends! Share rides and costs. 
                      Perfect for movie nights, shopping trips, or group events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreBooking;