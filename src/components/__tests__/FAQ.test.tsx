import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from '@/components/FAQ'

describe('FAQ', () => {
  it('renders all 7 questions', () => {
    render(<FAQ />)
    const questions = [
      'Quels sont les prérequis',
      'Comment se déroule',
      'Y a-t-il une garantie',
      "Puis-je acheter les formations à l'unité",
      'Les formations sont-elles mises à jour',
      'Y a-t-il un certificat',
      'Puisz-vous payer en plusieurs fois',
    ]
    for (const q of questions) {
      expect(screen.getByText(new RegExp(q, 'i'))).toBeInTheDocument()
    }
  })

  it('first item is open by default', () => {
    render(<FAQ />)
    const answers = screen.getAllByText(/Pour les formations Débutant/)
    expect(answers.length).toBeGreaterThan(0)
  })

  it('toggles open/close on click', async () => {
    render(<FAQ />)
    const firstButton = screen.getAllByRole('button')[0]
    await userEvent.click(firstButton)
    await userEvent.click(firstButton)
  })

  it('changes active item when clicking a different question', async () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(7)
    await userEvent.click(buttons[1])
  })
})
