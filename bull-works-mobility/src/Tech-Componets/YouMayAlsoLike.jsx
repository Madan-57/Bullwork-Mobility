import React from 'react';
import ProductCard from '../components/ProductCard';
// import ProductCard from './ProductCard'; // Make sure the path is correct

export default function YouMayAlsoLike() {
  const products = [
    {
      name: "BEAST",
      description: "The Mighty Autonomous Electric Tractor",
      imageSrc: "/assets/products/beast.png", // Replace with your actual image path
    },
    {
      name: "WARRIOR",
      description: "The Electric Self-propelled Boom Sprayer",
      imageSrc: "/assets/products/warrior.png", // Replace with your actual image path
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 uppercase mb-12 tracking-wide">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}