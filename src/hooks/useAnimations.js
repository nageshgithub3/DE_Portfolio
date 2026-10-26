import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to add `.visible`
 * to any element with class `reveal`, `reveal-left`, `reveal-right`,
 * `reveal-scale`, or `stagger-children` inside the observed container.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * useTypewriter — types text into a ref element character-by-character.
 * @param {string} text - Text to type
 * @param {number} speed - ms per character
 * @param {number} startDelay - ms before typing begins
 */
export function useTypewriter(text, speed = 55, startDelay = 600) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = '';
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (!ref.current) { clearInterval(interval); return; }
        ref.current.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return ref;
}

/**
 * useCounter — animates a number from 0 to target when element enters view.
 */
export function useCounter(target, duration = 1500) {
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) {
        observed.current = true;
        const startTime = performance.now();
        const isFloat = String(target).includes('.');
        const animate = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * parseFloat(target);
          el.textContent = isFloat ? value.toFixed(2) : Math.floor(value).toString();
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target;
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
