
import React from "react";

const gemstoneSections = [
  {
    title: "PREMIUM GEMSTONES",
    image: "/lovable-uploads/97e23d7c-8420-4d9d-a0e9-4aee90f83a5f.png", // Updated to image 1
    link: "/collections/premium",
  },
  {
    title: "EXCLUSIVE RUBY COLLECTION",
    image: "/lovable-uploads/999f3a98-fe4e-452b-8cb1-d2139e8fd191.png", // Added image 2
    link: "/collections/exclusive-ruby",
  },
  {
    title: "SEMI-PRECIOUS GEMSTONES",
    image: "/lovable-uploads/ca4b5800-93d9-48a4-980a-def0e5479bee.png", // Existing demo image
    link: "/collections/semi-precious",
  },
  {
    title: "PRECIOUS GEMSTONES",
    image: "/lovable-uploads/ca4b5800-93d9-48a4-980a-def0e5479bee.png", // Existing demo image
    link: "/collections/precious",
  },
];

const GemstoneShowcaseRow = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

