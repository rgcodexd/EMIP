export const stats = {
  students: 2345000,
  districts: 723,
  migrationRate: 18,
  resourceLoss: "₹120B",
};

export const features = [
  {
    id: 1,
    title: "Predict Migration",
    description: "Forecast future student mobility trends using advanced ML algorithms based on historical data and economic indicators.",
    icon: "📈",
  },
  {
    id: 2,
    title: "Analyze Impact",
    description: "Understand the financial drain on home districts and the infrastructure burden on destination Tier-1 cities.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Optimize Policies",
    description: "Data-driven insights to help policymakers allocate resources and build regional educational infrastructure efficiently.",
    icon: "⚙️",
  },
];

export const topDistricts = [
  { rank: 1, district: "Patna", state: "Bihar", outflow: 125000 },
  { rank: 2, district: "Kanpur", state: "Uttar Pradesh", outflow: 98000 },
  { rank: 3, district: "Jaipur", state: "Rajasthan", outflow: 85000 },
  { rank: 4, district: "Bhopal", state: "Madhya Pradesh", outflow: 72000 },
  { rank: 5, district: "Ranchi", state: "Jharkhand", outflow: 61000 },
];

export const destinations = [
  { rank: 1, city: "Delhi NCR", inflow: 450000 },
  { rank: 2, city: "Kota", inflow: 320000 },
  { rank: 3, city: "Pune", inflow: 280000 },
  { rank: 4, city: "Bengaluru", inflow: 210000 },
  { rank: 5, city: "Hyderabad", inflow: 190000 },
];
