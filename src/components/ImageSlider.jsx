import { useRef } from "react";

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
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-black px-2 py-1 rounded-l"
      >
        ←
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-black px-2 py-1 rounded-r"
      >
        →
      </button>
      <div
        ref={scrollContainer}
        className="flex gap-2 overflow-x-scroll no-scrollbar"
      >
        {img.map((e, index) => (
          <img key={index} src={e} />
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
