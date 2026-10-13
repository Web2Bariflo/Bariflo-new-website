import React, { useState, useEffect } from 'react';
import { BiWifi, BiBuildingHouse, BiData, BiCog, BiLineChart } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ target, decimals = 0, suffix = '+', duration = 1600, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth cubic ease-out: decelerates smoothly to the fixed target
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration]);

  const display = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count);

  return (
    <span>
      {display}{suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <BiWifi />, target: 14, suffix: '+', label: 'SENSORS CONNECTED' },
    { icon: <BiBuildingHouse />, target: 4, suffix: '+', label: 'FACILITIES' },
    { icon: <BiData />, target: 1000, suffix: '+', label: 'DATA POINTS / DAY' },
    { icon: <BiCog />, target: 3.6, decimals: 1, suffix: 'M+', label: 'CONTROL DECISIONS / DAY' },
    { icon: <BiLineChart />, target: 100, suffix: '+', label: 'SYSTEMS UNDER OBSERVATION' },
  ];

  return (
    <section className="nl-stats" ref={ref}>
      {stats.map((stat, index) => (
        <div className="nl-stat-item" key={index}>
          <div className="nl-stat-icon-wrapper">
            <div className="nl-stat-icon">{stat.icon}</div>
          </div>
          <div className="nl-stat-info">
            <h3>
              <CounterItem
                target={stat.target}
                decimals={stat.decimals || 0}
                suffix={stat.suffix}
                inView={inView}
              />
            </h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
