import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import PageTransition from "../components/PageTransition";
import useSEO from "../hooks/useSEO";
import profileImage from "../assets/me.jpg";
import cvFile from "../assets/CV_Fétu_Thimoté.pdf";

export default function Home() {
  const { t } = useTranslation();

  useSEO({
    title: "Thimoté Fétu - Développeur Web & Mobile Full-Stack",
    description: "Développeur passionné spécialisé en React, TypeScript, Flutter et Node.js. Création d'applications web et mobile modernes. Étudiant en informatique avec projets Quality Nurse et Laser Magique.",
    keywords: "développeur web, développeur mobile, React, TypeScript, Flutter, Node.js, full-stack, portfolio, Thimoté Fétu, étudiant développeur, applications web, applications mobile",
    ogImage: "https://thimotefetu.fr/og-image.jpg",
    canonical: "https://thimotefetu.fr/"
  });

  return (
    <PageTransition>
      <SectionContainer className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="professional-card p-8 md:p-12"
          >
            <motion.div
              className="flex flex-col items-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg mx-auto">
                  <img
                    src={profileImage}
                    alt="Thimoté Fétu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("home.greeting")}{" "}
              <span className="accent-text whitespace-nowrap">
                Thimoté Fétu
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("home.role")}
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/projects">
                <Button size="lg">{t("home.cta.work")}</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  {t("home.cta.contact")}
                </Button>
              </Link>
              <a
                href={cvFile}
                download="CV-Thimoté-Fétu.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  {t("home.cta.cv")}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
          <motion.div
            className="professional-card p-6 subtle-hover h-full flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 flex flex-col">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t("home.about.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {t("home.about.description")}
              </p>
              <div className="mt-auto">
                <Link to="/about">
                  <Button variant="secondary">{t("home.about.button")}</Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="professional-card p-6 subtle-hover h-full flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 flex flex-col">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t("home.projects.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {t("home.projects.description")}
              </p>
              <div className="mt-auto">
                <Link to="/projects">
                  <Button variant="secondary">
                    {t("home.projects.button")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </PageTransition>
  );
}
