import React from 'react';
import Card from '../ui/card';

export default function FeaturesSection() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            iconSrc="/assets/Plant.png"
            iconAlt="Natural ingredients icon"
            title="100% Natural"
            description="Pure botanical extracts and organic ingredients"
          />
          <Card
            iconSrc="/assets/Plant.png"
            iconAlt="Skin loving formula"
            title="Skin Loving"
            description="Gentle formulas designed for all skin types"
          />
          <Card
            iconSrc="/assets/Plant.png"
            iconAlt="Cruelty free products"
            title="Cruelty Free"
            description="Ethically tested with no harm to animals"
          />
          <Card
            iconSrc="/assets/Plant.png"
            iconAlt="Dermatologist tested"
            title="Expert Tested"
            description="Dermatologist approved for ultimate care"
          />
        </div>
      </div>
    </div>
  );
}