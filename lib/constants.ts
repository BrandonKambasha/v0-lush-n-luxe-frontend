// Site-wide navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#collections" },
  { label: "B2B", href: "/b2b" },
  { label: "Subscription", href: "/subscription" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Featured collections for homepage grid
export const FEATURED_COLLECTIONS = [
  {
    title: "Home & Bedroom",
    description: "Indulge in sumptuous bedding sets, throws, and cushions crafted for restful elegance.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    href: "/#",
  },
  {
    title: "Bathroom & Spa",
    description: "Plush towels, robes, and spa-grade linens that transform your daily ritual.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    href: "/#",
  },
  {
    title: "Lifestyle & Leisure",
    description: "From picnic blankets to yoga mats, sustainable comfort for every occasion.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    href: "/#",
  },
  {
    title: "Kitchenware",
    description: "Artisan tea towels, aprons, and table linens for the discerning home chef.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    href: "/#",
  },
  {
    title: "Decor & Accessories",
    description: "Curated accents, candles, and finishing touches to elevate every room.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    href: "/#",
  },
] as const;

// Carousel collections
export const CAROUSEL_COLLECTIONS = [
  {
    title: "Signature Bedding",
    description: "Our flagship 400-thread-count organic cotton collection, designed for the ultimate sleep sanctuary.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    title: "Luxury Towels & Spa",
    description: "Zero-twist Egyptian cotton towels with unmatched absorbency and cloud-like softness.",
    image: "https://images.unsplash.com/photo-1600369671738-fa6e2a392bf4?w=800&q=80",
  },
  {
    title: "Hospitality Essentials",
    description: "Durable, premium-grade linens trusted by boutique hotels and Airbnb Superhosts.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  },
  {
    title: "Seasonal Themes",
    description: "Refresh your space with curated seasonal palettes and limited-edition textile designs.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
  },
] as const;

// About page promises
export const BRAND_PROMISES = [
  "100% sustainably sourced materials",
  "Ethically manufactured textiles",
  "Circular textile recycling programme",
  "Carbon-neutral delivery options",
  "Luxury quality at accessible prices",
] as const;

// B2B partner types
export const B2B_PARTNERS = [
  { title: "Hotels & Resorts", icon: "Building2" },
  { title: "Airbnb & Short-Let", icon: "Home" },
  { title: "Hospitals & Healthcare", icon: "Heart" },
  { title: "Nursing & Care Homes", icon: "Users" },
  { title: "Corporate Housing", icon: "Briefcase" },
  { title: "Event Organisers", icon: "Calendar" },
] as const;

// B2B features
export const B2B_FEATURES = [
  {
    title: "Tiered Wholesale Pricing",
    description: "Volume-based pricing that rewards loyalty and large-scale procurement.",
    icon: "TrendingUp",
  },
  {
    title: "Recurring Contracts",
    description: "Set-and-forget supply agreements tailored to your operational calendar.",
    icon: "RefreshCw",
  },
  {
    title: "Custom Quantities",
    description: "Flexible order sizes from boutique minimums to enterprise-scale fulfilment.",
    icon: "Package",
  },
  {
    title: "Seasonal Refresh",
    description: "Scheduled textile refreshes to maintain impeccable presentation standards.",
    icon: "Sparkles",
  },
  {
    title: "Tender Support",
    description: "Dedicated support for public and private sector procurement processes.",
    icon: "FileText",
  },
  {
    title: "Flexible Invoicing",
    description: "Net-30, net-60, and custom payment terms to match your cash flow.",
    icon: "CreditCard",
  },
] as const;

// Subscription steps
export const SUBSCRIPTION_STEPS = [
  { step: 1, title: "Select", description: "Choose your textile category and quality tier." },
  { step: 2, title: "Choose", description: "Pick your preferred refresh frequency and quantity." },
  { step: 3, title: "Receive", description: "Get pristine, freshly laundered textiles delivered." },
  { step: 4, title: "Return", description: "Send back used items in our prepaid return bags." },
  { step: 5, title: "Refresh", description: "We clean, repair, or recycle — and you receive fresh stock." },
] as const;

// Subscription benefits
export const SUBSCRIPTION_BENEFITS = [
  {
    title: "Cost Predictability",
    description: "Fixed monthly costs replace unpredictable capital expenditure on textile replacement.",
  },
  {
    title: "Always Fresh",
    description: "Consistent quality without the hassle of sourcing, laundering, or disposing of worn textiles.",
  },
  {
    title: "Sustainable by Design",
    description: "Every subscription cycle extends textile life and diverts waste from landfill.",
  },
  {
    title: "Fully Flexible",
    description: "Scale up, scale down, pause, or cancel — your subscription adapts to your needs.",
  },
] as const;

// Sustainability metrics
export const SUSTAINABILITY_METRICS = [
  { value: "12,000+", label: "Textiles recycled annually" },
  { value: "85%", label: "Water reduction vs. conventional" },
  { value: "Zero", label: "Textiles sent to landfill" },
  { value: "100%", label: "Renewable energy in operations" },
] as const;

// Footer link columns
export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Careers", href: "/#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Bedding", href: "/#" },
      { label: "Bathroom", href: "/#" },
      { label: "Kitchenware", href: "/#" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "B2B Solutions", href: "/b2b" },
      { label: "Subscription", href: "/subscription" },
      { label: "Corporate Accounts", href: "/b2b" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/#" },
      { label: "Shipping & Returns", href: "/#" },
    ],
  },
] as const;
