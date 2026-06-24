import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

class MockIntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = [0]
  private callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }

  observe(target: Element) {
    this.callback(
      [{ target, isIntersecting: true, intersectionRatio: 1 } as IntersectionObserverEntry],
      this,
    )
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

let rafId = 0
Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: (callback: FrameRequestCallback) => {
    rafId++
    setTimeout(() => callback(Date.now()), 0)
    return rafId
  },
})

Object.defineProperty(window, 'cancelAnimationFrame', {
  writable: true,
  value: () => {},
})

const originalSetInterval = window.setInterval
const intervals = new Set<number>()
Object.defineProperty(window, 'setInterval', {
  writable: true,
  value: ((handler: TimerHandler, timeout?: number, ...args: unknown[]) => {
    const id = originalSetInterval(handler, timeout, ...args)
    intervals.add(id as unknown as number)
    return id
  }) as typeof window.setInterval,
})

const originalClearInterval = window.clearInterval
Object.defineProperty(window, 'clearInterval', {
  writable: true,
  value: (id: number) => {
    intervals.delete(id)
    originalClearInterval(id)
  },
})

afterEach(() => {
  for (const id of intervals) {
    originalClearInterval(id)
  }
  intervals.clear()
})

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  writable: true,
  value: () => null,
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => {},
})
