
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
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-luxury font-bold text-luxury-black mb-10 text-center tracking-wide">
        <span className="relative">
          <span className="text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-400 bg-clip-text text-transparent">Watch Our Gemstone Stories</span>
          <span className="block w-24 h-1 mx-auto mt-2 rounded bg-gradient-to-r from-yellow-400 to-red-400"></span>
        </span>
      </h2>
      <div className="grid gap-10 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-2xl overflow-hidden bg-luxury-cream relative flex flex-col items-center p-0 border-2 border-yellow-200 hover-scale"
            style={{ minHeight: 370, transition: 'transform 0.2s' }}
          >
            <video
              controls
              poster={video.poster}
              className="w-full object-cover aspect-video bg-black "
              preload="metadata"
              style={{ height: 270, borderRadius: "0.75rem", marginTop: 6 }}
            >
              <source src={video.src} type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
            <div className="px-4 py-4 text-center w-full">
              <span className="text-base font-semibold text-luxury-black block">{video.title}</span>
            </div>
            <div className="absolute top-3 left-3 bg-yellow-300 rounded-full px-3 py-1 text-xs font-bold text-luxury-black shadow">NEW</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GemstoneVideoGrid;
