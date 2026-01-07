import React from 'react';

const Partners = () => {
    const brands = [
        "WOOLWORTHS", "CHECKERS", "PICK N PAY", "CLICKS",
        "DIS-CHEM", "SPAR", "GAME", "MAKRO",
        "SHOPRITE", "PEP", "MR PRICE", "ACKERMANS",
        "TRUWORTHS", "FOSCHINI", "EDGARS", "SUPERBALIST"
    ];

    // duplicate the list to ensure seamless looping
    const duplicatedBrands = [...brands, ...brands];

    return (
        <section style={{
            padding: '3rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'var(--bg-primary)',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ maxWidth: '100%', padding: '0' }}>
                <p style={{
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    letterSpacing: '2px',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    textTransform: 'uppercase'
                }}>
                    Trusted by South Africa's Leading Retailers
                </p>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {duplicatedBrands.map((brand, index) => (
                            <span key={index} style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: 'var(--text-secondary)',
                                letterSpacing: '1px',
                                flexShrink: 0
                            }}>
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
