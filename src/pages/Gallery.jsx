import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mockData';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent } from '../components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600">A visual treat of our delicious offerings</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Visit Us CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us & Experience More!</h2>
          <p className="text-xl mb-8 text-white/90">Pictures don't do justice - come taste the difference</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917054503079" className="inline-block">
              <button className="px-8 py-4 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Call for Directions
              </button>
            </a>
            <a href="/location" className="inline-block">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors text-lg">
                View Location
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
