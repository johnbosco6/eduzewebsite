import React from 'react';

const FeatureCard = ({ title, description, iconPath, color }) => (
    <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
        transition: 'border-color 0.2s ease'
    }}>
        <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${color}`
        }}>
            <img src={iconPath} alt={title} style={{
                width: '60%',
                height: '60%',
                objectFit: 'contain'
            }} />
        </div>

        <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
                {title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {description}
            </p>
        </div>
    </div>
);

const Features = () => {
    const features = [
        {
            title: "Exclusive Discounts",
            description: "Access a curated list of premium deals from top South African retailers.",
            icon: "/assets/discount_icon.png",
            color: "var(--sa-yellow)"
        },
        {
            title: "Community Shopping",
            description: "Connect with like-minded shoppers in your vicinity for a shared experience.",
            icon: "/assets/buddies_icon.png",
            color: "var(--sa-blue)"
        },
        {
            title: "Smart Scan",
            description: "Instantly compare prices and stock availability with our advanced scanner.",
            icon: "/assets/scan_icon.png",
            color: "var(--sa-green)"
        },
        {
            title: "Location Intelligence",
            description: "Geo-fenced notifications ensure you never miss an opportunity nearby.",
            icon: "/assets/sa_map.png",
            color: "var(--sa-red)"
        }
    ];

    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
            <div className="container">
                <h2 className="section-title">Core Capabilities</h2>
                <p className="section-subtitle">
                    Engineered to optimize every aspect of your retail journey.
                </p>

                <div className="features-grid responsive-grid-2">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            iconPath={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
