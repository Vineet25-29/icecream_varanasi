import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { menuItems, menuCategories } from '../data/mockData';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleOrderNow = () => {
    const message = encodeURIComponent('Hi! I would like to place an order');
    window.open(`https://wa.me/917054503079?text=${message}`, '_blank');
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Delicious</span> Menu
          </h1>
          <p className="text-xl text-gray-600">Fresh ingredients, amazing taste, unforgettable memories</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for your favorite dish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap bg-white p-2 rounded-xl shadow-sm border border-gray-200">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-3 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No items found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-orange-500 text-white shadow-lg">Popular</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">₹{item.price}</span>
                    <Button
                      onClick={handleOrderNow}
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                    >
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Can't Decide? Call Us!</h3>
          <p className="text-lg mb-6 text-white/90">Our team will help you choose the perfect treat</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleOrderNow}
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              Order via WhatsApp
            </Button>
            <a href="tel:+917054503079">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500">
                Call +91 7054503079
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
