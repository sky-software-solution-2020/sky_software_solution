import { useState, useEffect, useRef } from "react";

const ImageCarousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const totalItems = images.length;

  const scrollNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };


  useEffect(() => {
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let cref = carouselRef.current
    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      

      if (currentIndex >= totalItems) {
        setCurrentIndex(0);
        if (cref) {
          cref.style.transition = "none";
          cref.style.transform = `translateX(0)`;
        }
      } else if (currentIndex < 0) {
        setCurrentIndex(totalItems - 1);
        if (cref) {
          cref.style.transition = "none";
          cref.style.transform = `translateX(-${
            (totalItems - 1) * 100
          }%)`;
        }
      }
    };

    if (cref) {
      cref.addEventListener(
        "transitionend",
        handleTransitionEnd
      );
    }

    return () => {
      if (cref) {
        cref.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [currentIndex, totalItems]);

  useEffect(() => {

    let cref = carouselRef.current

    if (cref) {
      cref.style.transition = "transform 0.5s ease-in-out";
      cref.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative h-auto mx-auto overflow-hidden">
      <div ref={carouselRef} className="flex">
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={image.src}
              alt={`Carousel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      

      <div className="h-full w-full bg-linear-to-b from-[#2367FD] to-transparent  absolute top-0">

      </div>
    </div>
  );
};

export default ImageCarousel;