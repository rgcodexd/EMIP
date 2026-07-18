import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import dotenv from "dotenv";
import { resolve } from "path";

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const districts = ['Patna', 'Kanpur', 'Indore', 'Bhopal', 'Lucknow', 'Jaipur', 'Ranchi'];
const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune'];
const degrees = ['B.Tech / B.E.', 'B.Sc', 'B.Com', 'B.A.', 'MBA'];

// Helper to get random item
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Helper to get random number in range
const getRandNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Coordinates mapping
const coords = {
  'Patna': { lat: 25.5941, lng: 85.1376 },
  'Kanpur': { lat: 26.4499, lng: 80.3319 },
  'Indore': { lat: 22.7196, lng: 75.8577 },
  'Bhopal': { lat: 23.2599, lng: 77.4126 },
  'Lucknow': { lat: 26.8467, lng: 80.9462 },
  'Jaipur': { lat: 26.9124, lng: 75.7873 },
  'Ranchi': { lat: 23.3441, lng: 85.3096 },
  'Bengaluru': { lat: 12.9716, lng: 77.5946 },
  'Mumbai': { lat: 19.0760, lng: 72.8777 },
  'Delhi': { lat: 28.7041, lng: 77.1025 },
  'Hyderabad': { lat: 17.3850, lng: 78.4867 },
  'Pune': { lat: 18.5204, lng: 73.8567 }
};

async function seedData() {
  console.log("Starting database seed process...");
  
  const totalStudents = 50; // Keep it small for development to save Firebase quotas

  for (let i = 0; i < totalStudents; i++) {
    const origin = getRandom(districts);
    const target = getRandom(cities);
    
    const studentData = {
      studentToken: `ANON_${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
      originDistrict: origin,
      targetCity: target,
      degreeType: getRandom(degrees),
      migrationYear: getRandNum(2020, 2024),
      tuitionCost: getRandNum(50000, 300000),
      livingCost: getRandNum(80000, 200000),
      geospatial: {
        originLat: coords[origin].lat,
        originLng: coords[origin].lng,
        targetLat: coords[target].lat,
        targetLng: coords[target].lng
      }
    };

    try {
      await addDoc(collection(db, "students"), studentData);
      console.log(`[${i+1}/${totalStudents}] Successfully injected record for ${origin} -> ${target}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  console.log("Database seed completed successfully.");
  process.exit(0);
}

seedData();
