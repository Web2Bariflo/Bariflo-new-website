import React from 'react';
import { BiWifi, BiBuildingHouse, BiData, BiCog, BiLineChart } from 'react-icons/bi';

const Stats = () => {
  const stats = [
    { icon: <BiWifi />, value: '14,203+', label: 'SENSORS CONNECTED' },
    { icon: <BiBuildingHouse />, value: '124+', label: 'FACILITIES' },
    { icon: <BiData />, value: '18M+', label: 'DATA POINTS / DAY' },
    { icon: <BiCog />, value: '3.6M+', label: 'CONTROL DECISIONS / DAY' },
    { icon: <BiLineChart />, value: '100+', label: 'SYSTEMS UNDER OBSERVATION' },
  ];

  return (
    <section className="nl-stats">
      {stats.map((stat, index) => (
        <div className="nl-stat-item" key={index}>
          <div className="nl-stat-icon-wrapper">
            <div className="nl-stat-icon">{stat.icon}</div>
          </div>
          <div className="nl-stat-info">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
