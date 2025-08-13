// ScrollAnimator.jsx
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("animate-in");
            el.classList.remove("animate-out");

            // If you only want the first reveal
            if (el.hasAttribute("data-animate-once")) io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const scan = () => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        if (el.dataset._observed) return;           // already wired
        el.classList.add("animate-out");            // initial hidden state
        // Optional: support data-direction="left|right|up|fade"
        const dir = el.getAttribute("data-direction");
        if (dir) el.classList.add(`slide-${dir}`);
        el.dataset._observed = "1";
        io.observe(el);
      });
    };

    // initial & dynamic content
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
