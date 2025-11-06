"use client";

import { useState } from "react";
import useSWR from "swr";
import { Card } from "@/components/shared/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/shared/ui/dialog";
import { Button } from "@/components/shared/ui/button";
import { gaps, typography } from "@/constants";
import { X, Download, Share2, ZoomIn } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    index: number;
  } | null>(null);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage({ src: image, index });
  };

  const handleDownload = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `gallery-image-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  const handleShare = async (imageUrl: string, index: number) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Gallery Image ${index + 1}`,
          text: "Check out this amazing event photo!",
          url: imageUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(imageUrl);
        // You could add a toast notification here
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    }
  };

  return (
    <div>
      <h2 className={`${typography.heading.h2} mb-6 text-white drop-shadow-lg`}>
        Gallery
      </h2>
      <div
        className={`grid ${gaps.responsive.lg} grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {images.map((image, i) => (
          <Dialog key={`instagram-${i}`}>
            <DialogTrigger asChild>
              <Card
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border border-border hover:border-primary/50 group cursor-pointer"
                onClick={() => handleImageClick(image, i)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery image ${i + 1}`}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        ✨ Event Gallery
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent
              className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-md border border-border/50"
              showCloseButton={false}
            >
              <div className="relative w-full h-full flex flex-col">
                {/* Header with close and actions */}
                <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent">
                  <div className="flex items-center gap-2">
                    <span className="text-white/90 text-sm font-medium">
                      Gallery Image {i + 1} of {images.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-white hover:bg-white/20 hover:text-white"
                      onClick={() => handleDownload(image, i)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-white hover:bg-white/20 hover:text-white"
                      onClick={() => handleShare(image, i)}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="text-white hover:bg-white/20 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </DialogClose>
                  </div>
                </div>

                {/* Image container */}
                <div className="flex-1 flex items-center justify-center p-4">
                  <div className="relative max-w-full max-h-full">
                    <img
                      src={image}
                      alt={`Gallery image ${i + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Footer with image info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="text-center">
                    <p className="text-white/90 text-sm">
                      ✨ Event Gallery - Capturing memorable moments
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
