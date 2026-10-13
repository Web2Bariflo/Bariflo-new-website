
import React from "react";
import "./Flocculant.css";

const systemDetails = [
    ["Flocculants", "Cationic, anionic and non-ionic polymers"],
    ["Powder storage", "Moisture-proof tank with desiccant breather"],
    ["Powder feeding", "Timed screw feeder / loss-in-weight dispenser"],
    ["Heating system", "SS316 coil; hot water, thermal oil or electric"],
    ["Mixer / agitator", "Variable-speed, top mounted"],
    ["Control mode", "Automatic, AI-based, manual or remote"],
];

const dosingProfile = [
    { value: "25 – 60° C", label: "Adjustable temperature" },
    { value: "±1° C", label: "Temperature accuracy" },
    { value: "±1%", label: "Dosing accuracy of set point" },
    { value: "0.5 – 100", label: "LPH dosing capacity" },
    { value: "UP TO 7 bar", label: "Operating pressure" },
    { value: "IP65", label: "Control-panel enclosure" },
];

const features = [
    {
        title: "Moisture-proof storage",
        description: "Protects polymer powder from humidity",
    },
    {
        title: "Precision powder feeding",
        description: "Timed or gravimetric dispensing",
    },
    {
        title: "Controlled mixing",
        description: "Optimizes dissolution without polymer damage",
    },
    {
        title: "Temperature stability",
        description: "Maintains consistent viscosity and activation",
    },
    {
        title: "Adaptive preparation",
        description: "Adjusts concentration to process demand",
    },
    {
        title: "Variable-speed dosing",
        description: "Provides accurate, stable chemical delivery",
    },
    {
        title: "Reduced polymer use",
        description: "Improves floc formation and process stability",
    },
    {
        title: "Alarms and interlocks",
        description: "Protects feeder, mixer, heater and pumps",
    },
];

const equipmentParts = [
    "POLYMER STORAGE",
    "SCREW FEEDER",
    "PREPARATION TANK",
    "HEATING & AGITATION",
    "SMART DOSING & HMI",
];

const systemCapabilities = [
    {
        title: "INSTRUMENTATION",
        description: "Level, flow, temperature, viscosity and tank-level feedback",
    },
    {
        title: "CONNECTIVITY",
        description: "Modbus TCP/RTU, 4–20 mA and digital I/O",
    },
    {
        title: "APPLICATIONS",
        description: "Polymer preparation for STP, ETP, DAF and sludge-dewatering systems",
    },
];

export default function Flocculant() {
    return (
        <main className="floc-page">
            <header className="floc-title-bar">
                3. INTELLIGENT FLOCCULATION PREPARATION
            </header>

            <div className="floc-tagline">
                <span>CONSISTENT POLYMER SOLUTION</span>
                <b>•</b>
                <span>ADAPTIVE PREPARATION</span>
                <b>•</b>
                <span>PRECISE DOSING</span>
            </div>

            {/* Main equipment image and process labels */}
            <section className="floc-equipment-card">
                <div className="floc-equipment-image">
                    <img
                        src="/images/ICON3.png"
                        alt="Intelligent flocculant preparation and dosing system"
                    />
                </div>

                <div className="floc-equipment-parts">
                    {equipmentParts.map((part) => (
                        <div className="floc-part" key={part}>
                            {part}
                        </div>
                    ))}
                </div>
            </section>

            {/* System details and preparation profile */}
            <section className="floc-info-grid">
                <article className="floc-info-card">
                    <h2 className="floc-blue-heading">
                        SYSTEM AT A GLANCE
                    </h2>

                    <div className="floc-details-list">
                        {systemDetails.map(([label, value]) => (
                            <div className="floc-detail-row" key={label}>
                                <strong>{label}</strong>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="floc-info-card">
                    <h2 className="floc-blue-heading">
                        PREPARATION &amp; DOSING PROFILE
                    </h2>

                    <div className="floc-profile-grid">
                        {dosingProfile.map((item) => (
                            <div className="floc-profile-item" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            {/* Key features */}
            <section className="floc-section">
                <h2 className="floc-blue-heading">KEY FEATURES</h2>

                <div className="floc-features-grid">
                    {features.map((feature) => (
                        <article className="floc-feature-item" key={feature.title}>
                            <span className="floc-check" aria-hidden="true">
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

            {/* Instrumentation, connectivity and applications */}
            <section className="floc-section">
                <h2 className="floc-blue-heading">
                    INSTRUMENTATION, CONNECTIVITY &amp; APPLICATIONS
                </h2>

                <div className="floc-capabilities-grid">
                    {systemCapabilities.map((item) => (
                        <article className="floc-capability" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <p className="floc-note">
                Note: Capacities and operating values are indicative and may
                vary with polymer type, process duty and customization.
            </p>
        </main>
    );
}
