"use client";

import useSWR from "swr";
import { Card } from "@/components/shared/ui/card";
import { gaps, typography } from "@/constants";

type Post = {
  id: string;
  image: string;
  caption: string;
};

const images = [
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWD2jxdDYJJkUnOzeHPjySxmFT0sd8EMg9lwG7V",
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWDkpXitmdEj3HgwncOliKh1sDV2JWZAa8uFkCT",
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWDsQJm7UF96WFZO3NQfnUxGHdgVsuq2tryoTS1",
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWDeAURzab3dMW8Y0ceAanhZqOUbJLpI1jFBrst",
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWDpkshL5GBhWiX4rbgPzq5nku3JZHm1N9aICAG",
  "https://9dbd9mgshc.ufs.sh/f/KPdKK12JdNWDEXlgQDro1avJ4l6Wmr3cp5xF2sBTURtHSuiP",
];

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
        {images.map((image, i) => (
          <Card
            key={`instagram-${i}`}
            className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm bg-white/10"
          >
            <img
              src={image}
              alt={`Instagram post ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
