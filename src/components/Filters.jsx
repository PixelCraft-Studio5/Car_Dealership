import React from "react";

function Filters({
  searchTerm,
  setSearchTerm,
  manufacturer,
  setManufacturer,
  model,
  setModel,
  type,
  setType,
  year,
  setYear,
  sortBy,
  setSortBy,
  manufacturers,
  models,
  types,
  years,
  onReset,
}) {
  return (
    <section className="filters-section">
      <div className="search-container">
        <label htmlFor="vehicle-search">Search vehicles</label>

        <input
          id="vehicle-search"
          type="text"
          placeholder="Search by manufacturer, model, type..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="manufacturer">Manufacturer</label>

          <select
            id="manufacturer"
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
          >
            <option value="">All manufacturers</option>

            {manufacturers.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="model">Model</label>

          <select
            id="model"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          >
            <option value="">All models</option>

            {models.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="type">Vehicle type</label>

          <select
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">All types</option>

            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="year">Year</label>

          <select
            id="year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <option value="">All years</option>

            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort by</label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="newest">Newest to oldest</option>
            <option value="oldest">Oldest to newest</option>
            <option value="type-az">Type A-Z</option>
            <option value="type-za">Type Z-A</option>
            <option value="manufacturer-az">Manufacturer A-Z</option>
            <option value="manufacturer-za">Manufacturer Z-A</option>
          </select>
        </div>
      </div>

      <button type="button" className="reset-button" onClick={onReset}>
        Reset Filters
      </button>
    </section>
  );
}

export default Filters;