"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  siteInfo,
  hero as heroContent,
  bookingHero,
  events as eventsContent,
  packages as packagesContent,
  booking as bookingContent,
  testimonials as testimonialsContent,
  gallery as galleryContent,
  contact as contactContent,
} from "@/constants/content";

type SectionContent = {
  title: string;
  description: string;
};

type ContactField = {
  label?: string;
  value?: string;
  href?: string;
};

type ContactType = {
  title?: string;
  subtitle?: string;
  description?: string;
  info?: {
    address?: ContactField;
    phone?: ContactField;
    email?: ContactField;
    hours?: ContactField;
  };
  map?: { title?: string; ariaLabel?: string; embedUrl?: string };
  cta?: { whatsapp?: string; whatsappMessage?: string };
};

type TestimonialItem = {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  event?: string;
};

type AdminState = {
  sections: Record<string, SectionContent>;
  setSection: (key: string, payload: Partial<SectionContent>) => void;
  site: {
    name: string;
    tagline?: string;
    description?: string;
  };
  setSite: (
    payload: Partial<{ name: string; tagline?: string; description?: string }>
  ) => void;
  texts: Record<string, string>;
  setText: (key: string, value: string) => void;
  contact: ContactType;
  setContact: (payload: Partial<ContactType>) => void;
  testimonials: TestimonialItem[];
  setTestimonials: (items: TestimonialItem[]) => void;
  addTestimonial: (item: TestimonialItem) => void;
  updateTestimonial: (idx: number, payload: Partial<TestimonialItem>) => void;
  removeTestimonial: (idx: number) => void;
  reset: () => void;
};

const DEFAULTS: Record<string, SectionContent> = {
  hero: {
    title:
      (heroContent && (heroContent.title as string)) || siteInfo.name || "",
    description:
      (heroContent && (heroContent.subtitle as string)) ||
      siteInfo.description ||
      "",
  },
  about: {
    title: "About Us",
    description: siteInfo.longDescription || siteInfo.description || "",
  },
  events: {
    title:
      (eventsContent && (eventsContent.title as string)) ||
      "Our Amazing Events",
    description:
      (eventsContent && (eventsContent.subtitle as string)) ||
      (eventsContent && (eventsContent.description as string)) ||
      "Discover the magic we create",
  },
  packages: {
    title:
      (packagesContent && (packagesContent.title as string)) ||
      "Event Packages",
    description:
      (packagesContent && (packagesContent.description as string)) ||
      (packagesContent && (packagesContent.subtitle as string)) ||
      "Perfect plans for every celebration",
  },
  services: {
    // content.ts doesn't have a dedicated `services` export; reuse packages values as sensible defaults
    title:
      (packagesContent && (packagesContent.title as string)) || "Our Services",
    description:
      (packagesContent && (packagesContent.description as string)) ||
      "Complete event solutions under one roof",
  },
  booking: {
    title:
      (bookingContent && (bookingContent.title as string)) || "Book Your Event",
    description:
      (bookingContent && (bookingContent.description as string)) ||
      "Let's make your dream event reality",
  },
  calendar: {
    title:
      (bookingHero &&
        bookingHero.calendar &&
        (bookingHero.calendar.title as string)) ||
      "Check Availability",
    description:
      (bookingHero &&
        bookingHero.calendar &&
        (bookingHero.calendar.subtitle as string)) ||
      "Find your perfect date",
  },
  testimonials: {
    title:
      (testimonialsContent && (testimonialsContent.title as string)) ||
      "Happy Clients",
    description:
      (testimonialsContent && (testimonialsContent.description as string)) ||
      "What our customers say about us",
  },
  gallery: {
    title:
      (galleryContent && (galleryContent.title as string)) || "Event Gallery",
    description:
      (galleryContent && (galleryContent.description as string)) ||
      "Moments that matter",
  },
  contact: {
    title:
      (contactContent && (contactContent.title as string)) || "Get In Touch",
    description:
      (contactContent && (contactContent.description as string)) ||
      "Ready to plan your perfect event?",
  },
};

const DEFAULT_SITE = {
  name: siteInfo.name || "",
  tagline: siteInfo.tagline || "",
  description: siteInfo.longDescription || siteInfo.description || "",
};

const DEFAULT_CONTACT: ContactType =
  (contactContent as unknown as ContactType) || {};

const DEFAULT_TEXTS: Record<string, string> = {
  // Hero
  "hero.badge":
    (heroContent && (heroContent.badge as string)) || heroContent?.badge || "",
  "hero.titleGradient":
    (heroContent && (heroContent.titleGradient as string)) ||
    heroContent?.titleGradient ||
    "Events",
  "hero.subtitle":
    (heroContent && (heroContent.subtitle as string)) ||
    heroContent?.subtitle ||
    "",
  "hero.cta.primary":
    (heroContent && heroContent.cta && (heroContent.cta.primary as string)) ||
    heroContent?.cta?.primary ||
    "Book Your Event",
  "hero.cta.secondary":
    (heroContent && heroContent.cta && (heroContent.cta.secondary as string)) ||
    heroContent?.cta?.secondary ||
    "💬 Chat on WhatsApp",
  "hero.whatsappMessage":
    (heroContent && (heroContent.whatsappMessage as string)) ||
    heroContent?.whatsappMessage ||
    "",

  // About Us hero
  "about.h1_line1": "Creating Magical",
  "about.h1_highlight": "Moments",
  "about.h2_subtitle": "Your Dream Event, Our Expertise",
  "about.p":
    "We are passionate event planners dedicated to turning your vision into reality. With over a decade of experience in creating extraordinary celebrations, we specialize in weddings, corporate events, and special occasions that leave lasting impressions.",
  "about.cta": "Start Planning Your Event",
};

const DEFAULT_TESTIMONIALS: TestimonialItem[] = (
  (testimonialsContent && (testimonialsContent.items as unknown as TestimonialItem[])) || []
) as TestimonialItem[];

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      sections: DEFAULTS,
      site: DEFAULT_SITE,
      contact: DEFAULT_CONTACT,
      testimonials: DEFAULT_TESTIMONIALS,
      texts: DEFAULT_TEXTS,
      setSection: (key: string, payload: Partial<SectionContent>) =>
        set((state: AdminState) => ({
          sections: {
            ...state.sections,
            [key]: { ...(state.sections[key] ?? DEFAULTS[key]), ...payload },
          },
        })),
      setText: (key: string, value: string) =>
        set((state: AdminState) => ({
          texts: { ...state.texts, [key]: value },
        })),
      setSite: (
        payload: Partial<{
          name: string;
          tagline?: string;
          description?: string;
        }>
      ) =>
        set((state: AdminState) => ({ site: { ...state.site, ...payload } })),
      setContact: (payload: Partial<ContactType>) =>
        set((state: AdminState) => ({
          contact: { ...(state.contact || {}), ...payload },
        })),
      setTestimonials: (items: TestimonialItem[]) =>
        set(() => ({ testimonials: items })),
      addTestimonial: (item: TestimonialItem) =>
        set((state: AdminState) => ({ testimonials: [...(state.testimonials || []), item] })),
      updateTestimonial: (idx: number, payload: Partial<TestimonialItem>) =>
        set((state: AdminState) => ({
          testimonials: state.testimonials.map((t, i) => (i === idx ? { ...t, ...payload } : t)),
        })),
      removeTestimonial: (idx: number) =>
        set((state: AdminState) => ({ testimonials: state.testimonials.filter((_, i) => i !== idx) })),
      reset: () =>
        set({
          sections: DEFAULTS,
          site: DEFAULT_SITE,
          texts: DEFAULT_TEXTS,
          contact: DEFAULT_CONTACT,
          testimonials: DEFAULT_TESTIMONIALS,
        }),
    }),
    {
      name: "event-planner-admin-store", // localStorage key
    }
  )
);

export default useAdminStore;
