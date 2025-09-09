import type { NextApiRequest, NextApiResponse } from 'next';

// Sample property data - should match the data in properties.ts
const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    description: "A stunning beachfront villa with panoramic ocean views",
    price: 299,
    location: "Malibu, CA",
    image: "/api/placeholder/400/300",
    amenities: ["WiFi", "Pool", "Beach Access", "Kitchen"],
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    description: "A charming cabin nestled in the mountains with hiking trails nearby",
    price: 149,
    location: "Aspen, CO",
    image: "/api/placeholder/400/300",
    amenities: ["WiFi", "Fireplace", "Hot Tub", "Kitchen"],
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    title: "Modern City Apartment",
    description: "A sleek apartment in the heart of downtown with city views",
    price: 199,
    location: "New York, NY",
    image: "/api/placeholder/400/300",
    amenities: ["WiFi", "Gym", "Rooftop", "Kitchen"],
    rating: 4.7,
    reviews: 203
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Find property by id
    const property = properties.find(p => p.id === parseInt(id as string));
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    
    res.status(200).json(property);
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}