interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
}

export default function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-4 py-2 border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-200 hover:scale-105">
      {icon && <span className="mr-2 text-blue-400">{icon}</span>}
      <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>
    </div>
  )
}