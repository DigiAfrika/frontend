// src/components/dashboard/data.js

export const demoUserData = {
    id: "user123",
    name: "Aisha Kone",
    businessName: "Aisha's Creations",
    businessType: "Handmade Crafts & Accessories",
    stage: "Early Growth",
    location: "Accra, Ghana",
    goals: [
      "Increase online sales by 30% this quarter",
      "Expand product line to include home decor items",
      "Learn advanced Facebook advertising techniques",
      "Find reliable suppliers for sustainable fabrics",
      "Improve website conversion rate",
    ],
    learningModules: [
      {
        id: 'mod1',
        title: "Business Idea Validation",
        status: 'completed',
        progress: 100,
        type: 'Course', // Course, Video, Quiz, Article
        duration: '1 hour',
      },
      {
         id: 'mod2',
         title: "Introduction to E-commerce Platforms",
         status: 'completed',
         progress: 100,
         type: 'Course',
         duration: '2 hours',
      },
      {
        id: 'mod3',
        title: "Basic Social Media Marketing",
        status: 'in progress',
        progress: 65,
        type: 'Course',
        duration: '3 hours',
      },
      {
          id: 'mod4',
          title: "Understanding Your Target Audience",
          status: 'not started',
          progress: 0,
          type: 'Article',
          duration: '30 mins',
      },
      {
          id: 'mod5',
          title: "Facebook Ads Fundamentals",
          status: 'not started',
          progress: 0,
          type: 'Video Series',
          duration: '1.5 hours',
      },
       {
          id: 'mod6',
          title: "Craft Photography Basics",
          status: 'not started',
          progress: 0,
          type: 'Workshop',
          duration: '2 hours',
      }
    ],
    storefront: {
        url: 'aishascreations.digiafrika.store', // Example URL
        status: 'active', // active, inactive, setup needed
        theme: 'Savannah',
        products: [
            { id: 'prod1', name: 'Kente Cloth Scarf', price: 25.00, stock: 15, category: 'Accessories' },
            { id: 'prod2', name: 'Beaded Maasai Necklace', price: 40.00, stock: 8, category: 'Jewelry' },
            { id: 'prod3', name: 'Handwoven Bolga Basket', price: 55.00, stock: 12, category: 'Home Decor' },
        ],
        stats: {
            totalOrders: 42,
            totalRevenue: 1850.50, // USD or local currency
            conversionRate: 2.1, // Percentage
            monthlyVisitors: 1200,
        }
    }
  };