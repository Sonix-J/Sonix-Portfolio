type CardProps = {
  title?: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export default function Card({ title, children, className = '', action }: CardProps) {
  return (
    <div className={`border border-gray-100 rounded p-4 shadow-sm bg-white ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </div>
  )
}