interface TimelineItemProps {
  date: string
  title: string
  subtitle: string
  description: string
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative">
      <div className="relative flex items-start space-x-4">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div>
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{date}</div>
            <p className="mt-1 text-xl font-bold text-gray-900 dark:text-white">{title}</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 font-medium">{subtitle}</p>
          </div>
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}