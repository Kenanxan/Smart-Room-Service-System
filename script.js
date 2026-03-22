const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".panel"));

function activateTab(target) {
  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.target === target);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === target);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.target));
});

const counters = Array.from(document.querySelectorAll("[data-counter]"));

function animateCounter(node) {
  const rawTarget = Number(node.dataset.counter);
  const isDecimal = !Number.isInteger(rawTarget);
  const duration = 1000;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = rawTarget * progress;
    node.textContent = isDecimal
      ? value.toFixed(1)
      : Math.round(value).toLocaleString("en-US");

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else if (!isDecimal) {
      node.textContent = rawTarget.toLocaleString("en-US");
    }
  }

  requestAnimationFrame(tick);
}

const adminPanel = document.querySelector('[data-panel="admin"]');
const adminObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      counters.forEach(animateCounter);
      observer.disconnect();
    });
  },
  { threshold: 0.5 }
);

if (adminPanel) {
  adminObserver.observe(adminPanel);
}
