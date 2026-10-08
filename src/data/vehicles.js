const vehicles = [
  {
    id: 1,
    manufacturer: "BMW",
    model: "M4 Competition",
    year: 2024,
    type: "Coupe",
    price: 1845000,
    description:
      "A high-performance luxury coupe combining aggressive styling, premium comfort and impressive driving performance.",
    shortDescription: "High-performance luxury sports coupe.",
    colours: ["Black", "White", "Blue"],
    images: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/BMW_M4_Competition_Coup%C3%A9_%28G82%29_Washington_DC_Metro_Area%2C_USA.jpg/1280px-BMW_M4_Competition_Coup%C3%A9_%28G82%29_Washington_DC_Metro_Area%2C_USA.jpg",
    ],
    featured: true,
    topCar: true,
    specifications: {
      engine: "3.0L Twin Turbo",
      transmission: "Automatic",
      mileage: "12,500 km",
      fuel: "Petrol",
    },
  },

  {
    id: 2,
    manufacturer: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    type: "Sedan",
    price: 1285000,
    description:
      "A sophisticated sedan offering modern technology, refined comfort and an elegant premium design.",
    shortDescription: "Premium sedan with modern technology.",
    colours: ["Black", "Silver", "White"],
    images: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/2023_Mercedes-Benz_C-Class_C220d_AMG_Line.jpg/1280px-2023_Mercedes-Benz_C-Class_C220d_AMG_Line.jpg",
    ],
    featured: true,
    topCar: false,
    specifications: {
      engine: "2.0L Turbo",
      transmission: "Automatic",
      mileage: "18,000 km",
      fuel: "Petrol",
    },
  },

  {
    id: 3,
    manufacturer: "Toyota",
    model: "GR Supra",
    year: 2024,
    type: "Sports",
    price: 1690000,
    description:
      "A stylish sports car built for an engaging driving experience with sharp handling and strong performance.",
    shortDescription: "Iconic sports car built for performance.",
    colours: ["Red", "White", "Black"],
    images: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Toyota_Supra_Monrepos_2019_IMG_1898.jpg/1280px-Toyota_Supra_Monrepos_2019_IMG_1898.jpg",
    ],
    featured: true,
    topCar: true,
    specifications: {
      engine: "3.0L Turbo",
      transmission: "Automatic",
      mileage: "9,500 km",
      fuel: "Petrol",
    },
  },

  {
    id: 4,
    manufacturer: "Audi",
    model: "Q5",
    year: 2022,
    type: "SUV",
    price: 1320000,
    description:
      "A practical premium SUV offering a comfortable interior, modern technology and versatile everyday performance.",
    shortDescription: "Premium SUV for everyday driving.",
    colours: ["Grey", "Black", "White"],
    images: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Audi_Q5_FY_Facelift_IMG_4139.jpg/1280px-Audi_Q5_FY_Facelift_IMG_4139.jpg",
    ],
    featured: false,
    topCar: true,
    specifications: {
      engine: "2.0L Turbo",
      transmission: "Automatic",
      mileage: "24,000 km",
      fuel: "Petrol",
    },
  },
];

export default vehicles;