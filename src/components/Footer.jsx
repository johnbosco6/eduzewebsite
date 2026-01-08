import React from 'react';
import footerBg from '../assets/footer_bg.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.8)',
                zIndex: 0
            }} />

            {/* Animated SA Flag Gradient Strip */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                height: '6px',
                width: '100%',
                background: `linear-gradient(
                    90deg, 
                    var(--sa-red), 
                    var(--sa-white), 
                    var(--sa-green), 
                    var(--sa-yellow), 
                    var(--sa-black), 
                    var(--sa-blue), 
                    var(--sa-red)
                )`,
                backgroundSize: '200% 100%',
                animation: 'flagScroll 10s linear infinite'
            }} />

            <div className="container" style={{
                paddingTop: '5rem',
                paddingBottom: '2rem',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Column */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            E-Duze <span style={{ color: 'var(--sa-yellow)' }}>.</span>
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Redefining the shopping experience in South Africa. Connect, shop, and save with the nation's most intelligent retail platform.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: 2 }}>
                            <li><a href="#features" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Careers</a></li>
                            <li><a href="#partners" style={{ textDecoration: 'none', color: 'inherit' }}>Partners</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Support</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: 2 }}>
                            <li><a href="#faq" style={{ textDecoration: 'none', color: 'inherit' }}>Help Center</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Safety</a></li>
                            <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Community Guidelines</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <h4 style={{ marginBottom: '1.2rem', fontSize: '1rem' }}>Stay Updated</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Subscribe to our newsletter for the latest deals and updates.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '0.8rem',
                                    borderRadius: '6px',
                                    color: 'white',
                                    width: '100%',
                                    fontFamily: 'inherit'
                                }}
                            />
                            <button style={{
                                background: 'var(--sa-blue)',
                                color: 'white',
                                border: 'none',
                                padding: '0 1.2rem',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: 600
                            }}>
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)'
                }}>
                    <div>
                        © 2024 E-Duze South Africa. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes flagScroll {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 100% 50%; }
                    }
                `}
            </style>
        </footer>
    );
};

export default Footer;
