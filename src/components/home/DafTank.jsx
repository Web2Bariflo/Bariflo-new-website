
import React from "react";
import "./DafTank.css";

const systemDetails = [
  ["Application", "Oil, grease, TSS and floatable-solids removal"],
  ["Treatment mode", "Dissolved air flotation with intelligent aeration"],
  ["Capacity", "10 – 1,000 m³/day, customizable"],
  ["Tank materials", "SS304 / SS316 / FRP / coated MS"],
  ["Control mode", "Automatic, manual, local or remote"],
  ["Sensing", "Flow, pressure, level, turbidity, DO and optional pH"],
];

const operatingData = [
  { value: "4 – 10", label: "m³/m²·h loading" },
  { value: "15 – 50%", label: "Recycle ratio" },
  { value: "4 – 7 bar", label: "Saturation pressure" },
  { value: "20 – 80 µm", label: "Typical bubble size" },
  { value: "415 VAC", label: "3-phase power" },
  { value: "IP54 / 65", label: "Enclosure options" },
];

const features = [
  {
    title: "Adaptive microbubble control",
    description: "Matches air and recycle flow to load",
  },
  {
    title: "High-efficiency separation",
    description: "Removes oil, grease, TSS and floatables",
  },
  {
    title: "Variable-speed skimming",
    description: "Optimizes scum removal and sludge dryness",
  },
  {
    title: "Closed-loop recycle control",
    description: "Stabilizes pressure and bubble generation",
  },
  {
    title: "Real-time sensing",
    description: "Tracks flow, pressure, level, turbidity and DO",
  },
  {
    title: "Automatic sludge handling",
    description: "Coordinates float sludge and bottom drain",
  },
  {
    title: "Low-energy operation",
    description: "Controls pumps and compressor to actual demand",
  },
  {
    title: "Alarms and interlocks",
    description: "Protects tank, pump, compressor and skimmer",
  },
];

const equipmentParts = [
  "INLET / FLOCCULATION",
  "MICROBUBBLE DIFFUSER",
  "RECYCLE & SATURATION",
  "SKIMMER & SCUM TROUGH",
];

const processOutcomes = [
  {
    title: "HIGH SEPARATION",
    description: "Efficient solids and oil removal",
  },
  {
    title: "STABLE EFFLUENT",
    description: "Adaptive process control",
  },
  {
    title: "AUTOMATED SLUDGE",
    description: "Coordinated skimming and draining",
  },
  {
    title: "RETROFIT READY",
    description: "Integrates with existing ETP systems",
  },
];

export default function DafTank() {
  return (
    <main className="daf-page">
      {/* Title */}
      <header className="daf-title-bar">
        3. DAF / INTELLIGENT AERATION TANK
      </header>

      {/* Tagline */}
      <div className="daf-tagline">
        <span>EFFICIENT SEPARATION</span>
        <b>•</b>
        <span>ADAPTIVE AERATION</span>
        <b>•</b>
        <span>STABLE EFFLUENT QUALITY</span>
      </div>

      {/* Equipment image and labels */}
      <section className="daf-equipment-card">
        <div className="daf-equipment-image">
          <img
            src="/images/ICON 1.png"
            alt="DAF intelligent aeration tank system"
          />
        </div>

        <div className="daf-equipment-parts">
          {equipmentParts.map((part) => (
            <div className="daf-part" key={part}>
              {part}
            </div>
          ))}
        </div>
      </section>

      {/* System information */}
      <section className="daf-info-grid">
        <article className="daf-info-card">
          <h2 className="daf-blue-heading">SYSTEM AT A GLANCE</h2>

          <div className="daf-details-list">
            {systemDetails.map(([label, value]) => (
              <div className="daf-detail-row" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="daf-info-card">
          <h2 className="daf-blue-heading">CORE OPERATING DATA</h2>

          <div className="daf-operating-grid">
            {operatingData.map((item) => (
              <div className="daf-operating-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Key features */}
      <section className="daf-section">
        <h2 className="daf-blue-heading">KEY FEATURES</h2>

        <div className="daf-features-grid">
          {features.map((feature) => (
            <article className="daf-feature-item" key={feature.title}>
              <span className="daf-check" aria-hidden="true">
                ✓
              </span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process outcome */}
      <section className="daf-section">
        <h2 className="daf-blue-heading">PROCESS OUTCOME</h2>

        <div className="daf-outcomes-grid">
          {processOutcomes.map((outcome) => (
            <article className="daf-outcome-item" key={outcome.title}>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical note */}
      <p className="daf-note">
        Note: Operating values are indicative and may vary based on
        wastewater characteristics, site conditions and customization.
      </p>
    </main>
  );
}
