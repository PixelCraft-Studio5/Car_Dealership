import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import vehicles from "../data/vehicles";

const featureReasons = [
  {
    title: "Curated stock",
    description: "Every model is handpicked for quality, value and driving experience.",
  },
  {
    title: "Trusted service",
    description: "Our specialists guide you from first test drive through final delivery.",
  },
  {
    title: "Flexible finance",
    description: "Personalised options to help you drive away with confidence and peace of mind.",
  },
];

function Home() {
  const heroCopyRef = useRef(null);
  const spotlightVehicle = vehicles[0];
  const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured).slice(0, 3);
  const topCars = vehicles.filter((vehicle) => vehicle.topCar).slice(0, 3);

  useEffect(() => {
    const updateHeroOpacity = () => {
      if (!heroCopyRef.current) return;

      const fadeDistance = 360;
      const opacity = Math.max(0, 1 - window.scrollY / fadeDistance);
      heroCopyRef.current.style.setProperty("--scroll-opacity", opacity);
    };

    updateHeroOpacity();
    window.addEventListener("scroll", updateHeroOpacity, { passive: true });
    return () => window.removeEventListener("scroll", updateHeroOpacity);
  }, []);

  return (
    <div className="home-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 12, 15, 0.66) 0%, rgba(10, 12, 15, 0.58) 50%, rgba(10, 12, 15, 0.5) 100%), url(${spotlightVehicle.images[0]})`,
        }}
      >
        <div className="hero-copy" ref={heroCopyRef}>
          <p className="eyebrow">DRIVE THE DIFFERENCE</p>
          <h1>Luxury performance for every journey.</h1>
          <p>
            Discover premium vehicles built for comfort, power and everyday confidence.
            From executive sedans to performance coupes, Pixel Motors brings together style and substance.
          </p>

          <div className="hero-actions">
            <a href="#top-cars" className="primary-button">
              Explore top cars
            </a>
            <a href="#top-cars" className="secondary-button">
              View Top Cars
            </a>
          </div>

        </div>
      </section>

      <section className="feature-strip" aria-label="Why choose us">
        {featureReasons.map((reason) => (
          <article key={reason.title} className="feature-card">
            <span className="feature-number">0{featureReasons.indexOf(reason) + 1}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED</p>
            <h2>Handpicked favourites</h2>
          </div>
          <Link to="/browse" className="view-all-link">View All</Link>
        </div>

        <div className="home-grid">
          {featuredVehicles.map((vehicle) => (
            <article key={vehicle.id} className="mini-vehicle-card">
              <div className="mini-image-wrap">
                <img src={vehicle.images[0]} alt={`${vehicle.manufacturer} ${vehicle.model}`} />
              </div>
              <div className="mini-card-body">
                <span className="vehicle-type-pill">{vehicle.type}</span>
                <h3>
                  {vehicle.manufacturer} {vehicle.model}
                </h3>
                <p className="mini-price">R {vehicle.price.toLocaleString("en-ZA")}</p>
                <p>{vehicle.shortDescription}</p>
                <Link to="/browse">See details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="top-cars" className="home-section alt-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOP PICKS</p>
            <h2>Performance that turns heads</h2>
          </div>
          <Link to="/browse">Discover more</Link>
        </div>

        <div className="home-grid">
          {topCars.map((vehicle) => (
            <article key={vehicle.id} className="mini-vehicle-card">
              <div className="mini-image-wrap">
                <img src={vehicle.images[0]} alt={`${vehicle.manufacturer} ${vehicle.model}`} />
              </div>
              <div className="mini-card-body">
                <span className="vehicle-type-pill">{vehicle.type}</span>
                <h3>
                  {vehicle.manufacturer} {vehicle.model}
                </h3>
                <p className="mini-price">R {vehicle.price.toLocaleString("en-ZA")}</p>
                <p>{vehicle.shortDescription}</p>
                <Link to="/browse">View collection</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div>
          <p className="eyebrow">READY TO DRIVE?</p>
          <h2>Let our team match you with the right vehicle.</h2>
        </div>
        <Link to="/contact" className="primary-button">
          Speak to a specialist
        </Link>
      </section>
    </div>
  );
}

export default Home;

