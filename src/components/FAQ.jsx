import React, { useState } from 'react';

const faqs = [
    {
        question: "Is E-Duze available on both iOS and Android?",
        answer: "Yes! E-Duze is available for download on both the Apple App Store and Google Play Store."
    },
    {
        question: "Does the app work offline?",
        answer: "You need an internet connection for real-time deals and navigation, but we cache the mall maps so you can still find your way around basic layouts."
    },
    {
        question: "How do I list my business on E-Duze?",
        answer: "You can apply directly through our 'Partners' section in the app or website. We have dedicated storefront tools for business owners."
    },
    {
        question: "Is the app free to use?",
        answer: "Absolutely. E-Duze is 100% free for shoppers. We only charge businesses for premium placement and advanced analytics."
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <div
            onClick={toggle}
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '1.5rem 0',
                cursor: 'pointer'
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: isOpen ? '1rem' : '0'
            }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: isOpen ? 'var(--sa-white)' : 'var(--text-secondary)' }}>
                    {faq.question}
                </h3>
                <span style={{
                    fontSize: '1.5rem',
                    color: 'var(--sa-yellow)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s'
                }}>
                    +
                </span>
            </div>
            <div style={{
                height: isOpen ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                paddingRight: '2rem'
            }}>
                {isOpen && <p>{faq.answer}</p>}
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h2>
                <div style={{ marginTop: '3rem' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
