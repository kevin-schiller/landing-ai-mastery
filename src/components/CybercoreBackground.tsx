'use client'

import { motion } from 'framer-motion'

function seededRandom(seed: number) {
  return ((seed * 16807 + 0.5) % 2147483647) / 2147483647
}

function generateBeams(count: number) {
  const beams: {
    left: number
    width: number
    height: number
    bottom: number
    delay: number
    duration: number
    isGold: boolean
    alpha: number
    scaleMin: number
    scaleMax: number
  }[] = []

  // Positions aléatoires triées + clusterisation naturelle
  const rawPositions: { pos: number; idx: number }[] = []
  for (let i = 0; i < count; i++) {
    const r = seededRandom(i * 7919 + 1)
    rawPositions.push({ pos: r, idx: i })
  }
  rawPositions.sort((a, b) => a.pos - b.pos)

  for (let i = 0; i < count; i++) {
    const idx = rawPositions[i].idx
    const s1 = seededRandom(idx * 7919 + 1)
    const s2 = seededRandom(idx * 6271 + 1)
    const s3 = seededRandom(idx * 4271 + 1)
    const s4 = seededRandom(idx * 3571 + 1)
    const s5 = seededRandom(idx * 2857 + 1)
    const s6 = seededRandom(idx * 1999 + 1)
    const s7 = seededRandom(idx * 1237 + 1)

    // Position avec léger chevauchement possible (clusters naturels)
    let left: number
    if (i === 0) {
      left = s1 * 8
    } else if (i === count - 1) {
      left = 92 + s1 * 8
    } else {
      const prev = rawPositions[i - 1].pos * 100
      const curr = rawPositions[i].pos * 100
      const gap = curr - prev
      const jitter = gap * (s2 * 0.7 - 0.35)
      left = curr + jitter
    }
    left = Math.max(0, Math.min(99, left))

    const width = 2 + s3 * 8
    const height = 25 + s4 * 120
    // Départ à différentes hauteurs (5% mini pour voir le bout arrondi)
    const bottom = 5 + s7 * 40
    const isGold = s5 > 0.55
    const alpha = isGold ? 0.5 + s5 * 0.4 : 0.35 + s5 * 0.45

    beams.push({
      left,
      width,
      height,
      bottom,
      delay: s3 * 6,
      duration: 2 + s4 * 6,
      isGold,
      alpha,
      scaleMin: 0.1 + s6 * 0.4,
      scaleMax: 1 + s6 * 0.8,
    })
  }

  return beams
}

function generateAuras(count: number) {
  const auras: {
    left: number
    top: number
    width: number
    height: number
    color: string
    alpha: number
    delay: number
    duration: number
    driftX: number
    driftY: number
    pattern: number
  }[] = []

  for (let i = 0; i < count; i++) {
    const s1 = seededRandom(i * 8887 + 1)
    const s2 = seededRandom(i * 6661 + 1)
    const s3 = seededRandom(i * 5557 + 1)
    const s4 = seededRandom(i * 4441 + 1)
    const s5 = seededRandom(i * 3329 + 1)
    const s6 = seededRandom(i * 2213 + 1)
    const s7 = seededRandom(i * 1777 + 1)
    const s8 = seededRandom(i * 1111 + 1)

    const left = s1 * 80 - 10
    const top = 60 + s2 * 35
    const width = 20 + s3 * 25
    const height = 30 + s4 * 55
    const isGold = s5 > 0.4
    const alpha = 0.25 + s5 * 0.4
    const color = isGold
      ? '255, 215, 0'
      : `${Math.floor(60 + s6 * 80)}, ${Math.floor(120 + s6 * 80)}, ${Math.floor(220 + s6 * 35)}`

    auras.push({
      left,
      top,
      width,
      height,
      color,
      alpha,
      delay: s3 * 8,
      duration: 3 + s4 * 6,
      driftX: (s7 - 0.5) * 6,
      driftY: -(s8 * 4 + 1),
      pattern: i % 3,
    })
  }

  return auras
}

const BEAMS = generateBeams(120)
const AURAS = generateAuras(6)

export function CybercoreBackground({ beamCount = 120 }: { beamCount?: number }) {
  const beams = BEAMS
  const auras = AURAS

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050510]">
      {/* Auras lumineuses organiques (derrière les faisceaux) */}
      {auras.map((a, i) => {
        const inner = {
          0: {
            opacity: [0, 1, 0.3, 0.8, 0],
            scale: [0.4, 1.3, 0.9, 1.5, 0.4],
          },
          1: {
            opacity: [0, 0.7, 1, 0.2, 0],
            scale: [0.2, 0.9, 1.4, 0.6, 0.2],
          },
          2: {
            opacity: [0, 0.4, 1, 0.6, 0],
            scale: [0.6, 0.8, 1.6, 1.1, 0.6],
          },
        }[a.pattern]

        const outer = {
          0: {
            opacity: [0, 0.6, 0.1, 0.9, 0],
            scale: [0.5, 1.6, 1.1, 2, 0.5],
          },
          1: {
            opacity: [0, 0.9, 0.2, 0.5, 0],
            scale: [0.3, 1.8, 0.7, 1.3, 0.3],
          },
          2: {
            opacity: [0, 0.3, 0.8, 0.4, 0],
            scale: [0.7, 1.1, 2, 1.4, 0.7],
          },
        }[a.pattern]

        return (
          <motion.div
            key={`aura-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${a.left}%`,
              top: `${a.top}%`,
              width: `${a.width}%`,
              height: `${a.height}%`,
            }}
            animate={{
              x: [0, a.driftX, 0, -a.driftX * 0.5, 0],
              y: [0, a.driftY, a.driftY * 0.5, a.driftY * 0.8, 0],
            }}
            transition={{
              duration: a.duration * 2,
              delay: a.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glow intérieur */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, rgba(${a.color}, ${a.alpha}) 0%, rgba(${a.color}, ${a.alpha * 0.5}) 25%, transparent 60%)`,
                filter: 'blur(3px)',
              }}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={inner}
              transition={{
                duration: a.duration,
                delay: a.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Glow extérieur */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, rgba(${a.color}, ${a.alpha * 0.5}) 0%, transparent 70%)`,
                boxShadow: `0 0 150px 40px rgba(${a.color}, ${a.alpha * 0.3})`,
                filter: 'blur(6px)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={outer}
              transition={{
                duration: a.duration + 1.5,
                delay: a.delay + 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )
      })}

      {beams.slice(0, beamCount).map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${b.left}%`, width: `${b.width}px`, bottom: `${b.bottom}%` }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{
              height: `${b.height}vh`,
              background: b.isGold
                ? `linear-gradient(to top, rgba(212, 168, 67, ${b.alpha}), rgba(37, 99, 235, ${b.alpha * 0.6}) 30%, transparent)`
                : `linear-gradient(to top, rgba(37, 99, 235, ${b.alpha}), rgba(99, 102, 241, ${b.alpha * 0.5}) 25%, transparent)`,
            }}
            initial={{ scaleY: b.scaleMin, opacity: 0 }}
            animate={{
              scaleY: [b.scaleMin, b.scaleMax, b.scaleMin],
              opacity: [0, b.alpha + 0.25, 0],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {/* Colonne centrale */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[90%] pointer-events-none">
        <motion.div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(37, 99, 235, 0.25) 0%, rgba(212, 168, 67, 0.08) 40%, transparent 70%)',
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
