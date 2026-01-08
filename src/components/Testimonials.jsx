import React from 'react';

const testimonials = [
    {
        name: "Thabo M.",
        role: "Daily Shopper",
        text: "E-Duze has completely changed how I find deals in Sandton. It's so precise!",
        location: "Johannesburg"
    },
    {
        name: "Sarah L.",
        role: "Tech Enthusiast",
        text: "Finally, an SA app that actually works well. The location tracking is spot on.",
        location: "Cape Town"
    },
    {
        name: "Michael K.",
        role: "Business Owner",
        text: "Listing my store on E-Duze brought in 30% more foot traffic this month.",
        location: "Durban"
    },
    {
        name: "Lerato P.",
        role: "Student",
        text: "I save so much time not walking around aimlessly anymore. Five stars!",
        location: "Pretoria"
    },
    {
        name: "Devin S.",
        role: "Foodie",
        text: "The restaurant discovery feature is a hidden gem. Found my new favorite burger spot.",
        location: "Cape Town"
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: '6rem 0', overflow: 'hidden', background: 'var(--bg-primary)' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title">What South Africans <span className="text-accent">Are Saying</span></h2>
                <p className="section-subtitle">Join thousands of happy shoppers discovering a smarter way to shop.</p>
            </div>

            <div className="marquee-container" style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>
                <div className="marquee-content" style={{
                    display: 'flex',
                    gap: '4rem',
                    width: 'max-content',
                    animation: 'scrollLeft 40s linear infinite',
                    paddingLeft: '2rem'
                }}>
                    {/* Double the array to ensure smooth loop */}
                    {[...testimonials, ...testimonials].map((t, index) => (
                        <div key={index} className="glass-panel" style={{
                            width: '400px',
                            minWidth: '400px',
                            padding: '2rem',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.03)',
                            flexShrink: 0,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: 'var(--sa-yellow)' }}>
                                ★★★★★
                            </div>
                            <p style={{
                                fontStyle: 'italic',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                lineHeight: '1.6',
                                minHeight: '80px',
                                whiteSpace: 'normal',
                                overflowWrap: 'break-word'
                            }}>
                                "{t.text}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--sa-blue), var(--sa-red))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    flexShrink: 0
                                }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.role} • {t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); } 
                    }
                    
                    /* Pause on hover for better readability */
                    .marquee-content:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
        </section>
    );
};

export default Testimonials;
