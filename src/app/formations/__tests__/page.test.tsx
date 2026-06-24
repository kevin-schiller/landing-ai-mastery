import { describe, it, expect } from 'vitest'
import { generateStaticParams, generateMetadata } from '@/app/formations/[slug]/page'
import { formations } from '@/lib/formations'

describe('FormationPage', () => {
  describe('generateStaticParams', () => {
    it('returns all formation slugs', async () => {
      const params = await generateStaticParams()
      expect(params).toHaveLength(formations.length)
      for (const p of params) {
        expect(p).toHaveProperty('slug')
        expect(typeof p.slug).toBe('string')
      }
    })

    it('each slug matches a formation id', async () => {
      const params = await generateStaticParams()
      const ids = formations.map((f) => f.id)
      for (const p of params) {
        expect(ids).toContain(p.slug)
      }
    })
  })

  describe('generateMetadata', () => {
    it('returns title and description for a valid slug', async () => {
      const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'agents-ia' }) })
      expect(metadata.title).toBe("Création d'Agents IA")
      expect(metadata.description).toContain('agents IA autonomes')
    })

    it('returns empty object for an invalid slug', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: 'invalid-slug' }),
      })
      expect(metadata).toEqual({})
    })

    it('returns correct metadata for each formation', async () => {
      for (const f of formations) {
        const metadata = await generateMetadata({
          params: Promise.resolve({ slug: f.id }),
        })
        expect(metadata.title).toBe(f.title)
        expect(metadata.description).toBe(f.description)
      }
    })
  })
})
