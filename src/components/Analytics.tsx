import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

const Analytics = () => {
  const location = useLocation();
  const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: location.pathname,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;