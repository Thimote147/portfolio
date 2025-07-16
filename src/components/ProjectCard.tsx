import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  type?: string;
  status?: string;
  icon?: string;
  projectId?: string;
  client?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  type,
  status,
  icon,
  projectId,
  client,
}: ProjectCardProps) {
  const { t } = useTranslation();
  
  const CardContent = () => (
    <div className="professional-card overflow-hidden h-full group cursor-pointer subtle-hover flex flex-col">
      <div className="relative">
        <div className="h-48 w-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 border-b border-gray-200 dark:border-gray-700">
          {image ? (
            <img
              className="h-48 w-full object-cover transition-transform duration-300"
              src={image}
              alt={title}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 mb-4 rounded-xl flex items-center justify-center shadow-sm overflow-hidden bg-white border border-gray-300 dark:bg-white/5 dark:border-white/10">
                {icon ? (
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                )}
              </div>
              {client && (
                <p className="text-sm text-gray-700 dark:text-gray-400 font-medium">
                  {client}
                </p>
              )}
            </div>
          )}
        </div>
        {!image && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        )}
        {status && (
          <div className="absolute top-4 right-4">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm ${
                status === "Live"
                  ? "bg-green-500/20 text-green-600 dark:text-green-300 border border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border border-yellow-500/30"
              }`}
            >
              {status === "Live"
                ? t("projects.status.live")
                : status === "In Development"
                  ? t("projects.status.development")
                  : status}
            </span>
          </div>
        )}
        {type && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 backdrop-blur-sm">
              {type}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 mt-auto">
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {status === "Live"
                ? t("projects.links.live")
                : t("projects.links.demo")}
            </a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t("projects.links.github")}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (projectId) {
    return (
      <Link to={`/projects/${projectId}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
