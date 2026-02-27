import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { businessInfo } from '../data/mockData';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = encodeURIComponent(
      `Hi! I'm ${formData.get('name')}\n\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\n\nMessage: ${formData.get('message')}`
    );
    window.open(`https://wa.me/917054503079?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: businessInfo.phone,
      action: `tel:${businessInfo.phone}`,
      buttonText: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: businessInfo.phone,
      action: 'https://wa.me/917054503079',
      buttonText: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: businessInfo.address,
      action: '/location',
      buttonText: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Open Hours',
      info: businessInfo.hours,
      action: null,
      buttonText: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">We'd love to hear from you!</p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-white">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{method.info}</p>
                {method.action && method.buttonText && (
                  <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      {method.buttonText}
                    </Button>
                  </a>
                )}
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white border-2 border-gray-100 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="border-2 border-gray-200 focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="border-2 border-gray-200 focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="border-2 border-gray-200 focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                <Textarea
                  name="message"
                  placeholder="Tell us how we can help you..."
                  required
                  rows={5}
                  className="border-2 border-gray-200 focus:border-orange-400"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg"
              >
                Send via WhatsApp
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-white border-2 border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Cafe</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Opening Hours</p>
                    <p className="text-gray-600">{businessInfo.hours}</p>
                    <p className="text-sm text-gray-500 mt-1">Open 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Phone</p>
                    <a href={`tel:${businessInfo.phone}`} className="text-orange-500 hover:text-orange-600">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
              <h3 className="text-2xl font-bold mb-3">Quick Response Guarantee</h3>
              <p className="text-white/90 mb-4">
                We respond to all WhatsApp messages within 5 minutes during business hours!
              </p>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Chat with us now</span>
              </div>
            </Card>

            <Card className="p-6 bg-white border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
