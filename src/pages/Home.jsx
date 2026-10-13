import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
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

function CarModelScene() {
  const { scene } = useGLTF("/models/nissan-r34/scene.gltf");

  return (
    <div className="car-model-scene" role="img" aria-label="Interactive 3D model of a Nissan Skyline GT-R R34">
      <Canvas camera={{ position: [4, 2.5, 6], fov: 38 }}>
        <color attach="background" args={["#eaf3fc"]} />
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} />
        <directionalLight position={[-4, 3, -3]} intensity={1.6} color="#6ca8e8" />

        <Bounds fit clip observe margin={0.62}>
          <primitive object={scene} />
        </Bounds>

        <ContactShadows position={[0, -0.8, 0]} opacity={0.48} scale={8} blur={2.4} far={5} />
        <OrbitControls makeDefault enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} maxPolarAngle={Math.PI / 2.05} minPolarAngle={Math.PI / 2.8} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

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
            <a href="#3d-model" className="primary-button">
              View 3D Model
            </a>
            <a href="#top-cars" className="secondary-button">
              View Top Cars
            </a>
          </div>

        </div>
      </section>

      <section id="3d-model" className="model-showcase">
        <div className="model-visual">
          <CarModelScene />
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

useGLTF.preload("/models/nissan-r34/scene.gltf");
