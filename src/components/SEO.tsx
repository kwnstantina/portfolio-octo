import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  structuredData?: Record<string, any>;
}

const defaultSEO = {
  title: 'Full Stack Developer - Konstantina Kirtsia',
  description: 'Full Stack Developer specializing in React, TypeScript, GraphQL, and modern web technologies. Explore my portfolio of projects and technical expertise.',
  keywords: 'Full Stack Developer, React, TypeScript, GraphQL, Web Development, Portfolio, Konstantina Kirtsia, Frontend, Backend, JavaScript',
  image: '/og-image.png',
  url: 'https://your-domain.com/',
  type: 'website',
  author: 'Konstantina Kirtsia',
};

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  structuredData,
}: SEOProps) => {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Default Person Schema for Konstantina
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Konstantina Kirtsia',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack Developer specializing in React, TypeScript, GraphQL, and modern web technologies.',
  url: 'https://your-domain.com/',
  sameAs: [
    // Add your social media profiles here
    // 'https://github.com/your-username',
    // 'https://linkedin.com/in/your-profile',
    // 'https://twitter.com/your-handle',
  ],
  knowsAbout: [
    'React',
    'TypeScript',
    'JavaScript',
    'GraphQL',
    'Node.js',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
  ],
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Konstantina Kirtsia - Portfolio',
  url: 'https://your-domain.com/',
  description: 'Personal portfolio showcasing projects, skills, and expertise in full stack web development.',
  author: {
    '@type': 'Person',
    name: 'Konstantina Kirtsia',
  },
};

export default SEO;
