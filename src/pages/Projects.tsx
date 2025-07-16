import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.items.qualitynurse.title"),
      description: t("projects.items.qualitynurse.description"),
      technologies: t("projects.items.qualitynurse.tech", {
        returnObjects: true,
      }) as string[],
      liveUrl: "https://qualitynurse.thimotefetu.fr",
      githubUrl: "#",
      type: t("projects.items.qualitynurse.type"),
      status: "Live",
      icon: "https://raw.githubusercontent.com/Thimote147/qualitynurse/main/src/assets/icon.png",
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
            {t("projects.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover"
              >
                <ProjectCard
                  {...project}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </PageTransition>
  );
}
