import React from 'react';

interface TruckCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  year: string;
}

export default function TruckCard({ imageUrl, title, description, price, year }: TruckCardProps) {
  return (
    <div className="card group">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-secondary-800 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>
          <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
            {year}
          </span>
        </div>
        <p className="text-secondary-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary-600">{price}</span>
          <button className="btn-primary text-sm">Ver Detalhes</button>
        </div>
      </div>
    </div>
  );
} 