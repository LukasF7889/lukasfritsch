import { useEffect, useRef } from "react";

const TimelineEntry = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    //create observer so we know when object comes into the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el); //remove observer from item when animation plays
        }
      },
      { threshold: 0.5 } //threshold of 10%
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700"
    >
      {children}
    </div>
  );
};

export default TimelineEntry;
