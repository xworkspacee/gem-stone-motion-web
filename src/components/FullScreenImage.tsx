
import React from 'react';

const FullScreenImage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ae4cd20a-866b-442f-a7d3-5519f3ba5bf3.png')`
        }}
      >
        {/* Subtle overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Optional content overlay - can be customized */}
      <div className="absolute inset-0 flex items-end justify-end p-8 md:p-16">
        <div className="text-right text-white">
          <div className="bg-black/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-lg md:text-xl font-luxury tracking-wider">
              DROP ALERT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreenImage;
