import React from "react";

function formatPrice(value) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

function VehicleCard({ vehicle, onClick }) {
  return (
    <article className="vehicle-card" onClick={() => onClick(vehicle)}>
      <div className="vehicle-image-container">
        <img
          src={vehicle.images[0]}
          alt={`${vehicle.manufacturer} ${vehicle.model}`}
          className="vehicle-image"
        />
      </div>

      <div className="vehicle-card-content">
        <span className="vehicle-type">{vehicle.type}</span>

        <h3>
          {vehicle.manufacturer} {vehicle.model}
        </h3>

        <p className="vehicle-year">{vehicle.year}</p>

        <p className="vehicle-price">{formatPrice(vehicle.price)}</p>

        <p className="vehicle-description">
          {vehicle.shortDescription}
        </p>

        <button
          type="button"
          className="view-details-button"
          onClick={(event) => {
            event.stopPropagation();
            onClick(vehicle);
          }}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export default VehicleCard;