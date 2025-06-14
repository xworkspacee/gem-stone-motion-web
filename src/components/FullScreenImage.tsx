
import React from 'react';

const FullScreenImage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          minWidth: '100%',
          minHeight: '100%',
        }}
        onLoadedData={(e) => {
          const video = e.currentTarget;
          video.play().catch(console.error);
        }}
      >
        {/* Updated video link for Premium Collection */}
        <source src="https://ik.imagekit.io/m90cfq7gx/0615(2).mp4?updatedAt=1750008566322" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end justify-end p-8 md:p-16 z-20">
        <div className="text-right text-white">
          <div className="bg-black/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-lg md:text-xl font-luxury tracking-wider">
              PREMIUM COLLECTION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreenImage;

