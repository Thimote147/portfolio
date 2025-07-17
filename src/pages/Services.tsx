import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

const serviceIcons = {
  web: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  mobile: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  fullstack: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  consulting: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  maintenance: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  optimization: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useTranslation();

  useSEO({
    title: "Services - Thimoté Fétu | Développement Web & Mobile",
    description: "Services de développement web et mobile : création d'applications React, développement Flutter, consulting technique, maintenance et optimisation. Tarifs et processus de travail détaillés.",
    keywords: "services, développement web, développement mobile, React, Flutter, consulting, maintenance, optimisation, tarifs développeur, freelance développeur",
    ogImage: "https://thimotefetu.fr/og-services.jpg",
    canonical: "https://thimotefetu.fr/services"
  });

  const services = [
    {
      key: "web",
      icon: serviceIcons.web,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      duration: "2-6 semaines",
      price: "À partir de 800€",
    },
    {
      key: "mobile",
      icon: serviceIcons.mobile,
      technologies: ["Flutter", "React Native", "Dart", "Firebase"],
      duration: "4-8 semaines",
      price: "À partir de 1200€",
    },
    {
      key: "fullstack",
      icon: serviceIcons.fullstack,
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      duration: "6-12 semaines",
      price: "À partir de 1500€",
    },
    {
      key: "consulting",
      icon: serviceIcons.consulting,
      technologies: ["Architecture", "Code Review", "Performance", "Sécurité"],
      duration: "1-2 semaines",
      price: "À partir de 400€",
    },
    {
      key: "maintenance",
      icon: serviceIcons.maintenance,
      technologies: ["Monitoring", "Updates", "Bug fixes", "Support"],
      duration: "Mensuel",
      price: "À partir de 200€/mois",
    },
    {
      key: "optimization",
      icon: serviceIcons.optimization,
      technologies: ["Performance", "SEO", "UX/UI", "Accessibilité"],
      duration: "2-4 semaines",
      price: "À partir de 600€",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse des besoins",
      description: "Évaluation complète de votre projet et définition des objectifs",
    },
    {
      step: "2",
      title: "Proposition technique",
      description: "Choix des technologies et architecture adaptées à vos besoins",
    },
    {
      step: "3",
      title: "Développement",
      description: "Développement itératif avec feedback régulier et tests continus",
    },
    {
      step: "4",
      title: "Déploiement",
      description: "Mise en production sécurisée et optimisée pour les performances",
    },
    {
      step: "5",
      title: "Suivi & Support",
      description: "Maintenance continue et support technique post-lancement",
    },
  ];

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
            {t("services.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                className="professional-card p-8 subtle-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {t(`services.items.${service.key}.description`)}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{service.duration}</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("services.process.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t("services.cta.title")}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            {t("services.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {t("services.cta.contact")}
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline">
                {t("services.cta.portfolio")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionContainer>
    </PageTransition>
  );
}