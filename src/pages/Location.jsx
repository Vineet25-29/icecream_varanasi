import React from 'react';
import { MapPin, Phone, Navigation, Clock, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { businessInfo } from '../data/mockData';

const Location = () => {
  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/search/Tilmampur+Ashapur+Road+Varanasi', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Find <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600">Visit us at our cafe in Varanasi</p>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 border-gray-200 shadow-xl">
            <div className="h-96 md:h-[500px] bg-gray-200 relative">
              <iframe
                src={businessInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shikha Ice Cream Parlour Location"
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white border-2 border-gray-100 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-8 h-8 text-orange-500 mr-3" />
              Our Location
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-lg">{businessInfo.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" />
                  Opening Hours
                </h3>
                <p className="text-gray-600 text-lg">{businessInfo.hours}</p>
                <p className="text-gray-500 mt-1">Open all 7 days</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Phone className="w-5 h-5 text-orange-500 mr-2" />
                  Contact
                </h3>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-orange-500 hover:text-orange-600 text-lg font-medium"
                >
                  {businessInfo.phone}
                </a>
              </div>
              <Button
                onClick={handleGetDirections}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
                  <p className="text-white/90 text-lg">{businessInfo.delivery}</p>
                  <p className="text-white/80 text-sm mt-2">Available for nearby areas</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Reach</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Located on Ashapur Road, easily accessible from all parts of Varanasi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Parking available for two-wheelers and cars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Well-connected by local transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  <span>Family-friendly ambiance with comfortable seating</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-orange-50 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Landmarks Nearby</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Near Tilmampur Chauraha</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-orange-500 mr-2" />
                  <span>Ashapur Road Main Market</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-12 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Visit? We'll Deliver!</h2>
          <p className="text-xl mb-8 text-white/90">Order online and enjoy our delicious treats at home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917054503079">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </Button>
            </a>
            <a href="/order">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500">
                Order Online
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Location;
