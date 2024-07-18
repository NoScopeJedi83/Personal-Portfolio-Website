import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div ref={imageRef} className="relative w-full h-full">
      {loaded && <Image src={src} layout="fill" objectFit="cover" alt={alt} {...props} />}
    </div>
  );
};

export default LazyImage;
