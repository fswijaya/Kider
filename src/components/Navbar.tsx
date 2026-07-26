'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pagesRoutes = ['/facility', '/team', '/call-to-action', '/appointment', '/testimonial'];
  const isPagesActive = pagesRoutes.some((r) => pathname.startsWith(r));

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0${isScrolled ? ' shadow-sm' : ''}`}
      style={{ top: isScrolled ? '0px' : '-100px', transition: '.5s' }}
    >
      <Link href="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <i className="fa fa-book-reader me-3"></i>Kider
        </h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${navOpen ? '' : 'collapse '}navbar-collapse`} id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link href="/" className={`nav-item nav-link${pathname === '/' ? ' active' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-item nav-link${pathname === '/about' ? ' active' : ''}`}>
            About Us
          </Link>
          <Link href="/classes" className={`nav-item nav-link${pathname === '/classes' ? ' active' : ''}`}>
            Classes
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className={`nav-link dropdown-toggle${isPagesActive ? ' active' : ''}`}
              role="button"
            >
              Pages
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link href="/facility" className={`dropdown-item${pathname === '/facility' ? ' active' : ''}`}>
                School Facilities
              </Link>
              <Link href="/team" className={`dropdown-item${pathname === '/team' ? ' active' : ''}`}>
                Popular Teachers
              </Link>
              <Link href="/call-to-action" className={`dropdown-item${pathname === '/call-to-action' ? ' active' : ''}`}>
                Become A Teachers
              </Link>
              <Link href="/appointment" className={`dropdown-item${pathname === '/appointment' ? ' active' : ''}`}>
                Make Appointment
              </Link>
              <Link href="/testimonial" className={`dropdown-item${pathname === '/testimonial' ? ' active' : ''}`}>
                Testimonial
              </Link>
              <Link href="/not-found-example" className="dropdown-item">
                404 Error
              </Link>
            </div>
          </div>
          <Link href="/contact" className={`nav-item nav-link${pathname === '/contact' ? ' active' : ''}`}>
            Contact Us
          </Link>
        </div>
        <Link href="#" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Join Us<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
}
