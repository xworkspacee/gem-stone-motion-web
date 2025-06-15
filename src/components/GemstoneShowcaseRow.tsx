
import React from "react";

const gemstoneSections = [
  {
    title: "PREMIUM GEMSTONES",
    image: "/lovable-uploads/ca4b5800-93d9-48a4-980a-def0e5479bee.png", // Use uploaded image for demo
    link: "/collections/premium",
  },
  {
    title: "SEMI-PRECIOUS GEMSTONES",
    image: "/lovable-uploads/ca4b5800-93d9-48a4-980a-def0e5479bee.png", // Use uploaded image for demo
    link: "/collections/semi-precious",
  },
  {
    title: "PRECIOUS GEMSTONES",
    image: "/lovable-uploads/ca4b5800-93d9-48a4-980a-def0e5479bee.png", // Use uploaded image for demo
    link: "/collections/precious",
  },
];

const GemstoneShowcaseRow = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gemstoneSections.map((section, idx) => (
            <div
              key={section.title}
              className="rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center px-2 pb-6"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full object-cover aspect-[4/5] md:aspect-[3/4] animate-fade-in"
                style={{ minHeight: 300, maxHeight: 390, objectFit: "cover" }}
              />
              <h3 className="mt-5 text-xl md:text-2xl font-luxury font-bold text-luxury-black tracking-wide">
                {section.title}
              </h3>
              {/* Optional: Link Button */}
              <a
                href={section.link}
                className="mt-3 inline-block bg-yellow-300 text-black font-medium rounded-md px-4 py-2 shadow hover:bg-yellow-400 transition animate-fade-in"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GemstoneShowcaseRow;
