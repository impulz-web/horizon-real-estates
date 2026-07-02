export interface Property {
  id: string;
  title: string;
  description: string;
  price: number; // in USD
  priceKsh: string; // pre-formatted in KSh
  location: string;
  city: string;
  suburb: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  tag: string; // e.g. 'Oceanfront', 'Heated Pool', 'Skyline View', etc.
}

export const KENYAN_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Sanctuary Mansion',
    description: 'An architectural tour de force situated in the heart of Karen. This modern masterpiece features floor-to-ceiling glass pavilions, a state-of-the-art double-height main salon, an expansive temperature-controlled heated pool, and private mature forest frontage. Designed for multi-generational luxury with separate guest wing and wellness spa.',
    price: 2450000,
    priceKsh: 'KSh 318,500,000',
    location: 'Karen, Nairobi',
    city: 'Nairobi',
    suburb: 'Karen',
    bedrooms: 5,
    bathrooms: 6,
    area: '850 sqm',
    type: 'Villa',
    image: 'https://picsum.photos/seed/karenvilla/800/600',
    tag: 'Private Forest',
  },
  {
    id: 'prop-2',
    title: 'Diani Azure Cove Villa',
    description: 'A striking oceanfront estate situated directly on the powder-white sands of Diani Beach. This Swahili-fusion designed sanctuary features panoramic Indian Ocean views, a private infinity pool that melts into the horizon, coral-stone high ceilings, a private direct-beach lounge, and robust 24/7 private security. Perfect as a high-yielding luxury vacation asset or a serene coastal retreat.',
    price: 3200000,
    priceKsh: 'KSh 416,000,000',
    location: 'Diani Beach, Mombasa',
    city: 'Mombasa',
    suburb: 'Diani Beach',
    bedrooms: 6,
    bathrooms: 7,
    area: '1,100 sqm',
    type: 'Waterfront Villa',
    image: 'https://picsum.photos/seed/dianivilla/800/600',
    tag: 'Direct Beach Access',
  },
  {
    id: 'prop-3',
    title: 'Highcrest Duplex Penthouse',
    description: 'An elite dual-level sky residence in the prestigious Westlands heights. Offering breathtaking 360-degree views of the Nairobi skyline and Karura Forest, this trophy penthouse features a private internal elevator, a rooftop plunge pool, bespoke Italian marble kitchens, professional smart home automation, and an extensive wraparound terrace crafted for high-end entertaining.',
    price: 1150000,
    priceKsh: 'KSh 149,500,000',
    location: 'Westlands, Nairobi',
    city: 'Nairobi',
    suburb: 'Westlands',
    bedrooms: 4,
    bathrooms: 5,
    area: '480 sqm',
    type: 'Apartment',
    image: 'https://picsum.photos/seed/westlandspent/800/600',
    tag: 'Rooftop Pool',
  },
  {
    id: 'prop-4',
    title: 'Great Rift Valley Golf Estate',
    description: 'Set within Naivashas most exclusive championship golf course, this elegant rustic-modern stone villa captures sublime vistas of Lake Naivasha and Mt. Longonot. Boasting soaring exposed cedar rafters, a massive stone fireplace, extensive solar-battery backup grid, double-glazed energy-efficient windows, and premium high-security fencing.',
    price: 850000,
    priceKsh: 'KSh 110,500,000',
    location: 'Great Rift Valley, Naivasha',
    city: 'Naivasha',
    suburb: 'Naivasha',
    bedrooms: 4,
    bathrooms: 4,
    area: '520 sqm',
    type: 'Luxury Estate',
    image: 'https://picsum.photos/seed/naivashagolf/800/600',
    tag: 'Championship Golf',
  },
  {
    id: 'prop-5',
    title: 'Mount Kenya Foothills Sanctuary',
    description: 'An expansive eco-luxury wilderness ranch located on the outskirts of Nanyuki, offering dramatic views of the peaks of Mount Kenya. The property features double-height heavy timber posts, fully off-grid solar arrays, premium rainwater harvesting, high-capacity water wells, private wildlife watering hole frontage, and a dedicated helipad.',
    price: 1950000,
    priceKsh: 'KSh 253,500,000',
    location: 'Foothills, Nanyuki',
    city: 'Nanyuki',
    suburb: 'Nanyuki',
    bedrooms: 5,
    bathrooms: 5,
    area: '750 sqm',
    type: 'Vacation Home',
    image: 'https://picsum.photos/seed/nanyukiranch/800/600',
    tag: 'Mount Kenya View',
  },
  {
    id: 'prop-6',
    title: 'Medina Watamu Ocean Retreat',
    description: 'An iconic Moroccan-Swahili styled courtyard villa within Watamu’s protected marine reserve. Boasting cascading white arches, a spectacular central swimming pool courtyard, private walk-path directly to the beach, and high-security gated compound. Features high-velocity solar cooling and custom carved mangrove wood shutters.',
    price: 1600000,
    priceKsh: 'KSh 208,000,000',
    location: 'Marine Park, Watamu',
    city: 'Malindi',
    suburb: 'Watamu Beach',
    bedrooms: 5,
    bathrooms: 5,
    area: '680 sqm',
    type: 'Waterfront Villa',
    image: 'https://picsum.photos/seed/watamuvilla/800/600',
    tag: 'Marine Park Access',
  },
  {
    id: 'prop-7',
    title: 'The Kitisuru Contemporary Triplex',
    description: 'A striking architectural triplex townhouse situated in a prestigious boutique gated community of only eight homes in Kitisuru. Offering ultra-private high-security walls, private state-of-the-art lift, fully integrated Italian chef kitchen, acoustic sound-proof home theater room, and a rooftop cocktail terrace overlooking lush coffee valley streams.',
    price: 980000,
    priceKsh: 'KSh 127,400,000',
    location: 'Kitisuru, Nairobi',
    city: 'Nairobi',
    suburb: 'Kitisuru',
    bedrooms: 4,
    bathrooms: 5,
    area: '420 sqm',
    type: 'Townhouse',
    image: 'https://picsum.photos/seed/kitisurutrip/800/600',
    tag: 'Private Lift',
  },
  {
    id: 'prop-8',
    title: 'Upper Hill Executive Plaza Suite',
    description: 'Premium Grade-A commercial headquarter space in Nairobi’s high-finance district, Upper Hill. Ideal for corporate headquarters, family offices, or premium private bank showrooms. Features double-glazed acoustic glass walls, private climate zoning, integrated secure fiber connectivity, private VIP boardroom with kitchen, and 6 dedicated secure basement parkings.',
    price: 1850000,
    priceKsh: 'KSh 240,500,000',
    location: 'Upper Hill, Nairobi',
    city: 'Nairobi',
    suburb: 'Upper Hill',
    bedrooms: 0,
    bathrooms: 4,
    area: '600 sqm',
    type: 'Commercial Space',
    image: 'https://picsum.photos/seed/upperhilloffice/800/600',
    tag: 'Executive Grade-A',
  }
];

export const KENYAN_CITIES = [
  { name: 'Nairobi', description: 'Exclusive residential suburbs including Karen, Runda, Muthaiga, Westlands, and Kitisuru.' },
  { name: 'Mombasa', description: 'Premium beachside real estate in Nyali, Shanzu, and Diani Beach oceanfront.' },
  { name: 'Malindi', description: 'Tropical coastal escapes, including spectacular waterfront homes on Watamu Beach.' },
  { name: 'Naivasha', description: 'Championship golf estates and spectacular villas overlooking the Rift Valley lake views.' },
  { name: 'Nanyuki', description: 'Expansive private ranches and safari-luxury estates at the foot of Mount Kenya.' }
];

export const PROPERTY_CATEGORIES = [
  { name: 'Villas', description: 'Exclusive standalone multi-story estates.', count: 18 },
  { name: 'Apartments', description: 'Elite sky homes and panoramic duplex penthouses.', count: 24 },
  { name: 'Townhouses', description: 'Elegant, modern multi-level gated community homes.', count: 12 },
  { name: 'Commercial Spaces', description: 'High-end corporate offices and premium showrooms.', count: 6 },
  { name: 'Luxury Estates', description: 'Massive gated private holdings and ranches.', count: 8 },
  { name: 'Vacation Homes', description: 'Waterfront beach retreats and serene countryside lodges.', count: 15 }
];
