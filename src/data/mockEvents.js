// Mock events data for Kenyan cities (Nairobi, Mombasa, Kisumu, Nakuru, Eldoret)
const mockEvents = [
  {
    id: "1",
    name: { text: "Nairobi Tech Week 2025" },
    description: { text: "The largest tech event in East Africa featuring workshops, talks, and networking with tech leaders from around the continent." },
    start: { local: "2025-05-15T09:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-05-17T18:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Sarit Centre",
      address: { city: "Nairobi", country: "Kenya", address_1: "Westlands" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Nairobi+Tech+Week" },
    category: "Technology",
    capacity: 2000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 5,000",
    organizer: { name: "Tech Kenya Association" }
  },
  {
    id: "2",
    name: { text: "Mombasa Cultural Festival" },
    description: { text: "Celebrating the rich coastal culture with traditional dances, music, crafts, and delicious Swahili cuisine." },
    start: { local: "2025-06-20T10:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-06-22T22:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Fort Jesus",
      address: { city: "Mombasa", country: "Kenya", address_1: "Old Town" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Mombasa+Cultural+Festival" },
    category: "Arts & Culture",
    capacity: 5000,
    url: "#",
    is_free: true,
    ticket_price: "",
    organizer: { name: "Mombasa County Tourism Board" }
  },
  {
    id: "3",
    name: { text: "Nairobi International Film Festival" },
    description: { text: "Showcasing the best of African cinema with screenings, director talks, and film industry networking events." },
    start: { local: "2025-07-05T14:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-07-12T23:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Westgate Mall",
      address: { city: "Nairobi", country: "Kenya", address_1: "Westlands" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Nairobi+Film+Festival" },
    category: "Film & Media",
    capacity: 1500,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 2,500",
    organizer: { name: "Kenya Film Commission" }
  },
  {
    id: "4",
    name: { text: "Kisumu Jazz Festival" },
    description: { text: "A lakeside music festival featuring top jazz artists from Kenya and around the world." },
    start: { local: "2025-08-10T16:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-08-10T23:30:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Kisumu Impala Sanctuary",
      address: { city: "Kisumu", country: "Kenya", address_1: "Impala Avenue" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Kisumu+Jazz+Festival" },
    category: "Music",
    capacity: 1000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 3,000",
    organizer: { name: "Lakeside Music Collective" }
  },
  {
    id: "5",
    name: { text: "Nakuru Food Festival" },
    description: { text: "Taste the diversity of Kenyan cuisine with food stalls, cooking demonstrations, and eating competitions." },
    start: { local: "2025-09-25T10:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-09-27T20:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Afraha Stadium",
      address: { city: "Nakuru", country: "Kenya", address_1: "Stadium Road" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Nakuru+Food+Festival" },
    category: "Food & Drink",
    capacity: 3000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 500",
    organizer: { name: "Chefs Association of Kenya" }
  },
  {
    id: "6",
    name: { text: "Eldoret Marathon" },
    description: { text: "Kenya's premier running event attracting both elite athletes and amateur runners from around the world." },
    start: { local: "2025-10-12T06:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-10-12T14:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Eldoret Sports Club",
      address: { city: "Eldoret", country: "Kenya", address_1: "Uganda Road" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Eldoret+Marathon" },
    category: "Sports & Fitness",
    capacity: 10000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 1,000",
    organizer: { name: "Athletics Kenya" }
  },
  {
    id: "7",
    name: { text: "Nairobi Business Expo" },
    description: { text: "Connect with entrepreneurs, investors, and business leaders from across East Africa." },
    start: { local: "2025-11-05T08:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-11-07T17:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "KICC",
      address: { city: "Nairobi", country: "Kenya", address_1: "City Center" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Nairobi+Business+Expo" },
    category: "Business",
    capacity: 5000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 2,000",
    organizer: { name: "Kenya Chamber of Commerce" }
  },
  {
    id: "8",
    name: { text: "Mombasa Beach Volleyball Tournament" },
    description: { text: "Professional beach volleyball competition on the beautiful shores of the Indian Ocean." },
    start: { local: "2025-12-15T09:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-12-16T18:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Nyali Beach",
      address: { city: "Mombasa", country: "Kenya", address_1: "Nyali" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Beach+Volleyball" },
    category: "Sports & Fitness",
    capacity: 2000,
    url: "#",
    is_free: true,
    ticket_price: "",
    organizer: { name: "Kenya Volleyball Federation" }
  },
  {
    id: "9",
    name: { text: "Nairobi Comedy Night" },
    description: { text: "Kenya's funniest comedians come together for a night of laughter and entertainment." },
    start: { local: "2025-04-20T19:30:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-04-20T22:30:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "Carnivore Restaurant",
      address: { city: "Nairobi", country: "Kenya", address_1: "Langata Road" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Comedy+Night" },
    category: "Entertainment",
    capacity: 500,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 1,500",
    organizer: { name: "Laugh Industry" }
  },
  {
    id: "10",
    name: { text: "Kisumu Agricultural Fair" },
    description: { text: "Highlighting innovations in farming, livestock management, and agricultural technology." },
    start: { local: "2025-05-25T08:00:00", timezone: "Africa/Nairobi" },
    end: { local: "2025-05-28T17:00:00", timezone: "Africa/Nairobi" },
    venue: {
      name: "ASK Showground",
      address: { city: "Kisumu", country: "Kenya", address_1: "Mamboleo" }
    },
    logo: { url: "https://placehold.co/600x400/png?text=Agricultural+Fair" },
    category: "Business",
    capacity: 7000,
    url: "#",
    is_free: false,
    ticket_price: "Ksh 200",
    organizer: { name: "Agricultural Society of Kenya" }
  }
];

// Mock categories
const mockCategories = [
  { id: "101", name: "Technology" },
  { id: "102", name: "Arts & Culture" },
  { id: "103", name: "Film & Media" },
  { id: "104", name: "Music" },
  { id: "105", name: "Food & Drink" },
  { id: "106", name: "Sports & Fitness" },
  { id: "107", name: "Business" },
  { id: "108", name: "Entertainment" },
  { id: "109", name: "Education" },
  { id: "110", name: "Health & Wellness" }
];

// Mock cities in Kenya
const mockCities = [
  { id: "201", name: "Nairobi" },
  { id: "202", name: "Mombasa" },
  { id: "203", name: "Kisumu" },
  { id: "204", name: "Nakuru" },
  { id: "205", name: "Eldoret" }
];

export { mockEvents, mockCategories, mockCities };