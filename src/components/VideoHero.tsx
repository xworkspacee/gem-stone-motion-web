
import React from 'react';

const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Cover Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://ik.imagekit.io/cn0lbrbin/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4?updatedAt=1749900056126" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoHero;
