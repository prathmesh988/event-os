"use client";

import React from "react";
import { useAdminStore } from "@/store/admin-store";
import { components } from "@/constants";
import { Button } from "@/components/shared/ui/button";

export default function AdminPage() {
  const sections = useAdminStore((s) => s.sections);
  const setSection = useAdminStore((s) => s.setSection);
  const site = useAdminStore((s) => s.site);
  const setSite = useAdminStore((s) => s.setSite);
  const texts = useAdminStore((s) => s.texts);
  const setText = useAdminStore((s) => s.setText);
  const contact = useAdminStore((s) => s.contact);
  const setContact = useAdminStore((s) => s.setContact);
  const testimonials = useAdminStore((s) => s.testimonials);
  const setTestimonials = useAdminStore((s) => s.setTestimonials);
  const addTestimonial = useAdminStore((s) => s.addTestimonial);
  const updateTestimonial = useAdminStore((s) => s.updateTestimonial);
  const removeTestimonial = useAdminStore((s) => s.removeTestimonial);
  const reset = useAdminStore((s) => s.reset);

  const handleChange = (
    key: string,
    field: "title" | "description",
    value: string
  ) => {
    setSection(key, { [field]: value } as any);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div
        className={`max-w-4xl mx-auto ${components.sectionHeader.container}`}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Admin — Page Content Editor
        </h1>
        <p className={components.sectionHeader.description}>
          Edit section titles and descriptions below. Changes are persisted to
          localStorage and will reflect on the main page.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 space-y-6">
        <section className="bg-card/95 backdrop-blur-md border border-border/80 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <strong>Site Settings</strong>
          </div>

          <label className="block mb-2 text-sm text-muted-foreground">
            Site Name
          </label>
          <input
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
            value={site.name}
            onChange={(e) => setSite({ name: e.target.value })}
          />

          <label className="block mt-3 mb-2 text-sm text-muted-foreground">
            Tagline
          </label>
          <input
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
            value={site.tagline || ""}
            onChange={(e) => setSite({ tagline: e.target.value })}
          />

          <label className="block mt-3 mb-2 text-sm text-muted-foreground">
            Description
          </label>
          <textarea
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground min-h-[80px]"
            value={site.description || ""}
            onChange={(e) => setSite({ description: e.target.value })}
          />
        </section>

        <section className="bg-card/95 backdrop-blur-md border border-border/80 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <strong>Testimonials</strong>
            <Button
              onClick={() =>
                addTestimonial({
                  quote: "",
                  author: "",
                  location: "",
                  rating: 5,
                  event: "",
                })
              }
            >
              Add Testimonial
            </Button>
          </div>

          <div className="space-y-4">
            {(testimonials || []).map((t, idx) => (
              <div
                key={idx}
                className="p-3 border border-border rounded-md bg-transparent"
              >
                <label className="block mb-2 text-xs text-muted-foreground">
                  Quote
                </label>
                <textarea
                  className="w-full p-2 rounded-md border border-border bg-transparent text-foreground min-h-[80px]"
                  value={t.quote}
                  onChange={(e) =>
                    updateTestimonial(idx, { quote: e.target.value })
                  }
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div>
                    <label className="block mb-2 text-xs text-muted-foreground">
                      Author
                    </label>
                    <input
                      className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                      value={t.author}
                      onChange={(e) =>
                        updateTestimonial(idx, { author: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs text-muted-foreground">
                      Location
                    </label>
                    <input
                      className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                      value={t.location || ""}
                      onChange={(e) =>
                        updateTestimonial(idx, { location: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs text-muted-foreground">
                      Rating
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={5}
                      className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                      value={t.rating ?? 5}
                      onChange={(e) =>
                        updateTestimonial(idx, {
                          rating: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <label className="block mb-2 text-xs text-muted-foreground mt-3">
                  Event Label
                </label>
                <input
                  className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                  value={t.event || ""}
                  onChange={(e) =>
                    updateTestimonial(idx, { event: e.target.value })
                  }
                />

                <div className="flex justify-end mt-3">
                  <Button
                    variant="destructive"
                    onClick={() => removeTestimonial(idx)}
                    className="text-destructive-foreground"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-card/95 backdrop-blur-md border border-border/80 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <strong>Contact Settings</strong>
          </div>

          <label className="block mb-2 text-sm text-muted-foreground">
            Address
          </label>
          <textarea
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground min-h-[60px]"
            value={contact?.info?.address?.value || ""}
            onChange={(e) =>
              setContact({
                info: {
                  ...(contact?.info || {}),
                  address: {
                    ...(contact?.info?.address || {}),
                    value: e.target.value,
                  },
                },
              })
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                Phone (display)
              </label>
              <input
                className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                value={contact?.info?.phone?.value || ""}
                onChange={(e) =>
                  setContact({
                    info: {
                      ...(contact?.info || {}),
                      phone: {
                        ...(contact?.info?.phone || {}),
                        value: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                Phone (href)
              </label>
              <input
                className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                value={contact?.info?.phone?.href || ""}
                onChange={(e) =>
                  setContact({
                    info: {
                      ...(contact?.info || {}),
                      phone: {
                        ...(contact?.info?.phone || {}),
                        href: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                Email (display)
              </label>
              <input
                className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                value={contact?.info?.email?.value || ""}
                onChange={(e) =>
                  setContact({
                    info: {
                      ...(contact?.info || {}),
                      email: {
                        ...(contact?.info?.email || {}),
                        value: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                Email (href)
              </label>
              <input
                className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                value={contact?.info?.email?.href || ""}
                onChange={(e) =>
                  setContact({
                    info: {
                      ...(contact?.info || {}),
                      email: {
                        ...(contact?.info?.email || {}),
                        href: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
          </div>

          <label className="block mt-3 mb-2 text-sm text-muted-foreground">
            Business Hours
          </label>
          <input
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
            value={contact?.info?.hours?.value || ""}
            onChange={(e) =>
              setContact({
                info: {
                  ...(contact?.info || {}),
                  hours: {
                    ...(contact?.info?.hours || {}),
                    value: e.target.value,
                  },
                },
              })
            }
          />

          <label className="block mt-3 mb-2 text-sm text-muted-foreground">
            WhatsApp Message (CTA)
          </label>
          <input
            className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
            value={contact?.cta?.whatsappMessage || ""}
            onChange={(e) =>
              setContact({
                cta: {
                  ...(contact?.cta || {}),
                  whatsappMessage: e.target.value,
                },
              })
            }
          />
        </section>
        {Object.keys(sections).map((key) => (
          <section
            key={key}
            className="bg-card/95 backdrop-blur-md border border-border/80 p-4 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <strong className="capitalize">{key}</strong>
            </div>

            <label className="block mb-2 text-sm text-muted-foreground">
              Title
            </label>
            <input
              className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
              value={sections[key].title}
              onChange={(e) => handleChange(key, "title", e.target.value)}
            />

            <label className="block mt-3 mb-2 text-sm text-muted-foreground">
              Description
            </label>
            <textarea
              className="w-full p-2 rounded-md border border-border bg-transparent text-foreground min-h-[80px]"
              value={sections[key].description}
              onChange={(e) => handleChange(key, "description", e.target.value)}
            />
          </section>
        ))}

        <section className="bg-card/95 backdrop-blur-md border border-border/80 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <strong>Editable Texts</strong>
          </div>

          <div className="space-y-4">
            {Object.entries(texts).map(([key, value]) => (
              <div key={key} className="">
                <label className="block mb-2 text-xs text-muted-foreground">
                  {key}
                </label>
                {value && value.length > 120 ? (
                  <textarea
                    className="w-full p-2 rounded-md border border-border bg-transparent text-foreground min-h-[80px]"
                    value={value}
                    onChange={(e) => setText(key, e.target.value)}
                  />
                ) : (
                  <input
                    className="w-full p-2 rounded-md border border-border bg-transparent text-foreground"
                    value={value}
                    onChange={(e) => setText(key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-3">
          <Button
            onClick={() => reset()}
            className="bg-destructive text-destructive-foreground"
          >
            Reset Defaults
          </Button>
          <Button asChild>
            <a href="/">View Site</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
