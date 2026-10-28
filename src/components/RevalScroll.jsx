import { useEffect, useRef } from "react";

export const Revalscroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Never leave content hidden when motion is reduced or observers are unsupported.
    if (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      node.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="reveal">{children}</div>;
};
