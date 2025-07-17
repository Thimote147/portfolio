import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionContainer from "../components/SectionContainer";
import SkillBadge from "../components/SkillBadge";
import SkillBadgeWithLevel from "../components/SkillBadgeWithLevel";
import TimelineItem from "../components/TimelineItem";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";
import profileImage from "../assets/me.jpg";
import cvFile from "../assets/CV_Fétu_Thimoté.pdf";

const calculateYears = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - startYear + 1);
};

const calculateLevel = (years: number): "Débutant" | "Intermédiaire" | "Expert" => {
  if (years >= 5) return "Expert";
  if (years >= 3) return "Intermédiaire";
  return "Débutant";
};

const createSkill = (name: string, startYear: number) => {
  const years = calculateYears(startYear);
  return { name, level: calculateLevel(years), years };
};

const skillCategories = {
  languages: [
    createSkill("C", 2024),
    createSkill("C++", 2022),
    createSkill("CSS", 2023),
    createSkill("Dart", 2025),
    createSkill("HTML", 2023),
    createSkill("Java", 2023),
    createSkill("JavaScript", 2023),
    createSkill("Python", 2022),
    createSkill("TypeScript", 2024),
  ],
  frameworks: [
    createSkill("Bootstrap", 2023),
    createSkill("Express", 2024),
    createSkill("Flutter", 2025),
    createSkill("Node.js", 2024),
    createSkill("React", 2024),
    createSkill("React Native", 2025),
    createSkill("Spring Boot", 2025),
    createSkill("Tailwind CSS", 2024),
    createSkill("Vite", 2024),
  ],
  databases: [
    createSkill("PostgreSQL", 2024),
    createSkill("SQLite", 2024),
  ],
  tools: [
    createSkill("Android Studio", 2025),
    createSkill("API REST", 2024),
    createSkill("Azure DevOps", 2024),
    createSkill("Cloudflare", 2024),
    createSkill("Docker", 2024),
    createSkill("Git", 2022),
    createSkill("GitHub", 2022),
    createSkill("GitLab", 2025),
    createSkill("Google Cloud", 2025),
    createSkill("JetBrains Suite", 2022),
    createSkill("OVH", 2024),
    createSkill("VS Code", 2023),
  ],
};

export default function About() {
  const { t } = useTranslation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  useSEO({
    title: "À propos - Thimoté Fétu | Développeur Web & Mobile",
    description: "Découvrez mon parcours, mes compétences et mes expériences en développement. Étudiant passionné maîtrisant React, TypeScript, Flutter et Node.js avec projets Quality Nurse et Laser Magique.",
    keywords: "à propos, compétences, expérience, formation, React, TypeScript, Flutter, Node.js, développeur étudiant, parcours développeur, GitHub",
    ogImage: "https://thimotefetu.fr/me.jpg",
    canonical: "https://thimotefetu.fr/about"
  });


  const education = [
    {
      date: t("about.education.bachelor.date"),
      title: t("about.education.bachelor.title"),
      subtitle: t("about.education.bachelor.school"),
      description: t("about.education.bachelor.description"),
    },
  ];

  const certifications = [
    // Ajoute tes vraies certifications ici
  ];


  return (
    <PageTransition>
      <SectionContainer className="py-20 pt-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-violet-500 shadow-2xl shadow-violet-500/30">
                <img
                  src={profileImage}
                  alt="Thimoté Fétu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            {t("about.intro")}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            {t("about.personalStory")}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={cvFile}
              download="CV-Thimoté-Fétu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t("about.downloadCV")}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("about.skills")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(skillCategories).map(
              ([category, skills], index) => (
                <motion.div
                  key={category}
                  className="professional-card p-8 subtle-hover"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg mr-3 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    {t(`about.skillCategories.${category}`)}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(expandedCategories[category] ? skills : skills.slice(0, 4)).map((skill) => (
                      <SkillBadgeWithLevel
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        years={skill.years}
                      />
                    ))}
                  </div>
                  {skills.length > 4 && (
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        {expandedCategories[category] ? (
                          <>
                            <span>Voir moins</span>
                            <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>Voir plus ({skills.length - 4})</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {t("about.certifications_title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="professional-card p-6 subtle-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{edu.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {certifications.length > 0 ? certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="professional-card p-6 subtle-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
                    {cert.credentialId && (
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </motion.div>
                )) : (
                  <motion.div
                    className="professional-card p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Certifications à venir...</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>


    </PageTransition>
  );
}
