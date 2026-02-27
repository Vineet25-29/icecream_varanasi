import React from 'react';
import { ArrowRight, Clock, Truck, Shield, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const OrderOnline = () => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      'Hi! I would like to place an order from Shikha Ice Cream Parlour & Cafe.\n\nPlease share the menu or help me with my order.'
    );
    window.open(`https://wa.me/917054503079?text=${message}`, '_blank');
  };

  const orderSteps = [
    {
      step: '1',
      title: 'Click Order Now',
      description: 'Start your order via WhatsApp',
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Share Your Order',
      description: 'Tell us what you want',
      icon: Phone
    },
    {
      step: '3',
      title: 'Confirm Details',
      description: 'Address and delivery time',
      icon: Truck
    },
    {
      step: '4',
      title: 'Enjoy Your Food',
      description: 'Fresh and hot delivered',
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On orders above ₹200'
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast preparation and delivery'
    },
    {
      icon: Shield,
      title: 'Safe & Hygienic',
      description: 'Highest safety standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-600 hover:bg-green-100 border-green-200">
            <MessageCircle className="w-3 h-3 mr-1" /> WhatsApp Ordering Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Order Your Favorite
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Treats Online
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Easy WhatsApp ordering for your convenience. Fast, simple, and secure!
          </p>

          <Button
            onClick={handleWhatsAppOrder}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-7 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Order Now via WhatsApp
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* How to Order Steps */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How to Order?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {index < orderSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent -ml-4"></div>
                  )}
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-white relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 mx-auto mb-4 mt-6 bg-orange-50 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="text-xl mb-8 text-white/90">Get free delivery on orders above ₹200</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppOrder}
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order via WhatsApp
            </Button>
            <a href="tel:+917054503079">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-6 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Area</h3>
            <p className="text-gray-600 mb-4">
              We deliver to Tilmampur, Ashapur Road, and nearby areas in Varanasi.
            </p>
            <p className="text-sm text-gray-500">Delivery time: 30-45 minutes</p>
          </Card>
          <Card className="p-6 bg-white border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Options</h3>
            <p className="text-gray-600 mb-4">
              Cash on delivery available. Pay when your order arrives!
            </p>
            <p className="text-sm text-gray-500">UPI and digital payments also accepted</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
