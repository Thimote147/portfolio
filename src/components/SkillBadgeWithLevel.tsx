import { motion } from "framer-motion";

interface SkillBadgeWithLevelProps {
  name: string;
  level: "Débutant" | "Intermédiaire" | "Expert";
  years: number;
}

const levelColors = {
  Débutant:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Intermédiaire:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Expert:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
};

const levelDots = {
  Débutant: 1,
  Intermédiaire: 2,
  Expert: 3,
};

export default function SkillBadgeWithLevel({
  name,
  level,
  years,
}: SkillBadgeWithLevelProps) {
  return (
    <motion.div
      className="professional-card p-4 subtle-hover"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${levelColors[level]}`}
        >
          {level}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot <= levelDots[level]
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {years} an{years > 1 ? "s" : ""}
        </span>
      </div>
    </motion.div>
  );
}
