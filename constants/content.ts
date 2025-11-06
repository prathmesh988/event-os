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
  tagline: "Urban Events",
  description: "Professional event planning that brings your vision to life",
  longDescription:
    "From intimate gatherings to grand celebrations, we create unforgettable moments",
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
  badge: "✨ Premium Event Planning & Design",
  title: "Turn Your Dream Events into Reality",
  subtitle:
    "Book your next event in just 3 clicks – seamless planning from venue to vendors with personalized design and flawless execution.",
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
      text: "500+ Happy Clients",
    },
    {
      icon: "🏆",
      text: "5 Years in Business",
    },
    {
      icon: "📍",
      text: "Pan India Service",
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
    "From intimate celebrations to grand corporate events, we bring your vision to life",
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
  title: "Event Packages",
  subtitle: "Perfect plans for every celebration",
  description:
    "Choose from our curated packages or let us create something custom for you",
  items: [
    {
      title: "Wedding Management",
      services: ["Venue Decor", "Catering", "Photography", "Guest Management"],
    },
    {
      title: "Corporate Events",
      services: ["Venue Booking", "AV & Stage", "Catering", "Logistics"],
    },
    {
      title: "Birthday Parties",
      services: ["Theme Decor", "Cakes & Snacks", "Games", "Photography"],
    },
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
    "Don't just take our word for it - hear from couples and companies who trusted us with their special moments",
  items: [
    {
      name: "Priya & Arjun",
      role: "Wedding Couple",
      content:
        "Golden Hour Events made our dream wedding come true! Every detail was perfect, from the mandap decoration to the reception setup. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rohit Sharma",
      role: "Corporate Event Manager",
      content:
        "Professional, reliable, and creative. They handled our annual conference flawlessly. The team's attention to detail is impressive.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Birthday Celebration",
      content:
        "They turned my daughter's birthday party into a magical experience. The theme decoration and coordination were excellent!",
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
      "Wedding Planning",
      "Corporate Events",
      "Birthday Parties",
      "Anniversary Celebrations",
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
  title: "Golden Hour Events - Premier Event Planning in Bangalore",
  description:
    "Professional event planning services in Bangalore. Weddings, corporate events, birthday parties & more. Book your dream event today!",
  keywords: [
    "event planning bangalore",
    "wedding planner bangalore",
    "corporate events bangalore",
    "birthday party organizer",
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
