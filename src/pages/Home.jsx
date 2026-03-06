import React, { useEffect, useRef, useState } from 'react';
import LayoutHeaderNav from '../components/LayoutHeaderNav.jsx';
import HomeSection from '../components/HomeSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ExperienceTabs from '../components/ExperienceTabs.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';

const SCROLL_DURATION = 500;

function easeSwing(progress) {
  return 0.5 - Math.cos(Math.PI * progress) / 2;
}

function smoothScrollTo(targetY, duration) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  function step(timestamp) {
    if (startTime === null) {
      startTime = timestamp;
    }
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeSwing(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function scrollToHash(hash) {
  if (!hash || hash === '#') {
    return;
  }
  const target = document.querySelector(hash);
  if (!target) {
    return;
  }
  const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
  smoothScrollTo(targetTop, SCROLL_DURATION);
}

export default function HomePage() {
  const indexRef = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    function handleClick(event) {
      if (event.defaultPrevented) {
        return;
      }
      if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
        return;
      }
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) {
        return;
      }
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        return;
      }
      const hash = anchor.hash || href;
      if (!hash || hash === '#') {
        return;
      }
      const target = document.querySelector(hash);
      if (!target) {
        return;
      }
      event.preventDefault();
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(targetTop, SCROLL_DURATION);
      if (window.location.hash !== hash) {
        history.pushState(null, '', hash);
      }
    }

    function handlePopState() {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
        return;
      }
      smoothScrollTo(0, SCROLL_DURATION);
    }

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handlePopState);

    if (window.location.hash) {
      window.setTimeout(() => {
        scrollToHash(window.location.hash);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    function updateNavbar() {
      const indexSection = indexRef.current;
      if (!indexSection) {
        return;
      }
      const rect = indexSection.getBoundingClientRect();
      const mainSectionBottom = rect.bottom + window.pageYOffset;
      setIsNavbarVisible(window.pageYOffset >= mainSectionBottom - 20);
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar);

    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, []);

  return (
    <>
      <LayoutHeaderNav isVisible={isNavbarVisible} />
      <HomeSection ref={indexRef} />
      <AboutSection />
      <ExperienceTabs />
      <ProjectsSection />
    </>
  );
}
