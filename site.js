// site.js — shared behaviors
(function () {
  // 1) Reveal animations on scroll
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
  }

  // 2) Footer year
  const yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
