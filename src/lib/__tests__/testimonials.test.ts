import { describe, it, expect } from 'vitest'
import { testimonials } from '@/lib/testimonials'

describe('testimonials', () => {
  it('has 5 testimonials', () => {
    expect(testimonials).toHaveLength(5)
  })

  it('all testimonials have required fields', () => {
    for (const t of testimonials) {
      expect(t.name).toBeTruthy()
      expect(t.role).toBeTruthy()
      expect(t.avatar).toBeTruthy()
      expect(t.avatar.length).toBeGreaterThanOrEqual(2)
      expect(t.content).toBeTruthy()
      expect(t.formation).toBeTruthy()
    }
  })

  it('all ratings are between 1 and 5', () => {
    for (const t of testimonials) {
      expect(t.rating).toBeGreaterThanOrEqual(1)
      expect(t.rating).toBeLessThanOrEqual(5)
    }
  })

  it('all testimonials have a star rating of 5', () => {
    for (const t of testimonials) {
      expect(t.rating).toBe(5)
    }
  })

  it('each testimonial has a unique name', () => {
    const names = testimonials.map((t) => t.name)
    expect(new Set(names).size).toBe(names.length)
  })

  it('avatar initials match the name initials', () => {
    for (const t of testimonials) {
      const initials = t.name
        .split(' ')
        .map((n) => n[0])
        .join('')
      expect(t.avatar).toBe(initials)
    }
  })
})
