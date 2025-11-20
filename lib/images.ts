// Image mapping - maps descriptive names to actual image files in public folder
export const images = {
  // Hero & Main
  heroBackground: "/image4.jpeg",
  heroKitchen: "/601828136.jpg",
  terraceMountain: "/601828177.jpg",
  oceanTerrace: "/601828180.jpg",
  
  // New Property Images
  propertyImage1: "/image1.jpeg",
  propertyImage2: "/image2.jpeg",
  propertyImage4: "/image4.jpeg",
  propertyImage5: "/image5.jpeg",
  propertyImage7: "/image7.jpeg",
  propertyImage8: "/image8.jpeg",
  propertyImage10: "/image10.jpeg",
  propertyImage11: "/image11.jpeg",
  propertyImage12: "/image12.jpeg",
  
  // Gallery
  gardenBougainvillea: "/601828184.jpg",
  infinityPool: "/601828185.jpg",
  aerialVilla: "/601828190.jpg",
  
  // Features
  modernInterior: "/601828206.jpg",
  diningRoom: "/671338991.jpg",
  livingSpace: "/671344178.jpg",
  
  // Bedrooms
  masterBedroom: "/671345275.jpg",
  bedroomOcean: "/671347648.jpg",
  bedroomSunset: "/671347785.jpg",
  
  // Exterior & Architecture
  homeExterior: "/671349312.jpg",
  stoneWalls: "/671350234.jpg",
  glassRailing: "/671351681.jpg",
  
  // Living Areas
  livingRoom: "/671353553.jpg",
  homeOffice: "/671376659.jpg",
  
  // Amenities
  fitnessRoom: "/695531455.jpg",
  homeCinema: "/695531913.jpg",
  golfSimulator: "/695532127.jpg",
  spa: "/695532344.jpg",
  billiard: "/695532592.jpg",
  
  // Additional
  loungeChair: "/695532905.jpg",
  bedroomInterior: "/695533549.jpg",
  villaTerrace: "/695534207.jpg",
  poolSunset: "/695534850.jpg",
  map: "/695535934.jpg",
  award: "/754374006.jpg",
  
  // Placeholder
  placeholder: "/placeholder.svg",
} as const

// Helper function to get image or fallback to placeholder
export function getImage(key: keyof typeof images): string {
  return images[key] || images.placeholder
}

