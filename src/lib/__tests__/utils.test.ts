import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('merges class names from strings', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional objects', () => {
    expect(cn('foo', { bar: true, baz: false })).toBe('foo bar')
  })

  it('handles arrays', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz')
  })

  it('filters falsy values', () => {
    expect(cn('foo', false, null, undefined, 0, 'bar')).toBe('foo bar')
  })

  it('merges tailwind classes (later overrides earlier)', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6')
  })

  it('handles empty inputs', () => {
    expect(cn()).toBe('')
  })

  it('merges conflicting classes properly', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })
})
