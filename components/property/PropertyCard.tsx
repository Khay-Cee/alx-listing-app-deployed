import React from "react";

interface PropertyCardProps {
  property: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">{property.name}</h2>
      <p className="mb-1">{property.location}</p>
      <p className="mb-1">Price: ${property.price}</p>
      <p className="mb-1">Type: {property.type}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default PropertyCard;
