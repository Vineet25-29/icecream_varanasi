import React from 'react';
import { Tag, Clock, Gift, Percent, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { offers } from '../data/mockData';

const Offers = () => {
  const handleOrderNow = () => {
    const message = encodeURIComponent('Hi! I would like to use an offer and place an order');
    window.open(`https://wa.me/917054503079?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-red-100 text-red-600 hover:bg-red-100 border-red-200">
            <Gift className="w-3 h-3 mr-1" /> Limited Time Offers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Special <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Offers</span> & Deals
          </h1>
          <p className="text-xl text-gray-600">Save more on your favorite treats!</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {offers.map((offer, index) => (
            <Card
              key={offer.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-300 bg-white group"
              style={{
                background: `linear-gradient(135deg, ${offer.color}15 0%, white 50%)`
              }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge
                      className="mb-4"
                      style={{
                        backgroundColor: `${offer.color}20`,
                        color: offer.color,
                        border: `1px solid ${offer.color}40`
                      }}
                    >
                      {offer.badge}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-gray-600 text-lg mb-4">{offer.description}</p>
                  </div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    style={{ backgroundColor: `${offer.color}20` }}
                  >
                    <Percent className="w-8 h-8" style={{ color: offer.color }} />
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-400 mb-1">Promo Code</p>
                  <p className="text-2xl font-bold text-white tracking-wider">{offer.code}</p>
                </div>

                <Button
                  onClick={handleOrderNow}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  size="lg"
                >
                  Use This Offer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Use Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-gray-100 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use Offers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Offer</h3>
              <p className="text-gray-600">Select the offer that suits your order</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Place Your Order</h3>
              <p className="text-gray-600">Order via WhatsApp or phone call</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mention Promo Code</h3>
              <p className="text-gray-600">Share the code when placing order</p>
            </div>
          </div>
        </div>

        {/* Terms Section */}
        <Card className="p-8 bg-gray-50 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Tag className="w-6 h-6 mr-2 text-orange-500" />
            Terms & Conditions
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Offers are valid for a limited time and subject to change without prior notice</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Free delivery offer applicable only on orders above ₹200</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Only one promo code can be used per order</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Student offers require valid student ID proof at delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Management reserves the right to modify or cancel offers</span>
            </li>
          </ul>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Save?</h3>
          <p className="text-lg mb-6 text-white/90">Start ordering and enjoy amazing discounts!</p>
          <Button
            onClick={handleOrderNow}
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100"
          >
            Order Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
