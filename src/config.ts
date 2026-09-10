export interface TourItineraryDay {
  day: number;
  dayLabel?: string;
  title: string;
  desc?: string;
  activities: string[];
  meals?: string;
  stay?: string;
}

export interface HotelOption {
  tier: "Standard" | "Deluxe" | "Executive";
  hotels: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  destination: string;
  category: "group" | "custom" | "by-air" | "weekend" | "trekking";
  badge: string;
  featured: boolean;
  price: number;
  sharingPrices: {
    quad: number;
    triple: number;
    twin: number;
    privateCouple?: number;
  };
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  departureCities: string[];
  transportation: string;
  attractions: string[];
  itinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  hotels?: HotelOption[];
  equipment: string[];
  terms: string[];
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  phone: string;
  hotlineDisplay: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  addresses: { lahore: string; islamabad: string };
  socials: { instagram: string; facebook: string; tiktok: string; youtube: string };
  stats: { label: string; value: string }[];
  categories: any[];
  activities: any[];
  tours: TourPackage[];
  testimonials: any[];
  faqs: any[];
  galleryMoments: any[];
}

export const config: SiteConfig = {
  businessName: "Ghomo Pakistan",
  shortName: "Ghomo",
  tagline: "Explore Pakistan Like Never Before",
  subTagline: "Discover curated group tours, custom private trips, northern adventures and unforgettable journeys crafted for curious wanderers.",
  phone: "+92 307 4116699",
  hotlineDisplay: "+92 307 4116699",
  whatsappNumber: "923074116699",
  whatsappLink: "https://wa.me/923074116699?text=Hi%20Ghomo%20Pakistan!%20I%20am%20interested%20in%20booking%20a%20tour.",
  email: "info@ghomopakistan.com",
  addresses: {
    lahore: "Chaburji Main Chowk, Lahore, Pakistan",
    islamabad: "Sector F-7/2, Jinnah Super Market, Islamabad, Pakistan",
  },
  socials: {
    instagram: "https://instagram.com/ghomopakistan",
    facebook: "https://facebook.com/ghomopakistan",
    tiktok: "https://tiktok.com/@ghomopakistan",
    youtube: "https://youtube.com/@ghomopakistan",
  },
  stats: [
    { label: "Happy Wanderers", value: "8,500+" },
    { label: "Guided Expeditions", value: "240+" },
    { label: "Certified Captains", value: "18+" },
    { label: "5-Star Reviews", value: "99.4%" },
  ],
  categories: [
    {
      id: "group",
      title: "Fixed Group Tours",
      subtitle: "Weekly Group Departures",
      tagline: "Every weekend and midweek departures to Hunza, Skardu, Fairy Meadows, Kashmir, and Swat.",
      description: "Join energetic groups of wanderers, students, and professionals traveling together to northern valleys.",
      image: "/images/hunza_valley.jpg",
      count: "8 Packages",
      badge: "Most Popular",
      icon: "Users",
      href: "/packages?cat=group",
      cta: "Explore Group Tours",
    },
    {
      id: "weekend",
      title: "Weekend Quick Escapes",
      subtitle: "1 to 2 Day Getaways",
      tagline: "Short road trips designed to recharge your spirit over the weekend to Sharan, Shogran & Muskhpuri.",
      description: "Short road trips designed to recharge your spirit over the weekend without taking long leaves.",
      image: "/images/sharan_forest.jpg",
      count: "3 Packages",
      badge: "Quick Trip",
      icon: "Compass",
      href: "/packages?cat=weekend",
      cta: "Browse Weekend Escapes",
    },
    {
      id: "custom",
      title: "Custom Private Trips",
      subtitle: "Tailor-Made Journeys",
      tagline: "Private 4x4 vehicles (Prado / Coaster), luxury suites, and customized daily schedule for your squad.",
      description: "Crafted exclusively for your family, friends, or corporate office retreat.",
      image: "/images/skardu_resort.jpg",
      count: "VIP Custom",
      badge: "Bespoke",
      icon: "Plane",
      href: "/craft-your-tour",
      cta: "Craft Your Tour",
    },
  ],
  activities: [
    {
      icon: "Flame",
      title: "Live Bonfires & BBQ",
      desc: "Warm up under star-studded galaxy skies with cozy campfires and sizzling mountain barbecues.",
    },
    {
      icon: "Waves",
      title: "Boating & Jet Ski",
      desc: "Glide across turquoise glacial waters of Attabad Lake, Saif-ul-Malook, and Lower Kachura.",
    },
    {
      icon: "ShieldCheck",
      title: "Certified Tour Captains",
      desc: "Licensed tour managers and wilderness first-responders dedicated to your comfort and safety.",
    },
    {
      icon: "Sparkles",
      title: "Off-Road 4x4 Jeeps",
      desc: "Rugged 4x4 safaris to Deosai Plains, Siri Paye, Minimarg, Sharan Forest, and Raikot cliff roads.",
    },
  ],
  tours: [
  {
    "id": "muskhpuri-top-1-day",
    "slug": "muskhpuri-top-1-day",
    "title": "01 Day Muskhpuri Top & Dunga Gali Trek",
    "subtitle": "Scenic day hike through lush pine forests on Pipeline Track to the panoramic summit of Muskhpuri Top.",
    "duration": "1 Day",
    "days": 1,
    "nights": 0,
    "destination": "Muskhpuri Top & Dunga Gali",
    "category": "weekend",
    "badge": "Day Trek",
    "featured": false,
    "price": 6500,
    "sharingPrices": {
      "quad": 6500,
      "triple": 7500,
      "twin": 8500,
      "privateCouple": 18000
    },
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "/images/muskhpuri_top.jpg",
    "gallery": [
      "/images/muskhpuri_top.jpg",
      "/images/sharan_forest.jpg",
      "/images/shogran_siri_paye.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "NATHIAGALI",
      "DUNGAGALI",
      "PIPELINE TRACK",
      "MUSHKPURI TOP",
      "CHAIR LIFT",
      "SAMUNDAR KATHA LAKE",
      "AYUBIA NATIONAL PARK",
      "MURREE EXPRESSWAY",
      "HAZARA EXPRESSWAY"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Late night travel via beautiful Hazara Motorway / Murree Expressway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Pipeline Track, Muskhpuri Top Trek & Return",
        "activities": [
          "Arrival at Dunga Gali / Nathia Gali.",
          "Breakfast call at Dunga Gali.",
          "Start hiking on scenic Pipeline Track towards Muskhpuri Top.",
          "Reach Muskhpuri Top (elevation approx 9,200 ft).",
          "Enjoy panoramic 360-degree mountain views & photography at the top.",
          "Trek back down to Dunga Gali / Nathia Gali.",
          "Dinner call on the way back.",
          "Departure back to Islamabad, Lahore, and other departure cities."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Day Trip (Return same night)"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "MEAL ( 1 BREAKFAST 1 DINNER)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BASIC FIRST AID"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "Day Expedition (No Hotel Stay Required)"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "sharan-forest-2-days",
    "slug": "sharan-forest-2-days",
    "title": "02 Days Sharan Forest Wilderness Retreat",
    "subtitle": "Off-road 4x4 jeep safari into the pristine unpolluted pine wilderness of Sharan Forest & Manshi Top.",
    "duration": "2 Days / 1 Night",
    "days": 2,
    "nights": 1,
    "destination": "Sharan Forest",
    "category": "weekend",
    "badge": "Wilderness Eco",
    "featured": false,
    "price": 14500,
    "sharingPrices": {
      "quad": 14500,
      "triple": 16500,
      "twin": 18500,
      "privateCouple": 42000
    },
    "rating": 4.9,
    "reviewsCount": 82,
    "image": "/images/sharan_forest.jpg",
    "gallery": [
      "/images/sharan_forest.jpg",
      "/images/sharan_shogran.jpg",
      "/images/muskhpuri_top.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "SHARAN FOREST",
      "MANSHI TOP",
      "PARAS",
      "KAGHAN VALLEY",
      "BALAKOT CITY",
      "HAZARA MOTORWAY"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Travel to Paras & 4x4 Jeep Safari to Sharan Forest",
        "activities": [
          "Travel via beautiful Hazara Motorway.",
          "Arrival in Balakot / Paras.",
          "Breakfast call at Balakot / Paras.",
          "Transfer to 4x4 rugged Jeeps from Paras to Sharan Forest.",
          "Reach Sharan Forest and check-in to Luxury Pods / Camps / Hotel.",
          "Explore deep pine forests and hike towards Manshi Top (optional).",
          "Dinner - BBQ & Bonfire in the forest.",
          "Overnight stay in Sharan Forest."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Sharan Forest Pods / Camps / Hotel"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Morning Wilderness & Departure Back",
        "activities": [
          "Breakfast call in Sharan Forest.",
          "Free time for morning nature photography and forest walks.",
          "4x4 Jeep ride back down from Sharan Forest to Paras.",
          "Board luxury coaster / Grand Cabin for departure back.",
          "Short stays at Balakot & Hazara Motorway.",
          "Arrival back at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM / POD)",
      "MEAL ( 2 BREAKFAST 1 DINNER)",
      "4X4 JEEP CHARGES (PARAS TO SHARAN RETURN)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "shogran-siri-paye-2-days",
    "slug": "shogran-siri-paye-2-days",
    "title": "02 Days Shogran & Siri Paye Meadows Escape",
    "subtitle": "Jeep ride to high alpine Siri Paye Meadows, Kiwai Waterfall, and pine-clad hills of Shogran.",
    "duration": "2 Days / 1 Night",
    "days": 2,
    "nights": 1,
    "destination": "Shogran & Siri Paye",
    "category": "weekend",
    "badge": "Popular Weekend",
    "featured": false,
    "price": 13500,
    "sharingPrices": {
      "quad": 13500,
      "triple": 15500,
      "twin": 17500,
      "privateCouple": 39000
    },
    "rating": 4.8,
    "reviewsCount": 95,
    "image": "/images/shogran_siri_paye.jpg",
    "gallery": [
      "/images/shogran_siri_paye.jpg",
      "/images/sharan_shogran.jpg",
      "/images/naran_saifulmalook.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "SHOGRAN",
      "SIRI PAYE MEADOWS",
      "SIRI LAKE",
      "KIWAI WATERFALL",
      "BALAKOT CITY",
      "KAGHAN VALLEY",
      "HAZARA MOTORWAY"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Kiwai Waterfall, Shogran & 4x4 Jeep to Siri Paye Meadows",
        "activities": [
          "Travel via beautiful Hazara Motorway.",
          "Arrival at Kiwai Waterfall.",
          "Breakfast call at Kiwai / Balakot.",
          "4x4 Jeep ride from Kiwai to Shogran.",
          "Continue 4x4 Jeep ride to Siri Lake and high alpine Paye Meadows.",
          "Enjoy horse riding, photography, and panoramic mountain views at Siri Paye.",
          "Drive back to Shogran.",
          "Dinner - BBQ & Bonfire at hotel.",
          "Overnight stay in Shogran."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Shogran"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Morning in Shogran & Return Travel",
        "activities": [
          "Breakfast call at hotel in Shogran.",
          "Enjoy scenic pine views and fresh morning mountain air.",
          "4x4 Jeep ride down from Shogran to Kiwai.",
          "Board luxury vehicle for travel back to Islamabad & Lahore.",
          "Short stops on Hazara Motorway.",
          "Arrival at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 2 BREAKFAST 1 DINNER)",
      "4X4 JEEP CHARGES (KIWAI TO SHOGRAN & SIRI PAYE RETURN)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "naran-kaghan-3-days",
    "slug": "naran-kaghan-3-days",
    "title": "03 Days Naran Valley, Saif-ul-Malook & Babusar Top",
    "subtitle": "Legendary Saif-ul-Malook Lake, Lulusar Lake, and high-altitude Babusar Top across Kaghan Valley.",
    "duration": "3 Days / 2 Nights",
    "days": 3,
    "nights": 2,
    "destination": "Naran & Kaghan Valley",
    "category": "group",
    "badge": "Classic Journey",
    "featured": true,
    "price": 18500,
    "sharingPrices": {
      "quad": 18500,
      "triple": 21500,
      "twin": 24500,
      "privateCouple": 54000
    },
    "rating": 4.9,
    "reviewsCount": 118,
    "image": "/images/naran_saifulmalook.jpg",
    "gallery": [
      "/images/naran_saifulmalook.jpg",
      "/images/sharan_shogran.jpg",
      "/images/hunza_valley.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "NARAN VALLEY",
      "KAGHAN VALLEY",
      "SAIF UL MALOOK LAKE",
      "LULUSAR LAKE",
      "BABUSAR TOP",
      "KIWAI WATERFALL",
      "BATTAKUNDI",
      "JALKHAD",
      "BESAL",
      "KUNHAR RIVER",
      "BALAKOT CITY"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Hazara Motorway, Balakot, Kiwai & Saif-ul-Malook Lake",
        "activities": [
          "Travel via Hazara Motorway.",
          "Arrival at Balakot / Kiwai.",
          "Breakfast call at Balakot / Kiwai.",
          "Travel along Kunhar River to Naran Valley.",
          "Check-in at hotel in Naran.",
          "4x4 Jeep ride to mythical Saif-ul-Malook Lake.",
          "Enjoy boating, photography, and fairy tale lake views.",
          "Drive back to Naran Bazar.",
          "Dinner call.",
          "Night stay in Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Naran"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Babusar Top (13,691 ft), Lulusar Lake & Jalkhad",
        "activities": [
          "Breakfast call at hotel in Naran.",
          "Departure for Babusar Top.",
          "Visit Battakundi, Jalkhad, and Besal.",
          "Sightseeing stop at emerald-green Lulusar Lake.",
          "Reach Babusar Top (13,691 ft) connecting KPK with Gilgit-Baltistan.",
          "Enjoy freezing mountain breeze and panoramic peak photography.",
          "Drive back to Naran Valley.",
          "Dinner - BBQ & Bonfire in Naran.",
          "Night stay in Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Naran"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call at hotel.",
          "Departure from Naran for return journey.",
          "Short stay at Kiwai Waterfall & Kunhar River rafting point.",
          "Travel via Hazara Motorway.",
          "Arrival back at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 3 BREAKFAST 2 DINNER)",
      "4X4 JEEP CHARGES FOR SAIF UL MALOOK LAKE",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "swat-kalam-3-days",
    "slug": "swat-kalam-3-days",
    "title": "03 Days Swat Valley, Kalam & Malam Jabba",
    "subtitle": "Switzerland of the East: Malam Jabba ski resort chairlift, Kalam Valley, and Mahodand Lake jeep safari.",
    "duration": "3 Days / 2 Nights",
    "days": 3,
    "nights": 2,
    "destination": "Swat & Kalam",
    "category": "group",
    "badge": "Alpine Valley",
    "featured": false,
    "price": 17500,
    "sharingPrices": {
      "quad": 17500,
      "triple": 20500,
      "twin": 23500,
      "privateCouple": 51000
    },
    "rating": 4.8,
    "reviewsCount": 104,
    "image": "/images/swat_kalam.jpg",
    "gallery": [
      "/images/swat_kalam.jpg",
      "/images/fairy_meadows.jpg",
      "/images/sharan_shogran.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "SWAT MOTORWAY",
      "MINGORA",
      "FIZAGAT",
      "MALAM JABBA",
      "CHAIR LIFT & ZIPLINE",
      "BAHRAIN",
      "KALAM VALLEY",
      "USHO FOREST",
      "MAHODAND LAKE",
      "MATILTAN WATERFALL"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Swat Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Malam Jabba Ski Resort & Travel to Kalam Valley",
        "activities": [
          "Travel via modern Swat Motorway.",
          "Breakfast call on the way.",
          "Visit Malam Jabba Hill Station & Ski Resort.",
          "Enjoy Chairlift, Zipline, and panoramic peak views at Malam Jabba.",
          "Drive along roaring Swat River via Bahrain.",
          "Reach Kalam Valley and check-in to hotel.",
          "Dinner call.",
          "Night stay in Kalam."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Kalam"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "4x4 Jeep Safari to Usho Forest, Matiltan & Mahodand Lake",
        "activities": [
          "Breakfast call at hotel in Kalam.",
          "Board 4x4 rugged Jeeps for Mahodand Lake excursion.",
          "Drive through dense deodar Usho Forest.",
          "Sightseeing stop at Matiltan Waterfall.",
          "Visit glacier points and reach picturesque Mahodand Lake.",
          "Enjoy boating and horse riding by the lake.",
          "Drive back to Kalam Bazar.",
          "Dinner - BBQ & Bonfire.",
          "Night stay in Kalam."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Kalam"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Bahrain Trout Point & Return Travel",
        "activities": [
          "Breakfast call at hotel in Kalam.",
          "Departure for Lahore / Islamabad.",
          "Short stop at Bahrain Riverside / Trout Fish Market & Fizagat.",
          "Travel via Swat Motorway.",
          "Arrival at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 3 BREAKFAST 2 DINNER)",
      "4X4 JEEP CHARGES FOR MAHODAND LAKE & USHO FOREST",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC (CHAIRLIFT / ZIPLINE)",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "kumrat-valley-3-days",
    "slug": "kumrat-valley-3-days",
    "title": "03 Days Kumrat Valley & Panjkora River Expedition",
    "subtitle": "Discover fairy-tale deodar forests, Kala Chashma waterfall, Thal wooden mosque, and Panjkora River.",
    "duration": "3 Days / 2 Nights",
    "days": 3,
    "nights": 2,
    "destination": "Kumrat Valley",
    "category": "trekking",
    "badge": "Pristine Wilderness",
    "featured": false,
    "price": 18500,
    "sharingPrices": {
      "quad": 18500,
      "triple": 21500,
      "twin": 24500,
      "privateCouple": 54000
    },
    "rating": 4.9,
    "reviewsCount": 89,
    "image": "/images/fairy_meadows.jpg",
    "gallery": [
      "/images/fairy_meadows.jpg",
      "/images/sharan_forest.jpg",
      "/images/swat_kalam.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "KUMRAT VALLEY",
      "THAL WOODEN MOSQUE",
      "PANJKORA RIVER",
      "KALA CHASHMA",
      "KUMRAT WATERFALL",
      "DOANGA",
      "TIMERGARA",
      "SWAT MOTORWAY"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Swat Motorway & Timergara."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Thal Historical Wooden Mosque & Entry to Kumrat Valley",
        "activities": [
          "Travel via Swat Motorway and Upper Dir.",
          "Breakfast call on the way.",
          "Arrival at Thal village.",
          "Visit historical 19th-century wooden carved mosque in Thal.",
          "Transfer to 4x4 Jeeps into Kumrat Valley.",
          "Check-in at camps / hotel along roaring Panjkora River.",
          "Dinner call.",
          "Night stay in Kumrat Valley."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel / Camps in Kumrat Valley"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Kala Chashma, Kumrat Waterfall & Pine Forests",
        "activities": [
          "Breakfast call in Kumrat.",
          "4x4 Jeep safari deep into Kumrat Valley.",
          "Visit famous Kala Chashma (Black Spring).",
          "Visit roaring Kumrat Waterfall and Doanga forest.",
          "Explore dense deodar forests and river banks.",
          "Dinner - BBQ & Bonfire.",
          "Night stay in Kumrat Valley."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel / Camps in Kumrat Valley"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call in Kumrat.",
          "4x4 Jeep ride back to Thal.",
          "Board luxury vehicle for return journey via Timergara & Swat Motorway.",
          "Short stays on motorway.",
          "Arrival at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM / TENT)",
      "MEAL ( 3 BREAKFAST 2 DINNER)",
      "4X4 JEEP CHARGES FOR KUMRAT VALLEY & KALA CHASHMA",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "neelum-valley-kashmir-4-days",
    "slug": "neelum-valley-kashmir-4-days",
    "title": "04 Days Kashmir (Neelum Valley) & Arang Kel",
    "subtitle": "Discover lush paradise: Dhani & Kutton waterfalls, Keran LOC border view, Sharda ruins, and Arang Kel cable car.",
    "duration": "4 Days / 3 Nights",
    "days": 4,
    "nights": 3,
    "destination": "Neelum Valley, Kashmir",
    "category": "group",
    "badge": "Paradise on Earth",
    "featured": true,
    "price": 22500,
    "sharingPrices": {
      "quad": 22500,
      "triple": 26000,
      "twin": 29500,
      "privateCouple": 65000
    },
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "/images/kashmir_neelum.jpg",
    "gallery": [
      "/images/kashmir_neelum.jpg",
      "/images/sharan_shogran.jpg",
      "/images/swat_kalam.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "MUZAFFARABAD",
      "DHANI WATERFALL",
      "KUTTON WATERFALL",
      "KERAN",
      "LOC VIEW POINT",
      "UPPER NEELUM",
      "SHARDA TEMPLE RUINS",
      "ARANG KEL",
      "DOLI CHAIR LIFT",
      "KOHALA BRIDGE"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Murree Expressway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Muzaffarabad, Dhani Waterfall, Kutton & Keran (LOC View)",
        "activities": [
          "Travel via Murree Expressway and Kohala.",
          "Breakfast call at Muzaffarabad.",
          "Visit stunning Dhani Waterfall.",
          "Visit cascading Kutton Waterfall.",
          "Drive along Neelum River to Keran.",
          "View Indian-administered Kashmir villages right across the river (Line of Control).",
          "Dinner call.",
          "Night stay in Keran / Upper Neelum."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Keran / Upper Neelum"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Sharda Temple Ruins & Cable Car Hike to Arang Kel",
        "activities": [
          "Breakfast call at Keran.",
          "Drive towards Sharda.",
          "Visit historical 9th-century Sharda University & Peeth temple ruins.",
          "Continue drive to Kel.",
          "Ride the thrilling Doli cable car across the gorge to Arang Kel.",
          "Hike up to magical alpine meadows of Arang Kel (Pearl of Neelum).",
          "Explore scenic wooden huts and panoramic valley views.",
          "Dinner call.",
          "Night stay in Arang Kel / Sharda."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel / Guest House in Arang Kel / Sharda"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Upper Neelum Village, Riverbank Leisure & Bonfire",
        "activities": [
          "Breakfast call at Arang Kel / Sharda.",
          "Descend back via cable car to Kel.",
          "Drive back towards Keran / Upper Neelum.",
          "Hike and explore picturesque Upper Neelum traditional village.",
          "Dinner - BBQ & Bonfire alongside Neelum River.",
          "Night stay in Keran / Kutton."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Keran / Kutton"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call at hotel.",
          "Departure for return journey.",
          "Short stops at Kohala & Muzaffarabad.",
          "Travel via Murree Expressway.",
          "Arrival at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 4 BREAKFAST 3 DINNER)",
      "4X4 JEEP CHARGES (WHERE APPLICABLE)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC (DOLI CABLE CAR)",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "kumrat-katora-lake-4-days",
    "slug": "kumrat-katora-lake-4-days",
    "title": "04 Days Kumrat Valley, Jahaz Banda & Katora Lake Trek",
    "subtitle": "High alpine expedition to the emerald bowl of Katora Lake and lush flower meadows of Jahaz Banda.",
    "duration": "4 Days / 3 Nights",
    "days": 4,
    "nights": 3,
    "destination": "Kumrat Valley & Katora Lake",
    "category": "trekking",
    "badge": "Glacial Lake Trek",
    "featured": false,
    "price": 24500,
    "sharingPrices": {
      "quad": 24500,
      "triple": 28000,
      "twin": 31500,
      "privateCouple": 70000
    },
    "rating": 4.9,
    "reviewsCount": 77,
    "image": "/images/fairy_meadows.jpg",
    "gallery": [
      "/images/fairy_meadows.jpg",
      "/images/sharan_forest.jpg",
      "/images/kashmir_neelum.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "KUMRAT VALLEY",
      "THAL WOODEN MOSQUE",
      "JAHAZ BANDA MEADOWS",
      "JAHAZ DAND WATERFALL",
      "KATORA LAKE TREK",
      "KALA CHASHMA",
      "PANJKORA RIVER"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Swat Motorway & Timergara."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Thal Mosque, Jandrai & Trek to Jahaz Banda Meadows",
        "activities": [
          "Travel via Swat Motorway to Upper Dir.",
          "Breakfast call on way.",
          "Visit historical Thal Wooden Mosque.",
          "4x4 Jeep ride to Jandrai village.",
          "Start mountain trek (approx 3-4 hours) up to Jahaz Banda Meadows.",
          "Arrival at picturesque alpine meadows of Jahaz Banda.",
          "Dinner call.",
          "Night stay in Camps / Huts at Jahaz Banda."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Camps / Huts at Jahaz Banda"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Expedition Trek to Glacial Katora Lake & Return",
        "activities": [
          "Breakfast call at Jahaz Banda.",
          "Start guided alpine hike towards Katora Lake.",
          "Pass Jahaz Dand Waterfall and glacial moraines.",
          "Reach breathtaking bowl-shaped Katora Lake (approx 11,500 ft).",
          "Enjoy pristine views, photography, and lake breeze.",
          "Trek back to Jahaz Banda Meadows.",
          "Dinner - BBQ & Bonfire under starlit sky.",
          "Night stay at Jahaz Banda."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Camps / Huts at Jahaz Banda"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Trek Down to Jandrai & Jeep Safari in Kumrat Valley",
        "activities": [
          "Breakfast call at Jahaz Banda.",
          "Trek down to Jandrai.",
          "4x4 Jeep safari into Kumrat Valley.",
          "Visit Kala Chashma & Kumrat Waterfall.",
          "Explore dense deodar forests and river banks.",
          "Dinner call.",
          "Night stay in Kumrat Valley / Thal."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel / Camps in Kumrat Valley / Thal"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call at hotel / camp.",
          "Departure for return journey via Timergara & Swat Motorway.",
          "Short stays on motorway.",
          "Arrival at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM / CAMP)",
      "MEAL ( 4 BREAKFAST 3 DINNER)",
      "4X4 JEEP CHARGES (THAL TO JANDRAI & KUMRAT)",
      "PROFESSIONAL TOUR GUIDE & LOCAL MOUNTAIN GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "PORTERS / HORSE CHARGES FOR TREK",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "hunza-khunjerab-5-days",
    "slug": "hunza-khunjerab-5-days",
    "title": "05 Days Hunza Valley & Khunjerab Pass (Pak-China Border)",
    "subtitle": "Explore Altit & Baltit forts, turquoise Attabad Lake, Passu Cones, and the highest paved border crossing in the world.",
    "duration": "5 Days / 4 Nights",
    "days": 5,
    "nights": 4,
    "destination": "Hunza Valley & Khunjerab Pass",
    "category": "group",
    "badge": "Signature Journey",
    "featured": true,
    "price": 28500,
    "sharingPrices": {
      "quad": 28500,
      "triple": 33000,
      "twin": 37500,
      "privateCouple": 82000
    },
    "rating": 4.9,
    "reviewsCount": 165,
    "image": "/images/hunza_valley.jpg",
    "gallery": [
      "/images/hunza_valley.jpg",
      "/images/hero_mountains_cinematic.jpg",
      "/images/skardu_resort.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "HAZARA MOTORWAY",
      "BALAKOT CITY",
      "NARAN / CHILAS",
      "BABUSAR TOP",
      "LULUSAR LAKE",
      "NANGA PARBAT VIEW POINT",
      "3 MOUNTAINS JUNCTION POINT",
      "RAKAPOSHI VIEW POINT",
      "ALTIT FORT",
      "ROYAL GARDEN",
      "BALTIT FORT",
      "KARIMABAD BAZAR",
      "ATTABAD LAKE",
      "BOATING & HIKING",
      "PASSU CONES",
      "HUSAINI SUSPENSION BRIDGE",
      "SOST BORDER TOWN",
      "KHUNJERAB PASS (PAK-CHINA BORDER 15,397 FT)"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via beautiful Hazara Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Hazara Motorway, Naran, Babusar Top to Chilas",
        "activities": [
          "Travel via beautiful Hazara Motorway.",
          "Arrival in Balakot / Kaghan.",
          "Breakfast call at Balakot.",
          "Travel through Naran Valley, visit Lulusar Lake and Babusar Top.",
          "Dinner call.",
          "Overnight stay in Chilas or Gonar Farm."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Gonar Farm"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Nanga Parbat View Point, Rakaposhi & Altit Fort",
        "activities": [
          "Breakfast call.",
          "Start travel towards Hunza along Karakoram Highway.",
          "Short stay at Nanga Parbat View Point & 3 Mountain Ranges Junction (Himalayas, Karakoram, Hindukush).",
          "Visit Rakaposhi View Point for glacier views.",
          "Reach Central Hunza.",
          "Visit 1100-year-old Altit Fort and Royal Garden.",
          "Explore historical Karimabad Bazar and local gemstone / handicraft shops.",
          "Dinner call.",
          "Night stay in Hunza Valley."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Hunza Valley"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Attabad Lake, Passu Cones, Husaini Bridge & Khunjerab Pass",
        "activities": [
          "Breakfast call.",
          "Visit turquoise Attabad Lake & enjoy boating / jet ski.",
          "Sightseeing and photography at dramatic Passu Cones.",
          "Visit thrilling Husaini Suspension Bridge.",
          "Short stop at Sost border town.",
          "Drive through Khunjerab National Park to Khunjerab Pass (15,397 ft / World's Highest ATM).",
          "Drive back to Hunza.",
          "Dinner - BBQ & Bonfire with traditional music at hotel.",
          "Overnight stay in Hunza Valley."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Hunza Valley"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Baltit Fort & Travel to Chilas / Besham",
        "activities": [
          "Breakfast call at hotel.",
          "Visit 800-year-old Baltit Fort in Karimabad.",
          "Departure for Chilas / Besham / Naran.",
          "Short stops along KKH at Rakaposhi View Point & Jaglot.",
          "Dinner call.",
          "Night stay at Chilas / Besham / Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham / Naran"
      },
      {
        "day": 5,
        "dayLabel": "DAY 05",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call.",
          "Departure for Lahore & Islamabad.",
          "Short stay at Mansehra / Abbottabad.",
          "Reach Islamabad & continue journey towards Lahore.",
          "Arrival back at Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 5 BREAKFAST 4 DINNER)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC (ALTIT / BALTIT FORTS, BOATING)",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "fairy-meadows-nanga-parbat-5-days",
    "slug": "fairy-meadows-nanga-parbat-5-days",
    "title": "05 Days Fairy Meadows & Nanga Parbat Base Camp",
    "subtitle": "World-famous off-road jeep track to Tatu, wooden cottages at Fairy Meadows, and trek to Nanga Parbat Base Camp.",
    "duration": "5 Days / 4 Nights",
    "days": 5,
    "nights": 4,
    "destination": "Fairy Meadows & Nanga Parbat",
    "category": "trekking",
    "badge": "Epic Mountain Trek",
    "featured": true,
    "price": 34500,
    "sharingPrices": {
      "quad": 34500,
      "triple": 39500,
      "twin": 44500,
      "privateCouple": 98000
    },
    "rating": 4.9,
    "reviewsCount": 150,
    "image": "/images/fairy_meadows.jpg",
    "gallery": [
      "/images/fairy_meadows.jpg",
      "/images/hero_mountains_cinematic.jpg",
      "/images/hunza_valley.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "CHILAS",
      "RAIKOT BRIDGE",
      "TATU VILLAGE",
      "FAIRY MEADOWS",
      "NANGA PARBAT (8,126M KILLER MOUNTAIN)",
      "BEYAL CAMP",
      "GERMAN VIEW POINT",
      "NANGA PARBAT BASE CAMP",
      "REFLECTION LAKE",
      "RAIKOT GLACIER"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway & KKH / Babusar."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Hazara Motorway, KKH to Chilas / Gonar Farm",
        "activities": [
          "Travel via Hazara Motorway.",
          "Breakfast call on way.",
          "Short stays at Balakot / Lulusar Lake / Besham.",
          "Reach Chilas / Gonar Farm along mighty Indus River.",
          "Dinner call.",
          "Night stay in Chilas / Gonar Farm."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Gonar Farm"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Raikot 4x4 Thrill Jeep Safari & Hike to Fairy Meadows",
        "activities": [
          "Breakfast call at Chilas.",
          "Drive to Raikot Bridge.",
          "Board thrilling 4x4 Jeeps on the world-famous cliffside mountain road to Tatu Village.",
          "Start guided hike / horse ride (approx 3-4 hours) from Tatu to Fairy Meadows.",
          "Arrive at Fairy Meadows (elevation approx 3,300m) facing majestic Nanga Parbat (8,126m).",
          "Dinner call.",
          "Night stay in traditional wooden cottages / camps at Fairy Meadows."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Wooden Cottages / Camps at Fairy Meadows"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Trek to Beyal Camp, German Viewpoint & Base Camp",
        "activities": [
          "Breakfast call with sunrise view of Nanga Parbat.",
          "Start alpine trek towards Beyal Camp through pine woods and streams.",
          "Continue hike to German View Point & Nanga Parbat Base Camp.",
          "Close-up views of Raikot Glacier and icefalls.",
          "Trek back to Fairy Meadows in the evening.",
          "Dinner - BBQ & Bonfire under magical star-filled galaxy.",
          "Night stay in Fairy Meadows."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Wooden Cottages / Camps at Fairy Meadows"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Trek Down to Tatu, Jeep Ride & Travel to Chilas / Besham",
        "activities": [
          "Breakfast call at Fairy Meadows.",
          "Trek down to Tatu Village.",
          "4x4 Jeep ride back to Raikot Bridge.",
          "Board luxury vehicle and travel to Chilas / Besham / Naran.",
          "Dinner call.",
          "Night stay at Chilas / Besham / Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham / Naran"
      },
      {
        "day": 5,
        "dayLabel": "DAY 05",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call at hotel.",
          "Departure for return journey.",
          "Travel via Hazara Motorway.",
          "Arrival back at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM / COTTAGE)",
      "MEAL ( 5 BREAKFAST 4 DINNER)",
      "4X4 JEEP CHARGES (RAIKOT TO TATU RETURN)",
      "PROFESSIONAL TOUR GUIDE & LOCAL MOUNTAIN GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "HORSE RIDING / PORTERS CHARGES",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "skardu-deosai-6-days",
    "slug": "skardu-deosai-6-days",
    "title": "06 Days Skardu Valley, Shangrila & Deosai Plains",
    "subtitle": "Shangrila Resort Lake, Upper Kachura, Manthoka Waterfall, 400-yr Shigar Fort, Sarfaranga Cold Desert & Deosai.",
    "duration": "6 Days / 5 Nights",
    "days": 6,
    "nights": 5,
    "destination": "Skardu & Deosai Plains",
    "category": "group",
    "badge": "Crown of Baltistan",
    "featured": true,
    "price": 38500,
    "sharingPrices": {
      "quad": 38500,
      "triple": 43500,
      "twin": 48500,
      "privateCouple": 105000
    },
    "rating": 4.9,
    "reviewsCount": 182,
    "image": "/images/skardu_resort.jpg",
    "gallery": [
      "/images/skardu_resort.jpg",
      "/images/hero_mountains_cinematic.jpg",
      "/images/hunza_valley.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "SKARDU",
      "UPPER KACHURA LAKE",
      "LOWER KACHURA (SHANGRILA LAKE)",
      "MANTHOKA WATERFALL",
      "SHIGAR VALLEY",
      "SHIGAR FORT",
      "SARFARANGA COLD DESERT",
      "DEOSAI NATIONAL PARK (LAND OF GIANTS)",
      "SHEOSAR LAKE",
      "KHARPOCHO FORT",
      "SADPARA LAKE"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway & KKH."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Hazara Motorway, KKH to Chilas / Besham",
        "activities": [
          "Travel via Hazara Motorway.",
          "Breakfast call at Balakot / Besham.",
          "Short stays on the scenic highway.",
          "Dinner call.",
          "Night stay in Chilas / Gonar Farm / Besham."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Skardu Highway, Astak Nala & Shangrila Lakes",
        "activities": [
          "Breakfast call.",
          "Travel along thrilling Indus River gorge on Skardu Highway.",
          "Short stay at scenic Astak Nala waterfall.",
          "Arrival at Skardu Valley.",
          "Visit Lower Kachura Lake (Shangrila Resort) & hike to tranquil Upper Kachura Lake.",
          "Dinner call.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Manthoka Waterfall, 400-yr Shigar Fort & Sarfaranga Cold Desert",
        "activities": [
          "Breakfast call at Skardu.",
          "Departure for Kharmang Valley & visit majestic 180-ft Manthoka Waterfall.",
          "Drive towards Shigar Valley.",
          "Visit 400-year-old Raja Palace (Fong-Khar Shigar Fort).",
          "Visit Sarfaranga Cold Desert (highest cold desert in the world).",
          "Sunset photography over the rolling white sand dunes.",
          "Drive back to Skardu.",
          "Dinner call.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "4x4 Jeep Safari to Deosai National Park & Sheosar Lake",
        "activities": [
          "Breakfast call at Skardu.",
          "4x4 Jeep safari up to Deosai National Park (World's 2nd highest plateau 13,500 ft).",
          "Sightseeing stop at emerald Sadpara Lake.",
          "Cross Ali Malik Top and witness vast alpine plains of Deosai.",
          "Visit Bara Pani & heart-shaped Sheosar Lake.",
          "Drive back to Skardu.",
          "Dinner - BBQ & Bonfire.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 5,
        "dayLabel": "DAY 05",
        "title": "Departure from Skardu to Chilas / Besham",
        "activities": [
          "Breakfast call at hotel in Skardu.",
          "Departure from Skardu for return journey.",
          "Short stays at Astak Nala & Jaglot.",
          "Dinner call.",
          "Night stay at Chilas / Besham / Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham / Naran"
      },
      {
        "day": 6,
        "dayLabel": "DAY 06",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call.",
          "Departure for Lahore & Islamabad.",
          "Short stay at Mansehra / Abbottabad.",
          "Reach Islamabad & continue towards Lahore.",
          "Arrival back at Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 6 BREAKFAST 5 DINNER)",
      "4X4 JEEP CHARGES FOR DEOSAI NATIONAL PARK & SHEOSAR LAKE",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC (SHANGRILA, SHIGAR FORT, DEOSAI)",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "astore-minimarg-rainbow-lake-6-days",
    "slug": "astore-minimarg-rainbow-lake-6-days",
    "title": "06 Days Astore Valley, Minimarg & Rainbow Lake",
    "subtitle": "Exclusive forbidden paradise: Rama Meadows, Rama Lake, 13,800ft Burzil Pass, and fairy-tale Rainbow Lake Domel.",
    "duration": "6 Days / 5 Nights",
    "days": 6,
    "nights": 5,
    "destination": "Astore & Minimarg",
    "category": "group",
    "badge": "Off-Beat Paradise",
    "featured": false,
    "price": 36500,
    "sharingPrices": {
      "quad": 36500,
      "triple": 41500,
      "twin": 46500,
      "privateCouple": 99000
    },
    "rating": 4.9,
    "reviewsCount": 73,
    "image": "/images/astore_minimarg.jpg",
    "gallery": [
      "/images/astore_minimarg.jpg",
      "/images/hero_mountains_cinematic.jpg",
      "/images/skardu_resort.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "ASTORE VALLEY",
      "RAMA MEADOWS",
      "RAMA LAKE",
      "BURZIL PASS (13,808 FT)",
      "MINIMARG",
      "RAINBOW LAKE (DOMEL)",
      "CHILAS",
      "NANGA PARBAT SOUTHERN FACE VIEW"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via Hazara Motorway & KKH."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Travel to Chilas / Besham",
        "activities": [
          "Travel via Hazara Motorway.",
          "Breakfast call on way.",
          "Short stays along KKH.",
          "Dinner call.",
          "Night stay in Chilas / Besham."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Travel to Astore Valley & 4x4 Jeep to Rama Lake",
        "activities": [
          "Breakfast call at Chilas.",
          "Drive towards Astore Valley via Jaglot junction.",
          "Reach Astore and transfer to 4x4 Jeeps.",
          "Ascend to breathtaking Rama Meadows & hike to turquoise Rama Lake under Chongra Peak.",
          "Return to Astore.",
          "Dinner call.",
          "Night stay in Astore / Rama."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Astore / Rama"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Cross High Burzil Pass (13,808 ft) & Minimarg Valley",
        "activities": [
          "Breakfast call at Astore.",
          "Board 4x4 Jeeps for journey towards Burzil Pass.",
          "Cross thrilling Burzil Pass (13,808 ft) with snow-clad panoramas.",
          "Enter remote, restricted paradise of Minimarg Valley.",
          "Visit historical Army Mess / Log huts.",
          "Dinner call.",
          "Night stay in Minimarg / Astore."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Guest House / Camps in Minimarg / Astore"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Enchanting Rainbow Lake (Domel) & Return to Astore",
        "activities": [
          "Breakfast call.",
          "Visit the world-famous Rainbow Lake at Domel with reflections of wildflowers and peaks.",
          "Spend time photography and relaxing by the lake.",
          "4x4 Jeep ride back across Burzil Pass to Astore.",
          "Dinner - BBQ & Bonfire.",
          "Night stay in Astore."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Astore"
      },
      {
        "day": 5,
        "dayLabel": "DAY 05",
        "title": "Departure from Astore to Chilas / Besham",
        "activities": [
          "Breakfast call at hotel.",
          "Departure from Astore.",
          "Short stays along the route.",
          "Dinner call.",
          "Night stay at Chilas / Besham / Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Besham / Naran"
      },
      {
        "day": 6,
        "dayLabel": "DAY 06",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call.",
          "Departure for Lahore & Islamabad.",
          "Travel via Hazara Motorway.",
          "Arrival back at Islamabad & Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 6 BREAKFAST 5 DINNER)",
      "4X4 JEEP CHARGES (RAMA LAKE, BURZIL PASS, MINIMARG, RAINBOW LAKE)",
      "NOC & PERMIT CLEARANCE ASSISTANCE",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  },
  {
    "id": "grand-skardu-hunza-8-days",
    "slug": "grand-skardu-hunza-8-days",
    "title": "08 Days Grand Skardu, Deosai Plains & Hunza Valley",
    "subtitle": "The ultimate northern expedition combining Skardu, Shigar, Deosai Plains, Hunza Valley, Attabad Lake & Khunjerab Pass.",
    "duration": "8 Days / 7 Nights",
    "days": 8,
    "nights": 7,
    "destination": "Skardu, Deosai & Hunza",
    "category": "group",
    "badge": "Ultimate Expedition",
    "featured": true,
    "price": 49500,
    "sharingPrices": {
      "quad": 49500,
      "triple": 56000,
      "twin": 62500,
      "privateCouple": 135000
    },
    "rating": 5.0,
    "reviewsCount": 210,
    "image": "/images/hero_mountains_cinematic.jpg",
    "gallery": [
      "/images/hero_mountains_cinematic.jpg",
      "/images/skardu_resort.jpg",
      "/images/hunza_valley.jpg"
    ],
    "departureCities": [
      "Lahore",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala"
    ],
    "transportation": "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
    "attractions": [
      "LULUSAR LAKE",
      "BABUSAR TOP",
      "CHILAS",
      "NALTER VALLEY",
      "HUNZA",
      "ATTABAD LAKE",
      "NANGAPARBAT VIEW POINT",
      "3 MOUNTAINS JUNCTION",
      "GULMIT",
      "PASSU",
      "NAGAR VALLEY",
      "SATPARA LAKE",
      "MANTHOKA WATERFALL",
      "DEOSAI NATIONAL PARK",
      "SAFRANGA COLD DESERT",
      "ALTIT FORT",
      "KHUNJERAB PASS",
      "UPPER KACHURA LAKE",
      "HAZARA EXPRESSWAY",
      "BALAKOT CITY",
      "KAGHAN VALLEY",
      "NARAN VALLEY",
      "ROYAL GARDEN",
      "BALTIT FORT",
      "CULTURAL HERITAGE OF HUNZA",
      "KARIMABAD BAZAR",
      "RAKAPOSHI VIEW POINT",
      "KKH",
      "PASSU CONES",
      "HUSAINI BRIDGE"
    ],
    "itinerary": [
      {
        "day": 0,
        "dayLabel": "DAY 00",
        "title": "Departure from Faisalabad, Lahore, Islamabad, Multan & Gujranwala",
        "activities": [
          "Departure from Faisalabad, Lahore, Islamabad, Multan, and Gujranwala.",
          "Night travel via beautiful Hazara Motorway."
        ],
        "meals": "Snacks on way",
        "stay": "Travel overnight"
      },
      {
        "day": 1,
        "dayLabel": "DAY 01",
        "title": "Hazara Motorway, Balakot, Naran, Babusar Top to Chilas",
        "activities": [
          "Travel via beautiful Hazara Motorway.",
          "Arrival in Balakot.",
          "Breakfast at Balakot.",
          "Reach Naran Valley, visit Lulusar Lake and Babusar Top.",
          "Dinner call.",
          "Overnight stay in Chilas or Gunner Farm."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas or Gunner Farm"
      },
      {
        "day": 2,
        "dayLabel": "DAY 02",
        "title": "Nanga Parbat View Point, Rakaposhi View Point & Altit Fort",
        "activities": [
          "Breakfast call.",
          "Start travel towards Hunza.",
          "Short stay at Babusar Top / Nanga Parbat View Point & 3 Mountain Junction Point.",
          "Visit of Rakaposhi View Point.",
          "Visit of Altit Fort and Karimabad Bazar.",
          "Dinner call.",
          "Night stay in Hunza Valley."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Hunza Valley"
      },
      {
        "day": 3,
        "dayLabel": "DAY 03",
        "title": "Attabad Lake, Passu Cones, Husaini Bridge & Khunjerab Pass",
        "activities": [
          "Breakfast call.",
          "Visit of Attabad Lake & boating on Attabad Lake.",
          "Photography at Passu Cones.",
          "Visit of Hussaini Bridge.",
          "Short stop at Sost.",
          "Visit of Khunjerab Pass (Pak-China Border).",
          "Dinner - BBQ & Bonfire in hotel.",
          "Overnight stay in hotel in Hunza."
        ],
        "meals": "1 Breakfast, 1 Dinner (BBQ)",
        "stay": "Hotel in Hunza Valley"
      },
      {
        "day": 4,
        "dayLabel": "DAY 04",
        "title": "Baltit Fort, Travel to Skardu & Shangrila Lake",
        "activities": [
          "Breakfast at hotel.",
          "Visit of Baltit Fort.",
          "Departure for Skardu.",
          "Visit Naltar Valley (optional).",
          "Short stay at Astak Nala.",
          "Arrival at Skardu & visit of Shangrila Lake (Lower Kachura).",
          "Dinner call.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 5,
        "dayLabel": "DAY 05",
        "title": "Manthoka Waterfall, Shigar Valley & Sarfaranga Cold Desert",
        "activities": [
          "Breakfast at Skardu.",
          "Departure for Manthoka Waterfall & visit of Manthoka Waterfall.",
          "Departure for Shigar Valley, visit of Cold Desert & Shigar Fort.",
          "Departure back to Skardu.",
          "Dinner call.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 6,
        "dayLabel": "DAY 06",
        "title": "Basho Valley & Sultanabad Meadows",
        "activities": [
          "Breakfast call.",
          "Departure for Basho Valley.",
          "Visit of Basho & Sultanabad Meadows.",
          "Back to Skardu.",
          "Dinner call.",
          "Night stay at Skardu."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Skardu"
      },
      {
        "day": 7,
        "dayLabel": "DAY 07",
        "title": "Departure from Skardu to Chilas / Besham / Naran",
        "activities": [
          "Breakfast call.",
          "Departure for Chilas / Besham.",
          "Short stay in Astak Nala & Jaglot.",
          "Reach Chilas / Naran.",
          "Dinner call.",
          "Night stay at Chilas / Baruwai / Naran."
        ],
        "meals": "1 Breakfast, 1 Dinner",
        "stay": "Hotel in Chilas / Baruwai / Naran"
      },
      {
        "day": 8,
        "dayLabel": "DAY 08",
        "title": "Return Journey to Islamabad & Lahore",
        "activities": [
          "Breakfast call.",
          "Departure for Lahore.",
          "Short stay at Mansehra.",
          "Reach Islamabad & continue journey towards Lahore.",
          "Back to Lahore."
        ],
        "meals": "1 Breakfast",
        "stay": "Return Journey"
      }
    ],
    "inclusions": [
      "AIR CONDITIONED LUXURY TRANSPORT ( 4C SALOON COASTER & GRAND CABIN 2019 - 2025 MODEL)",
      "ACCOMODATION ( 4-5 PERSON SHARING PER ROOM)",
      "MEAL ( 8 BREAKFAST 7 DINNER)",
      "PROFESSIONAL TOUR GUIDE",
      "FULL, ALL TOLL & TAXES",
      "JEEP CHARGES",
      "BBQ & BONFIRE"
    ],
    "exclusions": [
      "ENTRY TICKET ETC",
      "INSURANCE & LIABILITY",
      "EXTRAS AT HOTEL LIKE HOT / SOFT DRINKS / MINERAL WATER",
      "ANY ITEMS NOT MENTIONED ABOVE"
    ],
    "hotels": [
      {
        "tier": "Standard",
        "hotels": [
          "DEOSAI IN",
          "SHAMA RESORT",
          "HOTEL GREEN HILL",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Deluxe",
        "hotels": [
          "HIMMEL BY LUXUS",
          "KHOJ RESORT",
          "AL NOOR HOTEL",
          "POLO LAND RESORT",
          "OR SIMILAR"
        ]
      },
      {
        "tier": "Executive",
        "hotels": [
          "BROQ RESORT",
          "LUXUS HUNZA",
          "SERENA INN",
          "SHANGRI-LA RESORT",
          "OR SIMILAR"
        ]
      }
    ],
    "equipment": [
      "ORIGINAL CNIC OR PASSPORT",
      "WARM CLOTHES / JACKET",
      "HIKING SHOES / SLIPPERS",
      "PERSONAL MEDICINES",
      "UMBRELLA / RAINCOAT",
      "SUNGLASSES",
      "POWER BANK",
      "WATER BOTTLE"
    ],
    "terms": [
      "No conflict or violence, respect different cultures, religion, beliefs.",
      "Please take care about the other participants' respect, anyone found guilty in this regard will be immediately dropped from the rest of the trip.",
      "Prices are subject to vary due to unforeseen circumstances.",
      "Remaining amount will be payable at the time of departure.",
      "Fuel adjustment: if the fuel price varies more than PKR 05.00 (on or before trip) than fuel adjustment will be applicable accordingly.",
      "Please bring National Identity Card (CNIC) with you.",
      "In case of theft or damage to personal belongings during the trip, Company will not be held responsible.",
      "In case of any unforeseen happening which causes any loss related to health or personal belongings, Management will not be responsible for rescue operations. We will give basic first aid & admit the patient in hospital. Expenses will be borne by client.",
      "Keeping or taking any drug during trip or traveling with our company is strictly prohibited. Any person found guilty in this regard will be immediately dropped from the rest of the trip.",
      "In case of any unwanted weather conditions, the Management will decide any other possible option or if the duration of trip is increased, extra payment will be charged."
    ]
  }
],
  testimonials: [
    {
      name: "Ahmad Raza & Family",
      role: "Lahore, Pakistan",
      trip: "05 Days Hunza Valley Tour",
      rating: 5,
      content: "Ghomo Pakistan organized our trip flawlessly. The 4C Coaster was super comfortable, hotels in Hunza were great, and our captain made sure every family member felt safe and happy!",
      avatar: "/images/logo.png",
    },
    {
      name: "Dr. Sarah Khan",
      role: "Islamabad, Pakistan",
      trip: "05 Days Fairy Meadows & Nanga Parbat",
      rating: 5,
      content: "The Fairy Meadows trek was on my bucket list. The jeep ride from Raikot and the local guide were phenomenal. Unbelievable view of Nanga Parbat from our wooden cottage!",
      avatar: "/images/logo.png",
    },
    {
      name: "Usman Tariq & Friends",
      role: "Faisalabad, Pakistan",
      trip: "06 Days Skardu & Deosai Plains",
      rating: 5,
      content: "Deosai Plains and Sheosar Lake were magical. The live BBQ and bonfire nights in Skardu made this the best trip of our lives. 10/10 recommend Ghomo Pakistan!",
      avatar: "/images/logo.png",
    },
  ],
  faqs: [
    {
      q: "Where are the departure pick-up points?",
      a: "Our standard departures operate from Faisalabad, Lahore (Chaburji / Thokar), Islamabad / Rawalpindi (Faizabad / Motorway Interchange), Multan, and Gujranwala.",
    },
    {
      q: "What type of transport is provided?",
      a: "We use air-conditioned 4C Saloon Coasters and Toyota Grand Cabins (2019 - 2025 models) with experienced northern drivers, plus rugged 4x4 Jeeps for off-road routes.",
    },
    {
      q: "How does room sharing work?",
      a: "Standard packages are based on 4-5 persons sharing per room (or family quad sharing). Separate twin rooms, triple sharing, and private couple executive rooms can be arranged upon request.",
    },
    {
      q: "How can I confirm my seat reservation?",
      a: "You can book directly via WhatsApp (+92 307 4116699) or by submitting the booking form. A token advance deposit confirms your seat, and the remaining amount is payable at departure.",
    },
  ],
  galleryMoments: [
    {
      title: "Attabad Lake Boating",
      location: "Hunza Valley",
      category: "Lakes & Boating",
      image: "/images/hunza_valley.jpg",
    },
    {
      title: "Nanga Parbat Reflection",
      location: "Fairy Meadows",
      category: "Mountain Peaks",
      image: "/images/fairy_meadows.jpg",
    },
    {
      title: "Shangrila Resort Lake",
      location: "Skardu",
      category: "Lakes & Resorts",
      image: "/images/skardu_resort.jpg",
    },
    {
      title: "Pristine Pine Woods",
      location: "Sharan Forest",
      category: "Forests & Trails",
      image: "/images/sharan_forest.jpg",
    },
    {
      title: "Siri Paye Meadows",
      location: "Shogran",
      category: "Alpine Meadows",
      image: "/images/shogran_siri_paye.jpg",
    },
    {
      title: "Neelum Valley Cascades",
      location: "Kashmir",
      category: "Waterfalls & Valleys",
      image: "/images/kashmir_neelum.jpg",
    },
  ],
};
