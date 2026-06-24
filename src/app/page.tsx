import { Hero } from '@/components/Hero'
import { ProblemSolution } from '@/components/ProblemSolution'
import { FormationGrid } from '@/components/FormationGrid'
import { PricingCards } from '@/components/PricingCards'
import { Testimonials } from '@/components/Testimonials'
import { Stats } from '@/components/Stats'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <FormationGrid />
      <PricingCards />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
