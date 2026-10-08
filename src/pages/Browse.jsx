
import React, { useMemo, useState } from "react";
import vehicles from "../data/vehicles";
import Filters from "../components/Filters";
import VehicleGrid from "../components/VehicleGrid";
import VehicleModal from "../components/VehicleModal";

function Browse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const manufacturers = useMemo(() => {
    return [...new Set(vehicles.map((vehicle) => vehicle.manufacturer))].sort();
  }, []);

  const models = useMemo(() => {
    return [...new Set(vehicles.map((vehicle) => vehicle.model))].sort();
  }, []);

  const types = useMemo(() => {
    return [...new Set(vehicles.map((vehicle) => vehicle.type))].sort();
  }, []);

  const years = useMemo(() => {
    return [...new Set(vehicles.map((vehicle) => vehicle.year))].sort(
      (a, b) => b - a
    );
  }, []);

  const filteredVehicles = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    const results = vehicles.filter((vehicle) => {
      const searchableText = [
        vehicle.manufacturer,
        vehicle.model,
        vehicle.type,
        vehicle.description,
        vehicle.shortDescription,
        vehicle.year.toString(),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        search === "" || searchableText.includes(search);

      const matchesManufacturer =
        manufacturer === "" || vehicle.manufacturer === manufacturer;

      const matchesModel =
        model === "" || vehicle.model === model;

      const matchesType =
        type === "" || vehicle.type === type;

      const matchesYear =
        year === "" || vehicle.year.toString() === year;

      return (
        matchesSearch &&
        matchesManufacturer &&
        matchesModel &&
        matchesType &&
        matchesYear
      );
    });

    return results.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.year - a.year;

        case "oldest":
          return a.year - b.year;

        case "type-az":
          return a.type.localeCompare(b.type);

        case "type-za":
          return b.type.localeCompare(a.type);

        case "manufacturer-az":
          return a.manufacturer.localeCompare(b.manufacturer);

        case "manufacturer-za":
          return b.manufacturer.localeCompare(a.manufacturer);

        default:
          return 0;
      }
    });
  }, [
    searchTerm,
    manufacturer,
    model,
    type,
    year,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchTerm("");
    setManufacturer("");
    setModel("");
    setType("");
    setYear("");
    setSortBy("newest");
  };

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeVehicleModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <main className="browse-page">
      <section className="browse-header">
        <div>
          <p className="browse-eyebrow">OUR COLLECTION</p>

          <h1>Browse Vehicles</h1>

          <p>
            Explore our collection of premium vehicles and find
            the right car for you.
          </p>
        </div>
      </section>

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        model={model}
        setModel={setModel}
        type={type}
        setType={setType}
        year={year}
        setYear={setYear}
        sortBy={sortBy}
        setSortBy={setSortBy}
        manufacturers={manufacturers}
        models={models}
        types={types}
        years={years}
        onReset={resetFilters}
      />

      <section className="browse-results">
        <div className="results-header">
          <h2>Available Vehicles</h2>

          <span>
            {filteredVehicles.length}{" "}
            {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
          </span>
        </div>

        <VehicleGrid
          vehicles={filteredVehicles}
          onVehicleClick={handleVehicleClick}
        />
      </section>

      <VehicleModal vehicle={selectedVehicle} onClose={closeVehicleModal} />
    </main>
  );
}

export default Browse;

