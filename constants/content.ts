/**
 * Content Constants
 * All static text content for the application
 * Centralized for easy editing and localization
 */

/**
 * SITE INFORMATION
 */
export const siteInfo = {
  name: "Golden Hour Events",
  tagline: "Where Unforgettable Events Come to Life",
  description:
    "Seasoned event organizer crafting bespoke events that exceed expectations",
  longDescription:
    "From intimate gatherings to grand celebrations, we create unforgettable experiences that leave a lasting impression with exceptional service, creativity, and expertise",
  version: "0.1.0",
  platform: "Next.js 15",
  runtime: "React 19",
  author: "design system",
} as const;

/**
 * NAVIGATION MENU
 */
export const navigation = {
  items: [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Events", href: "#events", id: "events" },
    { label: "Packages", href: "#packages", id: "packages" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Booking", href: "#booking", id: "booking" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
  cta: {
    text: "Book Event",
    mobileText: "Start Planning",
  },
} as const;

/**
 * HERO SECTION
 */
export const hero = {
  badge: "✨ Where Unforgettable Events Come to Life",
  title: "Welcome to Golden Hour Events",
  subtitle:
    "As a seasoned event organizer, we craft bespoke events that exceed expectations. With a keen eye for detail and deep understanding of what makes an event truly special, we work closely with you to bring your vision to life.",
  titleGradient: "Events",
  cta: {
    primary: "Book Your Event",
    secondary: "💬 Chat on WhatsApp",
  },
  whatsappMessage:
    "Hi! I'd like to check availability for my event. Could you help me with dates and packages?",
  trustIndicators: [
    {
      icon: "⭐⭐⭐⭐⭐",
      text: "Premium Hotel Partners",
    },
    {
      icon: "🏆",
      text: "5 Years in Business",
    },
    {
      icon: "📍",
      text: "Bangalore & Beyond",
    },
  ],
  stats: [
    {
      number: "₹30,000",
      label: "Starting Price",
      description: "Event Decor packages from",
    },
    {
      number: "500+",
      label: "Events",
      description: "Successfully planned and executed",
    },
    {
      number: "100%",
      label: "Satisfaction",
      description: "Client happiness guaranteed",
    },
    {
      number: "24/7",
      label: "Support",
      description: "We're here whenever you need us",
    },
  ],
} as const;

/**
 * BOOKING CALENDAR HERO
 */
export const bookingHero = {
  title: {
    line1: "LET'S GET",
    line2: "THE PARTY",
    line3: "STARTED.",
  },
  subtitle: "WORK WITH WINK!",
  calendar: {
    title: "Booking Calendar",
    subtitle: "Choose your perfect date",
  },
  features: [
    {
      icon: "Calendar",
      title: "Easy Booking",
      description:
        "Select your perfect date in just a few clicks with our intuitive interface",
    },
    {
      icon: "Clock",
      title: "Instant Updates",
      description:
        "Get real-time availability and immediate confirmation for your selected dates",
    },
    {
      icon: "MapPin",
      title: "Venue Support",
      description: "Access our network of premium venues across major cities",
    },
  ],
  cta: {
    primary: "Check Availability",
    secondary: "View Packages",
  },
} as const;

/**
 * EVENTS SECTION
 */
export const events = {
  title: "Our Amazing Events",
  subtitle: "Discover the magic we create",
  description:
    "We specialize in Weddings, Haldi ceremonies, Receptions, Birthday parties, Bridal showers, Baby showers, Corporate events, Inaugurations, Naming & House warming ceremonies, Retail show windows & more!",
  categories: {
    all: "All Events",
    wedding: "Wedding",
    corporate: "Corporate",
    party: "Party",
  },
} as const;

/**
 * PACKAGES SECTION
 */
export const packages = {
  title: "Our Services",
  subtitle: "Complete event solutions under one roof",
  description:
    "From planning to execution, we provide comprehensive services to make your event memorable and stress-free",
  items: [
    {
      title: "Production & Setup",
      services: [
        "Lighting & Production",
        "Furniture Rentals",
        "DJ Services",
        "Vendor Management",
      ],
    },
    {
      title: "Creative Services",
      services: [
        "Photography",
        "Mehendi Artists",
        "Make-up Artists",
        "Tattoo Artists",
      ],
    },
    {
      title: "Celebration Essentials",
      services: [
        "Wedding Invites",
        "Dhol Services",
        "Event Planning",
        "Custom Decor",
      ],
    },
  ],
  partnerHotels: [
    "JW Marriott",
    "ITC Gardenia",
    "Shangri-La",
    "Chamara Vajra",
    "Chancery Hotels",
  ],
  cta: {
    text: "Get Quote",
    whatsappMessage:
      "Hi! I'm interested in your event packages. Could you share more details and pricing?",
  },
} as const;

/**
 * BOOKING SECTION
 */
export const booking = {
  title: "Book Your Event",
  subtitle: "Let's make your vision come to life",
  description:
    "Fill out the form below and we'll get back to you within 24 hours",
  form: {
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email",
      },
      phone: {
        label: "Phone Number",
        placeholder: "Enter your phone number",
      },
      eventType: {
        label: "Event Type",
        placeholder: "Select event type",
        options: [
          "Wedding",
          "Corporate Event",
          "Birthday Party",
          "Anniversary",
          "Other",
        ],
      },
      type: {
        label: "Event Type",
        placeholder: "Wedding, Corporate, Birthday...",
      },
      date: {
        label: "Event Date",
        placeholder: "Select your preferred date",
      },
      location: {
        label: "Preferred Location",
        placeholder: "City or venue preferences",
      },
      eventDate: {
        label: "Event Date",
        placeholder: "Select your preferred date",
      },
      guestCount: {
        label: "Number of Guests",
        placeholder: "Approximate guest count",
      },
      budget: {
        label: "Budget Range",
        placeholder: "e.g., ₹30,000 - ₹2,00,000",
        options: [
          "₹30,000 - ₹50,000",
          "₹50,000 - ₹1,00,000",
          "₹1,00,000 - ₹2,50,000",
          "₹2,50,000 - ₹5,00,000",
          "₹5,00,000+",
        ],
      },
      venue: {
        label: "Preferred Venue",
        placeholder: "Any specific venue in mind?",
      },
      message: {
        label: "Notes",
        placeholder: "Tell us about your event...",
      },
    },
    submit: {
      text: "Submit Inquiry",
      loading: "Submitting...",
    },
    success: {
      title: "Inquiry Submitted!",
      message:
        "Thank you for your interest. We'll get back to you within 24 hours.",
    },
    error: {
      title: "Submission Failed",
      message: "Please try again or contact us directly.",
    },
  },
} as const;

/**
 * TESTIMONIALS SECTION
 */
export const testimonials = {
  title: "What Our Clients Say",
  subtitle: "Real stories from real celebrations",
  description:
    "Don't just take our word for it - hear from couples and companies who trusted us with their special moments at premium venues",
  items: [
    {
      name: "JW MARRIOT",
      role: "Premium Hotel Partner",
      content:
        "Golden Hour Events consistently delivers exceptional wedding celebrations at our venue. Their attention to detail and professional coordination makes every event memorable. Highly recommended partner!",
      rating: 5,
    },
    {
      name: "ITC GARDENIA",
      role: "Luxury Hotel Partner",
      content:
        "Professional, reliable, and creative. Golden Hour Events handles corporate conferences and events flawlessly at our property. Their team's vendor management is impressive.",
      rating: 5,
    },
    {
      name: "SHANGRI-LA",
      role: "Elite Hotel Partner",
      content:
        "Golden Hour Events transforms our venues into magical experiences. Their lighting, decor, and coordination excellence makes every celebration unforgettable. Outstanding partnership!",
      rating: 5,
    },
    {
      name: "CHAMARA VAJRA",
      role: "Boutique Hotel Partner",
      content:
        "Golden Hour Events brings exceptional event management to our boutique property. Every arrangement from decor to catering coordination is handled with perfection. Excellent collaboration!",
      rating: 5,
    },
    {
      name: "CHANCERY HOTELS",
      role: "Hotel Chain Partner",
      content:
        "Outstanding event management across our properties. Golden Hour Events handles everything professionally - from lighting setups to complete vendor coordination. Trusted partner for all events!",
      rating: 5,
    },
  ],
} as const;

/**
 * GALLERY SECTION
 */
export const gallery = {
  title: "Event Gallery",
  subtitle: "Moments captured, memories made",
  description:
    "Browse through our portfolio of successful events and celebrations",
  instagram: {
    title: "Follow Us on Instagram",
    handle: "@goldenhourevents",
    cta: "View More",
  },
} as const;

/**
 * CONTACT SECTION
 */
export const contact = {
  title: "Contact",
  subtitle: "Ready to start planning?",
  description:
    "Contact us today and let's discuss how we can make your event unforgettable",
  info: {
    address: {
      label: "Address",
      value:
        "Golden Hour Events | Leading Event Management & Best Wedding Planners in Bangalore, Hennur, Bengaluru, 6th B Main Road, M G Road, Bangalore - 560001 (Near By Hennur Banasawadi Club)",
    },
    phone: {
      label: "Phone",
      value: "+91 08460418956",
      href: "tel:+918460418956",
    },
    email: {
      label: "Email Us",
      value: "hello@goldenhourevents.com",
      href: "mailto:hello@goldenhourevents.com",
    },
    hours: {
      label: "Business Hours",
      value: "Mon - Sat: 7:00 AM - 7:00 PM",
    },
  },
  map: {
    title: "Event Planner Location",
    ariaLabel: "Google map to our area",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d77.588302777778!3d12.992027777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzMxLjMiTiA3N8KwMzUnMTcuOSJF!5e0!3m2!1sen!2sin!4v1699234567890!5m2!1sen!2sin",
  },
  cta: {
    whatsapp: "Chat on WhatsApp",
    whatsappMessage:
      "Hi! I'd like to check availability for my event. Could you help me with dates and packages?",
  },
} as const;

/**
 * FOOTER
 */
export const footer = {
  copyright: `© ${new Date().getFullYear()} Golden Hour Events. All rights reserved.`,
  description: "Creating unforgettable events across Karnataka",
  social: {
    instagram: "@goldenhourevents",
    facebook: "Golden Hour Events",
    linkedin: "Golden Hour Events",
  },
  links: {
    services: [
      "Lighting & Production",
      "Furniture Rentals",
      "DJ Services",
      "Photography",
      "Wedding Invites",
      "Vendor Management",
      "Dhol Services",
      "Mehendi Artists",
      "Make-up Artists",
      "Tattoo Artists",
    ],
    events: [
      "Weddings",
      "Haldi Ceremonies",
      "Receptions",
      "Birthday Parties",
      "Bridal Showers",
      "Baby Showers",
      "Corporate Events",
      "Inaugurations",
    ],
    partners: [
      "JW Marriott",
      "ITC Gardenia",
      "Shangri-La",
      "Chamara Vajra",
      "Chancery Hotels",
    ],
    company: ["About Us", "Our Team", "Portfolio", "Contact"],
    support: [
      "FAQ",
      "Privacy Policy",
      "Terms of Service",
      "Cancellation Policy",
    ],
  },
} as const;

/**
 * SEO & META
 */
export const seo = {
  title:
    "Golden Hour Events - Premier Event Planning in Bangalore | JW Marriott, ITC Gardenia Partner",
  description:
    "Professional event planning services in Bangalore. Weddings, corporate events, birthday parties at premium venues like JW Marriott, ITC Gardenia, Shangri-La. Complete services: lighting, photography, DJ, makeup artists & more!",
  keywords: [
    "event planning bangalore",
    "wedding planner bangalore",
    "corporate events bangalore",
    "JW Marriott events",
    "ITC Gardenia events",
    "Shangri-La events",
    "lighting production bangalore",
    "DJ services bangalore",
    "photography bangalore",
    "makeup artists bangalore",
    "mehendi artists bangalore",
    "event management karnataka",
  ],
  openGraph: {
    siteName: "Golden Hour Events",
    type: "website",
    locale: "en_IN",
  },
} as const;

/**
 * NOTIFICATION MESSAGES
 */
export const messages = {
  booking: {
    success: "Your inquiry has been submitted successfully!",
    error: "Failed to submit inquiry. Please try again.",
    loading: "Submitting your inquiry...",
  },
  contact: {
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
  },
  general: {
    loading: "Loading...",
    error: "Something went wrong. Please try again.",
    networkError: "Network error. Please check your connection.",
  },
} as const;

/**
 * ANALYTICS & TRACKING
 */
export const tracking = {
  events: {
    bookingSubmit: "booking_inquiry_submit",
    contactSubmit: "contact_form_submit",
    whatsappClick: "whatsapp_button_click",
    packageView: "package_view",
    eventView: "event_view",
  },
} as const;
