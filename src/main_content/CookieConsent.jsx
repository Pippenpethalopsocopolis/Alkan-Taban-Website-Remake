import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showSettingsIcon, setShowSettingsIcon] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true and disabled
        analytics: false,
        marketing: false,
        functional: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
        else {
            // User has made a choice, show the settings icon
            setShowSettingsIcon(true);
            // Load saved preferences
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(prevPrefs => ({
                    ...prevPrefs,
                    ...savedPreferences
                }));
            }
            catch (error) {
                console.error('Error parsing saved cookie preferences:', error);
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        setIsVisible(false);
        setShowSettingsIcon(true);
        console.log('All cookies accepted');
    };

    const handleRejectAll = () => {
        const rejected = {
            necessary: true, // Necessary cookies cannot be rejected
            analytics: false,
            marketing: false,
            functional: false,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(rejected));
        setPreferences(rejected);
        setIsVisible(false);
        setShowSettingsIcon(true);
        console.log('Non-essential cookies rejected');
    };

    const handleSavePreferences = () => {
        const savedPreferences = {
            ...preferences,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));

        setIsVisible(false);
        setShowSettings(false);
        setShowSettingsIcon(true);
        
        console.log('Cookie preferences saved:', savedPreferences);
    };

    const handlePreferenceChange = (type) => {
        if (type === 'necessary') return; // Cannot change necessary cookies

        setPreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleOpenSettings = () => {
        setIsVisible(true);
        setShowSettings(true);
    };

    const handleCloseSettings = () => {
        setIsVisible(false);
        setShowSettings(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseSettings();
        }
    };

    if (!isVisible && !showSettingsIcon) return null;

    if (!isVisible && !showSettingsIcon) return null; return (
        <>
            {isVisible && (
                <div className="cookie-consent-overlay" onClick={showSettings ? handleOverlayClick : undefined}>
                    <div className="cookie-consent-banner">
                        {!showSettings ? (
                            // Main consent banner
                            <div className="cookie-consent-content">
                                <div className="cookie-icon">
                                    🍪
                                </div>
                                <div className="cookie-text">
                                    <h3>Çerez Kullanımı</h3>
                                    <p>
                                        Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz.
                                        Analitik ve pazarlama çerezleri için onayınızı istiyoruz.
                                        Gerekli çerezler site işlevselliği için zorunludur.
                                    </p>
                                </div>
                                <div className="cookie-actions">
                                    <button
                                        className="cookie-btn cookie-btn-settings"
                                        onClick={() => setShowSettings(true)}
                                    >
                                        Ayarlar
                                    </button>
                                    <button
                                        className="cookie-btn cookie-btn-reject"
                                        onClick={handleRejectAll}
                                    >
                                        Reddet
                                    </button>
                                    <button
                                        className="cookie-btn cookie-btn-accept"
                                        onClick={handleAcceptAll}
                                    >
                                        Tümünü Kabul Et
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Settings panel
                            <div className="cookie-settings-content">
                                <div className="cookie-settings-header">
                                    <h3>Çerez Tercihleri</h3>
                                    <button
                                        className="cookie-close-settings"
                                        onClick={handleCloseSettings}
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="cookie-categories">
                                    <div className="cookie-category">
                                        <div className="cookie-category-header">
                                            <label className="cookie-toggle">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.necessary}
                                                    disabled={true}
                                                    readOnly
                                                />
                                                <span className="cookie-slider disabled"></span>
                                                <span className="cookie-category-title">Gerekli Çerezler</span>
                                            </label>
                                        </div>
                                        <p className="cookie-category-description">
                                            Bu çerezler web sitesinin temel işlevlerini sağlar ve devre dışı bırakılamaz.
                                        </p>
                                    </div>

                                    <div className="cookie-category">
                                        <div className="cookie-category-header">
                                            <label className="cookie-toggle">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.analytics}
                                                    onChange={() => handlePreferenceChange('analytics')}
                                                />
                                                <span className="cookie-slider"></span>
                                                <span className="cookie-category-title">Analitik Çerezler</span>
                                            </label>
                                        </div>
                                        <p className="cookie-category-description">
                                            Bu çerezler web sitesi kullanımını analiz etmemize yardımcı olur.
                                        </p>
                                    </div>

                                    <div className="cookie-category">
                                        <div className="cookie-category-header">
                                            <label className="cookie-toggle">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.marketing}
                                                    onChange={() => handlePreferenceChange('marketing')}
                                                />
                                                <span className="cookie-slider"></span>
                                                <span className="cookie-category-title">Pazarlama Çerezleri</span>
                                            </label>
                                        </div>
                                        <p className="cookie-category-description">
                                            Bu çerezler size özelleştirilmiş reklamlar göstermek için kullanılır.
                                        </p>
                                    </div>

                                    <div className="cookie-category">
                                        <div className="cookie-category-header">
                                            <label className="cookie-toggle">
                                                <input
                                                    type="checkbox"
                                                    checked={preferences.functional}
                                                    onChange={() => handlePreferenceChange('functional')}
                                                />
                                                <span className="cookie-slider"></span>
                                                <span className="cookie-category-title">İşlevsel Çerezler</span>
                                            </label>
                                        </div>
                                        <p className="cookie-category-description">
                                            Bu çerezler gelişmiş işlevsellik ve kişiselleştirme sağlar.
                                        </p>
                                    </div>
                                </div>

                                <div className="cookie-settings-actions">
                                    <button
                                        className="cookie-btn cookie-btn-reject"
                                        onClick={handleRejectAll}
                                    >
                                        Tümünü Reddet
                                    </button>
                                    <button
                                        className="cookie-btn cookie-btn-accept"
                                        onClick={handleSavePreferences}
                                    >
                                        Tercihleri Kaydet
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Persistent Cookie Settings Icon */}
            {showSettingsIcon && !isVisible && (
                <div className="cookie-settings-icon">
                    <button
                        className="cookie-settings-btn"
                        onClick={handleOpenSettings}
                        title="Çerez Ayarları"
                        aria-label="Çerez tercihlerini değiştir"
                    >
                        🍪
                    </button>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
