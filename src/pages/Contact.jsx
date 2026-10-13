import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const selectedVehicle = location.state?.vehicle;

  const defaultVehicleText = useMemo(() => {
    if (!selectedVehicle) {
      return "";
    }

    return `${selectedVehicle.manufacturer} ${selectedVehicle.model} (${selectedVehicle.year})`;
  }, [selectedVehicle]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: defaultVehicleText,
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus({
      type: "success",
      message: selectedVehicle
        ? `Your enquiry for the ${selectedVehicle.manufacturer} ${selectedVehicle.model} has been noted.`
        : "Your enquiry has been submitted successfully.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: defaultVehicleText,
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-panel">
        <div className="contact-copy">
          <h1>Ask about your next vehicle</h1>
          <p>
            Tell us what you are looking for and we will help you find the right fit.
          </p>

          {selectedVehicle ? (
            <div className="selected-vehicle-box">
              <span>Selected vehicle</span>
              <strong>
                {selectedVehicle.manufacturer} {selectedVehicle.model} ({selectedVehicle.year})
              </strong>
            </div>
          ) : null}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row two-up">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <div className="form-row two-up">
            <label>
              Phone number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 00 000 0000"
              />
            </label>

            <label>
              Vehicle
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="Vehicle of interest"
              />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you are looking for..."
              rows="5"
              required
            />
          </label>

          <button type="submit" className="submit-button">
            Submit enquiry
          </button>

          {status.type !== "idle" ? (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export default Contact;
