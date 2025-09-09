import type { NextApiRequest, NextApiResponse } from 'next';

// Sample reviews data
const reviewsData: { [key: number]: any[] } = {
  1: [
    {
      id: 1,
      userName: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning villa! The ocean views were breathtaking and the amenities were top-notch.",
      date: "2024-08-15"
    },
    {
      id: 2,
      userName: "Mike Chen",
      rating: 4,
      comment: "Great location and beautiful property. The pool area was fantastic for relaxing.",
      date: "2024-07-22"
    }
  ],
  2: [
    {
      id: 3,
      userName: "Emily Davis",
      rating: 5,
      comment: "Perfect mountain getaway! The cabin was cozy and the hot tub was amazing after hiking.",
      date: "2024-08-01"
    },
    {
      id: 4,
      userName: "John Smith",
      rating: 4,
      comment: "Great cabin with beautiful mountain views. Very peaceful and relaxing.",
      date: "2024-07-10"
    }
  ],
  3: [
    {
      id: 5,
      userName: "Anna Wilson",
      rating: 5,
      comment: "Excellent city apartment! Great location and modern amenities. Highly recommend!",
      date: "2024-08-20"
    },
    {
      id: 6,
      userName: "David Brown",
      rating: 4,
      comment: "Nice apartment in the heart of the city. Easy access to everything.",
      date: "2024-07-28"
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const propertyId = parseInt(id as string);

  if (req.method === 'GET') {
    const reviews = reviewsData[propertyId] || [];
    res.status(200).json(reviews);
  } else {
    // Method not allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}