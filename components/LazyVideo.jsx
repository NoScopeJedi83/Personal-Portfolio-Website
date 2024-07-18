import React, { useState, useRef, useEffect } from 'react';

const LazyVideo = ({ src, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100"
      src={loaded ? src : ''}
      autoPlay={loaded}
      muted
      loop
      {...props}
    />
  );
};

export default LazyVideo;
