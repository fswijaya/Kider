'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      style={{ display: visible ? 'flex' : 'none' }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
