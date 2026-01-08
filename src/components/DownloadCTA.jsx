import React from 'react';

const DownloadCTA = () => {
    return (
        <section style={{
            padding: '8rem 0',
            background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(0, 35, 149, 0.1) 100%)',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                    Ready to Shop <span className="text-accent">Smarter?</span>
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto 3rem'
                }}>
                    Join thousands of South Africans who have upgraded their shopping experience. Download E-Duze today.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://e-duzeapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ minWidth: '180px', justifyContent: 'center' }}>
                        Get it on App Store
                    </a>
                    <a href="https://e-duzeapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ minWidth: '180px', justifyContent: 'center' }}>
                        Get it on Google Play
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;
