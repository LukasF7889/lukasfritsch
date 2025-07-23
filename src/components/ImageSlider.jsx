import { useRef } from "react";
import { useEffect } from "react";

const ImageSlider = ({ img }) => {
  const scrollContainer = useRef();

  if (!img) return;
  if (!Array.isArray(img)) {
    return <img src={img} alt={`teaser`} className="rounded-md" />;
  }

  const scroll = (direction) => {
    const container = scrollContainer.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    // Container
    <div className="relative w-full">
      {/* Scroll Buttons on Desktop */}
      <button
        onClick={() => scroll("left")}
        className="slider-btn left-0 -translate-x-1.5"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="slider-btn right-0 translate-x-1.5"
      >
        →
      </button>
      <div
        ref={scrollContainer}
        className="flex gap-2 overflow-x-scroll no-scrollbar"
      >
        <div className="h-full w-[10vw] bg-white"></div>
        {img.map((e, index) => (
          <img key={index} src={e} className="h-[250px] w-auto rounded-md" />
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
