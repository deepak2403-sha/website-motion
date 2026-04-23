'use client'

import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

const AnimatedLoadingSkeleton = dynamic(
  () => import('@/components/ui/animated-loading-skeleton'),
  { ssr: false }
)

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center p-4">
          <AnimatedLoadingSkeleton />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
