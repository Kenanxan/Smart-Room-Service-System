export const guestCategories = [
  { id: "breakfast", label: "Breakfast" },
  { id: "dessert", label: "Dessert" },
  { id: "drinks", label: "Drinks" },
];

export const guestProducts = [
  {
    id: 1,
    name: "Signature Breakfast Tray",
    description: "Eggs, simit, cheese, fruit, tea service",
    price: 18,
    currency: "AZN",
    categoryId: "breakfast",
  },
  {
    id: 2,
    name: "Chocolate Lava Cake",
    description: "Warm center with vanilla cream",
    price: 9.5,
    currency: "AZN",
    categoryId: "dessert",
  },
  {
    id: 3,
    name: "Fresh Lemonade",
    description: "Cold pressed and lightly sweetened",
    price: 4.5,
    currency: "AZN",
    categoryId: "drinks",
  },
];

export const taskColumns = [
  {
    id: "pending",
    title: "Pending",
    items: [
      { id: 1842, summary: "2x Club Sandwich, 1x Ayran", eta: "2 min ago" },
      { id: 1843, summary: "1x Caesar Salad, 1x Espresso", eta: "5 min ago" },
    ],
  },
  {
    id: "preparing",
    title: "Preparing",
    items: [
      { id: 1838, summary: "1x Burger Menu, 2x Cola", eta: "Prep timer running" },
    ],
  },
  {
    id: "ready",
    title: "Ready",
    items: [
      { id: 1835, summary: "1x Fruit Plate, 1x Water", eta: "Courier pickup available" },
    ],
  },
];

export const dashboardSummary = {
  totalRevenue: "18,420 AZN",
  totalOrders: "1,264",
  averageBasket: "14.6 AZN",
  topHotels: [
    { label: "City Center Hotel", value: "4,820 AZN" },
    { label: "Harbor Suites", value: "3,990 AZN" },
    { label: "Skyline Residence", value: "3,410 AZN" },
  ],
};
