import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";

const categories = [
  { key: "all", color: "gray" },
  { key: "react", color: "blue" },
  { key: "javascript", color: "yellow" },
  { key: "flutter", color: "cyan" },
  { key: "nodejs", color: "green" },
  { key: "tutorial", color: "purple" },
  { key: "tips", color: "orange" },
];

const blogPosts = [
  {
    id: "react-hooks-avances",
    title: "React Hooks avancés : useCallback, useMemo et useRef",
    excerpt: "Découvrez comment optimiser vos applications React avec les hooks avancés et éviter les re-renders inutiles.",
    category: "react",
    date: "2024-01-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    tags: ["React", "Performance", "Hooks"],
    featured: true,
  },
  {
    id: "flutter-state-management",
    title: "Gestion d'état en Flutter : Riverpod vs Bloc",
    excerpt: "Comparaison des deux solutions de gestion d'état les plus populaires en Flutter avec des exemples pratiques.",
    category: "flutter",
    date: "2024-01-10",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    tags: ["Flutter", "State Management", "Architecture"],
    featured: true,
  },
  {
    id: "nodejs-performance",
    title: "Optimiser les performances de Node.js en production",
    excerpt: "Techniques et bonnes pratiques pour améliorer les performances de vos applications Node.js.",
    category: "nodejs",
    date: "2024-01-05",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    tags: ["Node.js", "Performance", "Production"],
    featured: false,
  },
  {
    id: "javascript-es2024",
    title: "Les nouveautés JavaScript ES2024 à connaître",
    excerpt: "Tour d'horizon des nouvelles fonctionnalités JavaScript qui vont changer votre façon de coder.",
    category: "javascript",
    date: "2023-12-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
    tags: ["JavaScript", "ES2024", "Nouveautés"],
    featured: false,
  },
  {
    id: "react-testing-guide",
    title: "Guide complet pour tester vos composants React",
    excerpt: "Apprenez à tester efficacement vos composants React avec Jest et React Testing Library.",
    category: "react",
    date: "2023-12-20",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    tags: ["React", "Testing", "Jest"],
    featured: false,
  },
  {
    id: "tips-developpeur-productif",
    title: "10 astuces pour être un développeur plus productif",
    excerpt: "Conseils pratiques et outils pour améliorer votre productivité en tant que développeur.",
    category: "tips",
    date: "2023-12-15",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
    tags: ["Productivité", "Outils", "Conseils"],
    featured: false,
  },
];

export default function Blog() {
  const { t } = useTranslation();

  useSEO({
    title: "Blog - Thimoté Fétu | Articles Techniques & Tutoriels",
    description: "Articles techniques sur le développement web et mobile : React, TypeScript, Flutter, Node.js. Tutoriels, astuces et conseils pour développeurs par Thimoté Fétu.",
    keywords: "blog, articles techniques, tutoriels, React, TypeScript, Flutter, Node.js, développement web, développement mobile, conseils développeur",
    ogImage: "https://thimotefetu.fr/og-blog.jpg",
    canonical: "https://thimotefetu.fr/blog"
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat?.color || "gray";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <PageTransition>
      <SectionContainer className="py-20 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            {t("blog.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("blog.description")}
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("blog.featured")}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="professional-card overflow-hidden subtle-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900/30 text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-300`}>
                      {t(`blog.categories.${post.category}`)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    {t("blog.readMore")}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("blog.recent")}
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="professional-card overflow-hidden subtle-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(post.category)}-100 dark:bg-${getCategoryColor(post.category)}-900/30 text-${getCategoryColor(post.category)}-800 dark:text-${getCategoryColor(post.category)}-300`}>
                      {t(`blog.categories.${post.category}`)}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    {t("blog.readMore")}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Newsletter Signup */}
      <SectionContainer className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {t("blog.newsletter.title")}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            {t("blog.newsletter.description")}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("blog.newsletter.placeholder")}
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              {t("blog.newsletter.subscribe")}
            </Button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            {t("blog.newsletter.notice")}
          </p>
        </motion.div>
      </SectionContainer>
    </PageTransition>
  );
}