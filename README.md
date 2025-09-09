# ALX Listing App - Deployed

A modern Airbnb clone built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel.

## 🚀 Live Demo

**Production URL:** [https://alx-listing-app-deployed-ecru.vercel.app/](https://alx-listing-app-deployed-ecru.vercel.app/)

## 📋 Features

- **Property Listings**: Browse available properties with detailed information
- **Property Details**: View individual property details with images and amenities
- **Booking System**: Complete booking form with order summary and cancellation policy
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **TypeScript**: Full type safety and modern development experience
- **API Integration**: RESTful API endpoints for properties and reviews

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Deployment**: Vercel

## 📁 Project Structure

```
├── components/
│   ├── booking/
│   │   ├── BookingForm.tsx
│   │   ├── CancellationPolicy.tsx
│   │   └── OrderSummary.tsx
│   └── property/
│       ├── PropertyCard.tsx
│       ├── PropertyDetail.tsx
│       └── ReviewSection.tsx
├── pages/
│   ├── api/
│   │   ├── properties.ts
│   │   └── properties/
│   │       ├── [id].ts
│   │       └── [id]/reviews.ts
│   ├── booking/
│   │   └── index.tsx
│   ├── property/
│   │   └── [id].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
└── public/
```

## 🔧 API Endpoints

- `GET /api/properties` - Fetch all properties
- `GET /api/properties/[id]` - Fetch specific property details
- `GET /api/properties/[id]/reviews` - Fetch property reviews

## 🚀 Local Development

1. Clone the repository:
```bash
git clone https://github.com/Khay-Cee/alx-listing-app-deployed-1.git
cd alx-listing-app-deployed
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This app is deployed on Vercel. To deploy your own instance:

1. Push to GitHub repository
2. Connect to Vercel dashboard
3. Set environment variables in Vercel
4. Deploy automatically

## 📱 Responsive Design

- **Mobile**: Optimized navigation and touch-friendly interface
- **Tablet**: Balanced layout with enhanced touch interactions  
- **Desktop**: Full-featured layout with sidebar and grid systems

## 🔐 Environment Variables

```bash
NEXT_PUBLIC_API_BASE_URL=https://your-domain.vercel.app
```

## 📄 License

This project is licensed under the MIT License.
