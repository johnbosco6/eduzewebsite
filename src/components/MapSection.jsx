import React, { useEffect, useState, useRef } from 'react';
import mapImage from '../assets/sa_tech_map.png';

const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const startTimeRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById('stats-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const animate = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            const currentCount = Math.floor(start + (end - start) * easeOutQuart);

            setCount(currentCount);
            countRef.current = currentCount;

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, start, hasStarted]);

    return count;
};

const StatCard = ({ number, suffix, label, delay }) => {
    const count = useCounter(number, 2000);

    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '1.5rem',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'default'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(90deg, var(--sa-yellow), var(--sa-red))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
            }}>
                {count}{suffix}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {label}
            </div>
        </div>
    );
};

const MapSection = () => {
    const locations = [
        { city: "Johannesburg", role: "Central Retail Hub", coords: { top: '30%', right: '35%' } },
        { city: "Cape Town", role: "Coastal Innovation", coords: { bottom: '15%', left: '25%' } },
        { city: "Durban", role: "Trade Logistics", coords: { bottom: '40%', right: '20%' } },
    ];

    return (
        <section style={{
            padding: '8rem 0',
            background: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 20% 50%, rgba(0, 35, 149, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr', // More space for map
                    gap: '6rem',
                    alignItems: 'center'
                }}
                    className="map-grid-responsive" // Add media query in CSS or inline check
                >
                    {/* Left: Map Visual */}
                    <div id="map-visual" style={{
                        position: 'relative',
                        height: '500px',
                        background: 'rgba(10, 10, 10, 0.5)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={mapImage}
                            alt="Nationwide Coverage"
                            style={{
                                width: '110%',
                                height: '110%',
                                objectFit: 'contain',
                                opacity: 1, // Increased opacity for better visibility
                                filter: 'contrast(1.1) brightness(1.1)',
                                transition: 'transform 10s ease-out'
                            }}
                            onLoad={(e) => e.target.style.transform = 'scale(1)'}
                        />

                        {/* Map Overlay UI Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            display: 'flex',
                            gap: '10px'
                        }}>
                            <div style={{
                                width: '10px',
                                height: '10px',
                                background: 'var(--sa-green)',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px var(--sa-green)'
                            }} />
                            <span style={{ fontSize: '0.8rem', color: 'var(--sa-green)', letterSpacing: '1px' }}>
                                SYSTEM ACTIVE
                            </span>
                        </div>

                        {locations.map((loc, index) => (
                            <div key={index} style={{
                                position: 'absolute',
                                ...loc.coords,
                                background: 'rgba(0,0,0,0.8)',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(4px)',
                                transform: 'translate(50%, -50%)',
                                zIndex: 2
                            }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{loc.city}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--sa-yellow)' }}>{loc.role}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Info & Stats */}
                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                                Powering South Africa's <span className="text-accent">Digital Economy</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                From the financial heart of Sandton to the coastal hubs of Cape Town and Durban,
                                E-Duze provides a unified retail network that spans the entire nation.
                                We connect customers to brands with unprecedented speed and reliability.
                            </p>
                        </div>

                        <div id="stats-section" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1.5rem',
                            marginBottom: '3rem'
                        }}>
                            <StatCard number={9} suffix="" label="Provinces Covered" />
                            <StatCard number={50} suffix="+" label="Distribution Hubs" />
                            <StatCard number={100} suffix="%" label="Uptime Guarantee" />
                            <StatCard number={24} suffix="/7" label="Support Hours" />
                        </div>

                        <button
                            className="btn-primary"
                            style={{ marginTop: '1rem' }}
                            onClick={() => document.getElementById('map-visual')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Coverage Map
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive styles helper */}
            <style>
                {`
                    @media (max-width: 968px) {
                        .map-grid-responsive {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default MapSection;
