import React from 'react';
import { Star, Quote, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { testimonials } from '../data/mockData';

const Reviews = () => {
  const handleLeaveReview = () => {
    const message = encodeURIComponent('Hi! I would like to share my feedback about my experience at Shikha Ice Cream Parlour & Cafe');
    window.open(`https://wa.me/917054503079?text=${message}`, '_blank');
  };

  const averageRating = 5.0;
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-yellow-100 text-yellow-600 hover:bg-yellow-100 border-yellow-200">
            <Star className="w-3 h-3 mr-1 fill-yellow-500" /> Customer Reviews
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Customers</span> Say
          </h1>
          <p className="text-xl text-gray-600">Real reviews from real customers</p>
        </div>

        {/* Rating Summary */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold mb-2">{averageRating}</div>
              <div className="flex items-center justify-center md:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <p className="text-white/90">Based on {totalReviews} reviews</p>
            </div>
            <div className="md:col-span-2 space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-3">
                  <span className="w-12 text-sm">{stars} stars</span>
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-300"
                      style={{ width: stars === 5 ? '100%' : '0%' }}
                    ></div>
                  </div>
                  <span className="w-12 text-right text-sm">{stars === 5 ? '100%' : '0%'}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((review) => (
            <Card key={review.id} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500">
                      <AvatarFallback className="text-white font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-orange-200" />
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic mb-4">"{review.text}"</p>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-orange-500 transition-colors text-sm">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leave Review CTA */}
        <Card className="p-12 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your feedback helps us improve and helps others discover great food!
          </p>
          <Button
            onClick={handleLeaveReview}
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            <Star className="w-5 h-5 mr-2" />
            Leave a Review
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
