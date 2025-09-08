import React from "react";

interface PropertyDetailProps {
  property: any;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h1 className="text-2xl font-bold mb-2">{property.name}</h1>
      <p className="mb-2">{property.location}</p>
      <p className="mb-2">Price: ${property.price}</p>
      <p className="mb-2">Type: {property.type}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default PropertyDetail;
