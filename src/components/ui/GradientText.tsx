import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
}

export function GradientText({ children, as: Tag = 'span', className }: GradientTextProps) {
  return (
    <Tag
      className={cn(
        'bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
