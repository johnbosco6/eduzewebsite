import React from 'react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'radial-gradient(circle at 80% 20%, rgba(0, 35, 149, 0.15) 0%, rgba(10, 10, 10, 1) 50%)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                {/* Left: Content */}
                <div>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.4rem 1rem',
                        background: 'rgba(252, 181, 20, 0.1)',
                        border: '1px solid var(--sa-yellow)',
                        borderRadius: '4px',
                        color: 'var(--sa-yellow)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}>
                        South Africa's #1 Shopping Companion
                    </div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Smart Shopping, <br />
                        <span className="text-accent">Simplified.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px'
                    }}>
                        Discover exclusive deals, connect with shopping partners, and navigate the best malls in SA with precision. The E-Duze app bridges the gap between you and the best prices.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://e-duzeapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Download App
                        </a>
                        <button className="btn-outline">
                            View Features
                        </button>
                    </div>
                </div>

                {/* Right: Static Visual Composition */}
                <div style={{
                    position: 'relative',
                    height: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Main Map Visual */}
                    <div className="glass-panel" style={{
                        padding: '2rem',
                        width: '100%',
                        height: '400px',
                        position: 'relative',
                        zIndex: 2,
                        background: 'rgba(20,20,20,0.4)'
                    }}>
                        <img src="/assets/sa_map.png" alt="Map" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
                        }} />
                    </div>

                    {/* Floating Elements (Static Composition) */}
                    <div className="glass-panel" style={{
                        position: 'absolute',
                        top: '50px',
                        right: '-20px',
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 3,
                        background: 'rgba(10,10,10,0.8)'
                    }}>
                        <img src="/assets/discount_icon.png" alt="Discount" style={{ width: '60%' }} />
                    </div>

                    <div className="glass-panel" style={{
                        position: 'absolute',
                        bottom: '80px',
                        left: '-20px',
                        width: '100px',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 3,
                        background: 'rgba(10,10,10,0.8)'
                    }}>
                        <img src="/assets/scan_icon.png" alt="Scan" style={{ width: '60%' }} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
