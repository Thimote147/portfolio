import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Clock, Wrench, Target, CheckCircle } from "lucide-react";
import SectionContainer from "../components/SectionContainer";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

interface ProjectDetailData {
  title: string;
  description: string;
  longDescription: string;
  client: string;
  duration: string;
  role: string;
  status: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  results: string[];
  nextSteps?: string[];
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useTranslation();

  const projectsData: Record<string, ProjectDetailData> = {
    "quality-nurse": {
      title: t("projects.items.qualitynurse.title"),
      description: t("projects.items.qualitynurse.description"),
      longDescription: t("projects.items.qualitynurse.longDescription"),
      client: "Quality Nurse (Jean-Charles Tonnelle)",
      duration: "Juillet 2024 - Août 2025",
      role: t("projects.items.qualitynurse.role"),
      status: "Terminé",
      technologies: [
        "React.js", "TypeScript", "Tailwind CSS", "Vite", "React Router",
        "Lucide React", "React Helmet", "Responsive Design"
      ],
      features: [
        t("projects.items.qualitynurse.features.0"),
        t("projects.items.qualitynurse.features.1"),
        t("projects.items.qualitynurse.features.2"),
        t("projects.items.qualitynurse.features.3"),
        t("projects.items.qualitynurse.features.4"),
        t("projects.items.qualitynurse.features.5"),
        t("projects.items.qualitynurse.features.6"),
        t("projects.items.qualitynurse.features.7"),
      ],
      challenges: [
        t("projects.items.qualitynurse.challenges.0"),
        t("projects.items.qualitynurse.challenges.1"),
        t("projects.items.qualitynurse.challenges.2"),
        t("projects.items.qualitynurse.challenges.3"),
      ],
      results: [
        t("projects.items.qualitynurse.results.0"),
        t("projects.items.qualitynurse.results.1"),
        t("projects.items.qualitynurse.results.2"),
        t("projects.items.qualitynurse.results.3"),
      ],
      liveUrl: "https://qualitynurse.thimotefetu.fr",
      githubUrl: "https://github.com/Thimote147/qualitynurse",
    },
    "laser-magique": {
      title: t("projects.items.lasermagique.title"),
      description: t("projects.items.lasermagique.description"),
      longDescription: t("projects.items.lasermagique.longDescription"),
      client: "Laser Magique (Centre de divertissement)",
      duration: "Juillet 2024 - En cours",
      role: t("projects.items.lasermagique.role"),
      status: "En phase de tests",
      technologies: [
        "Flutter", "Dart", "Supabase", "PostgreSQL", "Firebase", 
        "Provider", "Material Design 3", "Docker", "GitHub Actions"
      ],
      features: [
        t("projects.items.lasermagique.features.0"),
        t("projects.items.lasermagique.features.1"),
        t("projects.items.lasermagique.features.2"),
        t("projects.items.lasermagique.features.3"),
        t("projects.items.lasermagique.features.4"),
        t("projects.items.lasermagique.features.5"),
        t("projects.items.lasermagique.features.6"),
        t("projects.items.lasermagique.features.7"),
      ],
      challenges: [
        t("projects.items.lasermagique.challenges.0"),
        t("projects.items.lasermagique.challenges.1"),
        t("projects.items.lasermagique.challenges.2"),
        t("projects.items.lasermagique.challenges.3"),
      ],
      results: [
        t("projects.items.lasermagique.results.0"),
        t("projects.items.lasermagique.results.1"),
        t("projects.items.lasermagique.results.2"),
        t("projects.items.lasermagique.results.3"),
      ],
      nextSteps: [
        t("projects.items.lasermagique.nextSteps.0"),
        t("projects.items.lasermagique.nextSteps.1"),
        t("projects.items.lasermagique.nextSteps.2"),
      ],
      githubUrl: "https://github.com/Thimote147/Laser-Magique-App",
    },
  };

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <PageTransition>
        <SectionContainer className="py-20 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("projects.notFound.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t("projects.notFound.description")}
            </p>
            <Link to="/projects">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("projects.notFound.backButton")}
              </Button>
            </Link>
          </div>
        </SectionContainer>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SectionContainer className="py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("projectDetail.backToProjects")}
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t("projectDetail.viewLive")}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("projectDetail.viewCode")}
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="professional-card p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("projectDetail.client")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("projectDetail.duration")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("projectDetail.role")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {t("projectDetail.status")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.status}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="professional-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("projectDetail.overview")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="professional-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("projectDetail.technologies")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="professional-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("projectDetail.features")}
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="professional-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("projectDetail.challenges")}
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="professional-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("projectDetail.results")}
            </h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Next Steps */}
          {project.nextSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="professional-card p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("projectDetail.nextSteps")}
              </h2>
              <ul className="space-y-3">
                {project.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Clock className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </SectionContainer>
    </PageTransition>
  );
}