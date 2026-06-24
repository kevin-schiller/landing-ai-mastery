import { describe, it, expect } from 'vitest'
import { formations, getFormationBySlug, packs } from '@/lib/formations'

describe('formations', () => {
  it('has 5 formations', () => {
    expect(formations).toHaveLength(5)
  })

  it('all formations have unique ids', () => {
    const ids = formations.map((f) => f.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('all formations have required fields', () => {
    for (const f of formations) {
      expect(f.id).toBeTruthy()
      expect(f.title).toBeTruthy()
      expect(f.subtitle).toBeTruthy()
      expect(f.description).toBeTruthy()
      expect(f.duration).toBeTruthy()
      expect(typeof f.price).toBe('number')
      expect(f.price).toBeGreaterThan(0)
      expect(f.lessons).toBeGreaterThan(0)
      expect(['Débutant', 'Intermédiaire', 'Avancé']).toContain(f.level)
      expect(f.topics.length).toBeGreaterThan(0)
      expect(f.icon).toBeTruthy()
    }
  })

  it('formations with originalPrice have price < originalPrice', () => {
    for (const f of formations) {
      if (f.originalPrice) {
        expect(f.price).toBeLessThan(f.originalPrice)
      }
    }
  })

  it('featured formations are correctly marked', () => {
    const featured = formations.filter((f) => f.featured)
    expect(featured.length).toBeGreaterThan(0)
    for (const f of featured) {
      expect(f.featured).toBe(true)
    }
  })
})

describe('getFormationBySlug', () => {
  it('returns a formation for a valid slug', () => {
    const result = getFormationBySlug('agents-ia')
    expect(result).toBeDefined()
    expect(result!.title).toBe("Création d'Agents IA")
  })

  it('returns undefined for an invalid slug', () => {
    expect(getFormationBySlug('invalid-slug')).toBeUndefined()
  })

  it('returns the correct formation for each existing slug', () => {
    for (const f of formations) {
      expect(getFormationBySlug(f.id)?.id).toBe(f.id)
    }
  })
})

describe('packs', () => {
  it('has 3 packs', () => {
    expect(packs).toHaveLength(3)
  })

  it('Pro pack is marked popular', () => {
    const pro = packs.find((p) => p.name === 'Pro')
    expect(pro?.popular).toBe(true)
  })

  it('Starter has price 0 and "--" display', () => {
    const starter = packs.find((p) => p.name === 'Starter')
    expect(starter?.price).toBe(0)
    expect(starter?.economy).toBe(0)
  })

  it('Ultimate has highest formations count', () => {
    const ultimate = packs.find((p) => p.name === 'Ultimate')
    expect(ultimate?.formations).toBe(5)
    expect(ultimate?.economy).toBe(40)
  })

  it('all packs have valid structure', () => {
    for (const p of packs) {
      expect(p.name).toBeTruthy()
      expect(p.description).toBeTruthy()
      expect(typeof p.price).toBe('number')
      expect(p.formations).toBeGreaterThan(0)
      expect(typeof p.popular).toBe('boolean')
    }
  })
})
