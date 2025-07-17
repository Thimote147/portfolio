import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
import GitHubStats from "../components/GitHubStats";
import useSEO from "../hooks/useSEO";

export default function Projects() {
  const { t } = useTranslation();

  useSEO({
    title: "Projets - Thimoté Fétu | Portfolio Développeur",
    description: "Découvrez mes projets de développement web et mobile : Quality Nurse (React/TypeScript), Laser Magique (Flutter), Circle (Next.js) et mon portfolio. Projets complets avec technologies modernes.",
    keywords: "projets, portfolio, Quality Nurse, Laser Magique, Circle, React, TypeScript, Flutter, Next.js, développement web, développement mobile, projets étudiants",
    ogImage: "https://thimotefetu.fr/og-projects.jpg",
    canonical: "https://thimotefetu.fr/projects"
  });

  const projects = [
    {
      title: t("projects.items.qualitynurse.title"),
      description: t("projects.items.qualitynurse.description"),
      technologies: t("projects.items.qualitynurse.tech", {
        returnObjects: true,
      }) as string[],
      liveUrl: "https://qualitynurse.thimotefetu.fr",
      githubUrl: "https://github.com/Thimote147/qualitynurse",
      type: t("projects.items.qualitynurse.type"),
      status: "In Development",
      icon: "https://raw.githubusercontent.com/Thimote147/qualitynurse/main/src/assets/icon.png",
      projectId: "quality-nurse",
      client: t("projects.items.qualitynurse.client"),
    },
    {
      title: t("projects.items.lasermagique.title"),
      description: t("projects.items.lasermagique.description"),
      technologies: t("projects.items.lasermagique.tech", {
        returnObjects: true,
      }) as string[],
      liveUrl: "#",
      githubUrl: "https://github.com/Thimote147/Laser-Magique-App",
      type: t("projects.items.lasermagique.type"),
      status: "In Development",
      icon: "https://raw.githubusercontent.com/Thimote147/Laser-Magique-App/main/assets/images/icon.jpeg",
      projectId: "laser-magique",
      client: t("projects.items.lasermagique.client"),
    },
    {
      title: t("projects.items.portfolio.title"),
      description: t("projects.items.portfolio.description"),
      technologies: t("projects.items.portfolio.tech", {
        returnObjects: true,
      }) as string[],
      liveUrl: "",
      githubUrl: "https://github.com/Thimote147/portfolio",
      type: t("projects.items.portfolio.type"),
      status: "In Development",
      icon: "https://raw.githubusercontent.com/Thimote147/portfolio/main/src/assets/me.jpg",
      projectId: "portfolio",
      client: t("projects.items.portfolio.client"),
    },
    {
      title: t("projects.items.circle.title"),
      description: t("projects.items.circle.description"),
      technologies: t("projects.items.circle.tech", {
        returnObjects: true,
      }) as string[],
      liveUrl: "https://circle.thimotefetu.fr",
      githubUrl: "https://github.com/Thimote147/circle",
      type: t("projects.items.circle.type"),
      status: "In Development",
      icon: "https://circle.thimotefetu.fr/favicon.ico",
      projectId: "circle",
      client: t("projects.items.circle.client"),
    },
  ];

  return (
    <PageTransition>
      {/* Hero + Projects Section */}
      <SectionContainer className="py-8 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-4">
              {t("projects.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              {t("projects.description")}
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-3 text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                React & TypeScript
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">
                Flutter & Dart
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full">
                Full-Stack
              </span>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="subtle-hover h-full"
              >
                <ProjectCard
                  {...project}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  projectId={project.projectId}
                  client={project.client}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* GitHub Activity */}
      <SectionContainer className="py-6 bg-gray-50 dark:bg-gray-900/50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg mr-3 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              Activité GitHub
            </h2>
          </div>
          <GitHubStats />
        </motion.div>
      </SectionContainer>
    </PageTransition>
  );
}