# ParkEasy - Smart Parking Platform

A modern parking management platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🅿️ **Smart Parking Search**: Find parking spots near you
- 🗺️ **Interactive Map View**: View parking locations on Google Maps
- 📱 **Responsive Design**: Works on all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🔐 **User Authentication**: Login/signup functionality
- 👨‍💼 **Owner Dashboard**: Manage your parking spaces
- 💳 **Payment Integration**: Secure booking system

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd parkeasey
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Google Maps API key:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - (Optional) Places API for enhanced features
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### Running the Application

```bash
# Development server
npm run dev

# Production build
npm run build
npm run start

# Linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
parkeasey/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── (pages)/         # Route groups
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   ├── context/             # React context providers
│   └── lib/                 # Utilities and constants
├── public/                  # Static assets
└── package.json
```

## Key Features

### Map Integration
- Interactive Google Maps with custom markers
- Different colors for free vs paid parking
- Click markers for parking details
- Get directions to parking spots

### Parking Management
- View available parking spots
- Real-time availability
- Pricing information
- Location details

### User Experience
- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Mobile-responsive design
- Accessibility features

## API Routes

The application includes several pages:
- `/` - Home page with featured parking
- `/find-parking` - Search and filter parking spots
- `/map-view` - Interactive map view
- `/login` - User authentication
- `/signup` - User registration
- `/dashboard` - User dashboard
- `/owner` - Parking owner dashboard
- `/pricing` - Subscription plans
- `/partner` - Partner information

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Maps**: Google Maps JavaScript API
- **Charts**: Recharts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
