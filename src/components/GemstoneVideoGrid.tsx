
import React from "react";

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "About Emerald",
    poster: "/lovable-uploads/65bf9dca-98e5-4c5f-9443-ca563ef405ba.png",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Ruby Formation",
    poster: "/lovable-uploads/c4afd5c3-8b2c-420c-9382-7b1a9a77cdd2.png",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Blue Sapphire Science",
    poster: "/lovable-uploads/c0134365-141e-44ba-93b3-e7d8caa2d406.png",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Gemstone Quality",
    poster: "/lovable-uploads/4f6f77aa-20ca-4f8f-b6c8-61edfc9964aa.png",
  },
];

const GemstoneVideoGrid = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-8 text-center">
        Watch Our Gemstone Stories
      </h2>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-xl overflow-hidden bg-luxury-cream flex flex-col items-center p-0"
          >
            <video
              controls
              poster={video.poster}
              className="w-full object-cover aspect-video bg-black"
              preload="metadata"
              style={{ height: 190 }}
            >
              <source src={video.src} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <div className="px-3 py-2 text-center">
              <span className="text-base font-medium text-luxury-black">{video.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GemstoneVideoGrid;
