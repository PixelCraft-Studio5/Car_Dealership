import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function formatPrice(value) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

function VehicleModal({ vehicle, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!vehicle) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) {
    return null;
  }

  const handleEnquire = () => {
    navigate("/contact", { state: { vehicle } });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="vehicle-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="vehicle-modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close vehicle details"
        >
          ×
        </button>

        <div className="modal-media">
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.manufacturer} ${vehicle.model}`}
            className="modal-image"
          />

          {vehicle.images.length > 1 ? (
            <div className="modal-gallery">
              {vehicle.images.slice(1).map((image, index) => (
                <img
                  key={`${vehicle.id}-image-${index}`}
                  src={image}
                  alt={`${vehicle.manufacturer} ${vehicle.model} view ${index + 2}`}
                  className="modal-gallery-image"
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="modal-content">
          <div className="modal-header-row">
            <span className="vehicle-type">{vehicle.type}</span>
            <span className="vehicle-year">{vehicle.year}</span>
          </div>

          <h2 id="vehicle-modal-title">
            {vehicle.manufacturer} {vehicle.model}
          </h2>

          <p className="vehicle-price modal-price">{formatPrice(vehicle.price)}</p>

          <p className="modal-description">{vehicle.description}</p>

          <div className="spec-grid">
            <div className="spec-item">
              <span>Manufacturer</span>
              <strong>{vehicle.manufacturer}</strong>
            </div>
            <div className="spec-item">
              <span>Model</span>
              <strong>{vehicle.model}</strong>
            </div>
            <div className="spec-item">
              <span>Year</span>
              <strong>{vehicle.year}</strong>
            </div>
            <div className="spec-item">
              <span>Type</span>
              <strong>{vehicle.type}</strong>
            </div>
            <div className="spec-item">
              <span>Price</span>
              <strong>{formatPrice(vehicle.price)}</strong>
            </div>
            {vehicle.specifications && (
              <>
                <div className="spec-item">
                  <span>Engine</span>
                  <strong>{vehicle.specifications.engine}</strong>
                </div>
                <div className="spec-item">
                  <span>Transmission</span>
                  <strong>{vehicle.specifications.transmission}</strong>
                </div>
                <div className="spec-item">
                  <span>Mileage</span>
                  <strong>{vehicle.specifications.mileage}</strong>
                </div>
                <div className="spec-item">
                  <span>Fuel</span>
                  <strong>{vehicle.specifications.fuel}</strong>
                </div>
              </>
            )}
          </div>

          {vehicle.colours && vehicle.colours.length > 0 ? (
            <div className="colour-block">
              <span className="colour-label">Available colours</span>
              <div className="colour-list">
                {vehicle.colours.map((colour) => (
                  <span key={`${vehicle.id}-${colour}`} className="colour-pill">
                    {colour}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="modal-actions">
            <button type="button" className="modal-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="view-details-button" onClick={handleEnquire}>
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleModal;
