import ReactGA from 'react-ga4';

// Google Analytics Measurement ID
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 measurement ID
const MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  // Only initialize in production or when a valid measurement ID is set
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        anonymizeIp: true, // Privacy-friendly option
      },
    });
  } else {
    console.warn('Google Analytics not initialized: Missing or invalid measurement ID');
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (MEASUREMENT_ID && MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track specific events for your portfolio
export const trackCVDownload = () => {
  trackEvent('Engagement', 'CV_Download', 'User downloaded CV');
};

export const trackContactFormSubmit = () => {
  trackEvent('Engagement', 'Contact_Form_Submit', 'User submitted contact form');
};

export const trackExternalLink = (url: string) => {
  trackEvent('Navigation', 'External_Link_Click', url);
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
  trackEvent('User_Preference', 'Theme_Toggle', `Switched to ${theme} mode`);
};
