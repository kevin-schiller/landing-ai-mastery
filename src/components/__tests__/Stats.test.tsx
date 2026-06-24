import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from '@/components/Stats'

describe('Stats', () => {
  it('renders all 4 stats', () => {
    render(<Stats />)
    expect(screen.getByText('Élèves formés')).toBeInTheDocument()
    expect(screen.getByText('Support disponible')).toBeInTheDocument()
    expect(screen.getByText('Avis moyens')).toBeInTheDocument()
    expect(screen.getByText('Experts contributeurs')).toBeInTheDocument()
  })
})
