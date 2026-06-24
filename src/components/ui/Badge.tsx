import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'blue'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-surface-light text-muted': variant === 'default',
          'bg-accent/10 text-accent': variant === 'gold',
          'bg-primary-light/10 text-primary-light': variant === 'blue',
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
