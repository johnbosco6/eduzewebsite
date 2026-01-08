import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Features', id: 'features' },
        { name: 'Partners', id: 'partners' },
        { name: 'How it Works', id: 'how-it-works' },
        { name: 'Coverage', id: 'coverage' },
        { name: 'FAQ', id: 'faq' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            padding: scrolled ? '1rem 0' : '1.5rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Logo */}
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <span className="text-accent">E-Duze</span>
                </div>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                opacity: 0.8,
                                transition: 'opacity 0.2s',
                                padding: 0
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '1'}
                            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a href="https://e-duzeapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Get App
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        zIndex: 1001,
                        display: 'none' // Hidden by default, shown via CSS media query
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {menuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                {menuOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'var(--bg-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 999
                    }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: '600'
                                }}
                            >
                                {link.name}
                            </button>
                        ))}
                        <a href="https://e-duzeapp.vercel.app/" className="btn-primary">
                            Get App
                        </a>
                    </div>
                )}
            </div>

            <style>
                {`
                    @media (max-width: 768px) {
                        .desktop-menu { display: none !important; }
                        .mobile-toggle { display: block !important; }
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
