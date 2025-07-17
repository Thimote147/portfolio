import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export const useSEO = (seoData: SEOData) => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update meta keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', seoData.title);
    if (ogDescription) ogDescription.setAttribute('content', seoData.description);
    if (ogUrl) ogUrl.setAttribute('content', `https://thimotefetu.fr${location.pathname}`);
    if (ogImage && seoData.ogImage) ogImage.setAttribute('content', seoData.ogImage);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');

    if (twitterTitle) twitterTitle.setAttribute('content', seoData.title);
    if (twitterDescription) twitterDescription.setAttribute('content', seoData.description);
    if (twitterUrl) twitterUrl.setAttribute('content', `https://thimotefetu.fr${location.pathname}`);
    if (twitterImage && seoData.ogImage) twitterImage.setAttribute('content', seoData.ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonical || `https://thimotefetu.fr${location.pathname}`);

    // Update language
    document.documentElement.lang = i18n.language;

    // Handle noindex
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', seoData.noindex ? 'noindex, nofollow' : 'index, follow');

    // Cleanup function
    return () => {
      // Reset to default values if needed
    };
  }, [seoData, location.pathname, i18n.language]);
};

export default useSEO;