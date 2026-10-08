import React from "react";
import VehicleCard from "./VehicleCard";

function VehicleGrid({ vehicles, onVehicleClick }) {
  if (vehicles.length === 0) {
    return (
      <div className="no-results">
        <h3>No vehicles found</h3>
        <p>Try changing your search or filter options.</p>
      </div>
    );
  }

  return (
    <div className="vehicle-grid">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onClick={onVehicleClick}
        />
      ))}
    </div>
  );
}

export default VehicleGrid;