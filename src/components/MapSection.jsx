import React from 'react';

const MapSection = () => {
    const locations = [
        { city: "Johannesburg", role: "Retail Hub" },
        { city: "Cape Town", role: "Coastal Center" },
        { city: "Durban", role: "Trade Zone" },
    ];

    return (
        <section style={{
            padding: '6rem 0',
            background: 'var(--bg-secondary)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Left: Map Visual */}
                    <div style={{
                        position: 'relative',
                        height: '400px',
                        background: 'var(--bg-primary)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img src="/assets/sa_map.png" alt="Coverage Map" style={{
                            width: '90%',
                            height: '90%',
                            objectFit: 'contain',
                            opacity: 0.9
                        }} />

                        {/* Static overlay label */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            background: 'rgba(0,0,0,0.8)',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            National Coverage
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Nationwide Reach
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            From the bustling malls of Sandton to the waterfronts of Cape Town. E-Duze connects you to the country's most significant retail networks.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {locations.map((loc, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '1rem',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <span style={{ fontWeight: 600 }}>{loc.city}</span>
                                    <span style={{ color: 'var(--sa-yellow)', fontSize: '0.9rem' }}>{loc.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
