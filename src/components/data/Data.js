export const nav = [
  { text: 'About', path: '/about' }, // Matches "/about"
  { text: 'Blog', path: '/blog' },
  { text: 'Consultancy', path: '/services' },
  { text: 'Properties', path: '/properties' },
  { text: 'Support', path: '/contact' },
]

export const featured = [
  {
    cover: '../images/hero/h1.png',
    name: 'Lands',
    total: '122 Property',
    desc: 'Our agents across Nigeria are ready to connect you with lands in the areas you are looking for',
  },
  {
    cover: '../images/hero/h2.png',
    name: 'Apartments',
    total: '155 Property',
    desc: 'Finding you the best Apartments and Homes that meets your Personal or Business Needs',
  },
  {
    cover: '../images/hero/h3.png',
    name: 'Real Estate Deals',
    total: '300 Property',
    desc: 'We have Agents in Place to connect you with Information about the best Real Estate Deals you will find',
  },
  {
    cover: '../images/hero/h4.png',
    name: 'Real Estate Investment',
    total: '80 Property',
    desc: 'We have Agents in Place to connect you with Information about the best Office & Studio Deals you will find',
  },
  {
    cover: '../images/hero/h6.png',
    name: 'Real Estate Consultancy',
    total: '80 Property',
    desc: 'Talk with Us, Share your Dreams and Project, Our Talent is to Guide you firmly with Industry Know-How',
  },
]
export const list = [
  {
    id: 1,
    cover: '/images/list/p-1.jpeg',
    name: 'Lekki Pride 2',
    location:
      'Ogombo Road by Abraham Adesanya Roundabout, Lekki-Epe Expressway.',
    category: 'For Sale',
    type: 'Land',
    description: 'FEATURES includes 24-hours Power Supply...',
    slug: 'lekki-pride-2',
  },
  {
    id: 2,
    cover: '/images/list/p-2.jpeg',
    name: 'ZYLUS COURT BOGIJE',
    location: 'along Lekki-Epe Expressway',
    category: 'For Sale',
    type: 'Bungalow',
    description: 'FEATURES includes Perimeter Fencing...',
    slug: 'zylus-court-bungalows-bogije',
  },
  {
    id: 3,
    cover: '/images/list/p-3.jpeg',
    name: 'Ambiance Heights Lekki',
    location: 'Freedom way, Lekki Phase 1, Lekki Lagos.',
    category: 'For Rent',
    type: 'Maisonette',
    description: 'FEATURES includes 24/7 Power supply...',
    slug: 'ambiance-heights-lekki-phase-1',
  },
  {
    id: 4,
    cover: '/images/list/p-4.jpeg',
    name: 'OPEBI CASTLES AND TERRACES',
    location: 'Opebi road in ikeja area of lagos, Nigeria',
    category: 'For Sale',
    type: 'Homes & Villas',
    description: 'FEATURES includes Gated Estate...',
    slug: 'opebi-castles-and-terraces',
  },
  {
    id: 5,
    cover: '/images/list/p-5.jpeg',
    name: 'LAGOON FRONT ESTATE EPE',
    location: 'Lekki Epe Corridor, Lagos Nigeria.',
    category: 'For Rent',
    type: 'Homes & Villas',
    description: 'FEATURES includes Buy and Build...',
    slug: 'lagoon-front-estate-epe',
  },
  {
    id: 6,
    cover: '/images/list/p-6.jpeg',
    name: 'METRO BAY ESTATE',
    location: 'heart of Sangotedo, Eti osa, Lagos Nigeria.',
    category: 'For Sale',
    type: 'Land',
    description: 'FEATURES includes Buy and Build...',
    slug: 'metro-bay-estate',
  },
  {
    id: 7,
    cover: '/images/list/p-7.jpeg',
    name: 'Ruby City Ibadan.',
    location: 'Ijaiye market, Iseyin Road, Moniya Ibadan, Oyo State Nigeria.',
    category: 'For Rent',
    type: 'Land',
    description: 'FEATURES includes Buy and Build...',
    slug: 'ruby-city-ibadan',
  },
]

export const awards = [
  {
    icon: <i class="fa-solid fa-user-tie"></i>,
    num: '150+',
    name: "Client's",
  },
  {
    icon: <i class="fa-solid fa-building"></i>,
    num: '350+',
    name: 'Lands/Apartments',
  },
  {
    icon: <i class="fa-solid fa-calendar-days"></i>,
    num: '4+',
    name: 'Years In Business',
  },
]
export const location = [
  {
    id: 1,
    name: 'Lekki Phase 1, Lagos State',
    Villas: '12 Villas',
    Apartments: '10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-1.png',
  },
  {
    id: 2,
    name: 'Marina , Lagos State',
    Villas: '12 Villas',
    Apartments: '10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-2.png',
  },
  {
    id: 3,
    name: 'Victoria Island, Lagos',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-3.png',
  },
  {
    id: 4,
    name: 'Ikoyi, Lagos State',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-4.png',
  },
  {
    id: 5,
    name: 'Ikorodu,Lagos State',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-5.png',
  },
  {
    id: 6,
    name: 'Ikeja, Lagos State',
    Villas: '12 Villas',
    Apartments: ' 10 Apartments',
    Offices: '07 Offices',
    cover: './images/location/city-6.png',
  },
]
export const team = [
  {
    cover: '../images/customer/team-1.jpg',
    address: 'Lagos, Nigeria',
    position: 'Managing Director',
    name: 'Mr. Bamidele',
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    cover: '../images/customer/team-2.jpg',
    address: 'Lagos, Nigeria',
    position: 'CEO Head of Sales',
    name: 'Mrs. Juliet',
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    cover: '../images/customer/team-3.jpg',
    address: 'Lagos, Nigeria',
    position: 'Head Of Tech',
    name: 'Mr. Josiah',
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
]
export const price = [
  {
    plan: 'Basic',
    price: '29',
    ptext: 'per user, per month',
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '99.5% Uptime Guarantee',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '120GB CDN Bandwidth',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '5GB Cloud Storage',
      },
      {
        change: 'color',
        icon: <i class="fa-solid fa-x"></i>,
        text: 'Personal Help Support',
      },
      {
        change: 'color',
        icon: <i class="fa-solid fa-x"></i>,
        text: 'Enterprise SLA',
      },
    ],
  },
  {
    best: 'Best Value',
    plan: 'Standard',
    price: '49',
    ptext: 'per user, per month',
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '99.5% Uptime Guarantee',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '150GB CDN Bandwidth',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '10GB Cloud Storage',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: 'Personal Help Support',
      },
      {
        change: 'color',
        icon: <i class="fa-solid fa-x"></i>,
        text: 'Enterprise SLA',
      },
    ],
  },
  {
    plan: 'Platinum',
    price: '79',
    ptext: '2 user, per month',
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '100% Uptime Guarantee',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '200GB CDN Bandwidth',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: '20GB Cloud Storage',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: 'Personal Help Support',
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: 'Enterprise SLA',
      },
    ],
  },
]
export const footer = [
  {
    title: 'FindVille',
    text: [
      { list: 'Home', path: '/' },
      { list: 'Service', path: '/service' },
    ],
  },
  {
    title: 'Contact Us',
    text: [{ list: 'Contact', path: '/contact' }],
  },
  {
    title: 'Learn More',
    text: [
      { list: 'About', path: '/about' },
      { list: 'Property', path: '/property' },
    ],
  },
]

export const blogData = [
  {
    id: 1,
    title: ' Investing in Land in Abuja: Why a C of O Matters More Than Ever',
    date: 'March 5,2025',
    description:
      'Amid rising concerns over land ownership in Abuja, securing land with a Certificate of Occupancy (C of O) is more important than ever. Here’s why our estate in Gwagwalada is the smart choice.',
    longNote:
      'The recent demolitions in Abuja have highlighted the risks of owning land without proper documentation. Many property owners have faced losses due to a lack of valid titles, making legally backed properties, especially those with a Certificate of Occupancy (C of O), more valuable than ever.Owning land in Abuja is a solid investment, but without a C of O, your property could be at risk. A Certificate of Occupancy provides:',
    points: [
      '1. Legal Security: The highest proof of ownership, protecting against disputes or government reclamation.',
      '2. Increased Value: Well-documented land appreciates faster and attracts serious buyers.',
      '3. Seamless Transactions: Makes resale, leasing, or development easier without legal roadblocks.',
    ],
    endNote:
      'Avoid future risks and rising costs. Invest in a secure, legally documented property today.The recent land disputes in Abuja highlight the need for due diligence. Protect your investment with a C of O—because security is key in real estate.',
    image: '../images/blog/img-4.png',
    slug: 'investing-in-land-abuja',
  },
  {
    id: 2,
    title: 'Top Real Estate Trends in 2025',
    date: 'January 15, 2025',
    description:
      'Discover the latest real estate trends to watch in 2025, including market shifts and buyer preferences.',
    longNote:
      'The real estate market is ever-evolving, and 2025 is no exception. As we move forward, various trends will shape the industry, impacting both buyers and investors. Here are some of the key trends to watch:',
    points: [
      '1. Smart Homes & Technology Integration - More homebuyers are seeking properties with advanced technology, including smart security systems, energy-efficient appliances, and automated controls.',
      '2. Sustainable & Eco-Friendly Housing - The demand for green homes is growing, with buyers prioritizing properties that use solar panels, energy-efficient windows, and sustainable materials.',
      '3. Urban vs. Suburban Shifts - While city living remains attractive, many buyers are looking toward suburban and semi-rural areas for affordability and space.',
      '4. Rise in Co-Living Spaces - Shared living arrangements are gaining popularity among young professionals and retirees alike, offering affordability and community living.',
      '5. Real Estate Investment in Digital Platforms - Tokenization of properties and real estate investment through blockchain technology are becoming more prevalent, making property investment more accessible.',
    ],
    endNote:
      'For investors and homebuyers, staying informed on these trends can be key to making the right decisions in 2025.',
    image: '../images/blog/img-1.jpg',
    slug: 'top-real-estate-trends-2025',
  },
  {
    id: 3,
    title: '5 Tips for First-Time Home Buyers',
    date: 'December 30, 2024',
    description:
      'Learn essential tips for first-time home buyers to make informed decisions in the real estate market.',
    longNote:
      'Buying a home for the first time can be overwhelming, but with the right approach, you can make the process smooth and rewarding. Here are five essential tips:',
    points: [
      '1. Set a Realistic Budget: Understand how much you can afford by considering your income, expenses, and mortgage rates before starting your search.',
      '2. Get Pre-Approved: for a MortgageA pre-approval letter from a lender helps you understand your buying power and makes you a serious buyer in the eyes of sellers.',
      '3.Research the Neighborhood: Location matters! Look for areas with good schools, amenities, and future growth potential to ensure a valuable investment.',
      '4. Inspect the Property Thoroughly: Never skip a home inspection. Identifying structural issues early can save you from costly repairs down the road.',
      '5. Work with a Trusted Real Estate Agent: An experienced agent can guide you through the process, negotiate on your behalf, and help you make informed decisions.',
    ],
    endNote:
      'By following these steps, first-time buyers can navigate the real estate market confidently and make informed purchases.',
    image: '../images/blog/img-2.jpg',
    slug: '5-tips-for-first-time-home-buyers',
  },
  {
    id: 4,
    title: 'Gain a Deeper Understanding of Real Estate Investment',
    date: 'December 20, 2024',
    description:
      'A beginner’s guide to investing in real estate and maximizing returns.',
    longNote:
      'Real estate investment can be a profitable endeavor, but it requires careful planning and knowledge of market trends. Here’s what you need to know to get started:',
    points: [
      '1.Know Your Investment Strategy: Decide whether you want to flip houses, invest in rental properties, or buy and hold for long-term appreciation.',
      '2. Understand Market Conditions: Research trends in the local and national housing markets to determine the best areas for investment.',
      '3.Secure Financing Options: Whether using personal savings, bank loans, or real estate investment groups, ensure you have a financial plan in place',
      '4.Consider Rental Income Potential: Investing in rental properties can provide a steady income stream. Be sure to analyze rental demand and property management requirements.',
      '5. Mitigate Risks & DiversifyAvoid putting all your resources into a single investment. Diversify by considering different property types and locations.',
    ],
    endNote:
      'With the right strategy and market understanding, real estate investment can provide lucrative returns and long-term financial growth.',
    image: '../images/blog/img-3.jpg',
    slug: 'understanding-real-estate-investment',
  },
]
