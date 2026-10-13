import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import Browse from "./pages/Browse";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerOverImage, setHeaderOverImage] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < previousScrollY.current - 3;
      const header = document.querySelector(".site-header");
      const hero = document.querySelector(".hero-section");
      const heroBounds = hero?.getBoundingClientRect();

      setHeaderVisible(currentScrollY < 60 || scrollingUp);
      setHeaderOverImage(Boolean(
        heroBounds && header && heroBounds.top < header.offsetHeight && heroBounds.bottom > 0,
      ));
      previousScrollY.current = currentScrollY;
    };

    updateHeaderVisibility();
    window.addEventListener("scroll", updateHeaderVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderVisibility);
  }, []);

  return (
    <div className="app-shell">
      <header className={`site-header ${isHomePage ? "site-header-home" : ""} ${headerVisible ? "site-header-visible" : "site-header-hidden"} ${headerOverImage ? "site-header-over-image" : ""}`}>
        <Link to="/" className="brand-name">
          Pixel Motors
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/browse">Browse</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
