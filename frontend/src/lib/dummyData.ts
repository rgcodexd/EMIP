export const stats = {
  students: 2345000,
  districts: 723,
  universities: 1250,
  predictions: 85000,
};

export const features = [
  {
    id: 1,
    title: "Migration Analytics",
    description: "Visualize real-time student mobility flows across districts and states to identify major education hubs.",
    icon: "🗺️",
  },
  {
    id: 2,
    title: "AI Forecasting",
    description: "Predict future migration patterns based on socio-economic indicators and historical enrollment data.",
    icon: "🔮",
  },
  {
    id: 3,
    title: "Resource Planning",
    description: "Calculate the exact economic drain on origin districts and infrastructure burden on destination cities.",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Student Portal",
    description: "Empower students to calculate the true ROI of migrating versus studying in their home state.",
    icon: "🎓",
  },
  {
    id: 5,
    title: "District Ranking",
    description: "Rank districts based on educational retention, identifying regions that need immediate intervention.",
    icon: "📊",
  },
  {
    id: 6,
    title: "Policy Insights",
    description: "Generate automated, data-backed policy recommendations for state and central education ministries.",
    icon: "📜",
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
