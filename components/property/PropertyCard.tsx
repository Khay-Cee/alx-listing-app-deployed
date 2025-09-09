import React from "react";

interface PropertyCardProps {
  property: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <img 
          src={property.image || "/api/placeholder/400/300"} 
          alt={property.title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <h2 className="text-lg font-bold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-sm text-gray-500 mb-3">{property.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-green-600">${property.price}/night</p>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-sm">{property.rating} ({property.reviews})</span>
        </div>
      </div>
      {property.amenities && property.amenities.length > 0 && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {property.amenities.slice(0, 3).map((amenity: string, index: number) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-xs text-gray-500">+{property.amenities.length - 3} more</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
