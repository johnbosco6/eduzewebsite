import React from 'react';

const StepCard = ({ number, title, description }) => (
    <div style={{
        flex: 1,
        padding: '2rem',
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    }}>
        <div style={{
            fontSize: '4rem',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.05)',
            position: 'absolute',
            right: '20px',
            top: '10px',
            lineHeight: 1
        }}>
            {number}
        </div>
        <h3 style={{ fontSize: '1.5rem', zIndex: 1 }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', zIndex: 1 }}>
            {description}
        </p>
    </div>
);

const HowItWorks = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Seamless Experience</h2>
                    <p className="section-subtitle">
                        Start saving in three simple steps.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <StepCard
                        number="01"
                        title="Download App"
                        description="Get E-Duze on iOS or Android. Create your profile and select your favorite stores."
                    />
                    <StepCard
                        number="02"
                        title="Locate & Scan"
                        description="Use our map to find nearby partners or scan products in-store for instant price checks."
                    />
                    <StepCard
                        number="03"
                        title="Redeem & Save"
                        description="Show your in-app voucher at checkout to claim exclusive discounts instantly."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
