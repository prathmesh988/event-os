"use client";

import useSWR from "swr";
import { Card } from "@/components/shared/ui/card";
import { gaps, typography } from "@/constants";

type Post = {
  id: string;
  image: string;
  caption: string;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function InstagramFeed() {
  const { data } = useSWR<{ posts: Post[] }>("/api/instagram", fetcher);

  return (
    <div>
      <h2 className={`${typography.heading.h2} mb-6 text-white drop-shadow-lg`}>
        Gallery
      </h2>
      <div
        className={`grid ${gaps.responsive.lg} grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {(
          data?.posts ??
          Array.from({ length: 8 }).map((_, i) => ({
            id: `skeleton-${i}`,
            image: `/placeholder.svg?height=500&width=500&query=event%20highlight%20${
              i + 1
            }`,
            caption: "Loading...",
          }))
        ).map((p) => (
          <Card
            key={p.id}
            className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm bg-white/10"
          >
            <img
              src={p.image || "/placeholder.svg"}
              alt={p.caption}
              className="h-full w-full object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
