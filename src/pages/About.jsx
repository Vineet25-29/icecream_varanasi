import React from 'react';
import { Award, Heart, Users, Clock, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { stats } from '../data/mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Only the best Amul products and fresh ingredients make it to your plate.'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is prepared with care, passion, and attention to detail by our experienced team.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen, adapt, and serve with a smile.'
    },
    {
      icon: Shield,
      title: 'Hygienic Standards',
      description: 'We maintain the highest hygiene and food safety standards in preparation and delivery.'
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast preparation and delivery without compromising on quality and taste.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly updating our menu with new flavors and customer favorites.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-100 border-orange-200">
            <Heart className="w-3 h-3 mr-1 fill-orange-500" /> Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Shikha</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Shikha Ice Cream Parlour & Cafe - Your favorite destination for delicious treats in Varanasi
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-white border-2 border-gray-100 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Established with a vision to bring joy through food, Shikha Ice Cream Parlour & Cafe has become a beloved destination for families, students, and food lovers in Varanasi. Located in the heart of Tilmampur on Ashapur Road, we've been serving smiles since day one.
              </p>
              <p>
                What started as a small ice cream parlour has grown into a complete food destination, offering everything from premium ice creams and refreshing shakes to authentic Chinese cuisine and fast food favorites. Our commitment to quality, hygiene, and customer satisfaction has earned us the love and trust of thousands of happy customers.
              </p>
              <p>
                We believe that good food brings people together. Whether it's a family celebration, a student hangout, or a quick treat after a long day, we're here to make every moment special with our delicious offerings and warm hospitality.
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 hover:shadow-xl transition-shadow">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 bg-white">
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Trust Section */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We use only premium Amul products and maintain the highest standards of quality and hygiene. Your trust is our biggest achievement.
          </p>
          <div className="inline-flex items-center space-x-3 bg-white/20 px-6 py-3 rounded-full">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">FSSAI Certified & Hygienic</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
