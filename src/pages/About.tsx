import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import SkillBadge from "../components/SkillBadge";
import TimelineItem from "../components/TimelineItem";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import profileImage from "../assets/me.jpg";
import cvFile from "../assets/CV_Fétu_Thimoté.pdf";

const skillCategories = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "Dart",
    "HTML",
    "CSS",
  ],
  frameworks: [
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Vite",
    "Flutter",
    "React Native",
    "Node.js",
    "Express",
    "Spring Boot",
  ],
  databases: ["PostgreSQL", "SQLite"],
  tools: [
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Azure DevOps",
    "VS Code",
    "Android Studio",
    "JetBrains Suite",
    "API REST",
    "OVH",
    "Google Cloud",
    "Cloudflare",
  ],
};

export default function About() {
  const { t } = useTranslation();

  const experiences = [
    {
      date: t("about.experiences.qualitynurse.date"),
      title: t("projects.items.qualitynurse.title"),
      subtitle: t("about.experiences.qualitynurse.company"),
      description: t("projects.items.qualitynurse.description"),
      projectId: "quality-nurse",
    },
    {
      date: t("about.experiences.lasermagique.date"),
      title: t("projects.items.lasermagique.title"),
      subtitle: t("about.experiences.lasermagique.company"),
      description: t("projects.items.lasermagique.description"),
      projectId: "laser-magique",
    },
  ];

  const education = [
    {
      date: t("about.education.bachelor.date"),
      title: t("about.education.bachelor.title"),
      subtitle: t("about.education.bachelor.school"),
      description: t("about.education.bachelor.description"),
    },
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
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <SkillBadge name={skill} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </SectionContainer>

      <SectionContainer className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                {t("about.experience")}
              </h2>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/projects/${experience.projectId}`}>
                      <div className="professional-card p-6 subtle-hover cursor-pointer">
                        <TimelineItem {...experience} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg mr-4 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                {t("about.education_title")}
              </h2>
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
                    <TimelineItem {...edu} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </PageTransition>
  );
}
